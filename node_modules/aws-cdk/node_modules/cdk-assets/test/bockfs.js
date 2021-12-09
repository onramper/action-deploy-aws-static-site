"use strict";
// A not-so-fake filesystem mock similar to mock-fs
const fs = require("fs");
const os = require("os");
const path_ = require("path");
const fs_extra_1 = require("../lib/private/fs-extra");
const bockFsRoot = path_.join(os.tmpdir(), 'bockfs');
function bockfs(files) {
    for (const [fileName, contents] of Object.entries(files)) {
        bockfs.write(fileName, contents);
    }
}
(function (bockfs) {
    function write(fileName, contents) {
        const fullPath = path(fileName);
        fs.mkdirSync(path_.dirname(fullPath), { recursive: true });
        fs.writeFileSync(fullPath, contents, { encoding: 'utf-8' });
    }
    bockfs.write = write;
    function path(x) {
        if (x.startsWith('/')) {
            x = x.substr(1);
        } // Force path to be non-absolute
        return path_.join(bockFsRoot, x);
    }
    bockfs.path = path;
    function restore() {
        fs_extra_1.rmRfSync(bockFsRoot);
    }
    bockfs.restore = restore;
})(bockfs || (bockfs = {}));
module.exports = bockfs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9ja2ZzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9ja2ZzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtREFBbUQ7QUFDbkQseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qiw4QkFBOEI7QUFDOUIsc0RBQW1EO0FBRW5ELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRXJELFNBQVMsTUFBTSxDQUFDLEtBQTZCO0lBQzNDLEtBQUssTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hELE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2xDO0FBQ0gsQ0FBQztBQUVELFdBQVUsTUFBTTtJQUNkLFNBQWdCLEtBQUssQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBQ3RELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzRCxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBSmUsWUFBSyxRQUlwQixDQUFBO0lBRUQsU0FBZ0IsSUFBSSxDQUFDLENBQVM7UUFDNUIsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRSxDQUFDLGdDQUFnQztRQUM1RSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFIZSxXQUFJLE9BR25CLENBQUE7SUFFRCxTQUFnQixPQUFPO1FBQ3JCLG1CQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUZlLGNBQU8sVUFFdEIsQ0FBQTtBQUNILENBQUMsRUFmUyxNQUFNLEtBQU4sTUFBTSxRQWVmO0FBRUQsaUJBQVMsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQSBub3Qtc28tZmFrZSBmaWxlc3lzdGVtIG1vY2sgc2ltaWxhciB0byBtb2NrLWZzXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBvcyBmcm9tICdvcyc7XG5pbXBvcnQgKiBhcyBwYXRoXyBmcm9tICdwYXRoJztcbmltcG9ydCB7IHJtUmZTeW5jIH0gZnJvbSAnLi4vbGliL3ByaXZhdGUvZnMtZXh0cmEnO1xuXG5jb25zdCBib2NrRnNSb290ID0gcGF0aF8uam9pbihvcy50bXBkaXIoKSwgJ2JvY2tmcycpO1xuXG5mdW5jdGlvbiBib2NrZnMoZmlsZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgZm9yIChjb25zdCBbZmlsZU5hbWUsIGNvbnRlbnRzXSBvZiBPYmplY3QuZW50cmllcyhmaWxlcykpIHtcbiAgICBib2NrZnMud3JpdGUoZmlsZU5hbWUsIGNvbnRlbnRzKTtcbiAgfVxufVxuXG5uYW1lc3BhY2UgYm9ja2ZzIHtcbiAgZXhwb3J0IGZ1bmN0aW9uIHdyaXRlKGZpbGVOYW1lOiBzdHJpbmcsIGNvbnRlbnRzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGgoZmlsZU5hbWUpO1xuICAgIGZzLm1rZGlyU3luYyhwYXRoXy5kaXJuYW1lKGZ1bGxQYXRoKSwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgZnMud3JpdGVGaWxlU3luYyhmdWxsUGF0aCwgY29udGVudHMsIHsgZW5jb2Rpbmc6ICd1dGYtOCcgfSk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcGF0aCh4OiBzdHJpbmcpIHtcbiAgICBpZiAoeC5zdGFydHNXaXRoKCcvJykpIHsgeCA9IHguc3Vic3RyKDEpOyB9IC8vIEZvcmNlIHBhdGggdG8gYmUgbm9uLWFic29sdXRlXG4gICAgcmV0dXJuIHBhdGhfLmpvaW4oYm9ja0ZzUm9vdCwgeCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcmVzdG9yZSgpIHtcbiAgICBybVJmU3luYyhib2NrRnNSb290KTtcbiAgfVxufVxuXG5leHBvcnQgPSBib2NrZnM7Il19