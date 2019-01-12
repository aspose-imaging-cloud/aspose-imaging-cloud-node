/*
* MIT License

* Copyright (c) 2019 Aspose Pty Ltd. All rights reserved.

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import request = require("request");
import requestDebug = require("request-debug");
import { ApiError } from "./api-error";
import { Configuration } from "./configuration";

/**
 * Invoke api method
 * @param requestOptions request parameters
 * @param confguration api configuration
 * @param notApplyAuthToRequest if setted to true, auth is not applied to request
 */
export async function invokeApiMethod(requestOptions: request.Options, confguration: Configuration, notApplyAuthToRequest?: boolean): Promise<request.RequestResponse> {
    try {
        return await invokeApiMethodInternal(requestOptions, confguration, notApplyAuthToRequest);
    } catch (e) {
        if (e instanceof NeedRepeatException) {
            return await invokeApiMethodInternal(requestOptions, confguration, notApplyAuthToRequest);
        }

        throw e;
    }
}

/**
 * Add parameter to query
 * @param url url
 * @param queryParameters queryParameters
 * @param parameterName parameterName
 * @param parameterValue parameterValue
 */
export function addQueryParameterToUrl(url, queryParameters, parameterName, parameterValue) {
    if (parameterValue !== undefined) {
        if (url.indexOf("{" + parameterName + "}") >= 0) {
            url = url.replace("{" + parameterName + "}", String(parameterValue));
        } else {
            queryParameters[parameterName] = String(parameterValue);
        }
    } else {
        url = url.replace("/{" + parameterName + "}", "");
    }

    return url;
}

/**
 * Invoke api method
 * @param requestOptions request parameters
 * @param confguration api configuration
 * @param notApplyAuthToRequest if setted to true, auth is not applied to request
 */
async function invokeApiMethodInternal(requestOptions: request.Options, confguration: Configuration, notApplyAuthToRequest?: boolean): Promise<request.RequestResponse> {
    requestDebug(request, (type, data, r) => {
        if (r.writeDebugToConsole) {
            const toLog = {};
            // tslint:disable-next-line:triple-equals
            if (data.body && (data.body instanceof Buffer || data.body.toString().includes("Buffer"))) {
                data.body = "buffer";
            }
            
            toLog[type] = data;
            // tslint:disable-next-line:no-console
            console.log(JSON.stringify(toLog, undefined, 2));
        }
    });

    if (!requestOptions.headers) {
        requestOptions.headers = {};
    }

    requestOptions.headers["x-aspose-client"] = "node.js sdk";
    requestOptions.headers["x-aspose-client-version"] = "18.12";

    if (!requestOptions.headers["Content-Type"]) {
        requestOptions.headers["Content-Type"] = "application/json";
        if (requestOptions.body && requestOptions.body instanceof Buffer && requestOptions.body.length > 0) {
            requestOptions.headers["Content-Type"] = "application/octet-stream";
        }
    }

    const auth = confguration.authentication;
    if (!notApplyAuthToRequest) {
        await auth.applyToRequest(requestOptions, confguration);
    }

    return new Promise<request.RequestResponse>((resolve, reject) => {
        const r = request(requestOptions, async (error, response) => {
            if (error) {
                return reject(error);
            } else {
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    return resolve(response);
                } else if (response.statusCode === 401 && !notApplyAuthToRequest) {
                    await auth.handle401response(confguration);
                    return reject(new NeedRepeatException());
                } else {
                    try {
                        let bodyContent = response.body;
                        if (bodyContent) {
                            if (bodyContent instanceof Buffer) {
                                const bufferString = bodyContent.toString("utf8");
                                bodyContent = JSON.parse(bufferString);
                                return reject(new ApiError(bodyContent, response.statusCode));
                            } else if (bodyContent.Message) {
                                return reject(new ApiError(bodyContent.Message, response.statusCode));
                            } else {
                                return reject(new ApiError(bodyContent, response.statusCode));
                            }
                        } else {
                            return reject(new ApiError(null, response.statusCode));
                        }
                    } catch (error) {
                        return reject(new ApiError(`Failed to parsre Aspose.Imaging Cloud API error message: ${error}`, response.statusCode));
                    }

                }
            }
        });

        (r as any).writeDebugToConsole = confguration.debugMode;
    });
}

/**
 * Exception, indicating necessity of request repeat
 */
class NeedRepeatException extends Error {
}
