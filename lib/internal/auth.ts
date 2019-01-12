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
import { Configuration } from "./configuration";
import { invokeApiMethod } from "./request-helper";

/**
 * Authentication logic for api calls
 */
export interface IAuthentication {
    /**
     * Apply authentication settings to header and query params.
     */
    applyToRequest(requestOptions: request.Options, configuration: Configuration): void;

    /**
     * Handle 401 response.
     */
    handle401response(configuration: Configuration);
}

/**
 * Implements OAuth authentication 
 */
export class OAuth implements IAuthentication {
    private accessTokenValue: string;
    private refreshTokenValue: string;

     /**
      * Apply authentication settings to header and query params.
      */
    public async applyToRequest(requestOptions: request.Options, configuration: Configuration): Promise<void> {
        if (this.accessTokenValue == null) {
            await this.requestToken(configuration);
        }

        if (requestOptions && requestOptions.headers) {
            requestOptions.headers.Authorization = "Bearer " + this.accessTokenValue;
        }

        return Promise.resolve();
    }

    /**
     * Handle 401 response.
     */
    public async handle401response(configuration: Configuration) {
        await this.refreshToken(configuration);
    }

    private async requestToken(configuration: Configuration): Promise<void> {
        let postData = "grant_type=client_credentials";
        postData += "&client_id=" + configuration.appSID;
        postData += "&client_secret=" + configuration.appKey;

        const requestOptions: request.Options = {
            method: "POST",
            uri: configuration.baseUrl + "/oauth2/token",
            body: postData,
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };

        const response = await invokeApiMethod(requestOptions, configuration, true);
        const parsedResponse = JSON.parse(response.body);
        this.accessTokenValue = parsedResponse.access_token;
        this.refreshTokenValue = parsedResponse.refresh_token;
        return Promise.resolve();
    }

    private async refreshToken(configuration: Configuration): Promise<void> {
        let postData = "grant_type=refresh_token";
        postData += "&refresh_token=" + this.refreshTokenValue;

        const requestOptions: request.Options = {
            method: "POST",
            uri: configuration.baseUrl + "/oauth2/token",
            body: postData,
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded",
            },
        };

        const response = await invokeApiMethod(requestOptions, configuration, true);
        const parsedResponse = JSON.parse(response.body);
        this.accessTokenValue = parsedResponse.access_token;
        this.refreshTokenValue = parsedResponse.refresh_token;
        return Promise.resolve();
    }
}
