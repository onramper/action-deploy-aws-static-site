"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.forceSdkInstallation = exports.flatten = exports.PHYSICAL_RESOURCE_ID_REFERENCE = void 0;
/* eslint-disable no-console */
const child_process_1 = require("child_process");
const fs = require("fs");
const path_1 = require("path");
/**
 * Serialized form of the physical resource id for use in the operation parameters
 */
exports.PHYSICAL_RESOURCE_ID_REFERENCE = 'PHYSICAL:RESOURCEID:';
/**
 * Flattens a nested object
 *
 * @param object the object to be flattened
 * @returns a flat object with path as keys
 */
function flatten(object) {
    return Object.assign({}, ...function _flatten(child, path = []) {
        return [].concat(...Object.keys(child)
            .map(key => {
            const childKey = Buffer.isBuffer(child[key]) ? child[key].toString('utf8') : child[key];
            return typeof childKey === 'object' && childKey !== null
                ? _flatten(childKey, path.concat([key]))
                : ({ [path.concat([key]).join('.')]: childKey });
        }));
    }(object));
}
exports.flatten = flatten;
/**
 * Decodes encoded special values (physicalResourceId)
 */
function decodeSpecialValues(object, physicalResourceId) {
    return JSON.parse(JSON.stringify(object), (_k, v) => {
        switch (v) {
            case exports.PHYSICAL_RESOURCE_ID_REFERENCE:
                return physicalResourceId;
            default:
                return v;
        }
    });
}
/**
 * Filters the keys of an object.
 */
function filterKeys(object, pred) {
    return Object.entries(object)
        .reduce((acc, [k, v]) => pred(k)
        ? { ...acc, [k]: v }
        : acc, {});
}
let latestSdkInstalled = false;
function forceSdkInstallation() {
    latestSdkInstalled = false;
}
exports.forceSdkInstallation = forceSdkInstallation;
/**
 * Installs latest AWS SDK v2
 */
function installLatestSdk() {
    console.log('Installing latest AWS SDK v2');
    // Both HOME and --prefix are needed here because /tmp is the only writable location
    child_process_1.execSync('HOME=/tmp npm install aws-sdk@2 --production --no-package-lock --no-save --prefix /tmp');
    latestSdkInstalled = true;
}
const patchedServices = [
    { serviceName: 'OpenSearch', apiVersions: ['2021-01-01'] },
];
/**
 * Patches the AWS SDK by loading service models in the same manner as the actual SDK
 */
function patchSdk(awsSdk) {
    const apiLoader = awsSdk.apiLoader;
    patchedServices.forEach(({ serviceName, apiVersions }) => {
        const lowerServiceName = serviceName.toLowerCase();
        if (!awsSdk.Service.hasService(lowerServiceName)) {
            apiLoader.services[lowerServiceName] = {};
            awsSdk[serviceName] = awsSdk.Service.defineService(lowerServiceName, apiVersions);
        }
        else {
            awsSdk.Service.addVersions(awsSdk[serviceName], apiVersions);
        }
        apiVersions.forEach(apiVersion => {
            Object.defineProperty(apiLoader.services[lowerServiceName], apiVersion, {
                get: function get() {
                    const modelFilePrefix = `aws-sdk-patch/${lowerServiceName}-${apiVersion}`;
                    const model = JSON.parse(fs.readFileSync(path_1.join(__dirname, `${modelFilePrefix}.service.json`), 'utf-8'));
                    model.paginators = JSON.parse(fs.readFileSync(path_1.join(__dirname, `${modelFilePrefix}.paginators.json`), 'utf-8')).pagination;
                    return model;
                },
                enumerable: true,
                configurable: true,
            });
        });
    });
    return awsSdk;
}
/* eslint-disable @typescript-eslint/no-require-imports, import/no-extraneous-dependencies */
async function handler(event, context) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _l, _m, _o, _p;
    try {
        let AWS;
        if (!latestSdkInstalled && event.ResourceProperties.InstallLatestAwsSdk === 'true') {
            try {
                installLatestSdk();
                AWS = require('/tmp/node_modules/aws-sdk');
            }
            catch (e) {
                console.log(`Failed to install latest AWS SDK v2: ${e}`);
                AWS = require('aws-sdk'); // Fallback to pre-installed version
            }
        }
        else if (latestSdkInstalled) {
            AWS = require('/tmp/node_modules/aws-sdk');
        }
        else {
            AWS = require('aws-sdk');
        }
        try {
            AWS = patchSdk(AWS);
        }
        catch (e) {
            console.log(`Failed to patch AWS SDK: ${e}. Proceeding with the installed copy.`);
        }
        console.log(JSON.stringify(event));
        console.log('AWS SDK VERSION: ' + AWS.VERSION);
        event.ResourceProperties.Create = decodeCall(event.ResourceProperties.Create);
        event.ResourceProperties.Update = decodeCall(event.ResourceProperties.Update);
        event.ResourceProperties.Delete = decodeCall(event.ResourceProperties.Delete);
        // Default physical resource id
        let physicalResourceId;
        switch (event.RequestType) {
            case 'Create':
                physicalResourceId = (_j = (_f = (_c = (_b = (_a = event.ResourceProperties.Create) === null || _a === void 0 ? void 0 : _a.physicalResourceId) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : (_e = (_d = event.ResourceProperties.Update) === null || _d === void 0 ? void 0 : _d.physicalResourceId) === null || _e === void 0 ? void 0 : _e.id) !== null && _f !== void 0 ? _f : (_h = (_g = event.ResourceProperties.Delete) === null || _g === void 0 ? void 0 : _g.physicalResourceId) === null || _h === void 0 ? void 0 : _h.id) !== null && _j !== void 0 ? _j : event.LogicalResourceId;
                break;
            case 'Update':
            case 'Delete':
                physicalResourceId = (_o = (_m = (_l = event.ResourceProperties[event.RequestType]) === null || _l === void 0 ? void 0 : _l.physicalResourceId) === null || _m === void 0 ? void 0 : _m.id) !== null && _o !== void 0 ? _o : event.PhysicalResourceId;
                break;
        }
        let flatData = {};
        let data = {};
        const call = event.ResourceProperties[event.RequestType];
        if (call) {
            if (call.assumedRoleArn) {
                const timestamp = (new Date()).getTime();
                const params = {
                    RoleArn: call.assumedRoleArn,
                    RoleSessionName: `${timestamp}-${physicalResourceId}`.substring(0, 64),
                };
                AWS.config.credentials = new AWS.ChainableTemporaryCredentials({
                    params: params,
                });
            }
            if (!Object.prototype.hasOwnProperty.call(AWS, call.service)) {
                throw Error(`Service ${call.service} does not exist in AWS SDK version ${AWS.VERSION}.`);
            }
            const awsService = new AWS[call.service]({
                apiVersion: call.apiVersion,
                region: call.region,
            });
            try {
                const response = await awsService[call.action](call.parameters && decodeSpecialValues(call.parameters, physicalResourceId)).promise();
                flatData = {
                    apiVersion: awsService.config.apiVersion,
                    region: awsService.config.region,
                    ...flatten(response),
                };
                let outputPaths;
                if (call.outputPath) {
                    outputPaths = [call.outputPath];
                }
                else if (call.outputPaths) {
                    outputPaths = call.outputPaths;
                }
                if (outputPaths) {
                    data = filterKeys(flatData, startsWithOneOf(outputPaths));
                }
                else {
                    data = flatData;
                }
            }
            catch (e) {
                if (!call.ignoreErrorCodesMatching || !new RegExp(call.ignoreErrorCodesMatching).test(e.code)) {
                    throw e;
                }
            }
            if ((_p = call.physicalResourceId) === null || _p === void 0 ? void 0 : _p.responsePath) {
                physicalResourceId = flatData[call.physicalResourceId.responsePath];
            }
        }
        await respond('SUCCESS', 'OK', physicalResourceId, data);
    }
    catch (e) {
        console.log(e);
        await respond('FAILED', e.message || 'Internal Error', context.logStreamName, {});
    }
    function respond(responseStatus, reason, physicalResourceId, data) {
        const responseBody = JSON.stringify({
            Status: responseStatus,
            Reason: reason,
            PhysicalResourceId: physicalResourceId,
            StackId: event.StackId,
            RequestId: event.RequestId,
            LogicalResourceId: event.LogicalResourceId,
            NoEcho: false,
            Data: data,
        });
        console.log('Responding', responseBody);
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const parsedUrl = require('url').parse(event.ResponseURL);
        const requestOptions = {
            hostname: parsedUrl.hostname,
            path: parsedUrl.path,
            method: 'PUT',
            headers: { 'content-type': '', 'content-length': responseBody.length },
        };
        return new Promise((resolve, reject) => {
            try {
                // eslint-disable-next-line @typescript-eslint/no-require-imports
                const request = require('https').request(requestOptions, resolve);
                request.on('error', reject);
                request.write(responseBody);
                request.end();
            }
            catch (e) {
                reject(e);
            }
        });
    }
}
exports.handler = handler;
function decodeCall(call) {
    if (!call) {
        return undefined;
    }
    return JSON.parse(call);
}
function startsWithOneOf(searchStrings) {
    return function (string) {
        for (const searchString of searchStrings) {
            if (string.startsWith(searchString)) {
                return true;
            }
        }
        return false;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBK0I7QUFDL0IsaURBQXlDO0FBQ3pDLHlCQUF5QjtBQUN6QiwrQkFBNEI7QUFTNUI7O0dBRUc7QUFDVSxRQUFBLDhCQUE4QixHQUFHLHNCQUFzQixDQUFDO0FBRXJFOzs7OztHQUtHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFDLE1BQWM7SUFDcEMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUNsQixFQUFFLEVBQ0YsR0FBRyxTQUFTLFFBQVEsQ0FBQyxLQUFVLEVBQUUsT0FBaUIsRUFBRTtRQUNsRCxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNuQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEYsT0FBTyxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxLQUFLLElBQUk7Z0JBQ3RELENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUNWLENBQUM7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Q0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2xFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM1QixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDZjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNYO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQztBQWpKRCwwQkFpSkM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxJQUF3QjtJQUMxQyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQUUsT0FBTyxTQUFTLENBQUM7S0FBRTtJQUNoQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLGFBQXVCO0lBQzlDLE9BQU8sVUFBUyxNQUFjO1FBQzVCLEtBQUssTUFBTSxZQUFZLElBQUksYUFBYSxFQUFFO1lBQ3hDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgZXhlY1N5bmMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbi8vIGltcG9ydCB0aGUgQVdTTGFtYmRhIHBhY2thZ2UgZXhwbGljaXRseSxcbi8vIHdoaWNoIGlzIGdsb2JhbGx5IGF2YWlsYWJsZSBpbiB0aGUgTGFtYmRhIHJ1bnRpbWUsXG4vLyBhcyBvdGhlcndpc2UgbGlua2luZyB0aGlzIHJlcG9zaXRvcnkgd2l0aCBsaW5rLWFsbC5zaFxuLy8gZmFpbHMgaW4gdGhlIENESyBhcHAgZXhlY3V0ZWQgd2l0aCB0cy1ub2RlXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzLGltcG9ydC9uby11bnJlc29sdmVkICovXG5pbXBvcnQgKiBhcyBBV1NMYW1iZGEgZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgeyBBd3NTZGtDYWxsIH0gZnJvbSAnLi4vYXdzLWN1c3RvbS1yZXNvdXJjZSc7XG5cbi8qKlxuICogU2VyaWFsaXplZCBmb3JtIG9mIHRoZSBwaHlzaWNhbCByZXNvdXJjZSBpZCBmb3IgdXNlIGluIHRoZSBvcGVyYXRpb24gcGFyYW1ldGVyc1xuICovXG5leHBvcnQgY29uc3QgUEhZU0lDQUxfUkVTT1VSQ0VfSURfUkVGRVJFTkNFID0gJ1BIWVNJQ0FMOlJFU09VUkNFSUQ6JztcblxuLyoqXG4gKiBGbGF0dGVucyBhIG5lc3RlZCBvYmplY3RcbiAqXG4gKiBAcGFyYW0gb2JqZWN0IHRoZSBvYmplY3QgdG8gYmUgZmxhdHRlbmVkXG4gKiBAcmV0dXJucyBhIGZsYXQgb2JqZWN0IHdpdGggcGF0aCBhcyBrZXlzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKG9iamVjdDogb2JqZWN0KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIC4uLmZ1bmN0aW9uIF9mbGF0dGVuKGNoaWxkOiBhbnksIHBhdGg6IHN0cmluZ1tdID0gW10pOiBhbnkge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdCguLi5PYmplY3Qua2V5cyhjaGlsZClcbiAgICAgICAgLm1hcChrZXkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkS2V5ID0gQnVmZmVyLmlzQnVmZmVyKGNoaWxkW2tleV0pID8gY2hpbGRba2V5XS50b1N0cmluZygndXRmOCcpIDogY2hpbGRba2V5XTtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIGNoaWxkS2V5ID09PSAnb2JqZWN0JyAmJiBjaGlsZEtleSAhPT0gbnVsbFxuICAgICAgICAgICAgPyBfZmxhdHRlbihjaGlsZEtleSwgcGF0aC5jb25jYXQoW2tleV0pKVxuICAgICAgICAgICAgOiAoeyBbcGF0aC5jb25jYXQoW2tleV0pLmpvaW4oJy4nKV06IGNoaWxkS2V5IH0pO1xuICAgICAgICB9KSk7XG4gICAgfShvYmplY3QpLFxuICApO1xufVxuXG4vKipcbiAqIERlY29kZXMgZW5jb2RlZCBzcGVjaWFsIHZhbHVlcyAocGh5c2ljYWxSZXNvdXJjZUlkKVxuICovXG5mdW5jdGlvbiBkZWNvZGVTcGVjaWFsVmFsdWVzKG9iamVjdDogb2JqZWN0LCBwaHlzaWNhbFJlc291cmNlSWQ6IHN0cmluZykge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmplY3QpLCAoX2ssIHYpID0+IHtcbiAgICBzd2l0Y2ggKHYpIHtcbiAgICAgIGNhc2UgUEhZU0lDQUxfUkVTT1VSQ0VfSURfUkVGRVJFTkNFOlxuICAgICAgICByZXR1cm4gcGh5c2ljYWxSZXNvdXJjZUlkO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBGaWx0ZXJzIHRoZSBrZXlzIG9mIGFuIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZmlsdGVyS2V5cyhvYmplY3Q6IG9iamVjdCwgcHJlZDogKGtleTogc3RyaW5nKSA9PiBib29sZWFuKSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhvYmplY3QpXG4gICAgLnJlZHVjZShcbiAgICAgIChhY2MsIFtrLCB2XSkgPT4gcHJlZChrKVxuICAgICAgICA/IHsgLi4uYWNjLCBba106IHYgfVxuICAgICAgICA6IGFjYyxcbiAgICAgIHt9LFxuICAgICk7XG59XG5cbmxldCBsYXRlc3RTZGtJbnN0YWxsZWQgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcmNlU2RrSW5zdGFsbGF0aW9uKCkge1xuICBsYXRlc3RTZGtJbnN0YWxsZWQgPSBmYWxzZTtcbn1cblxuLyoqXG4gKiBJbnN0YWxscyBsYXRlc3QgQVdTIFNESyB2MlxuICovXG5mdW5jdGlvbiBpbnN0YWxsTGF0ZXN0U2RrKCk6IHZvaWQge1xuICBjb25zb2xlLmxvZygnSW5zdGFsbGluZyBsYXRlc3QgQVdTIFNESyB2MicpO1xuICAvLyBCb3RoIEhPTUUgYW5kIC0tcHJlZml4IGFyZSBuZWVkZWQgaGVyZSBiZWNhdXNlIC90bXAgaXMgdGhlIG9ubHkgd3JpdGFibGUgbG9jYXRpb25cbiAgZXhlY1N5bmMoJ0hPTUU9L3RtcCBucG0gaW5zdGFsbCBhd3Mtc2RrQDIgLS1wcm9kdWN0aW9uIC0tbm8tcGFja2FnZS1sb2NrIC0tbm8tc2F2ZSAtLXByZWZpeCAvdG1wJyk7XG4gIGxhdGVzdFNka0luc3RhbGxlZCA9IHRydWU7XG59XG5cbmNvbnN0IHBhdGNoZWRTZXJ2aWNlczogeyBzZXJ2aWNlTmFtZTogc3RyaW5nOyBhcGlWZXJzaW9uczogc3RyaW5nW10gfVtdID0gW1xuICB7IHNlcnZpY2VOYW1lOiAnT3BlblNlYXJjaCcsIGFwaVZlcnNpb25zOiBbJzIwMjEtMDEtMDEnXSB9LFxuXTtcbi8qKlxuICogUGF0Y2hlcyB0aGUgQVdTIFNESyBieSBsb2FkaW5nIHNlcnZpY2UgbW9kZWxzIGluIHRoZSBzYW1lIG1hbm5lciBhcyB0aGUgYWN0dWFsIFNES1xuICovXG5mdW5jdGlvbiBwYXRjaFNkayhhd3NTZGs6IGFueSk6IGFueSB7XG4gIGNvbnN0IGFwaUxvYWRlciA9IGF3c1Nkay5hcGlMb2FkZXI7XG4gIHBhdGNoZWRTZXJ2aWNlcy5mb3JFYWNoKCh7IHNlcnZpY2VOYW1lLCBhcGlWZXJzaW9ucyB9KSA9PiB7XG4gICAgY29uc3QgbG93ZXJTZXJ2aWNlTmFtZSA9IHNlcnZpY2VOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCFhd3NTZGsuU2VydmljZS5oYXNTZXJ2aWNlKGxvd2VyU2VydmljZU5hbWUpKSB7XG4gICAgICBhcGlMb2FkZXIuc2VydmljZXNbbG93ZXJTZXJ2aWNlTmFtZV0gPSB7fTtcbiAgICAgIGF3c1Nka1tzZXJ2aWNlTmFtZV0gPSBhd3NTZGsuU2VydmljZS5kZWZpbmVTZXJ2aWNlKGxvd2VyU2VydmljZU5hbWUsIGFwaVZlcnNpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdzU2RrLlNlcnZpY2UuYWRkVmVyc2lvbnMoYXdzU2RrW3NlcnZpY2VOYW1lXSwgYXBpVmVyc2lvbnMpO1xuICAgIH1cbiAgICBhcGlWZXJzaW9ucy5mb3JFYWNoKGFwaVZlcnNpb24gPT4ge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFwaUxvYWRlci5zZXJ2aWNlc1tsb3dlclNlcnZpY2VOYW1lXSwgYXBpVmVyc2lvbiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICBjb25zdCBtb2RlbEZpbGVQcmVmaXggPSBgYXdzLXNkay1wYXRjaC8ke2xvd2VyU2VydmljZU5hbWV9LSR7YXBpVmVyc2lvbn1gO1xuICAgICAgICAgIGNvbnN0IG1vZGVsID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsIGAke21vZGVsRmlsZVByZWZpeH0uc2VydmljZS5qc29uYCksICd1dGYtOCcpKTtcbiAgICAgICAgICBtb2RlbC5wYWdpbmF0b3JzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoam9pbihfX2Rpcm5hbWUsIGAke21vZGVsRmlsZVByZWZpeH0ucGFnaW5hdG9ycy5qc29uYCksICd1dGYtOCcpKS5wYWdpbmF0aW9uO1xuICAgICAgICAgIHJldHVybiBtb2RlbDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gYXdzU2RrO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzLCBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50OiBBV1NMYW1iZGEuQ2xvdWRGb3JtYXRpb25DdXN0b21SZXNvdXJjZUV2ZW50LCBjb250ZXh0OiBBV1NMYW1iZGEuQ29udGV4dCkge1xuICB0cnkge1xuICAgIGxldCBBV1M6IGFueTtcbiAgICBpZiAoIWxhdGVzdFNka0luc3RhbGxlZCAmJiBldmVudC5SZXNvdXJjZVByb3BlcnRpZXMuSW5zdGFsbExhdGVzdEF3c1NkayA9PT0gJ3RydWUnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpbnN0YWxsTGF0ZXN0U2RrKCk7XG4gICAgICAgIEFXUyA9IHJlcXVpcmUoJy90bXAvbm9kZV9tb2R1bGVzL2F3cy1zZGsnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coYEZhaWxlZCB0byBpbnN0YWxsIGxhdGVzdCBBV1MgU0RLIHYyOiAke2V9YCk7XG4gICAgICAgIEFXUyA9IHJlcXVpcmUoJ2F3cy1zZGsnKTsgLy8gRmFsbGJhY2sgdG8gcHJlLWluc3RhbGxlZCB2ZXJzaW9uXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsYXRlc3RTZGtJbnN0YWxsZWQpIHtcbiAgICAgIEFXUyA9IHJlcXVpcmUoJy90bXAvbm9kZV9tb2R1bGVzL2F3cy1zZGsnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQVdTID0gcmVxdWlyZSgnYXdzLXNkaycpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgQVdTID0gcGF0Y2hTZGsoQVdTKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRmFpbGVkIHRvIHBhdGNoIEFXUyBTREs6ICR7ZX0uIFByb2NlZWRpbmcgd2l0aCB0aGUgaW5zdGFsbGVkIGNvcHkuYCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXZlbnQpKTtcbiAgICBjb25zb2xlLmxvZygnQVdTIFNESyBWRVJTSU9OOiAnICsgQVdTLlZFUlNJT04pO1xuXG4gICAgZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLkNyZWF0ZSA9IGRlY29kZUNhbGwoZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLkNyZWF0ZSk7XG4gICAgZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLlVwZGF0ZSA9IGRlY29kZUNhbGwoZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLlVwZGF0ZSk7XG4gICAgZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLkRlbGV0ZSA9IGRlY29kZUNhbGwoZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLkRlbGV0ZSk7XG4gICAgLy8gRGVmYXVsdCBwaHlzaWNhbCByZXNvdXJjZSBpZFxuICAgIGxldCBwaHlzaWNhbFJlc291cmNlSWQ6IHN0cmluZztcbiAgICBzd2l0Y2ggKGV2ZW50LlJlcXVlc3RUeXBlKSB7XG4gICAgICBjYXNlICdDcmVhdGUnOlxuICAgICAgICBwaHlzaWNhbFJlc291cmNlSWQgPSBldmVudC5SZXNvdXJjZVByb3BlcnRpZXMuQ3JlYXRlPy5waHlzaWNhbFJlc291cmNlSWQ/LmlkID8/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LlJlc291cmNlUHJvcGVydGllcy5VcGRhdGU/LnBoeXNpY2FsUmVzb3VyY2VJZD8uaWQgPz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzLkRlbGV0ZT8ucGh5c2ljYWxSZXNvdXJjZUlkPy5pZCA/P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5Mb2dpY2FsUmVzb3VyY2VJZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdVcGRhdGUnOlxuICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgcGh5c2ljYWxSZXNvdXJjZUlkID0gZXZlbnQuUmVzb3VyY2VQcm9wZXJ0aWVzW2V2ZW50LlJlcXVlc3RUeXBlXT8ucGh5c2ljYWxSZXNvdXJjZUlkPy5pZCA/PyBldmVudC5QaHlzaWNhbFJlc291cmNlSWQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBmbGF0RGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGxldCBkYXRhOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgY29uc3QgY2FsbDogQXdzU2RrQ2FsbCB8IHVuZGVmaW5lZCA9IGV2ZW50LlJlc291cmNlUHJvcGVydGllc1tldmVudC5SZXF1ZXN0VHlwZV07XG5cbiAgICBpZiAoY2FsbCkge1xuXG4gICAgICBpZiAoY2FsbC5hc3N1bWVkUm9sZUFybikge1xuXG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgIFJvbGVBcm46IGNhbGwuYXNzdW1lZFJvbGVBcm4sXG4gICAgICAgICAgUm9sZVNlc3Npb25OYW1lOiBgJHt0aW1lc3RhbXB9LSR7cGh5c2ljYWxSZXNvdXJjZUlkfWAuc3Vic3RyaW5nKDAsIDY0KSxcbiAgICAgICAgfTtcblxuICAgICAgICBBV1MuY29uZmlnLmNyZWRlbnRpYWxzID0gbmV3IEFXUy5DaGFpbmFibGVUZW1wb3JhcnlDcmVkZW50aWFscyh7XG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIH0pO1xuXG4gICAgICB9XG5cbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKEFXUywgY2FsbC5zZXJ2aWNlKSkge1xuICAgICAgICB0aHJvdyBFcnJvcihgU2VydmljZSAke2NhbGwuc2VydmljZX0gZG9lcyBub3QgZXhpc3QgaW4gQVdTIFNESyB2ZXJzaW9uICR7QVdTLlZFUlNJT059LmApO1xuICAgICAgfVxuICAgICAgY29uc3QgYXdzU2VydmljZSA9IG5ldyAoQVdTIGFzIGFueSlbY2FsbC5zZXJ2aWNlXSh7XG4gICAgICAgIGFwaVZlcnNpb246IGNhbGwuYXBpVmVyc2lvbixcbiAgICAgICAgcmVnaW9uOiBjYWxsLnJlZ2lvbixcbiAgICAgIH0pO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF3c1NlcnZpY2VbY2FsbC5hY3Rpb25dKFxuICAgICAgICAgIGNhbGwucGFyYW1ldGVycyAmJiBkZWNvZGVTcGVjaWFsVmFsdWVzKGNhbGwucGFyYW1ldGVycywgcGh5c2ljYWxSZXNvdXJjZUlkKSkucHJvbWlzZSgpO1xuICAgICAgICBmbGF0RGF0YSA9IHtcbiAgICAgICAgICBhcGlWZXJzaW9uOiBhd3NTZXJ2aWNlLmNvbmZpZy5hcGlWZXJzaW9uLCAvLyBGb3IgdGVzdCBwdXJwb3NlczogY2hlY2sgaWYgYXBpVmVyc2lvbiB3YXMgY29ycmVjdGx5IHBhc3NlZC5cbiAgICAgICAgICByZWdpb246IGF3c1NlcnZpY2UuY29uZmlnLnJlZ2lvbiwgLy8gRm9yIHRlc3QgcHVycG9zZXM6IGNoZWNrIGlmIHJlZ2lvbiB3YXMgY29ycmVjdGx5IHBhc3NlZC5cbiAgICAgICAgICAuLi5mbGF0dGVuKHJlc3BvbnNlKSxcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgb3V0cHV0UGF0aHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAoY2FsbC5vdXRwdXRQYXRoKSB7XG4gICAgICAgICAgb3V0cHV0UGF0aHMgPSBbY2FsbC5vdXRwdXRQYXRoXTtcbiAgICAgICAgfSBlbHNlIGlmIChjYWxsLm91dHB1dFBhdGhzKSB7XG4gICAgICAgICAgb3V0cHV0UGF0aHMgPSBjYWxsLm91dHB1dFBhdGhzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dHB1dFBhdGhzKSB7XG4gICAgICAgICAgZGF0YSA9IGZpbHRlcktleXMoZmxhdERhdGEsIHN0YXJ0c1dpdGhPbmVPZihvdXRwdXRQYXRocykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGEgPSBmbGF0RGF0YTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIWNhbGwuaWdub3JlRXJyb3JDb2Rlc01hdGNoaW5nIHx8ICFuZXcgUmVnRXhwKGNhbGwuaWdub3JlRXJyb3JDb2Rlc01hdGNoaW5nKS50ZXN0KGUuY29kZSkpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsLnBoeXNpY2FsUmVzb3VyY2VJZD8ucmVzcG9uc2VQYXRoKSB7XG4gICAgICAgIHBoeXNpY2FsUmVzb3VyY2VJZCA9IGZsYXREYXRhW2NhbGwucGh5c2ljYWxSZXNvdXJjZUlkLnJlc3BvbnNlUGF0aF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgcmVzcG9uZCgnU1VDQ0VTUycsICdPSycsIHBoeXNpY2FsUmVzb3VyY2VJZCwgZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBhd2FpdCByZXNwb25kKCdGQUlMRUQnLCBlLm1lc3NhZ2UgfHwgJ0ludGVybmFsIEVycm9yJywgY29udGV4dC5sb2dTdHJlYW1OYW1lLCB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNwb25kKHJlc3BvbnNlU3RhdHVzOiBzdHJpbmcsIHJlYXNvbjogc3RyaW5nLCBwaHlzaWNhbFJlc291cmNlSWQ6IHN0cmluZywgZGF0YTogYW55KSB7XG4gICAgY29uc3QgcmVzcG9uc2VCb2R5ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgU3RhdHVzOiByZXNwb25zZVN0YXR1cyxcbiAgICAgIFJlYXNvbjogcmVhc29uLFxuICAgICAgUGh5c2ljYWxSZXNvdXJjZUlkOiBwaHlzaWNhbFJlc291cmNlSWQsXG4gICAgICBTdGFja0lkOiBldmVudC5TdGFja0lkLFxuICAgICAgUmVxdWVzdElkOiBldmVudC5SZXF1ZXN0SWQsXG4gICAgICBMb2dpY2FsUmVzb3VyY2VJZDogZXZlbnQuTG9naWNhbFJlc291cmNlSWQsXG4gICAgICBOb0VjaG86IGZhbHNlLFxuICAgICAgRGF0YTogZGF0YSxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdSZXNwb25kaW5nJywgcmVzcG9uc2VCb2R5KTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzXG4gICAgY29uc3QgcGFyc2VkVXJsID0gcmVxdWlyZSgndXJsJykucGFyc2UoZXZlbnQuUmVzcG9uc2VVUkwpO1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgaG9zdG5hbWU6IHBhcnNlZFVybC5ob3N0bmFtZSxcbiAgICAgIHBhdGg6IHBhcnNlZFVybC5wYXRoLFxuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICcnLCAnY29udGVudC1sZW5ndGgnOiByZXNwb25zZUJvZHkubGVuZ3RoIH0sXG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXJlcXVpcmUtaW1wb3J0c1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgnaHR0cHMnKS5yZXF1ZXN0KHJlcXVlc3RPcHRpb25zLCByZXNvbHZlKTtcbiAgICAgICAgcmVxdWVzdC5vbignZXJyb3InLCByZWplY3QpO1xuICAgICAgICByZXF1ZXN0LndyaXRlKHJlc3BvbnNlQm9keSk7XG4gICAgICAgIHJlcXVlc3QuZW5kKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVDYWxsKGNhbGw6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICBpZiAoIWNhbGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuICByZXR1cm4gSlNPTi5wYXJzZShjYWxsKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRzV2l0aE9uZU9mKHNlYXJjaFN0cmluZ3M6IHN0cmluZ1tdKTogKHN0cmluZzogc3RyaW5nKSA9PiBib29sZWFuIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgZm9yIChjb25zdCBzZWFyY2hTdHJpbmcgb2Ygc2VhcmNoU3RyaW5ncykge1xuICAgICAgaWYgKHN0cmluZy5zdGFydHNXaXRoKHNlYXJjaFN0cmluZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbn1cbiJdfQ==