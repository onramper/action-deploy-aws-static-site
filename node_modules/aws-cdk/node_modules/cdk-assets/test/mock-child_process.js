"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockSpawn = void 0;
const child_process = require("child_process");
const events = require("events");
if (!child_process.spawn.mockImplementationOnce) {
    throw new Error('Call "jest.mock(\'child_process\');" at the top of the test file!');
}
function mockSpawn(...invocations) {
    let mock = child_process.spawn;
    for (const _invocation of invocations) {
        const invocation = _invocation; // Mirror into variable for closure
        mock = mock.mockImplementationOnce((binary, args, options) => {
            var _a;
            if (invocation.prefix) {
                // Match command line prefix
                expect([binary, ...args].slice(0, invocation.commandLine.length)).toEqual(invocation.commandLine);
            }
            else {
                // Match full command line
                expect([binary, ...args]).toEqual(invocation.commandLine);
            }
            if (invocation.cwd != null) {
                expect(options.cwd).toBe(invocation.cwd);
            }
            const child = new events.EventEmitter();
            child.stdin = new events.EventEmitter();
            child.stdin.write = jest.fn();
            child.stdin.end = jest.fn();
            child.stdout = new events.EventEmitter();
            child.stderr = new events.EventEmitter();
            if (invocation.stdout) {
                mockEmit(child.stdout, 'data', invocation.stdout);
            }
            mockEmit(child, 'close', (_a = invocation.exitCode) !== null && _a !== void 0 ? _a : 0);
            return child;
        });
    }
    mock.mockImplementation((binary, args, _options) => {
        throw new Error(`Did not expect call of ${JSON.stringify([binary, ...args])}`);
    });
}
exports.mockSpawn = mockSpawn;
/**
 * Must do this on the next tick, as emitter.emit() expects all listeners to have been attached already
 */
function mockEmit(emitter, event, data) {
    setImmediate(() => {
        emitter.emit(event, data);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1jaGlsZF9wcm9jZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9jay1jaGlsZF9wcm9jZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtDQUErQztBQUMvQyxpQ0FBaUM7QUFFakMsSUFBSSxDQUFFLGFBQXFCLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFO0lBQ3hELE1BQU0sSUFBSSxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztDQUN0RjtBQWNELFNBQWdCLFNBQVMsQ0FBQyxHQUFHLFdBQXlCO0lBQ3BELElBQUksSUFBSSxHQUFJLGFBQWEsQ0FBQyxLQUFhLENBQUM7SUFDeEMsS0FBSyxNQUFNLFdBQVcsSUFBSSxXQUFXLEVBQUU7UUFDckMsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUMsbUNBQW1DO1FBQ25FLElBQUksR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFjLEVBQUUsSUFBYyxFQUFFLE9BQW1DLEVBQUUsRUFBRTs7WUFDekcsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUNyQiw0QkFBNEI7Z0JBQzVCLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbkc7aUJBQU07Z0JBQ0wsMEJBQTBCO2dCQUMxQixNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDM0Q7WUFFRCxJQUFJLFVBQVUsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUM7WUFFRCxNQUFNLEtBQUssR0FBUSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUM3QyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3hDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM5QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUIsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN6QyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXpDLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDckIsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuRDtZQUNELFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxRQUFFLFVBQVUsQ0FBQyxRQUFRLG1DQUFJLENBQUMsQ0FBQyxDQUFDO1lBRW5ELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQWMsRUFBRSxJQUFjLEVBQUUsUUFBYSxFQUFFLEVBQUU7UUFDeEUsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQXBDRCw4QkFvQ0M7QUFFRDs7R0FFRztBQUNILFNBQVMsUUFBUSxDQUFDLE9BQTRCLEVBQUUsS0FBYSxFQUFFLElBQVM7SUFDdEUsWUFBWSxDQUFDLEdBQUcsRUFBRTtRQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjaGlsZF9wcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0ICogYXMgZXZlbnRzIGZyb20gJ2V2ZW50cyc7XG5cbmlmICghKGNoaWxkX3Byb2Nlc3MgYXMgYW55KS5zcGF3bi5tb2NrSW1wbGVtZW50YXRpb25PbmNlKSB7XG4gIHRocm93IG5ldyBFcnJvcignQ2FsbCBcImplc3QubW9jayhcXCdjaGlsZF9wcm9jZXNzXFwnKTtcIiBhdCB0aGUgdG9wIG9mIHRoZSB0ZXN0IGZpbGUhJyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW52b2NhdGlvbiB7XG4gIGNvbW1hbmRMaW5lOiBzdHJpbmdbXTtcbiAgY3dkPzogc3RyaW5nO1xuICBleGl0Q29kZT86IG51bWJlcjtcbiAgc3Rkb3V0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPbmx5IG1hdGNoIGEgcHJlZml4IG9mIHRoZSBjb21tYW5kIChkb24ndCBjYXJlIGFib3V0IHRoZSBkZXRhaWxzIG9mIHRoZSBhcmd1bWVudHMpXG4gICAqL1xuICBwcmVmaXg/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9ja1NwYXduKC4uLmludm9jYXRpb25zOiBJbnZvY2F0aW9uW10pIHtcbiAgbGV0IG1vY2sgPSAoY2hpbGRfcHJvY2Vzcy5zcGF3biBhcyBhbnkpO1xuICBmb3IgKGNvbnN0IF9pbnZvY2F0aW9uIG9mIGludm9jYXRpb25zKSB7XG4gICAgY29uc3QgaW52b2NhdGlvbiA9IF9pbnZvY2F0aW9uOyAvLyBNaXJyb3IgaW50byB2YXJpYWJsZSBmb3IgY2xvc3VyZVxuICAgIG1vY2sgPSBtb2NrLm1vY2tJbXBsZW1lbnRhdGlvbk9uY2UoKGJpbmFyeTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSwgb3B0aW9uczogY2hpbGRfcHJvY2Vzcy5TcGF3bk9wdGlvbnMpID0+IHtcbiAgICAgIGlmIChpbnZvY2F0aW9uLnByZWZpeCkge1xuICAgICAgICAvLyBNYXRjaCBjb21tYW5kIGxpbmUgcHJlZml4XG4gICAgICAgIGV4cGVjdChbYmluYXJ5LCAuLi5hcmdzXS5zbGljZSgwLCBpbnZvY2F0aW9uLmNvbW1hbmRMaW5lLmxlbmd0aCkpLnRvRXF1YWwoaW52b2NhdGlvbi5jb21tYW5kTGluZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNYXRjaCBmdWxsIGNvbW1hbmQgbGluZVxuICAgICAgICBleHBlY3QoW2JpbmFyeSwgLi4uYXJnc10pLnRvRXF1YWwoaW52b2NhdGlvbi5jb21tYW5kTGluZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbnZvY2F0aW9uLmN3ZCAhPSBudWxsKSB7XG4gICAgICAgIGV4cGVjdChvcHRpb25zLmN3ZCkudG9CZShpbnZvY2F0aW9uLmN3ZCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBuZXcgZXZlbnRzLkV2ZW50RW1pdHRlcigpO1xuICAgICAgY2hpbGQuc3RkaW4gPSBuZXcgZXZlbnRzLkV2ZW50RW1pdHRlcigpO1xuICAgICAgY2hpbGQuc3RkaW4ud3JpdGUgPSBqZXN0LmZuKCk7XG4gICAgICBjaGlsZC5zdGRpbi5lbmQgPSBqZXN0LmZuKCk7XG4gICAgICBjaGlsZC5zdGRvdXQgPSBuZXcgZXZlbnRzLkV2ZW50RW1pdHRlcigpO1xuICAgICAgY2hpbGQuc3RkZXJyID0gbmV3IGV2ZW50cy5FdmVudEVtaXR0ZXIoKTtcblxuICAgICAgaWYgKGludm9jYXRpb24uc3Rkb3V0KSB7XG4gICAgICAgIG1vY2tFbWl0KGNoaWxkLnN0ZG91dCwgJ2RhdGEnLCBpbnZvY2F0aW9uLnN0ZG91dCk7XG4gICAgICB9XG4gICAgICBtb2NrRW1pdChjaGlsZCwgJ2Nsb3NlJywgaW52b2NhdGlvbi5leGl0Q29kZSA/PyAwKTtcblxuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH0pO1xuICB9XG5cbiAgbW9jay5tb2NrSW1wbGVtZW50YXRpb24oKGJpbmFyeTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSwgX29wdGlvbnM6IGFueSkgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihgRGlkIG5vdCBleHBlY3QgY2FsbCBvZiAke0pTT04uc3RyaW5naWZ5KFtiaW5hcnksIC4uLmFyZ3NdKX1gKTtcbiAgfSk7XG59XG5cbi8qKlxuICogTXVzdCBkbyB0aGlzIG9uIHRoZSBuZXh0IHRpY2ssIGFzIGVtaXR0ZXIuZW1pdCgpIGV4cGVjdHMgYWxsIGxpc3RlbmVycyB0byBoYXZlIGJlZW4gYXR0YWNoZWQgYWxyZWFkeVxuICovXG5mdW5jdGlvbiBtb2NrRW1pdChlbWl0dGVyOiBldmVudHMuRXZlbnRFbWl0dGVyLCBldmVudDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICBlbWl0dGVyLmVtaXQoZXZlbnQsIGRhdGEpO1xuICB9KTtcbn1cbiJdfQ==