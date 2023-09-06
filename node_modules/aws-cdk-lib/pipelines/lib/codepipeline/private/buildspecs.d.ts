import * as codebuild from '../../../../aws-codebuild';
export declare function mergeBuildSpecs(a: codebuild.BuildSpec, b?: codebuild.BuildSpec): codebuild.BuildSpec;
export declare function mergeBuildSpecs(a: codebuild.BuildSpec | undefined, b: codebuild.BuildSpec): codebuild.BuildSpec;
export declare function mergeBuildSpecs(a?: codebuild.BuildSpec, b?: codebuild.BuildSpec): codebuild.BuildSpec | undefined;
