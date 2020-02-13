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


import {
    CreateImageFeaturesRequest,
    CreateImageSearchRequest,
    DeleteImageSearchRequest,
    GetImageSearchStatusRequest,
    ImagingApi,
    UploadFileRequest
} from "@asposecloud/aspose-imaging-cloud";
import * as path from "path";
import * as fs from "fs";

/**
 * Base class for AI operations with images
 */
export class ImagingAiBase {

    /**
     * The example images folder path.
     */
    protected readonly ExampleImagesFolder: string = path.resolve(__dirname, '..', '..', "Images", 'AI');

    /**
     * The cloud path.
     */
    protected readonly CloudPath: string = path.resolve('Examples', 'AI');
    /**
     * The search context ID
     */
    protected SearchContextId: string;
    private readonly _ImagingApi: ImagingApi;

    constructor(imagingApi: ImagingApi) {
        this._ImagingApi = imagingApi;
    }

    /**
     * The example images folder path
     * @constructor
     */
    protected static get ExampleImagesFolder() {
        return path.resolve(__dirname, '..', '..', '..', 'Images', 'AI');
    }

    /**
     * Gets the imaging API.
     * @constructor
     */
    protected get ImagingApi(): ImagingApi {
        return this._ImagingApi;
    }

    /**
     * Deletes the image search context
     * @constructor
     */
    public DeleteSearchContext() {
        const folder = null; // File will be saved at the root of the storage
        const storage = undefined; // We are using default Cloud Storage

        const request = new DeleteImageSearchRequest({searchContextId: this.SearchContextId, folder, storage});
        this.ImagingApi.deleteImageSearch(request).then(r => r);

        console.log(`Deleted new Search context with SearchContextId: ${this.SearchContextId}`);
    }

    /**
     * Creates the image search
     * @constructor
     */
    protected async CreateSearchContext() {
        const detector = 'akaze';
        const matchingAlgorithm = 'randomBinaryTree';
        const folder = null; // File will be saved at the root of the storage
        const storage = undefined; // We are using default Cloud Storage

        const request = new CreateImageSearchRequest({detector, matchingAlgorithm, folder, storage});
        const status = await this.ImagingApi.createImageSearch(request);

        this.SearchContextId = status.id;
    }

    /**
     * Extract images features and add them to search context.
     * @param sourcePath The storage source path.
     * @param isFolder If set to true - is folder.
     * @constructor
     */
    protected async CreateImageFeatures(sourcePath: string, isFolder: boolean) {
        const folder = null; // File will be saved at the root of the storage
        const storage = undefined; // We are using default Cloud Storage

        const request = isFolder ? new CreateImageFeaturesRequest({
            searchContextId: this.SearchContextId,
            imagesFolder: path.resolve(this.CloudPath, sourcePath),
            folder,
            storage
        }) : new CreateImageFeaturesRequest({
            searchContextId: this.SearchContextId,
            imageId: path.resolve(this.CloudPath, sourcePath),
            folder,
            storage
        });

        await this.ImagingApi.createImageFeatures(request);

        if (isFolder) {
            console.log('Creating Search context image features ...');

            await this.WaitIdle(this.SearchContextId);
        } else {
            console.log(`Created Search context image features for ${sourcePath}`);
        }
    }

    /**
     * Uploads the image to cloud.
     * @param imageName Name of the image.
     * @param subFolder Name of the subfolder.
     * @constructor
     */
    protected async UploadImageToCloud(imageName: string, subFolder: string = null) {
        const folder = subFolder != null ? path.resolve(this.ExampleImagesFolder, subFolder) : this.ExampleImagesFolder;

        const localInputImage = fs.readFileSync(path.resolve(folder, imageName));
        const request = new UploadFileRequest({path: path.resolve(this.CloudPath, imageName), file: localInputImage});
        await this.ImagingApi.uploadFile(request);
        console.log(`Image ${imageName} was uploaded to cloud storage`);
    }

    /**
     * Waits the idle.
     * @param searchContextId The search context identifier.
     * @constructor
     */
    protected async WaitIdle(searchContextId) {
        console.log('Waiting Search context Idle ...');

        while ((await this.ImagingApi.getImageSearchStatus(new GetImageSearchStatusRequest({searchContextId}))).id != 'Idle')
            await new Promise((resolve) => setTimeout(resolve, 100));
    }
}
