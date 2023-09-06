"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressOf = void 0;
const crypto = require("crypto");
/**
 * Resources with this ID are complete hidden from the logical ID calculation.
 */
const HIDDEN_ID = 'Default';
/**
 * Calculates the construct uid based on path components.
 *
 * Components named `Default` (case sensitive) are excluded from uid calculation
 * to allow tree refactorings.
 *
 * @param components path components
 */
function addressOf(components) {
    const hash = crypto.createHash('sha1');
    for (const c of components) {
        // skip components called "Default" to enable refactorings
        if (c === HIDDEN_ID) {
            continue;
        }
        hash.update(c);
        hash.update('\n');
    }
    // prefix with "c8" so to ensure it starts with non-digit.
    return 'c8' + hash.digest('hex');
}
exports.addressOf = addressOf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJpdmF0ZS91bmlxdWVpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBaUM7QUFFakM7O0dBRUc7QUFDSCxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFFNUI7Ozs7Ozs7R0FPRztBQUNILFNBQWdCLFNBQVMsQ0FBQyxVQUFvQjtJQUM1QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLEtBQUssTUFBTSxDQUFDLElBQUksVUFBVSxFQUFFO1FBQzFCLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFBRSxTQUFTO1NBQUU7UUFFbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkI7SUFFRCwwREFBMEQ7SUFDMUQsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBWkQsOEJBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuLyoqXG4gKiBSZXNvdXJjZXMgd2l0aCB0aGlzIElEIGFyZSBjb21wbGV0ZSBoaWRkZW4gZnJvbSB0aGUgbG9naWNhbCBJRCBjYWxjdWxhdGlvbi5cbiAqL1xuY29uc3QgSElEREVOX0lEID0gJ0RlZmF1bHQnO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbnN0cnVjdCB1aWQgYmFzZWQgb24gcGF0aCBjb21wb25lbnRzLlxuICpcbiAqIENvbXBvbmVudHMgbmFtZWQgYERlZmF1bHRgIChjYXNlIHNlbnNpdGl2ZSkgYXJlIGV4Y2x1ZGVkIGZyb20gdWlkIGNhbGN1bGF0aW9uXG4gKiB0byBhbGxvdyB0cmVlIHJlZmFjdG9yaW5ncy5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50cyBwYXRoIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZHJlc3NPZihjb21wb25lbnRzOiBzdHJpbmdbXSkge1xuICBjb25zdCBoYXNoID0gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTEnKTtcbiAgZm9yIChjb25zdCBjIG9mIGNvbXBvbmVudHMpIHtcbiAgICAvLyBza2lwIGNvbXBvbmVudHMgY2FsbGVkIFwiRGVmYXVsdFwiIHRvIGVuYWJsZSByZWZhY3RvcmluZ3NcbiAgICBpZiAoYyA9PT0gSElEREVOX0lEKSB7IGNvbnRpbnVlOyB9XG5cbiAgICBoYXNoLnVwZGF0ZShjKTtcbiAgICBoYXNoLnVwZGF0ZSgnXFxuJyk7XG4gIH1cblxuICAvLyBwcmVmaXggd2l0aCBcImM4XCIgc28gdG8gZW5zdXJlIGl0IHN0YXJ0cyB3aXRoIG5vbi1kaWdpdC5cbiAgcmV0dXJuICdjOCcgKyBoYXNoLmRpZ2VzdCgnaGV4Jyk7XG59XG4iXX0=