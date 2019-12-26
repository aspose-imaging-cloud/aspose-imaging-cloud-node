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
import {CompareImagesRequest, ImagingApi} from "@asposecloud/aspose-imaging-cloud";
import * as path from "path";
import * as fs from "fs";

/**
 * Compare images example.
 */
export class CompareImages extends ImagingAiBase {

    private readonly ComparableImage: string = 'ComparableImage.jpg';

    private readonly ComparingImageSimilarMore75: string = 'ComparingImageSimilar75.jpg';

    private readonly ComparingImageSimilarLess15: string = 'ComparingImageSimilar75.jpg';

    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
    }

    /**
     * Prepares the search context.
     * @constructor
     */
    public async PrepareSearchContext() {
        await this.CreateSearchContext();

        const images = [this.ComparableImage, this.ComparingImageSimilarMore75];
        for (const imageName of images) {
            this.UploadImageToCloud(imageName);
        }

        this.CreateImageFeatures(this.ComparableImage, false);
        this.CreateImageFeatures(this.ComparingImageSimilarMore75, false);

        console.log();
    }

    /**
     * Compares the two images in cloud.
     * @constructor
     */
    public async CompareTwoImagesInCloud() {
        console.log('Compares the two images in cloud storage:');

        // Compare two images
        const folder = this.CloudPath; // Folder with image to process
        const storage = undefined; // We are using default Cloud Storage

        const request = new CompareImagesRequest({
            searchContextId: this.SearchContextId,
            imageId1: this.ComparableImage,
            imageId2: this.ComparingImageSimilarMore75,
            folder,
            storage
        });

        console.log(`Call CompareImages with params: image1:${this.ComparableImage}, image2:${this.ComparingImageSimilarMore75}`);

        const searchResults = await this.ImagingApi.compareImages(request);

        const similarity = searchResults.results[0].similarity;
        console.log(`Images Similarity: ${similarity}`);

        console.log();
    }

    /**
     * Compares the loaded image to image in cloud.
     * @constructor
     */
    public async CompareLoadedImageToImageInCloud() {
        console.log('Compares the loaded image to image in cloud storage:');

        const inputImage = fs.readFileSync(path.resolve(this.ExampleImagesFolder, this.ComparingImageSimilarLess15));

        const request = new CompareImagesRequest({
            searchContextId: this.SearchContextId,
            imageId1: this.ComparableImage,
            imageData: inputImage
        });

        console.log(`Call CompareImages with params: image:${this.ComparableImage}`);

        const searchResults = await this.ImagingApi.compareImages(request);

        const similarity = searchResults.results[0].similarity;
        console.log(`Images Similarity: ${similarity}`);

        console.log();
    }
}
