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

import * as imaging from "../../../lib/api";
import { ApiTester } from "../../base/api-tester";
import { TestImagingAIBase } from "./test-imaging-ai-base";

class FindImagesTests extends TestImagingAIBase {
        private readonly ImageToFind: string = "4.jpg";
        private readonly ImageToFindByTag: string = "ComparingImageSimilar75.jpg";

        public async findSimilarImagesTest() {
            await this.runTestWithLogging("addImageFeaturesToSearchContext",
                async () => {
                    await this.addImageFeaturesToSearchContext(`${this.OriginalDataFolder}/FindSimilar`, true);
                    const findImageId: string = `${this.OriginalDataFolder}/FindSimilar/${this.ImageToFind}`;
                    const response = await this.imagingApi.getSearchContextFindSimilar(
                        new imaging.GetSearchContextFindSimilarRequest({ searchContextId: this.SearchContextId, similarityThreshold: 3, maxCount: 3, 
                            imageId: findImageId, storage: this.TestStorage }));
                    expect(response.results.length).toBeGreaterThanOrEqual(1);
                });
        }

        public async findSimilarImagesByTagTest() {
            await this.runTestWithLogging("findSimilarImagesByTagTest",
                async () => {
                    await this.addImageFeaturesToSearchContext(`${this.OriginalDataFolder}/FindSimilar`, true);
                    const tag = "TestTag";
                    const storagePath: string = this.OriginalDataFolder + "/" + this.ImageToFindByTag;
                    const tagImageStream: Buffer = await this.imagingApi.downloadFile(
                        new imaging.DownloadFileRequest({ path: storagePath, storageName: this.TestStorage}));
                    expect(tagImageStream).toBeTruthy();
                    await this.imagingApi.postSearchContextAddTag(
                        new imaging.PostSearchContextAddTagRequest({ imageData: tagImageStream, searchContextId: this.SearchContextId, 
                            tagName: tag, storage: this.TestStorage }));
                    const tags = JSON.stringify([ tag ]);
                    const response = await this.imagingApi.postSearchContextFindByTags(
                        new imaging.PostSearchContextFindByTagsRequest({ tags, searchContextId: this.SearchContextId, similarityThreshold: 60, 
                            maxCount: 5, storage: this.TestStorage }));
                    expect(1).toEqual(response.results.length);
                    expect(response.results[0].imageId.includes("2.jpg")).toBeTruthy();
                });
        }
}

const testClass: FindImagesTests = new FindImagesTests();

beforeEach(async () => {
    jest.setTimeout(ApiTester.DefaultTimeout);
    await testClass.beforeEach();
});

beforeAll(async () =>  {
    await testClass.beforeAll();
});

afterAll(async () =>  {
    await testClass.afterAll();
});

afterEach(async () =>  {
    await testClass.afterEach();
});

test(`findSimilarImagesTest`, async () => {
    await testClass.findSimilarImagesTest();
});

test(`findSimilarImagesByTagTest`, async () => {
    await testClass.findSimilarImagesByTagTest();
});
