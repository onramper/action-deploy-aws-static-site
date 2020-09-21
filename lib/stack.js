"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = __importStar(require("@aws-cdk/core"));
const static_page_stack_1 = require("./static-page-stack");
const app = new cdk.App();
const { DOMAIN, FOLDER } = process.env;
if (DOMAIN === undefined) {
    throw new Error("domain has not been defined");
}
if (FOLDER === undefined) {
    throw new Error("publish_dir has not been defined");
}
new static_page_stack_1.StaticPageStack(app, `StaticPage`, {
    stackName: `StaticPage-${DOMAIN}`.split(".").join("-"),
    folder: FOLDER,
    fullDomain: DOMAIN,
});
