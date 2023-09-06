export declare function undefinedIfNoKeys<A extends {
    [key: string]: unknown;
}>(obj: A): A | undefined;
