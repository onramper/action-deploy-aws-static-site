import { Construct } from 'constructs';
import * as events from '../../aws-events';
import * as lambda from '../../aws-lambda';
/**
 * Use an Event Bridge event bus as a Lambda destination.
 *
 * If no event bus is specified, the default event bus is used.
 */
export declare class EventBridgeDestination implements lambda.IDestination {
    private readonly eventBus?;
    /**
     * @default - use the default event bus
     */
    constructor(eventBus?: events.IEventBus | undefined);
    /**
     * Returns a destination configuration
     */
    bind(_scope: Construct, fn: lambda.IFunction, _options?: lambda.DestinationOptions): lambda.DestinationConfig;
}
