import { AttributeValues, KeyCondition, PrimaryKey } from './key';
/**
 * MappingTemplates for AppSync resolvers
 */
export declare abstract class MappingTemplate {
    /**
     * Create a mapping template from the given string
     */
    static fromString(template: string): MappingTemplate;
    /**
     * Create a mapping template from the given file
     */
    static fromFile(fileName: string): MappingTemplate;
    /**
     * Mapping template for a result list from DynamoDB
     */
    static dynamoDbResultList(): MappingTemplate;
    /**
     * Mapping template for a single result item from DynamoDB
     */
    static dynamoDbResultItem(): MappingTemplate;
    /**
     * Mapping template to scan a DynamoDB table to fetch all entries
     */
    static dynamoDbScanTable(consistentRead?: boolean): MappingTemplate;
    /**
     * Mapping template to query a set of items from a DynamoDB table
     *
     * @param cond the key condition for the query
     */
    static dynamoDbQuery(cond: KeyCondition, indexName?: string, consistentRead?: boolean): MappingTemplate;
    /**
     * Mapping template to get a single item from a DynamoDB table
     *
     * @param keyName the name of the hash key field
     * @param idArg the name of the Query argument
     */
    static dynamoDbGetItem(keyName: string, idArg: string, consistentRead?: boolean): MappingTemplate;
    /**
     * Mapping template to delete a single item from a DynamoDB table
     *
     * @param keyName the name of the hash key field
     * @param idArg the name of the Mutation argument
     */
    static dynamoDbDeleteItem(keyName: string, idArg: string): MappingTemplate;
    /**
     * Mapping template to save a single item to a DynamoDB table
     *
     * @param key the assigment of Mutation values to the primary key
     * @param values the assignment of Mutation values to the table attributes
     */
    static dynamoDbPutItem(key: PrimaryKey, values: AttributeValues): MappingTemplate;
    /**
     * Mapping template to invoke a Lambda function
     *
     * @param payload the VTL template snippet of the payload to send to the lambda.
     * If no payload is provided all available context fields are sent to the Lambda function
     * @param operation the type of operation AppSync should perform on the data source
     */
    static lambdaRequest(payload?: string, operation?: string): MappingTemplate;
    /**
     * Mapping template to return the Lambda result to the caller
     */
    static lambdaResult(): MappingTemplate;
    /**
     * this is called to render the mapping template to a VTL string
     */
    abstract renderTemplate(): string;
}
