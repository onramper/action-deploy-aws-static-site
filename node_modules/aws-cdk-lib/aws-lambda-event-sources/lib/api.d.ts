import * as apigw from '../../aws-apigateway';
import * as lambda from '../../aws-lambda';
export declare class ApiEventSource implements lambda.IEventSource {
    private readonly method;
    private readonly path;
    private readonly options?;
    constructor(method: string, path: string, options?: apigw.MethodOptions | undefined);
    bind(target: lambda.IFunction): void;
}
