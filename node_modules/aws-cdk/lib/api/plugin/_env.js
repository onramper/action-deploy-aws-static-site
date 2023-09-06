"use strict";
/**
 * This file exists to expose and centralize some features that the files in this module expect from the surrounding
 * CLI.
 *
 * The calls will be forwarded to whatever logging system is the "official" logging system for this CLI.
 *
 * Centralizing in this way makes it easy to copy/paste this directory out and have a single place to
 * break dependencies and replace these functions.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
var logging_1 = require("../../logging");
Object.defineProperty(exports, "error", { enumerable: true, get: function () { return logging_1.error; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2Vudi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIl9lbnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7OztHQVFHOzs7QUFFSCx5Q0FBc0M7QUFBN0IsZ0dBQUEsS0FBSyxPQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZpbGUgZXhpc3RzIHRvIGV4cG9zZSBhbmQgY2VudHJhbGl6ZSBzb21lIGZlYXR1cmVzIHRoYXQgdGhlIGZpbGVzIGluIHRoaXMgbW9kdWxlIGV4cGVjdCBmcm9tIHRoZSBzdXJyb3VuZGluZ1xuICogQ0xJLlxuICpcbiAqIFRoZSBjYWxscyB3aWxsIGJlIGZvcndhcmRlZCB0byB3aGF0ZXZlciBsb2dnaW5nIHN5c3RlbSBpcyB0aGUgXCJvZmZpY2lhbFwiIGxvZ2dpbmcgc3lzdGVtIGZvciB0aGlzIENMSS5cbiAqXG4gKiBDZW50cmFsaXppbmcgaW4gdGhpcyB3YXkgbWFrZXMgaXQgZWFzeSB0byBjb3B5L3Bhc3RlIHRoaXMgZGlyZWN0b3J5IG91dCBhbmQgaGF2ZSBhIHNpbmdsZSBwbGFjZSB0b1xuICogYnJlYWsgZGVwZW5kZW5jaWVzIGFuZCByZXBsYWNlIHRoZXNlIGZ1bmN0aW9ucy5cbiAqL1xuXG5leHBvcnQgeyBlcnJvciB9IGZyb20gJy4uLy4uL2xvZ2dpbmcnOyJdfQ==