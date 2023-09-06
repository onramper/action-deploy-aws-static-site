import { CommandOptions } from '../command-api';
export declare const command = "docs";
export declare const describe = "Opens the reference documentation in a browser";
export declare const aliases: string[];
export declare function realHandler(options: CommandOptions): Promise<number>;
