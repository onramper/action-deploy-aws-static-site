import '@jsii/check-node/run';
import { Synthesizer } from '../lib/api/cxapp/cloud-executable';
export declare function exec(args: string[], synthesizer?: Synthesizer): Promise<number | void>;
export declare function cli(args?: string[]): void;
