/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) 2018-2019 Aspose Pty Ltd. All rights reserved.
* </copyright>
* <summary>
*   Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
* 
*  The above copyright notice and this permission notice shall be included in all
*  copies or substantial portions of the Software.
* 
*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*  SOFTWARE.
* </summary>
* --------------------------------------------------------------------------------------------------------------------
*/
import * as request from "request";
import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/object-serializer";
import { addQueryParameterToUrl, invokeApiMethod } from "./internal/request-helper";
import * as model from "./model/model";

export { ApiError } from "./internal/api-error";
export * from "./model/model";

/**
 * Library for communication with Aspose.Imaging Cloud API
 */
export class ImagingApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param appKey App key. Please, set this value as null in case of on-premise hosting.
     * @param appSID App SID. Please, set this value as null in case of on-premise hosting.
     * @param baseUrl Base api Url. This param is required in case of on-premise hosting.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     * @param version API version.
     */
    constructor(appKey: string, appSID: string, baseUrl?: string, debugMode?: boolean, version?: string) {
        this.configuration = new Configuration(appKey, appSID, baseUrl, debugMode, version);
    }

    /**
     * Add image and images features to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async addSearchImage(requestObj: model.AddSearchImageRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling addSearchImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/image"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling addSearchImage.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling addSearchImage.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Appends existing TIFF image to another existing TIFF image (i.e. merges TIFF images).
     * @param requestObj contains request parameters
     */
    public async appendTiff(requestObj: model.AppendTiffRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling appendTiff.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/tiff/{name}/appendTiff"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling appendTiff.');
        }

        // verify required parameter 'requestObj.appendFile' is not null or undefined
        if (requestObj.appendFile === null || requestObj.appendFile === undefined) {
            throw new Error('Required parameter "requestObj.appendFile" was null or undefined when calling appendTiff.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "appendFile", requestObj.appendFile);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Compare two images. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async compareImages(requestObj: model.CompareImagesRequest): Promise<model.SearchResultsSet> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling compareImages.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/compare"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling compareImages.');
        }

        // verify required parameter 'requestObj.imageId1' is not null or undefined
        if (requestObj.imageId1 === null || requestObj.imageId1 === undefined) {
            throw new Error('Required parameter "requestObj.imageId1" was null or undefined when calling compareImages.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId1", requestObj.imageId1);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId2", requestObj.imageId2);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "SearchResultsSet");
        }
        return Promise.resolve(result);        
    }

    /**
     * Update parameters of existing TIFF image accordingly to fax parameters.
     * @param requestObj contains request parameters
     */
    public async convertTiffToFax(requestObj: model.ConvertTiffToFaxRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling convertTiffToFax.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/tiff/{name}/toFax"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling convertTiffToFax.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Copy file
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: model.CopyFileRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/file/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFile.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Copy folder
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: model.CopyFolderRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/folder/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFolder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Crop an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createCroppedImage(requestObj: model.CreateCroppedImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createCroppedImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/crop";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createCroppedImage.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling createCroppedImage.');
        }

        // verify required parameter 'requestObj.x' is not null or undefined
        if (requestObj.x === null || requestObj.x === undefined) {
            throw new Error('Required parameter "requestObj.x" was null or undefined when calling createCroppedImage.');
        }

        // verify required parameter 'requestObj.y' is not null or undefined
        if (requestObj.y === null || requestObj.y === undefined) {
            throw new Error('Required parameter "requestObj.y" was null or undefined when calling createCroppedImage.');
        }

        // verify required parameter 'requestObj.width' is not null or undefined
        if (requestObj.width === null || requestObj.width === undefined) {
            throw new Error('Required parameter "requestObj.width" was null or undefined when calling createCroppedImage.');
        }

        // verify required parameter 'requestObj.height' is not null or undefined
        if (requestObj.height === null || requestObj.height === undefined) {
            throw new Error('Required parameter "requestObj.height" was null or undefined when calling createCroppedImage.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "x", requestObj.x);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "y", requestObj.y);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Crop an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createDeskewedImage(requestObj: model.CreateDeskewedImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createDeskewedImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/deskew";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createDeskewedImage.');
        }

        // verify required parameter 'requestObj.resizeProportionally' is not null or undefined
        if (requestObj.resizeProportionally === null || requestObj.resizeProportionally === undefined) {
            throw new Error('Required parameter "requestObj.resizeProportionally" was null or undefined when calling createDeskewedImage.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resizeProportionally", requestObj.resizeProportionally);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bkColor", requestObj.bkColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Create the folder
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: model.CreateFolderRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling createFolder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Extract images features and add them to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createImageFeatures(requestObj: model.CreateImageFeaturesRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createImageFeatures.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/features"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling createImageFeatures.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imagesFolder", requestObj.imagesFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Get separate frame from existing TIFF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createImageFrame(requestObj: model.CreateImageFrameRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createImageFrame.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/frames/{frameId}"
            .replace("{" + "frameId" + "}", String(requestObj.frameId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createImageFrame.');
        }

        // verify required parameter 'requestObj.frameId' is not null or undefined
        if (requestObj.frameId === null || requestObj.frameId === undefined) {
            throw new Error('Required parameter "requestObj.frameId" was null or undefined when calling createImageFrame.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newWidth", requestObj.newWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newHeight", requestObj.newHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "x", requestObj.x);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "y", requestObj.y);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rectWidth", requestObj.rectWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rectHeight", requestObj.rectHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rotateFlipMethod", requestObj.rotateFlipMethod);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "saveOtherFrames", requestObj.saveOtherFrames);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Create new search context.
     * @param requestObj contains request parameters
     */
    public async createImageSearch(requestObj: model.CreateImageSearchRequest): Promise<model.SearchContextStatus> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createImageSearch.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/create";
        const queryParameters: any = {};

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "detector", requestObj.detector);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "matchingAlgorithm", requestObj.matchingAlgorithm);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "SearchContextStatus");
        }
        return Promise.resolve(result);        
    }

    /**
     * Add tag and reference image to search context. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createImageTag(requestObj: model.CreateImageTagRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createImageTag.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/addTag"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createImageTag.');
        }

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling createImageTag.');
        }

        // verify required parameter 'requestObj.tagName' is not null or undefined
        if (requestObj.tagName === null || requestObj.tagName === undefined) {
            throw new Error('Required parameter "requestObj.tagName" was null or undefined when calling createImageTag.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "tagName", requestObj.tagName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Update parameters of BMP image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createModifiedBmp(requestObj: model.CreateModifiedBmpRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createModifiedBmp.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/bmp";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createModifiedBmp.');
        }

        // verify required parameter 'requestObj.bitsPerPixel' is not null or undefined
        if (requestObj.bitsPerPixel === null || requestObj.bitsPerPixel === undefined) {
            throw new Error('Required parameter "requestObj.bitsPerPixel" was null or undefined when calling createModifiedBmp.');
        }

        // verify required parameter 'requestObj.horizontalResolution' is not null or undefined
        if (requestObj.horizontalResolution === null || requestObj.horizontalResolution === undefined) {
            throw new Error('Required parameter "requestObj.horizontalResolution" was null or undefined when calling createModifiedBmp.');
        }

        // verify required parameter 'requestObj.verticalResolution' is not null or undefined
        if (requestObj.verticalResolution === null || requestObj.verticalResolution === undefined) {
            throw new Error('Required parameter "requestObj.verticalResolution" was null or undefined when calling createModifiedBmp.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bitsPerPixel", requestObj.bitsPerPixel);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "horizontalResolution", requestObj.horizontalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "verticalResolution", requestObj.verticalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Process existing EMF imaging using given parameters. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createModifiedEmf(requestObj: model.CreateModifiedEmfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createModifiedEmf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/emf";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createModifiedEmf.');
        }

        // verify required parameter 'requestObj.bkColor' is not null or undefined
        if (requestObj.bkColor === null || requestObj.bkColor === undefined) {
            throw new Error('Required parameter "requestObj.bkColor" was null or undefined when calling createModifiedEmf.');
        }

        // verify required parameter 'requestObj.pageWidth' is not null or undefined
        if (requestObj.pageWidth === null || requestObj.pageWidth === undefined) {
            throw new Error('Required parameter "requestObj.pageWidth" was null or undefined when calling createModifiedEmf.');
        }

        // verify required parameter 'requestObj.pageHeight' is not null or undefined
        if (requestObj.pageHeight === null || requestObj.pageHeight === undefined) {
            throw new Error('Required parameter "requestObj.pageHeight" was null or undefined when calling createModifiedEmf.');
        }

        // verify required parameter 'requestObj.borderX' is not null or undefined
        if (requestObj.borderX === null || requestObj.borderX === undefined) {
            throw new Error('Required parameter "requestObj.borderX" was null or undefined when calling createModifiedEmf.');
        }

        // verify required parameter 'requestObj.borderY' is not null or undefined
        if (requestObj.borderY === null || requestObj.borderY === undefined) {
            throw new Error('Required parameter "requestObj.borderY" was null or undefined when calling createModifiedEmf.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bkColor", requestObj.bkColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageWidth", requestObj.pageWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageHeight", requestObj.pageHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderX", requestObj.borderX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderY", requestObj.borderY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of GIF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createModifiedGif(requestObj: model.CreateModifiedGifRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createModifiedGif.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/gif";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createModifiedGif.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "backgroundColorIndex", requestObj.backgroundColorIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "colorResolution", requestObj.colorResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "hasTrailer", requestObj.hasTrailer);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "interlaced", requestObj.interlaced);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isPaletteSorted", requestObj.isPaletteSorted);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pixelAspectRatio", requestObj.pixelAspectRatio);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of JPEG image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createModifiedJpeg(requestObj: model.CreateModifiedJpegRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createModifiedJpeg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/jpg";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createModifiedJpeg.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "compressionType", requestObj.compressionType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of JPEG2000 image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createModifiedJpeg2000(requestObj: model.CreateModifiedJpeg2000Request): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createModifiedJpeg2000.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/jpg2000";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createModifiedJpeg2000.');
        }

        // verify required parameter 'requestObj.comment' is not null or undefined
        if (requestObj.comment === null || requestObj.comment === undefined) {
            throw new Error('Required parameter "requestObj.comment" was null or undefined when calling createModifiedJpeg2000.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "comment", requestObj.comment);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "codec", requestObj.codec);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of PSD image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createModifiedPsd(requestObj: model.CreateModifiedPsdRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createModifiedPsd.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/psd";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createModifiedPsd.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "channelsCount", requestObj.channelsCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "compressionMethod", requestObj.compressionMethod);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of SVG image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createModifiedSvg(requestObj: model.CreateModifiedSvgRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createModifiedSvg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/svg";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createModifiedSvg.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "colorType", requestObj.colorType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "textAsShapes", requestObj.textAsShapes);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageWidth", requestObj.pageWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageHeight", requestObj.pageHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderX", requestObj.borderX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderY", requestObj.borderY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bkColor", requestObj.bkColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of TIFF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createModifiedTiff(requestObj: model.CreateModifiedTiffRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createModifiedTiff.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/tiff";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createModifiedTiff.');
        }

        // verify required parameter 'requestObj.bitDepth' is not null or undefined
        if (requestObj.bitDepth === null || requestObj.bitDepth === undefined) {
            throw new Error('Required parameter "requestObj.bitDepth" was null or undefined when calling createModifiedTiff.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bitDepth", requestObj.bitDepth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "compression", requestObj.compression);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resolutionUnit", requestObj.resolutionUnit);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "horizontalResolution", requestObj.horizontalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "verticalResolution", requestObj.verticalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of WEBP image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createModifiedWebP(requestObj: model.CreateModifiedWebPRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createModifiedWebP.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/webp";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createModifiedWebP.');
        }

        // verify required parameter 'requestObj.lossLess' is not null or undefined
        if (requestObj.lossLess === null || requestObj.lossLess === undefined) {
            throw new Error('Required parameter "requestObj.lossLess" was null or undefined when calling createModifiedWebP.');
        }

        // verify required parameter 'requestObj.quality' is not null or undefined
        if (requestObj.quality === null || requestObj.quality === undefined) {
            throw new Error('Required parameter "requestObj.quality" was null or undefined when calling createModifiedWebP.');
        }

        // verify required parameter 'requestObj.animLoopCount' is not null or undefined
        if (requestObj.animLoopCount === null || requestObj.animLoopCount === undefined) {
            throw new Error('Required parameter "requestObj.animLoopCount" was null or undefined when calling createModifiedWebP.');
        }

        // verify required parameter 'requestObj.animBackgroundColor' is not null or undefined
        if (requestObj.animBackgroundColor === null || requestObj.animBackgroundColor === undefined) {
            throw new Error('Required parameter "requestObj.animBackgroundColor" was null or undefined when calling createModifiedWebP.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lossLess", requestObj.lossLess);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "animLoopCount", requestObj.animLoopCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "animBackgroundColor", requestObj.animBackgroundColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Process existing WMF image using given parameters. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createModifiedWmf(requestObj: model.CreateModifiedWmfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createModifiedWmf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/wmf";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createModifiedWmf.');
        }

        // verify required parameter 'requestObj.bkColor' is not null or undefined
        if (requestObj.bkColor === null || requestObj.bkColor === undefined) {
            throw new Error('Required parameter "requestObj.bkColor" was null or undefined when calling createModifiedWmf.');
        }

        // verify required parameter 'requestObj.pageWidth' is not null or undefined
        if (requestObj.pageWidth === null || requestObj.pageWidth === undefined) {
            throw new Error('Required parameter "requestObj.pageWidth" was null or undefined when calling createModifiedWmf.');
        }

        // verify required parameter 'requestObj.pageHeight' is not null or undefined
        if (requestObj.pageHeight === null || requestObj.pageHeight === undefined) {
            throw new Error('Required parameter "requestObj.pageHeight" was null or undefined when calling createModifiedWmf.');
        }

        // verify required parameter 'requestObj.borderX' is not null or undefined
        if (requestObj.borderX === null || requestObj.borderX === undefined) {
            throw new Error('Required parameter "requestObj.borderX" was null or undefined when calling createModifiedWmf.');
        }

        // verify required parameter 'requestObj.borderY' is not null or undefined
        if (requestObj.borderY === null || requestObj.borderY === undefined) {
            throw new Error('Required parameter "requestObj.borderY" was null or undefined when calling createModifiedWmf.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bkColor", requestObj.bkColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageWidth", requestObj.pageWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageHeight", requestObj.pageHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderX", requestObj.borderX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderY", requestObj.borderY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Resize an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createResizedImage(requestObj: model.CreateResizedImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createResizedImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/resize";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createResizedImage.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling createResizedImage.');
        }

        // verify required parameter 'requestObj.newWidth' is not null or undefined
        if (requestObj.newWidth === null || requestObj.newWidth === undefined) {
            throw new Error('Required parameter "requestObj.newWidth" was null or undefined when calling createResizedImage.');
        }

        // verify required parameter 'requestObj.newHeight' is not null or undefined
        if (requestObj.newHeight === null || requestObj.newHeight === undefined) {
            throw new Error('Required parameter "requestObj.newHeight" was null or undefined when calling createResizedImage.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newWidth", requestObj.newWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newHeight", requestObj.newHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Rotate and/or flip an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createRotateFlippedImage(requestObj: model.CreateRotateFlippedImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createRotateFlippedImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/rotateflip";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createRotateFlippedImage.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling createRotateFlippedImage.');
        }

        // verify required parameter 'requestObj.method' is not null or undefined
        if (requestObj.method === null || requestObj.method === undefined) {
            throw new Error('Required parameter "requestObj.method" was null or undefined when calling createRotateFlippedImage.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "method", requestObj.method);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export existing image to another format. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.             
     * @param requestObj contains request parameters
     */
    public async createSavedImageAs(requestObj: model.CreateSavedImageAsRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createSavedImageAs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/saveAs";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createSavedImageAs.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling createSavedImageAs.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Perform scaling, cropping and flipping of an image in a single request. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async createUpdatedImage(requestObj: model.CreateUpdatedImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createUpdatedImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/updateImage";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling createUpdatedImage.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling createUpdatedImage.');
        }

        // verify required parameter 'requestObj.newWidth' is not null or undefined
        if (requestObj.newWidth === null || requestObj.newWidth === undefined) {
            throw new Error('Required parameter "requestObj.newWidth" was null or undefined when calling createUpdatedImage.');
        }

        // verify required parameter 'requestObj.newHeight' is not null or undefined
        if (requestObj.newHeight === null || requestObj.newHeight === undefined) {
            throw new Error('Required parameter "requestObj.newHeight" was null or undefined when calling createUpdatedImage.');
        }

        // verify required parameter 'requestObj.x' is not null or undefined
        if (requestObj.x === null || requestObj.x === undefined) {
            throw new Error('Required parameter "requestObj.x" was null or undefined when calling createUpdatedImage.');
        }

        // verify required parameter 'requestObj.y' is not null or undefined
        if (requestObj.y === null || requestObj.y === undefined) {
            throw new Error('Required parameter "requestObj.y" was null or undefined when calling createUpdatedImage.');
        }

        // verify required parameter 'requestObj.rectWidth' is not null or undefined
        if (requestObj.rectWidth === null || requestObj.rectWidth === undefined) {
            throw new Error('Required parameter "requestObj.rectWidth" was null or undefined when calling createUpdatedImage.');
        }

        // verify required parameter 'requestObj.rectHeight' is not null or undefined
        if (requestObj.rectHeight === null || requestObj.rectHeight === undefined) {
            throw new Error('Required parameter "requestObj.rectHeight" was null or undefined when calling createUpdatedImage.');
        }

        // verify required parameter 'requestObj.rotateFlipMethod' is not null or undefined
        if (requestObj.rotateFlipMethod === null || requestObj.rotateFlipMethod === undefined) {
            throw new Error('Required parameter "requestObj.rotateFlipMethod" was null or undefined when calling createUpdatedImage.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newWidth", requestObj.newWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newHeight", requestObj.newHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "x", requestObj.x);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "y", requestObj.y);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rectWidth", requestObj.rectWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rectHeight", requestObj.rectHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rotateFlipMethod", requestObj.rotateFlipMethod);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Extract images features from web page and add them to search context
     * @param requestObj contains request parameters
     */
    public async createWebSiteImageFeatures(requestObj: model.CreateWebSiteImageFeaturesRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createWebSiteImageFeatures.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/features/web"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling createWebSiteImageFeatures.');
        }

        // verify required parameter 'requestObj.imagesSource' is not null or undefined
        if (requestObj.imagesSource === null || requestObj.imagesSource === undefined) {
            throw new Error('Required parameter "requestObj.imagesSource" was null or undefined when calling createWebSiteImageFeatures.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imagesSource", requestObj.imagesSource);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Crop an existing image.
     * @param requestObj contains request parameters
     */
    public async cropImage(requestObj: model.CropImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling cropImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/crop"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling cropImage.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling cropImage.');
        }

        // verify required parameter 'requestObj.x' is not null or undefined
        if (requestObj.x === null || requestObj.x === undefined) {
            throw new Error('Required parameter "requestObj.x" was null or undefined when calling cropImage.');
        }

        // verify required parameter 'requestObj.y' is not null or undefined
        if (requestObj.y === null || requestObj.y === undefined) {
            throw new Error('Required parameter "requestObj.y" was null or undefined when calling cropImage.');
        }

        // verify required parameter 'requestObj.width' is not null or undefined
        if (requestObj.width === null || requestObj.width === undefined) {
            throw new Error('Required parameter "requestObj.width" was null or undefined when calling cropImage.');
        }

        // verify required parameter 'requestObj.height' is not null or undefined
        if (requestObj.height === null || requestObj.height === undefined) {
            throw new Error('Required parameter "requestObj.height" was null or undefined when calling cropImage.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "x", requestObj.x);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "y", requestObj.y);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Delete file
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: model.DeleteFileRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFile.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: model.DeleteFolderRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFolder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recursive", requestObj.recursive);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Deletes image features from search context.
     * @param requestObj contains request parameters
     */
    public async deleteImageFeatures(requestObj: model.DeleteImageFeaturesRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteImageFeatures.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/features"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling deleteImageFeatures.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling deleteImageFeatures.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Deletes the search context.
     * @param requestObj contains request parameters
     */
    public async deleteImageSearch(requestObj: model.DeleteImageSearchRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteImageSearch.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling deleteImageSearch.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Delete image and images features from search context
     * @param requestObj contains request parameters
     */
    public async deleteSearchImage(requestObj: model.DeleteSearchImageRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSearchImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/image"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling deleteSearchImage.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling deleteSearchImage.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Deskew an existing image.
     * @param requestObj contains request parameters
     */
    public async deskewImage(requestObj: model.DeskewImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deskewImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/deskew"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deskewImage.');
        }

        // verify required parameter 'requestObj.resizeProportionally' is not null or undefined
        if (requestObj.resizeProportionally === null || requestObj.resizeProportionally === undefined) {
            throw new Error('Required parameter "requestObj.resizeProportionally" was null or undefined when calling deskewImage.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resizeProportionally", requestObj.resizeProportionally);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bkColor", requestObj.bkColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Download file
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: model.DownloadFileRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling downloadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling downloadFile.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Extract features from image without adding to search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async extractImageFeatures(requestObj: model.ExtractImageFeaturesRequest): Promise<model.ImageFeatures> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling extractImageFeatures.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/image2features"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling extractImageFeatures.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling extractImageFeatures.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "ImageFeatures");
        }
        return Promise.resolve(result);        
    }

    /**
     * Get separate frame properties of existing TIFF image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async extractImageFrameProperties(requestObj: model.ExtractImageFramePropertiesRequest): Promise<model.ImagingResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling extractImageFrameProperties.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/imaging/frames/{frameId}/properties"
            .replace("{" + "frameId" + "}", String(requestObj.frameId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling extractImageFrameProperties.');
        }

        // verify required parameter 'requestObj.frameId' is not null or undefined
        if (requestObj.frameId === null || requestObj.frameId === undefined) {
            throw new Error('Required parameter "requestObj.frameId" was null or undefined when calling extractImageFrameProperties.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "ImagingResponse");
        }
        return Promise.resolve(result);        
    }

    /**
     * Get properties of an image. Image data is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async extractImageProperties(requestObj: model.ExtractImagePropertiesRequest): Promise<model.ImagingResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling extractImageProperties.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/imaging/properties";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling extractImageProperties.');
        }

        const formParams: { [key: string]: any } = {};
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "ImagingResponse");
        }
        return Promise.resolve(result);        
    }

    /**
     * Apply filtering effects to an existing image.
     * @param requestObj contains request parameters
     */
    public async filterEffectImage(requestObj: model.FilterEffectImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling filterEffectImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/filterEffect"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling filterEffectImage.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling filterEffectImage.');
        }

        // verify required parameter 'requestObj.filterType' is not null or undefined
        if (requestObj.filterType === null || requestObj.filterType === undefined) {
            throw new Error('Required parameter "requestObj.filterType" was null or undefined when calling filterEffectImage.');
        }

        // verify required parameter 'requestObj.filterProperties' is not null or undefined
        if (requestObj.filterProperties === null || requestObj.filterProperties === undefined) {
            throw new Error('Required parameter "requestObj.filterProperties" was null or undefined when calling filterEffectImage.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "filterType", requestObj.filterType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
            body: ObjectSerializer.serialize(requestObj.filterProperties, requestObj.filterProperties.constructor.name === "Object" ? "FilterPropertiesBase" : requestObj.filterProperties.constructor.name),
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Find images duplicates.
     * @param requestObj contains request parameters
     */
    public async findImageDuplicates(requestObj: model.FindImageDuplicatesRequest): Promise<model.ImageDuplicatesSet> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling findImageDuplicates.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/findDuplicates"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling findImageDuplicates.');
        }

        // verify required parameter 'requestObj.similarityThreshold' is not null or undefined
        if (requestObj.similarityThreshold === null || requestObj.similarityThreshold === undefined) {
            throw new Error('Required parameter "requestObj.similarityThreshold" was null or undefined when calling findImageDuplicates.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "similarityThreshold", requestObj.similarityThreshold);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "ImageDuplicatesSet");
        }
        return Promise.resolve(result);        
    }

    /**
     * Find images by tags. Tags JSON string is passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async findImagesByTags(requestObj: model.FindImagesByTagsRequest): Promise<model.SearchResultsSet> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling findImagesByTags.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/findByTags"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.tags' is not null or undefined
        if (requestObj.tags === null || requestObj.tags === undefined) {
            throw new Error('Required parameter "requestObj.tags" was null or undefined when calling findImagesByTags.');
        }

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling findImagesByTags.');
        }

        // verify required parameter 'requestObj.similarityThreshold' is not null or undefined
        if (requestObj.similarityThreshold === null || requestObj.similarityThreshold === undefined) {
            throw new Error('Required parameter "requestObj.similarityThreshold" was null or undefined when calling findImagesByTags.');
        }

        // verify required parameter 'requestObj.maxCount' is not null or undefined
        if (requestObj.maxCount === null || requestObj.maxCount === undefined) {
            throw new Error('Required parameter "requestObj.maxCount" was null or undefined when calling findImagesByTags.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "similarityThreshold", requestObj.similarityThreshold);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "maxCount", requestObj.maxCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.tags !== undefined) {
            const paramKey = "tags";
            let formValue = null;
            formValue = ObjectSerializer.serialize(requestObj.tags, "string");
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "tags",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "SearchResultsSet");
        }
        return Promise.resolve(result);        
    }

    /**
     * Find similar images. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async findSimilarImages(requestObj: model.FindSimilarImagesRequest): Promise<model.SearchResultsSet> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling findSimilarImages.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/findSimilar"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling findSimilarImages.');
        }

        // verify required parameter 'requestObj.similarityThreshold' is not null or undefined
        if (requestObj.similarityThreshold === null || requestObj.similarityThreshold === undefined) {
            throw new Error('Required parameter "requestObj.similarityThreshold" was null or undefined when calling findSimilarImages.');
        }

        // verify required parameter 'requestObj.maxCount' is not null or undefined
        if (requestObj.maxCount === null || requestObj.maxCount === undefined) {
            throw new Error('Required parameter "requestObj.maxCount" was null or undefined when calling findSimilarImages.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "similarityThreshold", requestObj.similarityThreshold);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "maxCount", requestObj.maxCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "SearchResultsSet");
        }
        return Promise.resolve(result);        
    }

    /**
     * Get disc usage
     * @param requestObj contains request parameters
     */
    public async getDiscUsage(requestObj: model.GetDiscUsageRequest): Promise<model.DiscUsage> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDiscUsage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/disc";
        const queryParameters: any = {};

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "DiscUsage");
        }
        return Promise.resolve(result);        
    }

    /**
     * Get file versions
     * @param requestObj contains request parameters
     */
    public async getFileVersions(requestObj: model.GetFileVersionsRequest): Promise<model.FileVersions> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFileVersions.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/version/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFileVersions.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "FileVersions");
        }
        return Promise.resolve(result);        
    }

    /**
     * Get all files and folders within a folder
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: model.GetFilesListRequest): Promise<model.FilesList> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFilesList.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFilesList.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "FilesList");
        }
        return Promise.resolve(result);        
    }

    /**
     * Gets image features from search context.
     * @param requestObj contains request parameters
     */
    public async getImageFeatures(requestObj: model.GetImageFeaturesRequest): Promise<model.ImageFeatures> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageFeatures.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/features"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling getImageFeatures.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling getImageFeatures.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "ImageFeatures");
        }
        return Promise.resolve(result);        
    }

    /**
     * Get separate frame from existing TIFF image.
     * @param requestObj contains request parameters
     */
    public async getImageFrame(requestObj: model.GetImageFrameRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageFrame.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/frames/{frameId}"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "frameId" + "}", String(requestObj.frameId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageFrame.');
        }

        // verify required parameter 'requestObj.frameId' is not null or undefined
        if (requestObj.frameId === null || requestObj.frameId === undefined) {
            throw new Error('Required parameter "requestObj.frameId" was null or undefined when calling getImageFrame.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newWidth", requestObj.newWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newHeight", requestObj.newHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "x", requestObj.x);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "y", requestObj.y);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rectWidth", requestObj.rectWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rectHeight", requestObj.rectHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rotateFlipMethod", requestObj.rotateFlipMethod);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "saveOtherFrames", requestObj.saveOtherFrames);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Get separate frame properties of existing TIFF image.
     * @param requestObj contains request parameters
     */
    public async getImageFrameProperties(requestObj: model.GetImageFramePropertiesRequest): Promise<model.ImagingResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageFrameProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/frames/{frameId}/properties"
            .replace("{" + "name" + "}", String(requestObj.name))
            .replace("{" + "frameId" + "}", String(requestObj.frameId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageFrameProperties.');
        }

        // verify required parameter 'requestObj.frameId' is not null or undefined
        if (requestObj.frameId === null || requestObj.frameId === undefined) {
            throw new Error('Required parameter "requestObj.frameId" was null or undefined when calling getImageFrameProperties.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "ImagingResponse");
        }
        return Promise.resolve(result);        
    }

    /**
     * Get properties of an image.
     * @param requestObj contains request parameters
     */
    public async getImageProperties(requestObj: model.GetImagePropertiesRequest): Promise<model.ImagingResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageProperties.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/properties"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageProperties.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "ImagingResponse");
        }
        return Promise.resolve(result);        
    }

    /**
     * Gets the search context status.
     * @param requestObj contains request parameters
     */
    public async getImageSearchStatus(requestObj: model.GetImageSearchStatusRequest): Promise<model.SearchContextStatus> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageSearchStatus.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/status"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling getImageSearchStatus.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "SearchContextStatus");
        }
        return Promise.resolve(result);        
    }

    /**
     * Get image from search context
     * @param requestObj contains request parameters
     */
    public async getSearchImage(requestObj: model.GetSearchImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSearchImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/image"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling getSearchImage.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling getSearchImage.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of existing BMP image.
     * @param requestObj contains request parameters
     */
    public async modifyBmp(requestObj: model.ModifyBmpRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling modifyBmp.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/bmp"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling modifyBmp.');
        }

        // verify required parameter 'requestObj.bitsPerPixel' is not null or undefined
        if (requestObj.bitsPerPixel === null || requestObj.bitsPerPixel === undefined) {
            throw new Error('Required parameter "requestObj.bitsPerPixel" was null or undefined when calling modifyBmp.');
        }

        // verify required parameter 'requestObj.horizontalResolution' is not null or undefined
        if (requestObj.horizontalResolution === null || requestObj.horizontalResolution === undefined) {
            throw new Error('Required parameter "requestObj.horizontalResolution" was null or undefined when calling modifyBmp.');
        }

        // verify required parameter 'requestObj.verticalResolution' is not null or undefined
        if (requestObj.verticalResolution === null || requestObj.verticalResolution === undefined) {
            throw new Error('Required parameter "requestObj.verticalResolution" was null or undefined when calling modifyBmp.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bitsPerPixel", requestObj.bitsPerPixel);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "horizontalResolution", requestObj.horizontalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "verticalResolution", requestObj.verticalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Process existing EMF imaging using given parameters.
     * @param requestObj contains request parameters
     */
    public async modifyEmf(requestObj: model.ModifyEmfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling modifyEmf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/emf"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling modifyEmf.');
        }

        // verify required parameter 'requestObj.bkColor' is not null or undefined
        if (requestObj.bkColor === null || requestObj.bkColor === undefined) {
            throw new Error('Required parameter "requestObj.bkColor" was null or undefined when calling modifyEmf.');
        }

        // verify required parameter 'requestObj.pageWidth' is not null or undefined
        if (requestObj.pageWidth === null || requestObj.pageWidth === undefined) {
            throw new Error('Required parameter "requestObj.pageWidth" was null or undefined when calling modifyEmf.');
        }

        // verify required parameter 'requestObj.pageHeight' is not null or undefined
        if (requestObj.pageHeight === null || requestObj.pageHeight === undefined) {
            throw new Error('Required parameter "requestObj.pageHeight" was null or undefined when calling modifyEmf.');
        }

        // verify required parameter 'requestObj.borderX' is not null or undefined
        if (requestObj.borderX === null || requestObj.borderX === undefined) {
            throw new Error('Required parameter "requestObj.borderX" was null or undefined when calling modifyEmf.');
        }

        // verify required parameter 'requestObj.borderY' is not null or undefined
        if (requestObj.borderY === null || requestObj.borderY === undefined) {
            throw new Error('Required parameter "requestObj.borderY" was null or undefined when calling modifyEmf.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bkColor", requestObj.bkColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageWidth", requestObj.pageWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageHeight", requestObj.pageHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderX", requestObj.borderX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderY", requestObj.borderY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of existing GIF image.
     * @param requestObj contains request parameters
     */
    public async modifyGif(requestObj: model.ModifyGifRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling modifyGif.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/gif"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling modifyGif.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "backgroundColorIndex", requestObj.backgroundColorIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "colorResolution", requestObj.colorResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "hasTrailer", requestObj.hasTrailer);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "interlaced", requestObj.interlaced);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isPaletteSorted", requestObj.isPaletteSorted);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pixelAspectRatio", requestObj.pixelAspectRatio);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of existing JPEG image.
     * @param requestObj contains request parameters
     */
    public async modifyJpeg(requestObj: model.ModifyJpegRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling modifyJpeg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/jpg"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling modifyJpeg.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "compressionType", requestObj.compressionType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of existing JPEG2000 image.
     * @param requestObj contains request parameters
     */
    public async modifyJpeg2000(requestObj: model.ModifyJpeg2000Request): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling modifyJpeg2000.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/jpg2000"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling modifyJpeg2000.');
        }

        // verify required parameter 'requestObj.comment' is not null or undefined
        if (requestObj.comment === null || requestObj.comment === undefined) {
            throw new Error('Required parameter "requestObj.comment" was null or undefined when calling modifyJpeg2000.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "comment", requestObj.comment);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "codec", requestObj.codec);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of existing PSD image.
     * @param requestObj contains request parameters
     */
    public async modifyPsd(requestObj: model.ModifyPsdRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling modifyPsd.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/psd"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling modifyPsd.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "channelsCount", requestObj.channelsCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "compressionMethod", requestObj.compressionMethod);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of existing SVG image.
     * @param requestObj contains request parameters
     */
    public async modifySvg(requestObj: model.ModifySvgRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling modifySvg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/svg"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling modifySvg.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "colorType", requestObj.colorType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "textAsShapes", requestObj.textAsShapes);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleX", requestObj.scaleX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "scaleY", requestObj.scaleY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageWidth", requestObj.pageWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageHeight", requestObj.pageHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderX", requestObj.borderX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderY", requestObj.borderY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bkColor", requestObj.bkColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of existing TIFF image.
     * @param requestObj contains request parameters
     */
    public async modifyTiff(requestObj: model.ModifyTiffRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling modifyTiff.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/tiff"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling modifyTiff.');
        }

        // verify required parameter 'requestObj.bitDepth' is not null or undefined
        if (requestObj.bitDepth === null || requestObj.bitDepth === undefined) {
            throw new Error('Required parameter "requestObj.bitDepth" was null or undefined when calling modifyTiff.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bitDepth", requestObj.bitDepth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "compression", requestObj.compression);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resolutionUnit", requestObj.resolutionUnit);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "horizontalResolution", requestObj.horizontalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "verticalResolution", requestObj.verticalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of existing WEBP image.
     * @param requestObj contains request parameters
     */
    public async modifyWebP(requestObj: model.ModifyWebPRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling modifyWebP.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/webp"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling modifyWebP.');
        }

        // verify required parameter 'requestObj.lossLess' is not null or undefined
        if (requestObj.lossLess === null || requestObj.lossLess === undefined) {
            throw new Error('Required parameter "requestObj.lossLess" was null or undefined when calling modifyWebP.');
        }

        // verify required parameter 'requestObj.quality' is not null or undefined
        if (requestObj.quality === null || requestObj.quality === undefined) {
            throw new Error('Required parameter "requestObj.quality" was null or undefined when calling modifyWebP.');
        }

        // verify required parameter 'requestObj.animLoopCount' is not null or undefined
        if (requestObj.animLoopCount === null || requestObj.animLoopCount === undefined) {
            throw new Error('Required parameter "requestObj.animLoopCount" was null or undefined when calling modifyWebP.');
        }

        // verify required parameter 'requestObj.animBackgroundColor' is not null or undefined
        if (requestObj.animBackgroundColor === null || requestObj.animBackgroundColor === undefined) {
            throw new Error('Required parameter "requestObj.animBackgroundColor" was null or undefined when calling modifyWebP.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lossLess", requestObj.lossLess);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "animLoopCount", requestObj.animLoopCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "animBackgroundColor", requestObj.animBackgroundColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Process existing WMF image using given parameters.
     * @param requestObj contains request parameters
     */
    public async modifyWmf(requestObj: model.ModifyWmfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling modifyWmf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/wmf"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling modifyWmf.');
        }

        // verify required parameter 'requestObj.bkColor' is not null or undefined
        if (requestObj.bkColor === null || requestObj.bkColor === undefined) {
            throw new Error('Required parameter "requestObj.bkColor" was null or undefined when calling modifyWmf.');
        }

        // verify required parameter 'requestObj.pageWidth' is not null or undefined
        if (requestObj.pageWidth === null || requestObj.pageWidth === undefined) {
            throw new Error('Required parameter "requestObj.pageWidth" was null or undefined when calling modifyWmf.');
        }

        // verify required parameter 'requestObj.pageHeight' is not null or undefined
        if (requestObj.pageHeight === null || requestObj.pageHeight === undefined) {
            throw new Error('Required parameter "requestObj.pageHeight" was null or undefined when calling modifyWmf.');
        }

        // verify required parameter 'requestObj.borderX' is not null or undefined
        if (requestObj.borderX === null || requestObj.borderX === undefined) {
            throw new Error('Required parameter "requestObj.borderX" was null or undefined when calling modifyWmf.');
        }

        // verify required parameter 'requestObj.borderY' is not null or undefined
        if (requestObj.borderY === null || requestObj.borderY === undefined) {
            throw new Error('Required parameter "requestObj.borderY" was null or undefined when calling modifyWmf.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bkColor", requestObj.bkColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageWidth", requestObj.pageWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageHeight", requestObj.pageHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderX", requestObj.borderX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderY", requestObj.borderY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Move file
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: model.MoveFileRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/file/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFile.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Move folder
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: model.MoveFolderRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/folder/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFolder.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Check if file or folder exists
     * @param requestObj contains request parameters
     */
    public async objectExists(requestObj: model.ObjectExistsRequest): Promise<model.ObjectExist> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling objectExists.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/exist/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling objectExists.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "ObjectExist");
        }
        return Promise.resolve(result);        
    }

    /**
     * Resize an existing image.
     * @param requestObj contains request parameters
     */
    public async resizeImage(requestObj: model.ResizeImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling resizeImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/resize"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling resizeImage.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling resizeImage.');
        }

        // verify required parameter 'requestObj.newWidth' is not null or undefined
        if (requestObj.newWidth === null || requestObj.newWidth === undefined) {
            throw new Error('Required parameter "requestObj.newWidth" was null or undefined when calling resizeImage.');
        }

        // verify required parameter 'requestObj.newHeight' is not null or undefined
        if (requestObj.newHeight === null || requestObj.newHeight === undefined) {
            throw new Error('Required parameter "requestObj.newHeight" was null or undefined when calling resizeImage.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newWidth", requestObj.newWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newHeight", requestObj.newHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Rotate and/or flip an existing image.
     * @param requestObj contains request parameters
     */
    public async rotateFlipImage(requestObj: model.RotateFlipImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling rotateFlipImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/rotateflip"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling rotateFlipImage.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling rotateFlipImage.');
        }

        // verify required parameter 'requestObj.method' is not null or undefined
        if (requestObj.method === null || requestObj.method === undefined) {
            throw new Error('Required parameter "requestObj.method" was null or undefined when calling rotateFlipImage.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "method", requestObj.method);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export existing image to another format.
     * @param requestObj contains request parameters
     */
    public async saveImageAs(requestObj: model.SaveImageAsRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling saveImageAs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/saveAs"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling saveImageAs.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling saveImageAs.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Check if storage exists
     * @param requestObj contains request parameters
     */
    public async storageExists(requestObj: model.StorageExistsRequest): Promise<model.StorageExist> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling storageExists.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/{storageName}/exist"
            .replace("{" + "storageName" + "}", String(requestObj.storageName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.storageName' is not null or undefined
        if (requestObj.storageName === null || requestObj.storageName === undefined) {
            throw new Error('Required parameter "requestObj.storageName" was null or undefined when calling storageExists.');
        }

        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "StorageExist");
        }
        return Promise.resolve(result);        
    }

    /**
     * Perform scaling, cropping and flipping of an existing image in a single request.
     * @param requestObj contains request parameters
     */
    public async updateImage(requestObj: model.UpdateImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/updateImage"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling updateImage.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling updateImage.');
        }

        // verify required parameter 'requestObj.newWidth' is not null or undefined
        if (requestObj.newWidth === null || requestObj.newWidth === undefined) {
            throw new Error('Required parameter "requestObj.newWidth" was null or undefined when calling updateImage.');
        }

        // verify required parameter 'requestObj.newHeight' is not null or undefined
        if (requestObj.newHeight === null || requestObj.newHeight === undefined) {
            throw new Error('Required parameter "requestObj.newHeight" was null or undefined when calling updateImage.');
        }

        // verify required parameter 'requestObj.x' is not null or undefined
        if (requestObj.x === null || requestObj.x === undefined) {
            throw new Error('Required parameter "requestObj.x" was null or undefined when calling updateImage.');
        }

        // verify required parameter 'requestObj.y' is not null or undefined
        if (requestObj.y === null || requestObj.y === undefined) {
            throw new Error('Required parameter "requestObj.y" was null or undefined when calling updateImage.');
        }

        // verify required parameter 'requestObj.rectWidth' is not null or undefined
        if (requestObj.rectWidth === null || requestObj.rectWidth === undefined) {
            throw new Error('Required parameter "requestObj.rectWidth" was null or undefined when calling updateImage.');
        }

        // verify required parameter 'requestObj.rectHeight' is not null or undefined
        if (requestObj.rectHeight === null || requestObj.rectHeight === undefined) {
            throw new Error('Required parameter "requestObj.rectHeight" was null or undefined when calling updateImage.');
        }

        // verify required parameter 'requestObj.rotateFlipMethod' is not null or undefined
        if (requestObj.rotateFlipMethod === null || requestObj.rotateFlipMethod === undefined) {
            throw new Error('Required parameter "requestObj.rotateFlipMethod" was null or undefined when calling updateImage.');
        }

        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newWidth", requestObj.newWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newHeight", requestObj.newHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "x", requestObj.x);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "y", requestObj.y);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rectWidth", requestObj.rectWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rectHeight", requestObj.rectHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rotateFlipMethod", requestObj.rotateFlipMethod);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            json: true,
        };
        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update images features in search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async updateImageFeatures(requestObj: model.UpdateImageFeaturesRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateImageFeatures.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/features"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling updateImageFeatures.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling updateImageFeatures.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Update image and images features in search context. Image data may be passed as zero-indexed multipart/form-data content or as raw body stream.
     * @param requestObj contains request parameters
     */
    public async updateSearchImage(requestObj: model.UpdateSearchImageRequest): Promise<any> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling updateSearchImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/image"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling updateSearchImage.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling updateSearchImage.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        if (requestObj.imageData !== undefined) {
            const paramKey = "imageData";
            let formValue = null;
            formValue = requestObj.imageData;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "imageData",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        await invokeApiMethod(requestOptions, this.configuration);
        return Promise.resolve();        
    }

    /**
     * Upload file
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: model.UploadFileRequest): Promise<model.FilesUploadResult> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling uploadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling uploadFile.');
        }

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling uploadFile.');
        }

        const formParams: { [key: string]: any } = {};
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        if (requestObj.file !== undefined) {
            const paramKey = "File";
            let formValue = null;
            formValue = requestObj.file;
            formParams[paramKey] = {
                value: formValue,
                options: {
                    filename: "File",
                    contentType: "application/octet-stream",
                    knownLength: formValue.length,
                },
            };
        }
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
        };
        
        if (Object.keys(formParams).length > 0) {
            requestOptions.formData = formParams;
        }
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        }
        return Promise.resolve(result);        
    }

}
