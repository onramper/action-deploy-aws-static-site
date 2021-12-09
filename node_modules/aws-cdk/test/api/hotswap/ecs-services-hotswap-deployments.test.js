"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setup = require("./hotswap-test-setup");
let hotswapMockSdkProvider;
let mockRegisterTaskDef;
let mockUpdateService;
beforeEach(() => {
    hotswapMockSdkProvider = setup.setupHotswapTests();
    mockRegisterTaskDef = jest.fn();
    mockUpdateService = jest.fn();
    hotswapMockSdkProvider.stubEcs({
        registerTaskDefinition: mockRegisterTaskDef,
        updateService: mockUpdateService,
    }, {
        // these are needed for the waiter API that the ECS service hotswap uses
        api: {
            waiters: {},
        },
        makeRequest() {
            return {
                promise: () => Promise.resolve({}),
                response: {},
                addListeners: () => { },
            };
        },
    });
});
test('should call registerTaskDefinition and updateService for a difference only in the TaskDefinition with a Family property', async () => {
    // GIVEN
    setup.setCurrentCfnStackTemplate({
        Resources: {
            TaskDef: {
                Type: 'AWS::ECS::TaskDefinition',
                Properties: {
                    Family: 'my-task-def',
                    ContainerDefinitions: [
                        { Image: 'image1' },
                    ],
                },
            },
            Service: {
                Type: 'AWS::ECS::Service',
                Properties: {
                    TaskDefinition: { Ref: 'TaskDef' },
                },
            },
        },
    });
    setup.pushStackResourceSummaries(setup.stackSummaryOf('Service', 'AWS::ECS::Service', 'arn:aws:ecs:region:account:service/my-cluster/my-service'));
    mockRegisterTaskDef.mockReturnValue({
        taskDefinition: {
            taskDefinitionArn: 'arn:aws:ecs:region:account:task-definition/my-task-def:3',
        },
    });
    const cdkStackArtifact = setup.cdkStackArtifactOf({
        template: {
            Resources: {
                TaskDef: {
                    Type: 'AWS::ECS::TaskDefinition',
                    Properties: {
                        Family: 'my-task-def',
                        ContainerDefinitions: [
                            { Image: 'image2' },
                        ],
                    },
                },
                Service: {
                    Type: 'AWS::ECS::Service',
                    Properties: {
                        TaskDefinition: { Ref: 'TaskDef' },
                    },
                },
            },
        },
    });
    // WHEN
    const deployStackResult = await hotswapMockSdkProvider.tryHotswapDeployment(cdkStackArtifact);
    // THEN
    expect(deployStackResult).not.toBeUndefined();
    expect(mockRegisterTaskDef).toBeCalledWith({
        family: 'my-task-def',
        containerDefinitions: [
            { image: 'image2' },
        ],
    });
    expect(mockUpdateService).toBeCalledWith({
        service: 'arn:aws:ecs:region:account:service/my-cluster/my-service',
        cluster: 'my-cluster',
        taskDefinition: 'arn:aws:ecs:region:account:task-definition/my-task-def:3',
        deploymentConfiguration: {
            minimumHealthyPercent: 0,
        },
        forceNewDeployment: true,
    });
});
test('any other TaskDefinition property change besides ContainerDefinition cannot be hotswapped', async () => {
    // GIVEN
    setup.setCurrentCfnStackTemplate({
        Resources: {
            TaskDef: {
                Type: 'AWS::ECS::TaskDefinition',
                Properties: {
                    Family: 'my-task-def',
                    ContainerDefinitions: [
                        { Image: 'image1' },
                    ],
                    Cpu: '256',
                },
            },
            Service: {
                Type: 'AWS::ECS::Service',
                Properties: {
                    TaskDefinition: { Ref: 'TaskDef' },
                },
            },
        },
    });
    setup.pushStackResourceSummaries(setup.stackSummaryOf('Service', 'AWS::ECS::Service', 'arn:aws:ecs:region:account:service/my-cluster/my-service'));
    mockRegisterTaskDef.mockReturnValue({
        taskDefinition: {
            taskDefinitionArn: 'arn:aws:ecs:region:account:task-definition/my-task-def:3',
        },
    });
    const cdkStackArtifact = setup.cdkStackArtifactOf({
        template: {
            Resources: {
                TaskDef: {
                    Type: 'AWS::ECS::TaskDefinition',
                    Properties: {
                        Family: 'my-task-def',
                        ContainerDefinitions: [
                            { Image: 'image2' },
                        ],
                        Cpu: '512',
                    },
                },
                Service: {
                    Type: 'AWS::ECS::Service',
                    Properties: {
                        TaskDefinition: { Ref: 'TaskDef' },
                    },
                },
            },
        },
    });
    // WHEN
    const deployStackResult = await hotswapMockSdkProvider.tryHotswapDeployment(cdkStackArtifact);
    // THEN
    expect(deployStackResult).toBeUndefined();
});
test('should call registerTaskDefinition and updateService for a difference only in the TaskDefinition without a Family property', async () => {
    // GIVEN
    setup.setCurrentCfnStackTemplate({
        Resources: {
            TaskDef: {
                Type: 'AWS::ECS::TaskDefinition',
                Properties: {
                    ContainerDefinitions: [
                        { Image: 'image1' },
                    ],
                },
            },
            Service: {
                Type: 'AWS::ECS::Service',
                Properties: {
                    TaskDefinition: { Ref: 'TaskDef' },
                },
            },
        },
    });
    setup.pushStackResourceSummaries(setup.stackSummaryOf('TaskDef', 'AWS::ECS::TaskDefinition', 'arn:aws:ecs:region:account:task-definition/my-task-def:2'), setup.stackSummaryOf('Service', 'AWS::ECS::Service', 'arn:aws:ecs:region:account:service/my-cluster/my-service'));
    mockRegisterTaskDef.mockReturnValue({
        taskDefinition: {
            taskDefinitionArn: 'arn:aws:ecs:region:account:task-definition/my-task-def:3',
        },
    });
    const cdkStackArtifact = setup.cdkStackArtifactOf({
        template: {
            Resources: {
                TaskDef: {
                    Type: 'AWS::ECS::TaskDefinition',
                    Properties: {
                        ContainerDefinitions: [
                            { Image: 'image2' },
                        ],
                    },
                },
                Service: {
                    Type: 'AWS::ECS::Service',
                    Properties: {
                        TaskDefinition: { Ref: 'TaskDef' },
                    },
                },
            },
        },
    });
    // WHEN
    const deployStackResult = await hotswapMockSdkProvider.tryHotswapDeployment(cdkStackArtifact);
    // THEN
    expect(deployStackResult).not.toBeUndefined();
    expect(mockRegisterTaskDef).toBeCalledWith({
        family: 'my-task-def',
        containerDefinitions: [
            { image: 'image2' },
        ],
    });
    expect(mockUpdateService).toBeCalledWith({
        service: 'arn:aws:ecs:region:account:service/my-cluster/my-service',
        cluster: 'my-cluster',
        taskDefinition: 'arn:aws:ecs:region:account:task-definition/my-task-def:3',
        deploymentConfiguration: {
            minimumHealthyPercent: 0,
        },
        forceNewDeployment: true,
    });
});
test('a difference just in a TaskDefinition, without any services using it, is not hotswappable', async () => {
    // GIVEN
    setup.setCurrentCfnStackTemplate({
        Resources: {
            TaskDef: {
                Type: 'AWS::ECS::TaskDefinition',
                Properties: {
                    ContainerDefinitions: [
                        { Image: 'image1' },
                    ],
                },
            },
        },
    });
    setup.pushStackResourceSummaries(setup.stackSummaryOf('TaskDef', 'AWS::ECS::TaskDefinition', 'arn:aws:ecs:region:account:task-definition/my-task-def:2'));
    mockRegisterTaskDef.mockReturnValue({
        taskDefinition: {
            taskDefinitionArn: 'arn:aws:ecs:region:account:task-definition/my-task-def:3',
        },
    });
    const cdkStackArtifact = setup.cdkStackArtifactOf({
        template: {
            Resources: {
                TaskDef: {
                    Type: 'AWS::ECS::TaskDefinition',
                    Properties: {
                        ContainerDefinitions: [
                            { Image: 'image2' },
                        ],
                    },
                },
            },
        },
    });
    // WHEN
    const deployStackResult = await hotswapMockSdkProvider.tryHotswapDeployment(cdkStackArtifact);
    // THEN
    expect(deployStackResult).toBeUndefined();
    expect(mockRegisterTaskDef).not.toHaveBeenCalled();
});
test('if anything besides an ECS Service references the changed TaskDefinition, hotswapping is not possible', async () => {
    // GIVEN
    setup.setCurrentCfnStackTemplate({
        Resources: {
            TaskDef: {
                Type: 'AWS::ECS::TaskDefinition',
                Properties: {
                    Family: 'my-task-def',
                    ContainerDefinitions: [
                        { Image: 'image1' },
                    ],
                },
            },
            Service: {
                Type: 'AWS::ECS::Service',
                Properties: {
                    TaskDefinition: { Ref: 'TaskDef' },
                },
            },
            Function: {
                Type: 'AWS::Lambda::Function',
                Properties: {
                    Environment: {
                        Variables: {
                            TaskDefRevArn: { Ref: 'TaskDef' },
                        },
                    },
                },
            },
        },
    });
    setup.pushStackResourceSummaries(setup.stackSummaryOf('Service', 'AWS::ECS::Service', 'arn:aws:ecs:region:account:service/my-cluster/my-service'));
    mockRegisterTaskDef.mockReturnValue({
        taskDefinition: {
            taskDefinitionArn: 'arn:aws:ecs:region:account:task-definition/my-task-def:3',
        },
    });
    const cdkStackArtifact = setup.cdkStackArtifactOf({
        template: {
            Resources: {
                TaskDef: {
                    Type: 'AWS::ECS::TaskDefinition',
                    Properties: {
                        Family: 'my-task-def',
                        ContainerDefinitions: [
                            { Image: 'image2' },
                        ],
                    },
                },
                Service: {
                    Type: 'AWS::ECS::Service',
                    Properties: {
                        TaskDefinition: { Ref: 'TaskDef' },
                    },
                },
                Function: {
                    Type: 'AWS::Lambda::Function',
                    Properties: {
                        Environment: {
                            Variables: {
                                TaskDefRevArn: { Ref: 'TaskDef' },
                            },
                        },
                    },
                },
            },
        },
    });
    // WHEN
    const deployStackResult = await hotswapMockSdkProvider.tryHotswapDeployment(cdkStackArtifact);
    // THEN
    expect(deployStackResult).toBeUndefined();
    expect(mockRegisterTaskDef).not.toHaveBeenCalled();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNzLXNlcnZpY2VzLWhvdHN3YXAtZGVwbG95bWVudHMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVjcy1zZXJ2aWNlcy1ob3Rzd2FwLWRlcGxveW1lbnRzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw4Q0FBOEM7QUFFOUMsSUFBSSxzQkFBb0QsQ0FBQztBQUN6RCxJQUFJLG1CQUErRyxDQUFDO0FBQ3BILElBQUksaUJBQTBGLENBQUM7QUFFL0YsVUFBVSxDQUFDLEdBQUcsRUFBRTtJQUNkLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBRW5ELG1CQUFtQixHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNoQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDOUIsc0JBQXNCLENBQUMsT0FBTyxDQUFDO1FBQzdCLHNCQUFzQixFQUFFLG1CQUFtQjtRQUMzQyxhQUFhLEVBQUUsaUJBQWlCO0tBQ2pDLEVBQUU7UUFDRCx3RUFBd0U7UUFDeEUsR0FBRyxFQUFFO1lBQ0gsT0FBTyxFQUFFLEVBQUU7U0FDWjtRQUNELFdBQVc7WUFDVCxPQUFPO2dCQUNMLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDbEMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osWUFBWSxFQUFFLEdBQUcsRUFBRSxHQUFFLENBQUM7YUFDdkIsQ0FBQztRQUNKLENBQUM7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyx5SEFBeUgsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN6SSxRQUFRO0lBQ1IsS0FBSyxDQUFDLDBCQUEwQixDQUFDO1FBQy9CLFNBQVMsRUFBRTtZQUNULE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsMEJBQTBCO2dCQUNoQyxVQUFVLEVBQUU7b0JBQ1YsTUFBTSxFQUFFLGFB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Z0JBQ1QsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSwwQkFBMEI7b0JBQ2hDLFVBQVUsRUFBRTt3QkFDVixNQUFNLEVBQUUsYUFBYTt3QkFDckIsb0JBQW9CLEVBQUU7NEJBQ3BCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTt5QkFDcEI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxtQkFBbUI7b0JBQ3pCLFVBQVUsRUFBRTt3QkFDVixjQUFjLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFO3FCQUNuQztpQkFDRjtnQkFDRCxRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLHVCQUF1QjtvQkFDN0IsVUFBVSxFQUFFO3dCQUNWLFdBQVcsRUFBRTs0QkFDWCxTQUFTLEVBQUU7Z0NBQ1QsYUFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRTs2QkFDbEM7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsT0FBTztJQUNQLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRTlGLE9BQU87SUFDUCxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUNyRCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFXUyBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCAqIGFzIHNldHVwIGZyb20gJy4vaG90c3dhcC10ZXN0LXNldHVwJztcblxubGV0IGhvdHN3YXBNb2NrU2RrUHJvdmlkZXI6IHNldHVwLkhvdHN3YXBNb2NrU2RrUHJvdmlkZXI7XG5sZXQgbW9ja1JlZ2lzdGVyVGFza0RlZjogamVzdC5Nb2NrPEFXUy5FQ1MuUmVnaXN0ZXJUYXNrRGVmaW5pdGlvblJlc3BvbnNlLCBBV1MuRUNTLlJlZ2lzdGVyVGFza0RlZmluaXRpb25SZXF1ZXN0W10+O1xubGV0IG1vY2tVcGRhdGVTZXJ2aWNlOiAocGFyYW1zOiBBV1MuRUNTLlVwZGF0ZVNlcnZpY2VSZXF1ZXN0KSA9PiBBV1MuRUNTLlVwZGF0ZVNlcnZpY2VSZXNwb25zZTtcblxuYmVmb3JlRWFjaCgoKSA9PiB7XG4gIGhvdHN3YXBNb2NrU2RrUHJvdmlkZXIgPSBzZXR1cC5zZXR1cEhvdHN3YXBUZXN0cygpO1xuXG4gIG1vY2tSZWdpc3RlclRhc2tEZWYgPSBqZXN0LmZuKCk7XG4gIG1vY2tVcGRhdGVTZXJ2aWNlID0gamVzdC5mbigpO1xuICBob3Rzd2FwTW9ja1Nka1Byb3ZpZGVyLnN0dWJFY3Moe1xuICAgIHJlZ2lzdGVyVGFza0RlZmluaXRpb246IG1vY2tSZWdpc3RlclRhc2tEZWYsXG4gICAgdXBkYXRlU2VydmljZTogbW9ja1VwZGF0ZVNlcnZpY2UsXG4gIH0sIHtcbiAgICAvLyB0aGVzZSBhcmUgbmVlZGVkIGZvciB0aGUgd2FpdGVyIEFQSSB0aGF0IHRoZSBFQ1Mgc2VydmljZSBob3Rzd2FwIHVzZXNcbiAgICBhcGk6IHtcbiAgICAgIHdhaXRlcnM6IHt9LFxuICAgIH0sXG4gICAgbWFrZVJlcXVlc3QoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoe30pLFxuICAgICAgICByZXNwb25zZToge30sXG4gICAgICAgIGFkZExpc3RlbmVyczogKCkgPT4ge30sXG4gICAgICB9O1xuICAgIH0sXG4gIH0pO1xufSk7XG5cbnRlc3QoJ3Nob3VsZCBjYWxsIHJlZ2lzdGVyVGFza0RlZmluaXRpb24gYW5kIHVwZGF0ZVNlcnZpY2UgZm9yIGEgZGlmZmVyZW5jZSBvbmx5IGluIHRoZSBUYXNrRGVmaW5pdGlvbiB3aXRoIGEgRmFtaWx5IHByb3BlcnR5JywgYXN5bmMgKCkgPT4ge1xuICAvLyBHSVZFTlxuICBzZXR1cC5zZXRDdXJyZW50Q2ZuU3RhY2tUZW1wbGF0ZSh7XG4gICAgUmVzb3VyY2VzOiB7XG4gICAgICBUYXNrRGVmOiB7XG4gICAgICAgIFR5cGU6ICdBV1M6OkVDUzo6VGFza0RlZmluaXRpb24nLFxuICAgICAgICBQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgRmFtaWx5OiAnbXktdGFzay1kZWYnLFxuICAgICAgICAgIENvbnRhaW5lckRlZmluaXRpb25zOiBbXG4gICAgICAgICAgICB7IEltYWdlOiAnaW1hZ2UxJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgU2VydmljZToge1xuICAgICAgICBUeXBlOiAnQVdTOjpFQ1M6OlNlcnZpY2UnLFxuICAgICAgICBQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgVGFza0RlZmluaXRpb246IHsgUmVmOiAnVGFza0RlZicgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4gIHNldHVwLnB1c2hTdGFja1Jlc291cmNlU3VtbWFyaWVzKFxuICAgIHNldHVwLnN0YWNrU3VtbWFyeU9mKCdTZXJ2aWNlJywgJ0FXUzo6RUNTOjpTZXJ2aWNlJyxcbiAgICAgICdhcm46YXdzOmVjczpyZWdpb246YWNjb3VudDpzZXJ2aWNlL215LWNsdXN0ZXIvbXktc2VydmljZScpLFxuICApO1xuICBtb2NrUmVnaXN0ZXJUYXNrRGVmLm1vY2tSZXR1cm5WYWx1ZSh7XG4gICAgdGFza0RlZmluaXRpb246IHtcbiAgICAgIHRhc2tEZWZpbml0aW9uQXJuOiAnYXJuOmF3czplY3M6cmVnaW9uOmFjY291bnQ6dGFzay1kZWZpbml0aW9uL215LXRhc2stZGVmOjMnLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBjZGtTdGFja0FydGlmYWN0ID0gc2V0dXAuY2RrU3RhY2tBcnRpZmFjdE9mKHtcbiAgICB0ZW1wbGF0ZToge1xuICAgICAgUmVzb3VyY2VzOiB7XG4gICAgICAgIFRhc2tEZWY6IHtcbiAgICAgICAgICBUeXBlOiAnQVdTOjpFQ1M6OlRhc2tEZWZpbml0aW9uJyxcbiAgICAgICAgICBQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBGYW1pbHk6ICdteS10YXNrLWRlZicsXG4gICAgICAgICAgICBDb250YWluZXJEZWZpbml0aW9uczogW1xuICAgICAgICAgICAgICB7IEltYWdlOiAnaW1hZ2UyJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBTZXJ2aWNlOiB7XG4gICAgICAgICAgVHlwZTogJ0FXUzo6RUNTOjpTZXJ2aWNlJyxcbiAgICAgICAgICBQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBUYXNrRGVmaW5pdGlvbjogeyBSZWY6ICdUYXNrRGVmJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIFdIRU5cbiAgY29uc3QgZGVwbG95U3RhY2tSZXN1bHQgPSBhd2FpdCBob3Rzd2FwTW9ja1Nka1Byb3ZpZGVyLnRyeUhvdHN3YXBEZXBsb3ltZW50KGNka1N0YWNrQXJ0aWZhY3QpO1xuXG4gIC8vIFRIRU5cbiAgZXhwZWN0KGRlcGxveVN0YWNrUmVzdWx0KS5ub3QudG9CZVVuZGVmaW5lZCgpO1xuICBleHBlY3QobW9ja1JlZ2lzdGVyVGFza0RlZikudG9CZUNhbGxlZFdpdGgoe1xuICAgIGZhbWlseTogJ215LXRhc2stZGVmJyxcbiAgICBjb250YWluZXJEZWZpbml0aW9uczogW1xuICAgICAgeyBpbWFnZTogJ2ltYWdlMicgfSxcbiAgICBdLFxuICB9KTtcbiAgZXhwZWN0KG1vY2tVcGRhdGVTZXJ2aWNlKS50b0JlQ2FsbGVkV2l0aCh7XG4gICAgc2VydmljZTogJ2Fybjphd3M6ZWNzOnJlZ2lvbjphY2NvdW50OnNlcnZpY2UvbXktY2x1c3Rlci9teS1zZXJ2aWNlJyxcbiAgICBjbHVzdGVyOiAnbXktY2x1c3RlcicsXG4gICAgdGFza0RlZmluaXRpb246ICdhcm46YXdzOmVjczpyZWdpb246YWNjb3VudDp0YXNrLWRlZmluaXRpb24vbXktdGFzay1kZWY6MycsXG4gICAgZGVwbG95bWVudENvbmZpZ3VyYXRpb246IHtcbiAgICAgIG1pbmltdW1IZWFsdGh5UGVyY2VudDogMCxcbiAgICB9LFxuICAgIGZvcmNlTmV3RGVwbG95bWVudDogdHJ1ZSxcbiAgfSk7XG59KTtcblxudGVzdCgnYW55IG90aGVyIFRhc2tEZWZpbml0aW9uIHByb3BlcnR5IGNoYW5nZSBiZXNpZGVzIENvbnRhaW5lckRlZmluaXRpb24gY2Fubm90IGJlIGhvdHN3YXBwZWQnLCBhc3luYyAoKSA9PiB7XG4gIC8vIEdJVkVOXG4gIHNldHVwLnNldEN1cnJlbnRDZm5TdGFja1RlbXBsYXRlKHtcbiAgICBSZXNvdXJjZXM6IHtcbiAgICAgIFRhc2tEZWY6IHtcbiAgICAgICAgVHlwZTogJ0FXUzo6RUNTOjpUYXNrRGVmaW5pdGlvbicsXG4gICAgICAgIFByb3BlcnRpZXM6IHtcbiAgICAgICAgICBGYW1pbHk6ICdteS10YXNrLWRlZicsXG4gICAgICAgICAgQ29udGFpbmVyRGVmaW5pdGlvbnM6IFtcbiAgICAgICAgICAgIHsgSW1hZ2U6ICdpbWFnZTEnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBDcHU6ICcyNTYnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFNlcnZpY2U6IHtcbiAgICAgICAgVHlwZTogJ0FXUzo6RUNTOjpTZXJ2aWNlJyxcbiAgICAgICAgUHJvcGVydGllczoge1xuICAgICAgICAgIFRhc2tEZWZpbml0aW9uOiB7IFJlZjogJ1Rhc2tEZWYnIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICBzZXR1cC5wdXNoU3RhY2tSZXNvdXJjZVN1bW1hcmllcyhcbiAgICBzZXR1cC5zdGFja1N1bW1hcnlPZignU2VydmljZScsICdBV1M6OkVDUzo6U2VydmljZScsXG4gICAgICAnYXJuOmF3czplY3M6cmVnaW9uOmFjY291bnQ6c2VydmljZS9teS1jbHVzdGVyL215LXNlcnZpY2UnKSxcbiAgKTtcbiAgbW9ja1JlZ2lzdGVyVGFza0RlZi5tb2NrUmV0dXJuVmFsdWUoe1xuICAgIHRhc2tEZWZpbml0aW9uOiB7XG4gICAgICB0YXNrRGVmaW5pdGlvbkFybjogJ2Fybjphd3M6ZWNzOnJlZ2lvbjphY2NvdW50OnRhc2stZGVmaW5pdGlvbi9teS10YXNrLWRlZjozJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgY2RrU3RhY2tBcnRpZmFjdCA9IHNldHVwLmNka1N0YWNrQXJ0aWZhY3RPZih7XG4gICAgdGVtcGxhdGU6IHtcbiAgICAgIFJlc291cmNlczoge1xuICAgICAgICBUYXNrRGVmOiB7XG4gICAgICAgICAgVHlwZTogJ0FXUzo6RUNTOjpUYXNrRGVmaW5pdGlvbicsXG4gICAgICAgICAgUHJvcGVydGllczoge1xuICAgICAgICAgICAgRmFtaWx5OiAnbXktdGFzay1kZWYnLFxuICAgICAgICAgICAgQ29udGFpbmVyRGVmaW5pdGlvbnM6IFtcbiAgICAgICAgICAgICAgeyBJbWFnZTogJ2ltYWdlMicgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBDcHU6ICc1MTInLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFNlcnZpY2U6IHtcbiAgICAgICAgICBUeXBlOiAnQVdTOjpFQ1M6OlNlcnZpY2UnLFxuICAgICAgICAgIFByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIFRhc2tEZWZpbml0aW9uOiB7IFJlZjogJ1Rhc2tEZWYnIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gV0hFTlxuICBjb25zdCBkZXBsb3lTdGFja1Jlc3VsdCA9IGF3YWl0IGhvdHN3YXBNb2NrU2RrUHJvdmlkZXIudHJ5SG90c3dhcERlcGxveW1lbnQoY2RrU3RhY2tBcnRpZmFjdCk7XG5cbiAgLy8gVEhFTlxuICBleHBlY3QoZGVwbG95U3RhY2tSZXN1bHQpLnRvQmVVbmRlZmluZWQoKTtcbn0pO1xuXG50ZXN0KCdzaG91bGQgY2FsbCByZWdpc3RlclRhc2tEZWZpbml0aW9uIGFuZCB1cGRhdGVTZXJ2aWNlIGZvciBhIGRpZmZlcmVuY2Ugb25seSBpbiB0aGUgVGFza0RlZmluaXRpb24gd2l0aG91dCBhIEZhbWlseSBwcm9wZXJ0eScsIGFzeW5jICgpID0+IHtcbiAgLy8gR0lWRU5cbiAgc2V0dXAuc2V0Q3VycmVudENmblN0YWNrVGVtcGxhdGUoe1xuICAgIFJlc291cmNlczoge1xuICAgICAgVGFza0RlZjoge1xuICAgICAgICBUeXBlOiAnQVdTOjpFQ1M6OlRhc2tEZWZpbml0aW9uJyxcbiAgICAgICAgUHJvcGVydGllczoge1xuICAgICAgICAgIENvbnRhaW5lckRlZmluaXRpb25zOiBbXG4gICAgICAgICAgICB7IEltYWdlOiAnaW1hZ2UxJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgU2VydmljZToge1xuICAgICAgICBUeXBlOiAnQVdTOjpFQ1M6OlNlcnZpY2UnLFxuICAgICAgICBQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgVGFza0RlZmluaXRpb246IHsgUmVmOiAnVGFza0RlZicgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4gIHNldHVwLnB1c2hTdGFja1Jlc291cmNlU3VtbWFyaWVzKFxuICAgIHNldHVwLnN0YWNrU3VtbWFyeU9mKCdUYXNrRGVmJywgJ0FXUzo6RUNTOjpUYXNrRGVmaW5pdGlvbicsXG4gICAgICAnYXJuOmF3czplY3M6cmVnaW9uOmFjY291bnQ6dGFzay1kZWZpbml0aW9uL215LXRhc2stZGVmOjInKSxcbiAgICBzZXR1cC5zdGFja1N1bW1hcnlPZignU2VydmljZScsICdBV1M6OkVDUzo6U2VydmljZScsXG4gICAgICAnYXJuOmF3czplY3M6cmVnaW9uOmFjY291bnQ6c2VydmljZS9teS1jbHVzdGVyL215LXNlcnZpY2UnKSxcbiAgKTtcbiAgbW9ja1JlZ2lzdGVyVGFza0RlZi5tb2NrUmV0dXJuVmFsdWUoe1xuICAgIHRhc2tEZWZpbml0aW9uOiB7XG4gICAgICB0YXNrRGVmaW5pdGlvbkFybjogJ2Fybjphd3M6ZWNzOnJlZ2lvbjphY2NvdW50OnRhc2stZGVmaW5pdGlvbi9teS10YXNrLWRlZjozJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgY2RrU3RhY2tBcnRpZmFjdCA9IHNldHVwLmNka1N0YWNrQXJ0aWZhY3RPZih7XG4gICAgdGVtcGxhdGU6IHtcbiAgICAgIFJlc291cmNlczoge1xuICAgICAgICBUYXNrRGVmOiB7XG4gICAgICAgICAgVHlwZTogJ0FXUzo6RUNTOjpUYXNrRGVmaW5pdGlvbicsXG4gICAgICAgICAgUHJvcGVydGllczoge1xuICAgICAgICAgICAgQ29udGFpbmVyRGVmaW5pdGlvbnM6IFtcbiAgICAgICAgICAgICAgeyBJbWFnZTogJ2ltYWdlMicgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgU2VydmljZToge1xuICAgICAgICAgIFR5cGU6ICdBV1M6OkVDUzo6U2VydmljZScsXG4gICAgICAgICAgUHJvcGVydGllczoge1xuICAgICAgICAgICAgVGFza0RlZmluaXRpb246IHsgUmVmOiAnVGFza0RlZicgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICAvLyBXSEVOXG4gIGNvbnN0IGRlcGxveVN0YWNrUmVzdWx0ID0gYXdhaXQgaG90c3dhcE1vY2tTZGtQcm92aWRlci50cnlIb3Rzd2FwRGVwbG95bWVudChjZGtTdGFja0FydGlmYWN0KTtcblxuICAvLyBUSEVOXG4gIGV4cGVjdChkZXBsb3lTdGFja1Jlc3VsdCkubm90LnRvQmVVbmRlZmluZWQoKTtcbiAgZXhwZWN0KG1vY2tSZWdpc3RlclRhc2tEZWYpLnRvQmVDYWxsZWRXaXRoKHtcbiAgICBmYW1pbHk6ICdteS10YXNrLWRlZicsXG4gICAgY29udGFpbmVyRGVmaW5pdGlvbnM6IFtcbiAgICAgIHsgaW1hZ2U6ICdpbWFnZTInIH0sXG4gICAgXSxcbiAgfSk7XG4gIGV4cGVjdChtb2NrVXBkYXRlU2VydmljZSkudG9CZUNhbGxlZFdpdGgoe1xuICAgIHNlcnZpY2U6ICdhcm46YXdzOmVjczpyZWdpb246YWNjb3VudDpzZXJ2aWNlL215LWNsdXN0ZXIvbXktc2VydmljZScsXG4gICAgY2x1c3RlcjogJ215LWNsdXN0ZXInLFxuICAgIHRhc2tEZWZpbml0aW9uOiAnYXJuOmF3czplY3M6cmVnaW9uOmFjY291bnQ6dGFzay1kZWZpbml0aW9uL215LXRhc2stZGVmOjMnLFxuICAgIGRlcGxveW1lbnRDb25maWd1cmF0aW9uOiB7XG4gICAgICBtaW5pbXVtSGVhbHRoeVBlcmNlbnQ6IDAsXG4gICAgfSxcbiAgICBmb3JjZU5ld0RlcGxveW1lbnQ6IHRydWUsXG4gIH0pO1xufSk7XG5cbnRlc3QoJ2EgZGlmZmVyZW5jZSBqdXN0IGluIGEgVGFza0RlZmluaXRpb24sIHdpdGhvdXQgYW55IHNlcnZpY2VzIHVzaW5nIGl0LCBpcyBub3QgaG90c3dhcHBhYmxlJywgYXN5bmMgKCkgPT4ge1xuICAvLyBHSVZFTlxuICBzZXR1cC5zZXRDdXJyZW50Q2ZuU3RhY2tUZW1wbGF0ZSh7XG4gICAgUmVzb3VyY2VzOiB7XG4gICAgICBUYXNrRGVmOiB7XG4gICAgICAgIFR5cGU6ICdBV1M6OkVDUzo6VGFza0RlZmluaXRpb24nLFxuICAgICAgICBQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgQ29udGFpbmVyRGVmaW5pdGlvbnM6IFtcbiAgICAgICAgICAgIHsgSW1hZ2U6ICdpbWFnZTEnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4gIHNldHVwLnB1c2hTdGFja1Jlc291cmNlU3VtbWFyaWVzKFxuICAgIHNldHVwLnN0YWNrU3VtbWFyeU9mKCdUYXNrRGVmJywgJ0FXUzo6RUNTOjpUYXNrRGVmaW5pdGlvbicsXG4gICAgICAnYXJuOmF3czplY3M6cmVnaW9uOmFjY291bnQ6dGFzay1kZWZpbml0aW9uL215LXRhc2stZGVmOjInKSxcbiAgKTtcbiAgbW9ja1JlZ2lzdGVyVGFza0RlZi5tb2NrUmV0dXJuVmFsdWUoe1xuICAgIHRhc2tEZWZpbml0aW9uOiB7XG4gICAgICB0YXNrRGVmaW5pdGlvbkFybjogJ2Fybjphd3M6ZWNzOnJlZ2lvbjphY2NvdW50OnRhc2stZGVmaW5pdGlvbi9teS10YXNrLWRlZjozJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgY2RrU3RhY2tBcnRpZmFjdCA9IHNldHVwLmNka1N0YWNrQXJ0aWZhY3RPZih7XG4gICAgdGVtcGxhdGU6IHtcbiAgICAgIFJlc291cmNlczoge1xuICAgICAgICBUYXNrRGVmOiB7XG4gICAgICAgICAgVHlwZTogJ0FXUzo6RUNTOjpUYXNrRGVmaW5pdGlvbicsXG4gICAgICAgICAgUHJvcGVydGllczoge1xuICAgICAgICAgICAgQ29udGFpbmVyRGVmaW5pdGlvbnM6IFtcbiAgICAgICAgICAgICAgeyBJbWFnZTogJ2ltYWdlMicgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gV0hFTlxuICBjb25zdCBkZXBsb3lTdGFja1Jlc3VsdCA9IGF3YWl0IGhvdHN3YXBNb2NrU2RrUHJvdmlkZXIudHJ5SG90c3dhcERlcGxveW1lbnQoY2RrU3RhY2tBcnRpZmFjdCk7XG5cbiAgLy8gVEhFTlxuICBleHBlY3QoZGVwbG95U3RhY2tSZXN1bHQpLnRvQmVVbmRlZmluZWQoKTtcbiAgZXhwZWN0KG1vY2tSZWdpc3RlclRhc2tEZWYpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG59KTtcblxudGVzdCgnaWYgYW55dGhpbmcgYmVzaWRlcyBhbiBFQ1MgU2VydmljZSByZWZlcmVuY2VzIHRoZSBjaGFuZ2VkIFRhc2tEZWZpbml0aW9uLCBob3Rzd2FwcGluZyBpcyBub3QgcG9zc2libGUnLCBhc3luYyAoKSA9PiB7XG4gIC8vIEdJVkVOXG4gIHNldHVwLnNldEN1cnJlbnRDZm5TdGFja1RlbXBsYXRlKHtcbiAgICBSZXNvdXJjZXM6IHtcbiAgICAgIFRhc2tEZWY6IHtcbiAgICAgICAgVHlwZTogJ0FXUzo6RUNTOjpUYXNrRGVmaW5pdGlvbicsXG4gICAgICAgIFByb3BlcnRpZXM6IHtcbiAgICAgICAgICBGYW1pbHk6ICdteS10YXNrLWRlZicsXG4gICAgICAgICAgQ29udGFpbmVyRGVmaW5pdGlvbnM6IFtcbiAgICAgICAgICAgIHsgSW1hZ2U6ICdpbWFnZTEnIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBTZXJ2aWNlOiB7XG4gICAgICAgIFR5cGU6ICdBV1M6OkVDUzo6U2VydmljZScsXG4gICAgICAgIFByb3BlcnRpZXM6IHtcbiAgICAgICAgICBUYXNrRGVmaW5pdGlvbjogeyBSZWY6ICdUYXNrRGVmJyB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIEZ1bmN0aW9uOiB7XG4gICAgICAgIFR5cGU6ICdBV1M6OkxhbWJkYTo6RnVuY3Rpb24nLFxuICAgICAgICBQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgRW52aXJvbm1lbnQ6IHtcbiAgICAgICAgICAgIFZhcmlhYmxlczoge1xuICAgICAgICAgICAgICBUYXNrRGVmUmV2QXJuOiB7IFJlZjogJ1Rhc2tEZWYnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICBzZXR1cC5wdXNoU3RhY2tSZXNvdXJjZVN1bW1hcmllcyhcbiAgICBzZXR1cC5zdGFja1N1bW1hcnlPZignU2VydmljZScsICdBV1M6OkVDUzo6U2VydmljZScsXG4gICAgICAnYXJuOmF3czplY3M6cmVnaW9uOmFjY291bnQ6c2VydmljZS9teS1jbHVzdGVyL215LXNlcnZpY2UnKSxcbiAgKTtcbiAgbW9ja1JlZ2lzdGVyVGFza0RlZi5tb2NrUmV0dXJuVmFsdWUoe1xuICAgIHRhc2tEZWZpbml0aW9uOiB7XG4gICAgICB0YXNrRGVmaW5pdGlvbkFybjogJ2Fybjphd3M6ZWNzOnJlZ2lvbjphY2NvdW50OnRhc2stZGVmaW5pdGlvbi9teS10YXNrLWRlZjozJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgY2RrU3RhY2tBcnRpZmFjdCA9IHNldHVwLmNka1N0YWNrQXJ0aWZhY3RPZih7XG4gICAgdGVtcGxhdGU6IHtcbiAgICAgIFJlc291cmNlczoge1xuICAgICAgICBUYXNrRGVmOiB7XG4gICAgICAgICAgVHlwZTogJ0FXUzo6RUNTOjpUYXNrRGVmaW5pdGlvbicsXG4gICAgICAgICAgUHJvcGVydGllczoge1xuICAgICAgICAgICAgRmFtaWx5OiAnbXktdGFzay1kZWYnLFxuICAgICAgICAgICAgQ29udGFpbmVyRGVmaW5pdGlvbnM6IFtcbiAgICAgICAgICAgICAgeyBJbWFnZTogJ2ltYWdlMicgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgU2VydmljZToge1xuICAgICAgICAgIFR5cGU6ICdBV1M6OkVDUzo6U2VydmljZScsXG4gICAgICAgICAgUHJvcGVydGllczoge1xuICAgICAgICAgICAgVGFza0RlZmluaXRpb246IHsgUmVmOiAnVGFza0RlZicgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBGdW5jdGlvbjoge1xuICAgICAgICAgIFR5cGU6ICdBV1M6OkxhbWJkYTo6RnVuY3Rpb24nLFxuICAgICAgICAgIFByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIEVudmlyb25tZW50OiB7XG4gICAgICAgICAgICAgIFZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIFRhc2tEZWZSZXZBcm46IHsgUmVmOiAnVGFza0RlZicgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gV0hFTlxuICBjb25zdCBkZXBsb3lTdGFja1Jlc3VsdCA9IGF3YWl0IGhvdHN3YXBNb2NrU2RrUHJvdmlkZXIudHJ5SG90c3dhcERlcGxveW1lbnQoY2RrU3RhY2tBcnRpZmFjdCk7XG5cbiAgLy8gVEhFTlxuICBleHBlY3QoZGVwbG95U3RhY2tSZXN1bHQpLnRvQmVVbmRlZmluZWQoKTtcbiAgZXhwZWN0KG1vY2tSZWdpc3RlclRhc2tEZWYpLm5vdC50b0hhdmVCZWVuQ2FsbGVkKCk7XG59KTtcbiJdfQ==