export declare function enableTracing(enabled: boolean): void;
/**
 * Method decorator to trace a single static or member method, any time it's called
 */
export declare function traceCall(receiver: object, _propertyKey: string, descriptor: PropertyDescriptor, parentClassName?: string): PropertyDescriptor;
/**
 * Class decorator, enable tracing for all methods on this class
 */
export declare function traceMethods(constructor: Function): void;
