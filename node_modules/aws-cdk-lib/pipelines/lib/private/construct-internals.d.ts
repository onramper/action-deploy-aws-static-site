import { Construct, IConstruct } from 'constructs';
import { App, Stage } from '../../../core';
import * as cxapi from '../../../cx-api';
export declare function appOf(construct: IConstruct): App;
export declare function assemblyBuilderOf(stage: Stage): cxapi.CloudAssemblyBuilder;
export declare function pipelineSynth(stage: Stage): cxapi.CloudAssembly;
/**
 * Return the relative path from the app assembly to the scope's (nested) assembly
 */
export declare function embeddedAsmPath(scope: IConstruct): string;
/**
 * Determine the directory where the cloud assembly will be written, for use in a BuildSpec
 */
export declare function cloudAssemblyBuildSpecDir(scope: IConstruct): string;
export declare function obtainScope(parent: Construct, id: string): Construct;
