declare function bockfs(files: Record<string, string>): void;
declare namespace bockfs {
    function write(fileName: string, contents: string): void;
    function path(x: string): string;
    function restore(): void;
}
export = bockfs;
