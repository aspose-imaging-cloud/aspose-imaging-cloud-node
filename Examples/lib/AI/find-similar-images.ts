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

import {ImagingAiBase} from "./imaging-ai-base";
import {
    CreateImageTagRequest,
    FindImagesByTagsRequest,
    FindSimilarImagesRequest,
    ImagingApi
} from "@asposecloud/aspose-imaging-cloud";
import * as fs from "fs";
import * as path from "path";

export class FindSimilarImages extends ImagingAiBase {

    private readonly ImageToFind: string = '4.jpg';

    private readonly ImageToFindByTag: string = 'ComparingImageSimilar75.jpg';

    private readonly ImagesPath: string = 'FindSimilar';

    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
    }

    /**
     * Prepares the search context.
     * @constructor
     */
    public async PrepareSearchContext() {
        await this.CreateSearchContext();

        const images = [
            '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
            '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'
        ];
        for (const imageName of images) {
            await this.UploadImageToCloud(imageName, this.ImagesPath);
        }

        await this.CreateImageFeatures(this.ImagesPath, true);

        console.log();
    }

    /**
     * Finds the similar images.
     * @constructor
     */
    public async FindImagesSimilar() {
        console.log('Finds the similar images');

        const findImageId = this.ImagesPath + '/' + this.ImageToFind;
        const similarityThreshold = 3; // The similarity threshold
        const maxCount = 3; // The maximum count
        const folder = this.CloudPath; // Path to input files
        const storage = undefined; // We are using default Cloud Storage

        const request = new FindSimilarImagesRequest({
            searchContextId: this.SearchContextId,
            similarityThreshold,
            maxCount,
            imageId: findImageId,
            folder,
            storage
        });

        console.log(`Call FindSimilarImages with params: similarity threshold: ${similarityThreshold}, max count: ${maxCount}, image id: ${findImageId}`);

        const searchResults = await this.ImagingApi.findSimilarImages(request);
        console.log(`Results Count: ${searchResults.results.length}`);
        console.log();
    }

    /**
     * Finds the images by tag.
     * @constructor
     */
    public async FindImagesByTag() {
        console.log('Finds the images by tag');

        const fileName = this.ImageToFindByTag;
        const tagName = 'ImageTag';
        const similarityThreshold = 60;
        const maxCount = 5;
        const folder = undefined; // Path to input files
        const storage = undefined; // We are using default Cloud Storage

        const inputImage = fs.readFileSync(path.resolve(this.ExampleImagesFolder, fileName));
        const createTagRequest = new CreateImageTagRequest({
            imageData: inputImage,
            searchContextId: this.SearchContextId,
            tagName,
            folder,
            storage
        });

        console.log(`Call CreateImageTag with params: tag name: ${tagName}`);

        await this.ImagingApi.createImageTag(createTagRequest);

        const tags = JSON.stringify([tagName]);
        const findRequest = new FindImagesByTagsRequest({
            tags,
            searchContextId: this.SearchContextId,
            similarityThreshold,
            maxCount,
            folder,
            storage
        });

        console.log(`Call FindImagesByTags with params: similarity threshold: ${similarityThreshold}, max count: ${maxCount}, tags: ${tags}`);

        const findResponse = await this.ImagingApi.findImagesByTags(findRequest);

        for (const findResult of findResponse.results) {
            console.log(`Image name: ${findResult.imageId}, similarity: ${findResult.similarity}`);
        }
        console.log();
    }
}
