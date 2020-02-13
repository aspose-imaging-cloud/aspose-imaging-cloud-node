import {ImagingAiBase} from "./imaging-ai-base";
import {
    CreateWebSiteImageFeaturesRequest,
    GetImageFeaturesRequest,
    ImagingApi
} from "@asposecloud/aspose-imaging-cloud";

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

export class SearchImages extends ImagingAiBase {

    constructor(imagingApi: ImagingApi) {
        super(imagingApi);
    }

    /**
     * Prepares the search context.
     * @constructor
     */
    public async PrepareSearchContext() {
        await this.CreateSearchContext();
    }

    /**
     * Searches for images from a web source
     * @constructor
     */
    public async SearchImageFromWebSource() {
        console.log('Searches for images from a web source:');

        const folder = this.CloudPath; // Path to input files
        const storage = undefined; // We are using default Cloud Storage

        const imageSourceUrl = encodeURI("https://www.f1news.ru/interview/hamilton/140909.shtml");
        await this.ImagingApi.createWebSiteImageFeatures(new CreateWebSiteImageFeaturesRequest({
            searchContextId: this.SearchContextId,
            imagesSource: imageSourceUrl,
            folder,
            storage
        }));

        await this.WaitIdle(this.SearchContextId);

        const imageUrl = encodeURI("https://cdn.f1ne.ws/userfiles/hamilton/140909.jpg");
        const response = await this.ImagingApi.getImageFeatures(new GetImageFeaturesRequest({
            searchContextId: this.SearchContextId, imageId: imageUrl, folder, storage
        }));

        console.log('Image features found: ' + response.featuresCount);
    }
}
