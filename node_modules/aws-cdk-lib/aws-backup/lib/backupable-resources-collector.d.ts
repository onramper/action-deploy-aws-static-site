import { IConstruct } from 'constructs';
import { IAspect } from '../../core';
export declare class BackupableResourcesCollector implements IAspect {
    readonly resources: string[];
    visit(node: IConstruct): void;
}
