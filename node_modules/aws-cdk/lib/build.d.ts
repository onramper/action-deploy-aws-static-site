import * as cxapi from '@aws-cdk/cx-api';
type Options = {
    buildStackAssets: (stack: cxapi.CloudFormationStackArtifact) => Promise<void>;
};
export declare function buildAllStackAssets(stacks: cxapi.CloudFormationStackArtifact[], options: Options): Promise<void>;
export {};
