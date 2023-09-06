import * as cxapi from '../../../cx-api';
export declare function isAssetManifest(s: cxapi.CloudArtifact): s is cxapi.AssetManifestArtifact;
export declare function isStackArtifact(a: cxapi.CloudArtifact): a is cxapi.CloudFormationStackArtifact;
