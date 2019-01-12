/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) 2019 Aspose Pty Ltd. All rights reserved.
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
 * Library for communicating with Aspose.Imaging Cloud API
 */
export class ImagingApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     * @param version API version.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean, version?: string) {
        this.configuration = new Configuration(appSID, appKey, baseUrl, debugMode, version);
    }

    /**
     * Deletes the search context.
     * @param requestObj contains request parameters
     */
    public async deleteSearchContext(requestObj: model.DeleteSearchContextRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSearchContext.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling deleteSearchContext.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
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
     * Delete image and images features from search context
     * @param requestObj contains request parameters
     */
    public async deleteSearchContextImage(requestObj: model.DeleteSearchContextImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSearchContextImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/image"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling deleteSearchContextImage.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling deleteSearchContextImage.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
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
     * Deletes image features from search context.
     * @param requestObj contains request parameters
     */
    public async deleteSearchContextImageFeatures(requestObj: model.DeleteSearchContextImageFeaturesRequest): Promise<model.SaaSposeResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteSearchContextImageFeatures.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/features"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling deleteSearchContextImageFeatures.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling deleteSearchContextImageFeatures.');
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
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        }
        return Promise.resolve(result);        
    }

    /**
     * Update parameters of existing BMP image.
     * @param requestObj contains request parameters
     */
    public async getImageBmp(requestObj: model.GetImageBmpRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageBmp.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/bmp"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageBmp.');
        }

        // verify required parameter 'requestObj.bitsPerPixel' is not null or undefined
        if (requestObj.bitsPerPixel === null || requestObj.bitsPerPixel === undefined) {
            throw new Error('Required parameter "requestObj.bitsPerPixel" was null or undefined when calling getImageBmp.');
        }

        // verify required parameter 'requestObj.horizontalResolution' is not null or undefined
        if (requestObj.horizontalResolution === null || requestObj.horizontalResolution === undefined) {
            throw new Error('Required parameter "requestObj.horizontalResolution" was null or undefined when calling getImageBmp.');
        }

        // verify required parameter 'requestObj.verticalResolution' is not null or undefined
        if (requestObj.verticalResolution === null || requestObj.verticalResolution === undefined) {
            throw new Error('Required parameter "requestObj.verticalResolution" was null or undefined when calling getImageBmp.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bitsPerPixel", requestObj.bitsPerPixel);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "horizontalResolution", requestObj.horizontalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "verticalResolution", requestObj.verticalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Crop an existing image.
     * @param requestObj contains request parameters
     */
    public async getImageCrop(requestObj: model.GetImageCropRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageCrop.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/crop"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageCrop.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getImageCrop.');
        }

        // verify required parameter 'requestObj.x' is not null or undefined
        if (requestObj.x === null || requestObj.x === undefined) {
            throw new Error('Required parameter "requestObj.x" was null or undefined when calling getImageCrop.');
        }

        // verify required parameter 'requestObj.y' is not null or undefined
        if (requestObj.y === null || requestObj.y === undefined) {
            throw new Error('Required parameter "requestObj.y" was null or undefined when calling getImageCrop.');
        }

        // verify required parameter 'requestObj.width' is not null or undefined
        if (requestObj.width === null || requestObj.width === undefined) {
            throw new Error('Required parameter "requestObj.width" was null or undefined when calling getImageCrop.');
        }

        // verify required parameter 'requestObj.height' is not null or undefined
        if (requestObj.height === null || requestObj.height === undefined) {
            throw new Error('Required parameter "requestObj.height" was null or undefined when calling getImageCrop.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "x", requestObj.x);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "y", requestObj.y);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Rasterize existing DICOM image to PNG using given parameters.
     * @param requestObj contains request parameters
     */
    public async getImageDicom(requestObj: model.GetImageDicomRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageDicom.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/dicom"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageDicom.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Rasterize existing DNG image to PNG using given parameters.
     * @param requestObj contains request parameters
     */
    public async getImageDng(requestObj: model.GetImageDngRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageDng.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/dng"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageDng.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Rasterize existing EMF image to PNG using given parameters.
     * @param requestObj contains request parameters
     */
    public async getImageEmf(requestObj: model.GetImageEmfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageEmf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/emf"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageEmf.');
        }

        // verify required parameter 'requestObj.bkColor' is not null or undefined
        if (requestObj.bkColor === null || requestObj.bkColor === undefined) {
            throw new Error('Required parameter "requestObj.bkColor" was null or undefined when calling getImageEmf.');
        }

        // verify required parameter 'requestObj.pageWidth' is not null or undefined
        if (requestObj.pageWidth === null || requestObj.pageWidth === undefined) {
            throw new Error('Required parameter "requestObj.pageWidth" was null or undefined when calling getImageEmf.');
        }

        // verify required parameter 'requestObj.pageHeight' is not null or undefined
        if (requestObj.pageHeight === null || requestObj.pageHeight === undefined) {
            throw new Error('Required parameter "requestObj.pageHeight" was null or undefined when calling getImageEmf.');
        }

        // verify required parameter 'requestObj.borderX' is not null or undefined
        if (requestObj.borderX === null || requestObj.borderX === undefined) {
            throw new Error('Required parameter "requestObj.borderX" was null or undefined when calling getImageEmf.');
        }

        // verify required parameter 'requestObj.borderY' is not null or undefined
        if (requestObj.borderY === null || requestObj.borderY === undefined) {
            throw new Error('Required parameter "requestObj.borderY" was null or undefined when calling getImageEmf.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bkColor", requestObj.bkColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageWidth", requestObj.pageWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageHeight", requestObj.pageHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderX", requestObj.borderX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderY", requestObj.borderY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Update parameters of existing GIF image.
     * @param requestObj contains request parameters
     */
    public async getImageGif(requestObj: model.GetImageGifRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageGif.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/gif"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageGif.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "backgroundColorIndex", requestObj.backgroundColorIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "colorResolution", requestObj.colorResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "hasTrailer", requestObj.hasTrailer);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "interlaced", requestObj.interlaced);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isPaletteSorted", requestObj.isPaletteSorted);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pixelAspectRatio", requestObj.pixelAspectRatio);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
    public async getImageJpeg2000(requestObj: model.GetImageJpeg2000Request): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageJpeg2000.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/jpg2000"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageJpeg2000.');
        }

        // verify required parameter 'requestObj.comment' is not null or undefined
        if (requestObj.comment === null || requestObj.comment === undefined) {
            throw new Error('Required parameter "requestObj.comment" was null or undefined when calling getImageJpeg2000.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "comment", requestObj.comment);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "codec", requestObj.codec);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
    public async getImageJpg(requestObj: model.GetImageJpgRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageJpg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/jpg"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageJpg.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "compressionType", requestObj.compressionType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Rasterize existing ODG image to PNG using given parameters.
     * @param requestObj contains request parameters
     */
    public async getImageOdg(requestObj: model.GetImageOdgRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageOdg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/odg"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageOdg.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Update parameters of existing PNG image.
     * @param requestObj contains request parameters
     */
    public async getImagePng(requestObj: model.GetImagePngRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImagePng.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/png"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImagePng.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Update parameters of existing PSD image.
     * @param requestObj contains request parameters
     */
    public async getImagePsd(requestObj: model.GetImagePsdRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImagePsd.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/psd"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImagePsd.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "channelsCount", requestObj.channelsCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "compressionMethod", requestObj.compressionMethod);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Resize an existing image.
     * @param requestObj contains request parameters
     */
    public async getImageResize(requestObj: model.GetImageResizeRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageResize.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/resize"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageResize.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getImageResize.');
        }

        // verify required parameter 'requestObj.newWidth' is not null or undefined
        if (requestObj.newWidth === null || requestObj.newWidth === undefined) {
            throw new Error('Required parameter "requestObj.newWidth" was null or undefined when calling getImageResize.');
        }

        // verify required parameter 'requestObj.newHeight' is not null or undefined
        if (requestObj.newHeight === null || requestObj.newHeight === undefined) {
            throw new Error('Required parameter "requestObj.newHeight" was null or undefined when calling getImageResize.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newWidth", requestObj.newWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newHeight", requestObj.newHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
    public async getImageRotateFlip(requestObj: model.GetImageRotateFlipRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageRotateFlip.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/rotateflip"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageRotateFlip.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getImageRotateFlip.');
        }

        // verify required parameter 'requestObj.method' is not null or undefined
        if (requestObj.method === null || requestObj.method === undefined) {
            throw new Error('Required parameter "requestObj.method" was null or undefined when calling getImageRotateFlip.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "method", requestObj.method);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
    public async getImageSaveAs(requestObj: model.GetImageSaveAsRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageSaveAs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/saveAs"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageSaveAs.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getImageSaveAs.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Update parameters of existing TIFF image.
     * @param requestObj contains request parameters
     */
    public async getImageTiff(requestObj: model.GetImageTiffRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageTiff.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/tiff"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageTiff.');
        }

        // verify required parameter 'requestObj.compression' is not null or undefined
        if (requestObj.compression === null || requestObj.compression === undefined) {
            throw new Error('Required parameter "requestObj.compression" was null or undefined when calling getImageTiff.');
        }

        // verify required parameter 'requestObj.resolutionUnit' is not null or undefined
        if (requestObj.resolutionUnit === null || requestObj.resolutionUnit === undefined) {
            throw new Error('Required parameter "requestObj.resolutionUnit" was null or undefined when calling getImageTiff.');
        }

        // verify required parameter 'requestObj.bitDepth' is not null or undefined
        if (requestObj.bitDepth === null || requestObj.bitDepth === undefined) {
            throw new Error('Required parameter "requestObj.bitDepth" was null or undefined when calling getImageTiff.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "compression", requestObj.compression);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resolutionUnit", requestObj.resolutionUnit);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bitDepth", requestObj.bitDepth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "horizontalResolution", requestObj.horizontalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "verticalResolution", requestObj.verticalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Perform scaling, cropping and flipping of an existing image in a single request.
     * @param requestObj contains request parameters
     */
    public async getImageUpdate(requestObj: model.GetImageUpdateRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageUpdate.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/updateImage"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageUpdate.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling getImageUpdate.');
        }

        // verify required parameter 'requestObj.newWidth' is not null or undefined
        if (requestObj.newWidth === null || requestObj.newWidth === undefined) {
            throw new Error('Required parameter "requestObj.newWidth" was null or undefined when calling getImageUpdate.');
        }

        // verify required parameter 'requestObj.newHeight' is not null or undefined
        if (requestObj.newHeight === null || requestObj.newHeight === undefined) {
            throw new Error('Required parameter "requestObj.newHeight" was null or undefined when calling getImageUpdate.');
        }

        // verify required parameter 'requestObj.x' is not null or undefined
        if (requestObj.x === null || requestObj.x === undefined) {
            throw new Error('Required parameter "requestObj.x" was null or undefined when calling getImageUpdate.');
        }

        // verify required parameter 'requestObj.y' is not null or undefined
        if (requestObj.y === null || requestObj.y === undefined) {
            throw new Error('Required parameter "requestObj.y" was null or undefined when calling getImageUpdate.');
        }

        // verify required parameter 'requestObj.rectWidth' is not null or undefined
        if (requestObj.rectWidth === null || requestObj.rectWidth === undefined) {
            throw new Error('Required parameter "requestObj.rectWidth" was null or undefined when calling getImageUpdate.');
        }

        // verify required parameter 'requestObj.rectHeight' is not null or undefined
        if (requestObj.rectHeight === null || requestObj.rectHeight === undefined) {
            throw new Error('Required parameter "requestObj.rectHeight" was null or undefined when calling getImageUpdate.');
        }

        // verify required parameter 'requestObj.rotateFlipMethod' is not null or undefined
        if (requestObj.rotateFlipMethod === null || requestObj.rotateFlipMethod === undefined) {
            throw new Error('Required parameter "requestObj.rotateFlipMethod" was null or undefined when calling getImageUpdate.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newWidth", requestObj.newWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newHeight", requestObj.newHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "x", requestObj.x);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "y", requestObj.y);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rectWidth", requestObj.rectWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rectHeight", requestObj.rectHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "rotateFlipMethod", requestObj.rotateFlipMethod);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
    public async getImageWebP(requestObj: model.GetImageWebPRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageWebP.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/webp"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageWebP.');
        }

        // verify required parameter 'requestObj.lossLess' is not null or undefined
        if (requestObj.lossLess === null || requestObj.lossLess === undefined) {
            throw new Error('Required parameter "requestObj.lossLess" was null or undefined when calling getImageWebP.');
        }

        // verify required parameter 'requestObj.quality' is not null or undefined
        if (requestObj.quality === null || requestObj.quality === undefined) {
            throw new Error('Required parameter "requestObj.quality" was null or undefined when calling getImageWebP.');
        }

        // verify required parameter 'requestObj.animLoopCount' is not null or undefined
        if (requestObj.animLoopCount === null || requestObj.animLoopCount === undefined) {
            throw new Error('Required parameter "requestObj.animLoopCount" was null or undefined when calling getImageWebP.');
        }

        // verify required parameter 'requestObj.animBackgroundColor' is not null or undefined
        if (requestObj.animBackgroundColor === null || requestObj.animBackgroundColor === undefined) {
            throw new Error('Required parameter "requestObj.animBackgroundColor" was null or undefined when calling getImageWebP.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lossLess", requestObj.lossLess);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "animLoopCount", requestObj.animLoopCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "animBackgroundColor", requestObj.animBackgroundColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Rasterize existing WMF image to PNG using given parameters.
     * @param requestObj contains request parameters
     */
    public async getImageWmf(requestObj: model.GetImageWmfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getImageWmf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/{name}/wmf"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getImageWmf.');
        }

        // verify required parameter 'requestObj.bkColor' is not null or undefined
        if (requestObj.bkColor === null || requestObj.bkColor === undefined) {
            throw new Error('Required parameter "requestObj.bkColor" was null or undefined when calling getImageWmf.');
        }

        // verify required parameter 'requestObj.pageWidth' is not null or undefined
        if (requestObj.pageWidth === null || requestObj.pageWidth === undefined) {
            throw new Error('Required parameter "requestObj.pageWidth" was null or undefined when calling getImageWmf.');
        }

        // verify required parameter 'requestObj.pageHeight' is not null or undefined
        if (requestObj.pageHeight === null || requestObj.pageHeight === undefined) {
            throw new Error('Required parameter "requestObj.pageHeight" was null or undefined when calling getImageWmf.');
        }

        // verify required parameter 'requestObj.borderX' is not null or undefined
        if (requestObj.borderX === null || requestObj.borderX === undefined) {
            throw new Error('Required parameter "requestObj.borderX" was null or undefined when calling getImageWmf.');
        }

        // verify required parameter 'requestObj.borderY' is not null or undefined
        if (requestObj.borderY === null || requestObj.borderY === undefined) {
            throw new Error('Required parameter "requestObj.borderY" was null or undefined when calling getImageWmf.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bkColor", requestObj.bkColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageWidth", requestObj.pageWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageHeight", requestObj.pageHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderX", requestObj.borderX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderY", requestObj.borderY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Extract features from image without adding to search context.
     * @param requestObj contains request parameters
     */
    public async getSearchContextExtractImageFeatures(requestObj: model.GetSearchContextExtractImageFeaturesRequest): Promise<model.ImageFeatures> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSearchContextExtractImageFeatures.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/image2features"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling getSearchContextExtractImageFeatures.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling getSearchContextExtractImageFeatures.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "ImageFeatures");
        }
        return Promise.resolve(result);        
    }

    /**
     * Find images duplicates.
     * @param requestObj contains request parameters
     */
    public async getSearchContextFindDuplicates(requestObj: model.GetSearchContextFindDuplicatesRequest): Promise<model.ImageDuplicatesSet> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSearchContextFindDuplicates.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/findDuplicates"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling getSearchContextFindDuplicates.');
        }

        // verify required parameter 'requestObj.similarityThreshold' is not null or undefined
        if (requestObj.similarityThreshold === null || requestObj.similarityThreshold === undefined) {
            throw new Error('Required parameter "requestObj.similarityThreshold" was null or undefined when calling getSearchContextFindDuplicates.');
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
     * Find similar images.
     * @param requestObj contains request parameters
     */
    public async getSearchContextFindSimilar(requestObj: model.GetSearchContextFindSimilarRequest): Promise<model.SearchResultsSet> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSearchContextFindSimilar.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/findSimilar"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling getSearchContextFindSimilar.');
        }

        // verify required parameter 'requestObj.similarityThreshold' is not null or undefined
        if (requestObj.similarityThreshold === null || requestObj.similarityThreshold === undefined) {
            throw new Error('Required parameter "requestObj.similarityThreshold" was null or undefined when calling getSearchContextFindSimilar.');
        }

        // verify required parameter 'requestObj.maxCount' is not null or undefined
        if (requestObj.maxCount === null || requestObj.maxCount === undefined) {
            throw new Error('Required parameter "requestObj.maxCount" was null or undefined when calling getSearchContextFindSimilar.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "similarityThreshold", requestObj.similarityThreshold);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "maxCount", requestObj.maxCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "SearchResultsSet");
        }
        return Promise.resolve(result);        
    }

    /**
     * Get image from search context
     * @param requestObj contains request parameters
     */
    public async getSearchContextImage(requestObj: model.GetSearchContextImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSearchContextImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/image"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling getSearchContextImage.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling getSearchContextImage.');
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
     * Gets image features from search context.
     * @param requestObj contains request parameters
     */
    public async getSearchContextImageFeatures(requestObj: model.GetSearchContextImageFeaturesRequest): Promise<model.ImageFeatures> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSearchContextImageFeatures.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/features"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling getSearchContextImageFeatures.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling getSearchContextImageFeatures.');
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
     * Gets the search context status.
     * @param requestObj contains request parameters
     */
    public async getSearchContextStatus(requestObj: model.GetSearchContextStatusRequest): Promise<model.SearchContextStatus> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getSearchContextStatus.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/status"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling getSearchContextStatus.');
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
     * Update parameters of existing TIFF image accordingly to fax parameters.
     * @param requestObj contains request parameters
     */
    public async getTiffToFax(requestObj: model.GetTiffToFaxRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getTiffToFax.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/tiff/{name}/toFax"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling getTiffToFax.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
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
     * Create new search context.
     * @param requestObj contains request parameters
     */
    public async postCreateSearchContext(requestObj: model.PostCreateSearchContextRequest): Promise<model.SearchContextStatus> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCreateSearchContext.');
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
     * Update parameters of BMP image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageBmp(requestObj: model.PostImageBmpRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageBmp.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/bmp";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageBmp.');
        }

        // verify required parameter 'requestObj.bitsPerPixel' is not null or undefined
        if (requestObj.bitsPerPixel === null || requestObj.bitsPerPixel === undefined) {
            throw new Error('Required parameter "requestObj.bitsPerPixel" was null or undefined when calling postImageBmp.');
        }

        // verify required parameter 'requestObj.horizontalResolution' is not null or undefined
        if (requestObj.horizontalResolution === null || requestObj.horizontalResolution === undefined) {
            throw new Error('Required parameter "requestObj.horizontalResolution" was null or undefined when calling postImageBmp.');
        }

        // verify required parameter 'requestObj.verticalResolution' is not null or undefined
        if (requestObj.verticalResolution === null || requestObj.verticalResolution === undefined) {
            throw new Error('Required parameter "requestObj.verticalResolution" was null or undefined when calling postImageBmp.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bitsPerPixel", requestObj.bitsPerPixel);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "horizontalResolution", requestObj.horizontalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "verticalResolution", requestObj.verticalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Crop an image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageCrop(requestObj: model.PostImageCropRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageCrop.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/crop";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageCrop.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling postImageCrop.');
        }

        // verify required parameter 'requestObj.x' is not null or undefined
        if (requestObj.x === null || requestObj.x === undefined) {
            throw new Error('Required parameter "requestObj.x" was null or undefined when calling postImageCrop.');
        }

        // verify required parameter 'requestObj.y' is not null or undefined
        if (requestObj.y === null || requestObj.y === undefined) {
            throw new Error('Required parameter "requestObj.y" was null or undefined when calling postImageCrop.');
        }

        // verify required parameter 'requestObj.width' is not null or undefined
        if (requestObj.width === null || requestObj.width === undefined) {
            throw new Error('Required parameter "requestObj.width" was null or undefined when calling postImageCrop.');
        }

        // verify required parameter 'requestObj.height' is not null or undefined
        if (requestObj.height === null || requestObj.height === undefined) {
            throw new Error('Required parameter "requestObj.height" was null or undefined when calling postImageCrop.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "x", requestObj.x);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "y", requestObj.y);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "width", requestObj.width);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "height", requestObj.height);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Rasterize DICOM image to PNG using given parameters. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageDicom(requestObj: model.PostImageDicomRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageDicom.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/dicom";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageDicom.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Rasterize DNG image to PNG using given parameters. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageDng(requestObj: model.PostImageDngRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageDng.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/dng";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageDng.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Rasterize EMF image to PNG using given parameters. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageEmf(requestObj: model.PostImageEmfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageEmf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/emf";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageEmf.');
        }

        // verify required parameter 'requestObj.bkColor' is not null or undefined
        if (requestObj.bkColor === null || requestObj.bkColor === undefined) {
            throw new Error('Required parameter "requestObj.bkColor" was null or undefined when calling postImageEmf.');
        }

        // verify required parameter 'requestObj.pageWidth' is not null or undefined
        if (requestObj.pageWidth === null || requestObj.pageWidth === undefined) {
            throw new Error('Required parameter "requestObj.pageWidth" was null or undefined when calling postImageEmf.');
        }

        // verify required parameter 'requestObj.pageHeight' is not null or undefined
        if (requestObj.pageHeight === null || requestObj.pageHeight === undefined) {
            throw new Error('Required parameter "requestObj.pageHeight" was null or undefined when calling postImageEmf.');
        }

        // verify required parameter 'requestObj.borderX' is not null or undefined
        if (requestObj.borderX === null || requestObj.borderX === undefined) {
            throw new Error('Required parameter "requestObj.borderX" was null or undefined when calling postImageEmf.');
        }

        // verify required parameter 'requestObj.borderY' is not null or undefined
        if (requestObj.borderY === null || requestObj.borderY === undefined) {
            throw new Error('Required parameter "requestObj.borderY" was null or undefined when calling postImageEmf.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bkColor", requestObj.bkColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageWidth", requestObj.pageWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageHeight", requestObj.pageHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderX", requestObj.borderX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderY", requestObj.borderY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Get separate frame from existing TIFF image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageFrame(requestObj: model.PostImageFrameRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageFrame.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/frames/{frameId}"
            .replace("{" + "frameId" + "}", String(requestObj.frameId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageFrame.');
        }

        // verify required parameter 'requestObj.frameId' is not null or undefined
        if (requestObj.frameId === null || requestObj.frameId === undefined) {
            throw new Error('Required parameter "requestObj.frameId" was null or undefined when calling postImageFrame.');
        }
        
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
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Get separate frame properties of existing TIFF image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageFrameProperties(requestObj: model.PostImageFramePropertiesRequest): Promise<model.ImagingResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageFrameProperties.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/imaging/frames/{frameId}/properties"
            .replace("{" + "frameId" + "}", String(requestObj.frameId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageFrameProperties.');
        }

        // verify required parameter 'requestObj.frameId' is not null or undefined
        if (requestObj.frameId === null || requestObj.frameId === undefined) {
            throw new Error('Required parameter "requestObj.frameId" was null or undefined when calling postImageFrameProperties.');
        }
        
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "ImagingResponse");
        }
        return Promise.resolve(result);        
    }

    /**
     * Update parameters of GIF image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageGif(requestObj: model.PostImageGifRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageGif.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/gif";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageGif.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "backgroundColorIndex", requestObj.backgroundColorIndex);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "colorResolution", requestObj.colorResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "hasTrailer", requestObj.hasTrailer);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "interlaced", requestObj.interlaced);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isPaletteSorted", requestObj.isPaletteSorted);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pixelAspectRatio", requestObj.pixelAspectRatio);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of JPEG2000 image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageJpeg2000(requestObj: model.PostImageJpeg2000Request): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageJpeg2000.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/jpg2000";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageJpeg2000.');
        }

        // verify required parameter 'requestObj.comment' is not null or undefined
        if (requestObj.comment === null || requestObj.comment === undefined) {
            throw new Error('Required parameter "requestObj.comment" was null or undefined when calling postImageJpeg2000.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "comment", requestObj.comment);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "codec", requestObj.codec);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of JPEG image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageJpg(requestObj: model.PostImageJpgRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageJpg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/jpg";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageJpg.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "compressionType", requestObj.compressionType);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Rasterize ODG image to PNG using given parameters. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageOdg(requestObj: model.PostImageOdgRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageOdg.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/odg";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageOdg.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of PNG image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImagePng(requestObj: model.PostImagePngRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImagePng.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/png";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImagePng.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Get properties of an image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageProperties(requestObj: model.PostImagePropertiesRequest): Promise<model.ImagingResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageProperties.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/imaging/properties";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageProperties.');
        }
        
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "ImagingResponse");
        }
        return Promise.resolve(result);        
    }

    /**
     * Update parameters of PSD image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImagePsd(requestObj: model.PostImagePsdRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImagePsd.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/psd";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImagePsd.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "channelsCount", requestObj.channelsCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "compressionMethod", requestObj.compressionMethod);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Resize an image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageResize(requestObj: model.PostImageResizeRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageResize.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/resize";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageResize.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling postImageResize.');
        }

        // verify required parameter 'requestObj.newWidth' is not null or undefined
        if (requestObj.newWidth === null || requestObj.newWidth === undefined) {
            throw new Error('Required parameter "requestObj.newWidth" was null or undefined when calling postImageResize.');
        }

        // verify required parameter 'requestObj.newHeight' is not null or undefined
        if (requestObj.newHeight === null || requestObj.newHeight === undefined) {
            throw new Error('Required parameter "requestObj.newHeight" was null or undefined when calling postImageResize.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newWidth", requestObj.newWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newHeight", requestObj.newHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Rotate and/or flip an image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageRotateFlip(requestObj: model.PostImageRotateFlipRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageRotateFlip.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/rotateflip";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageRotateFlip.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling postImageRotateFlip.');
        }

        // verify required parameter 'requestObj.method' is not null or undefined
        if (requestObj.method === null || requestObj.method === undefined) {
            throw new Error('Required parameter "requestObj.method" was null or undefined when calling postImageRotateFlip.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "method", requestObj.method);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Export existing image to another format. Image is passed in a request stream.             
     * @param requestObj contains request parameters
     */
    public async postImageSaveAs(requestObj: model.PostImageSaveAsRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageSaveAs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/saveAs";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageSaveAs.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling postImageSaveAs.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of TIFF image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageTiff(requestObj: model.PostImageTiffRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageTiff.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/tiff";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageTiff.');
        }

        // verify required parameter 'requestObj.compression' is not null or undefined
        if (requestObj.compression === null || requestObj.compression === undefined) {
            throw new Error('Required parameter "requestObj.compression" was null or undefined when calling postImageTiff.');
        }

        // verify required parameter 'requestObj.resolutionUnit' is not null or undefined
        if (requestObj.resolutionUnit === null || requestObj.resolutionUnit === undefined) {
            throw new Error('Required parameter "requestObj.resolutionUnit" was null or undefined when calling postImageTiff.');
        }

        // verify required parameter 'requestObj.bitDepth' is not null or undefined
        if (requestObj.bitDepth === null || requestObj.bitDepth === undefined) {
            throw new Error('Required parameter "requestObj.bitDepth" was null or undefined when calling postImageTiff.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "compression", requestObj.compression);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "resolutionUnit", requestObj.resolutionUnit);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bitDepth", requestObj.bitDepth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "horizontalResolution", requestObj.horizontalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "verticalResolution", requestObj.verticalResolution);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Perform scaling, cropping and flipping of an image in a single request. Image is passed in a request stream.             
     * @param requestObj contains request parameters
     */
    public async postImageUpdate(requestObj: model.PostImageUpdateRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageUpdate.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/updateImage";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageUpdate.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling postImageUpdate.');
        }

        // verify required parameter 'requestObj.newWidth' is not null or undefined
        if (requestObj.newWidth === null || requestObj.newWidth === undefined) {
            throw new Error('Required parameter "requestObj.newWidth" was null or undefined when calling postImageUpdate.');
        }

        // verify required parameter 'requestObj.newHeight' is not null or undefined
        if (requestObj.newHeight === null || requestObj.newHeight === undefined) {
            throw new Error('Required parameter "requestObj.newHeight" was null or undefined when calling postImageUpdate.');
        }

        // verify required parameter 'requestObj.x' is not null or undefined
        if (requestObj.x === null || requestObj.x === undefined) {
            throw new Error('Required parameter "requestObj.x" was null or undefined when calling postImageUpdate.');
        }

        // verify required parameter 'requestObj.y' is not null or undefined
        if (requestObj.y === null || requestObj.y === undefined) {
            throw new Error('Required parameter "requestObj.y" was null or undefined when calling postImageUpdate.');
        }

        // verify required parameter 'requestObj.rectWidth' is not null or undefined
        if (requestObj.rectWidth === null || requestObj.rectWidth === undefined) {
            throw new Error('Required parameter "requestObj.rectWidth" was null or undefined when calling postImageUpdate.');
        }

        // verify required parameter 'requestObj.rectHeight' is not null or undefined
        if (requestObj.rectHeight === null || requestObj.rectHeight === undefined) {
            throw new Error('Required parameter "requestObj.rectHeight" was null or undefined when calling postImageUpdate.');
        }

        // verify required parameter 'requestObj.rotateFlipMethod' is not null or undefined
        if (requestObj.rotateFlipMethod === null || requestObj.rotateFlipMethod === undefined) {
            throw new Error('Required parameter "requestObj.rotateFlipMethod" was null or undefined when calling postImageUpdate.');
        }
        
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
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update parameters of WEBP image. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageWebP(requestObj: model.PostImageWebPRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageWebP.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/webp";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageWebP.');
        }

        // verify required parameter 'requestObj.lossLess' is not null or undefined
        if (requestObj.lossLess === null || requestObj.lossLess === undefined) {
            throw new Error('Required parameter "requestObj.lossLess" was null or undefined when calling postImageWebP.');
        }

        // verify required parameter 'requestObj.quality' is not null or undefined
        if (requestObj.quality === null || requestObj.quality === undefined) {
            throw new Error('Required parameter "requestObj.quality" was null or undefined when calling postImageWebP.');
        }

        // verify required parameter 'requestObj.animLoopCount' is not null or undefined
        if (requestObj.animLoopCount === null || requestObj.animLoopCount === undefined) {
            throw new Error('Required parameter "requestObj.animLoopCount" was null or undefined when calling postImageWebP.');
        }

        // verify required parameter 'requestObj.animBackgroundColor' is not null or undefined
        if (requestObj.animBackgroundColor === null || requestObj.animBackgroundColor === undefined) {
            throw new Error('Required parameter "requestObj.animBackgroundColor" was null or undefined when calling postImageWebP.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "lossLess", requestObj.lossLess);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "quality", requestObj.quality);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "animLoopCount", requestObj.animLoopCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "animBackgroundColor", requestObj.animBackgroundColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Rasterize WMF image to PNG using given parameters. Image is passed in a request stream.
     * @param requestObj contains request parameters
     */
    public async postImageWmf(requestObj: model.PostImageWmfRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postImageWmf.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/wmf";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postImageWmf.');
        }

        // verify required parameter 'requestObj.bkColor' is not null or undefined
        if (requestObj.bkColor === null || requestObj.bkColor === undefined) {
            throw new Error('Required parameter "requestObj.bkColor" was null or undefined when calling postImageWmf.');
        }

        // verify required parameter 'requestObj.pageWidth' is not null or undefined
        if (requestObj.pageWidth === null || requestObj.pageWidth === undefined) {
            throw new Error('Required parameter "requestObj.pageWidth" was null or undefined when calling postImageWmf.');
        }

        // verify required parameter 'requestObj.pageHeight' is not null or undefined
        if (requestObj.pageHeight === null || requestObj.pageHeight === undefined) {
            throw new Error('Required parameter "requestObj.pageHeight" was null or undefined when calling postImageWmf.');
        }

        // verify required parameter 'requestObj.borderX' is not null or undefined
        if (requestObj.borderX === null || requestObj.borderX === undefined) {
            throw new Error('Required parameter "requestObj.borderX" was null or undefined when calling postImageWmf.');
        }

        // verify required parameter 'requestObj.borderY' is not null or undefined
        if (requestObj.borderY === null || requestObj.borderY === undefined) {
            throw new Error('Required parameter "requestObj.borderY" was null or undefined when calling postImageWmf.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "bkColor", requestObj.bkColor);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageWidth", requestObj.pageWidth);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "pageHeight", requestObj.pageHeight);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderX", requestObj.borderX);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "borderY", requestObj.borderY);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "fromScratch", requestObj.fromScratch);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "outPath", requestObj.outPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Add image and images features to search context.
     * @param requestObj contains request parameters
     */
    public async postSearchContextAddImage(requestObj: model.PostSearchContextAddImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSearchContextAddImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/image"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling postSearchContextAddImage.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling postSearchContextAddImage.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Add tag and reference image to search context.
     * @param requestObj contains request parameters
     */
    public async postSearchContextAddTag(requestObj: model.PostSearchContextAddTagRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSearchContextAddTag.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/addTag"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.imageData' is not null or undefined
        if (requestObj.imageData === null || requestObj.imageData === undefined) {
            throw new Error('Required parameter "requestObj.imageData" was null or undefined when calling postSearchContextAddTag.');
        }

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling postSearchContextAddTag.');
        }

        // verify required parameter 'requestObj.tagName' is not null or undefined
        if (requestObj.tagName === null || requestObj.tagName === undefined) {
            throw new Error('Required parameter "requestObj.tagName" was null or undefined when calling postSearchContextAddTag.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "tagName", requestObj.tagName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Compare two images.
     * @param requestObj contains request parameters
     */
    public async postSearchContextCompareImages(requestObj: model.PostSearchContextCompareImagesRequest): Promise<model.SearchResultsSet> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSearchContextCompareImages.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/compare"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling postSearchContextCompareImages.');
        }

        // verify required parameter 'requestObj.imageId1' is not null or undefined
        if (requestObj.imageId1 === null || requestObj.imageId1 === undefined) {
            throw new Error('Required parameter "requestObj.imageId1" was null or undefined when calling postSearchContextCompareImages.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId1", requestObj.imageId1);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId2", requestObj.imageId2);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "SearchResultsSet");
        }
        return Promise.resolve(result);        
    }

    /**
     * Extract images features and add them to search context
     * @param requestObj contains request parameters
     */
    public async postSearchContextExtractImageFeatures(requestObj: model.PostSearchContextExtractImageFeaturesRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSearchContextExtractImageFeatures.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/features"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling postSearchContextExtractImageFeatures.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imagesFolder", requestObj.imagesFolder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Find images by tag.
     * @param requestObj contains request parameters
     */
    public async postSearchContextFindByTags(requestObj: model.PostSearchContextFindByTagsRequest): Promise<model.SearchResultsSet> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSearchContextFindByTags.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/findByTags"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.tags' is not null or undefined
        if (requestObj.tags === null || requestObj.tags === undefined) {
            throw new Error('Required parameter "requestObj.tags" was null or undefined when calling postSearchContextFindByTags.');
        }

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling postSearchContextFindByTags.');
        }

        // verify required parameter 'requestObj.similarityThreshold' is not null or undefined
        if (requestObj.similarityThreshold === null || requestObj.similarityThreshold === undefined) {
            throw new Error('Required parameter "requestObj.similarityThreshold" was null or undefined when calling postSearchContextFindByTags.');
        }

        // verify required parameter 'requestObj.maxCount' is not null or undefined
        if (requestObj.maxCount === null || requestObj.maxCount === undefined) {
            throw new Error('Required parameter "requestObj.maxCount" was null or undefined when calling postSearchContextFindByTags.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "similarityThreshold", requestObj.similarityThreshold);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "maxCount", requestObj.maxCount);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            body: requestObj.tags,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "SearchResultsSet");
        }
        return Promise.resolve(result);        
    }

    /**
     * Appends existing TIFF image to another existing TIFF image (i.e. merges TIFF images).
     * @param requestObj contains request parameters
     */
    public async postTiffAppend(requestObj: model.PostTiffAppendRequest): Promise<model.SaaSposeResponse> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postTiffAppend.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/tiff/{name}/appendTiff"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postTiffAppend.');
        }

        // verify required parameter 'requestObj.appendFile' is not null or undefined
        if (requestObj.appendFile === null || requestObj.appendFile === undefined) {
            throw new Error('Required parameter "requestObj.appendFile" was null or undefined when calling postTiffAppend.');
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
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        
        if (response.body) {
            result = ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        }
        return Promise.resolve(result);        
    }

    /**
     * Update image and images features in search context.
     * @param requestObj contains request parameters
     */
    public async putSearchContextImage(requestObj: model.PutSearchContextImageRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSearchContextImage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/image"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling putSearchContextImage.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling putSearchContextImage.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

    /**
     * Update images features in search context.
     * @param requestObj contains request parameters
     */
    public async putSearchContextImageFeatures(requestObj: model.PutSearchContextImageFeaturesRequest): Promise<Buffer> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling putSearchContextImageFeatures.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/imaging/ai/imageSearch/{searchContextId}/features"
            .replace("{" + "searchContextId" + "}", String(requestObj.searchContextId));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.searchContextId' is not null or undefined
        if (requestObj.searchContextId === null || requestObj.searchContextId === undefined) {
            throw new Error('Required parameter "requestObj.searchContextId" was null or undefined when calling putSearchContextImageFeatures.');
        }

        // verify required parameter 'requestObj.imageId' is not null or undefined
        if (requestObj.imageId === null || requestObj.imageId === undefined) {
            throw new Error('Required parameter "requestObj.imageId" was null or undefined when calling putSearchContextImageFeatures.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "imageId", requestObj.imageId);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,
            body: requestObj.imageData,
        };
         
        const response = await invokeApiMethod(requestOptions, this.configuration);
        let result = null;
        result = response.body;

        return Promise.resolve(result);        
    }

}
