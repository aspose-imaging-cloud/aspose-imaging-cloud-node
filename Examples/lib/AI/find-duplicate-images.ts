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
import {FindImageDuplicatesRequest, ImagingApi} from "@asposecloud/aspose-imaging-cloud";

export class FindDuplicateImages extends ImagingAiBase {

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

        const images = [this.ComparableImage, this.ComparingImageSimilarLess15, this.ComparingImageSimilarMore75];
        for (const imageName of images) {
            await this.UploadImageToCloud(imageName);
        }

        await this.CreateImageFeatures(this.ComparableImage, false);
        await this.CreateImageFeatures(this.ComparingImageSimilarLess15, false);
        await this.CreateImageFeatures(this.ComparingImageSimilarMore75, false);

        console.log();
    }

    /**
     * Finds the image duplicates.
     * @constructor
     */
    public async FindImageDuplicates() {
        console.log('Finds the image duplicates');

        const similarityThreshold = 70;
        const folder = this.CloudPath; // Path to input files
        const storage = undefined; // We are using default Cloud Storage

        const request = new FindImageDuplicatesRequest({
            searchContextId: this.SearchContextId,
            similarityThreshold,
            folder,
            storage
        });

        console.log(`Call FindImageDuplicates with params: similarity threshold: ${similarityThreshold}`);

        const imageDuplicates = await this.ImagingApi.findImageDuplicates(request);
        console.log(`Duplicates Count: ${imageDuplicates.duplicates.length}`)
    }
}
