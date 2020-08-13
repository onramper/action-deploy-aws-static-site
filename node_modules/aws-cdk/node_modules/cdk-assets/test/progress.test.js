"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloud_assembly_schema_1 = require("@aws-cdk/cloud-assembly-schema");
const mockfs = require("mock-fs");
const lib_1 = require("../lib");
const mock_aws_1 = require("./mock-aws");
let aws;
beforeEach(() => {
    mockfs({
        '/simple/cdk.out/assets.json': JSON.stringify({
            version: cloud_assembly_schema_1.Manifest.version(),
            files: {
                theAsset: {
                    source: {
                        path: 'some_file',
                    },
                    destinations: {
                        theDestination1: {
                            region: 'us-north-50',
                            assumeRoleArn: 'arn:aws:role',
                            bucketName: 'some_bucket',
                            objectKey: 'some_key',
                        },
                        theDestination2: {
                            region: 'us-north-50',
                            assumeRoleArn: 'arn:aws:role',
                            bucketName: 'some_bucket',
                            objectKey: 'some_key2',
                        },
                    },
                },
            },
        }),
        '/simple/cdk.out/some_file': 'FILE_CONTENTS',
    });
    aws = mock_aws_1.mockAws();
    // Accept all S3 uploads as new
    aws.mockS3.getBucketLocation = mock_aws_1.mockedApiResult({});
    aws.mockS3.listObjectsV2 = mock_aws_1.mockedApiResult({ Contents: undefined });
    aws.mockS3.upload = mock_aws_1.mockUpload();
});
afterEach(() => {
    mockfs.restore();
});
test('test listener', async () => {
    const progressListener = new FakeListener();
    const pub = new lib_1.AssetPublishing(lib_1.AssetManifest.fromPath('/simple/cdk.out'), { aws, progressListener });
    await pub.publish();
    const allMessages = progressListener.messages.join('\n');
    // Log mentions asset/destination ids
    expect(allMessages).toContain('theAsset:theDestination1');
    expect(allMessages).toContain('theAsset:theDestination2');
});
test('test abort', async () => {
    const progressListener = new FakeListener(true);
    const pub = new lib_1.AssetPublishing(lib_1.AssetManifest.fromPath('/simple/cdk.out'), { aws, progressListener });
    await pub.publish();
    const allMessages = progressListener.messages.join('\n');
    // We never get to asset 2
    expect(allMessages).not.toContain('theAsset:theDestination2');
});
class FakeListener {
    constructor(doAbort = false) {
        this.doAbort = doAbort;
        this.messages = new Array();
    }
    onPublishEvent(_type, event) {
        this.messages.push(event.message);
        if (this.doAbort) {
            event.abort();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2dyZXNzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwRUFBMEQ7QUFDMUQsa0NBQWtDO0FBQ2xDLGdDQUErRztBQUMvRyx5Q0FBa0U7QUFFbEUsSUFBSSxHQUErQixDQUFDO0FBQ3BDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7SUFDZCxNQUFNLENBQUM7UUFDTCw2QkFBNkIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzVDLE9BQU8sRUFBRSxnQ0FBUSxDQUFDLE9BQU8sRUFBRTtZQUMzQixLQUFLLEVBQUU7Z0JBQ0wsUUFBUSxFQUFFO29CQUNSLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsV0FBVztxQkFDbEI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGVBQWUsRUFBRTs0QkFDZixNQUFNLEVBQUUsYUFBYTs0QkFDckIsYUFBYSxFQUFFLGNBQWM7NEJBQzdCLFVBQVUsRUFBRSxhQUFhOzRCQUN6QixTQUFTLEVBQUUsVUFBVTt5QkFDdEI7d0JBQ0QsZUFBZSxFQUFFOzRCQUNmLE1BQU0sRUFBRSxhQUFhOzRCQUNyQixhQUFhLEVBQUUsY0FBYzs0QkFDN0IsVUFBVSxFQUFFLGFBQWE7NEJBQ3pCLFNBQVMsRUFBRSxXQUFXO3lCQUN2QjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztRQUNGLDJCQUEyQixFQUFFLGVBQWU7S0FDN0MsQ0FBQyxDQUFDO0lBRUgsR0FBRyxHQUFHLGtCQUFPLEVBQUUsQ0FBQztJQUVoQiwrQkFBK0I7SUFDL0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRywwQkFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLDBCQUFlLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNwRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxxQkFBVSxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFTLENBQUMsR0FBRyxFQUFFO0lBQ2IsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLElBQUksRUFBRTtJQUMvQixNQUFNLGdCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFNUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxxQkFBZSxDQUFDLG1CQUFhLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3RHLE1BQU0sR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRXBCLE1BQU0sV0FBVyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFekQscUNBQXFDO0lBQ3JDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUMxRCxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDNUQsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzVCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFaEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxxQkFBZSxDQUFDLG1CQUFhLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3RHLE1BQU0sR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRXBCLE1BQU0sV0FBVyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFekQsMEJBQTBCO0lBQzFCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLFlBQVk7SUFHaEIsWUFBNkIsVUFBVSxLQUFLO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUY1QixhQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztJQUcvQyxDQUFDO0lBRU0sY0FBYyxDQUFDLEtBQWdCLEVBQUUsS0FBdUI7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hbmlmZXN0IH0gZnJvbSAnQGF3cy1jZGsvY2xvdWQtYXNzZW1ibHktc2NoZW1hJztcbmltcG9ydCAqIGFzIG1vY2tmcyBmcm9tICdtb2NrLWZzJztcbmltcG9ydCB7IEFzc2V0TWFuaWZlc3QsIEFzc2V0UHVibGlzaGluZywgRXZlbnRUeXBlLCBJUHVibGlzaFByb2dyZXNzLCBJUHVibGlzaFByb2dyZXNzTGlzdGVuZXIgfSBmcm9tICcuLi9saWInO1xuaW1wb3J0IHsgbW9ja0F3cywgbW9ja2VkQXBpUmVzdWx0LCBtb2NrVXBsb2FkIH0gZnJvbSAnLi9tb2NrLWF3cyc7XG5cbmxldCBhd3M6IFJldHVyblR5cGU8dHlwZW9mIG1vY2tBd3M+O1xuYmVmb3JlRWFjaCgoKSA9PiB7XG4gIG1vY2tmcyh7XG4gICAgJy9zaW1wbGUvY2RrLm91dC9hc3NldHMuanNvbic6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHZlcnNpb246IE1hbmlmZXN0LnZlcnNpb24oKSxcbiAgICAgIGZpbGVzOiB7XG4gICAgICAgIHRoZUFzc2V0OiB7XG4gICAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgICBwYXRoOiAnc29tZV9maWxlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlc3RpbmF0aW9uczoge1xuICAgICAgICAgICAgdGhlRGVzdGluYXRpb24xOiB7XG4gICAgICAgICAgICAgIHJlZ2lvbjogJ3VzLW5vcnRoLTUwJyxcbiAgICAgICAgICAgICAgYXNzdW1lUm9sZUFybjogJ2Fybjphd3M6cm9sZScsXG4gICAgICAgICAgICAgIGJ1Y2tldE5hbWU6ICdzb21lX2J1Y2tldCcsXG4gICAgICAgICAgICAgIG9iamVjdEtleTogJ3NvbWVfa2V5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGVEZXN0aW5hdGlvbjI6IHtcbiAgICAgICAgICAgICAgcmVnaW9uOiAndXMtbm9ydGgtNTAnLFxuICAgICAgICAgICAgICBhc3N1bWVSb2xlQXJuOiAnYXJuOmF3czpyb2xlJyxcbiAgICAgICAgICAgICAgYnVja2V0TmFtZTogJ3NvbWVfYnVja2V0JyxcbiAgICAgICAgICAgICAgb2JqZWN0S2V5OiAnc29tZV9rZXkyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgJy9zaW1wbGUvY2RrLm91dC9zb21lX2ZpbGUnOiAnRklMRV9DT05URU5UUycsXG4gIH0pO1xuXG4gIGF3cyA9IG1vY2tBd3MoKTtcblxuICAvLyBBY2NlcHQgYWxsIFMzIHVwbG9hZHMgYXMgbmV3XG4gIGF3cy5tb2NrUzMuZ2V0QnVja2V0TG9jYXRpb24gPSBtb2NrZWRBcGlSZXN1bHQoe30pO1xuICBhd3MubW9ja1MzLmxpc3RPYmplY3RzVjIgPSBtb2NrZWRBcGlSZXN1bHQoeyBDb250ZW50czogdW5kZWZpbmVkIH0pO1xuICBhd3MubW9ja1MzLnVwbG9hZCA9IG1vY2tVcGxvYWQoKTtcbn0pO1xuXG5hZnRlckVhY2goKCkgPT4ge1xuICBtb2NrZnMucmVzdG9yZSgpO1xufSk7XG5cbnRlc3QoJ3Rlc3QgbGlzdGVuZXInLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzTGlzdGVuZXIgPSBuZXcgRmFrZUxpc3RlbmVyKCk7XG5cbiAgY29uc3QgcHViID0gbmV3IEFzc2V0UHVibGlzaGluZyhBc3NldE1hbmlmZXN0LmZyb21QYXRoKCcvc2ltcGxlL2Nkay5vdXQnKSwgeyBhd3MsIHByb2dyZXNzTGlzdGVuZXIgfSk7XG4gIGF3YWl0IHB1Yi5wdWJsaXNoKCk7XG5cbiAgY29uc3QgYWxsTWVzc2FnZXMgPSBwcm9ncmVzc0xpc3RlbmVyLm1lc3NhZ2VzLmpvaW4oJ1xcbicpO1xuXG4gIC8vIExvZyBtZW50aW9ucyBhc3NldC9kZXN0aW5hdGlvbiBpZHNcbiAgZXhwZWN0KGFsbE1lc3NhZ2VzKS50b0NvbnRhaW4oJ3RoZUFzc2V0OnRoZURlc3RpbmF0aW9uMScpO1xuICBleHBlY3QoYWxsTWVzc2FnZXMpLnRvQ29udGFpbigndGhlQXNzZXQ6dGhlRGVzdGluYXRpb24yJyk7XG59KTtcblxudGVzdCgndGVzdCBhYm9ydCcsIGFzeW5jICgpID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3NMaXN0ZW5lciA9IG5ldyBGYWtlTGlzdGVuZXIodHJ1ZSk7XG5cbiAgY29uc3QgcHViID0gbmV3IEFzc2V0UHVibGlzaGluZyhBc3NldE1hbmlmZXN0LmZyb21QYXRoKCcvc2ltcGxlL2Nkay5vdXQnKSwgeyBhd3MsIHByb2dyZXNzTGlzdGVuZXIgfSk7XG4gIGF3YWl0IHB1Yi5wdWJsaXNoKCk7XG5cbiAgY29uc3QgYWxsTWVzc2FnZXMgPSBwcm9ncmVzc0xpc3RlbmVyLm1lc3NhZ2VzLmpvaW4oJ1xcbicpO1xuXG4gIC8vIFdlIG5ldmVyIGdldCB0byBhc3NldCAyXG4gIGV4cGVjdChhbGxNZXNzYWdlcykubm90LnRvQ29udGFpbigndGhlQXNzZXQ6dGhlRGVzdGluYXRpb24yJyk7XG59KTtcblxuY2xhc3MgRmFrZUxpc3RlbmVyIGltcGxlbWVudHMgSVB1Ymxpc2hQcm9ncmVzc0xpc3RlbmVyIHtcbiAgcHVibGljIHJlYWRvbmx5IG1lc3NhZ2VzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvQWJvcnQgPSBmYWxzZSkge1xuICB9XG5cbiAgcHVibGljIG9uUHVibGlzaEV2ZW50KF90eXBlOiBFdmVudFR5cGUsIGV2ZW50OiBJUHVibGlzaFByb2dyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKGV2ZW50Lm1lc3NhZ2UpO1xuXG4gICAgaWYgKHRoaXMuZG9BYm9ydCkge1xuICAgICAgZXZlbnQuYWJvcnQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==