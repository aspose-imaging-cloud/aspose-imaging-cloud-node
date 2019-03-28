/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) Aspose Pty Ltd. All rights reserved.
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

class CompareImagesTests extends TestImagingAIBase {
        private readonly ComparableImage: string = "ComparableImage.jpg";
        private readonly ComparingImageSimilarLess15: string = "ComparingImageSimilar15.jpg";
        private readonly ComparingImageSimilarMore75: string = "ComparingImageSimilar75.jpg";

        public async compareTwoImagesInSearchContextTest() {
            await this.runTestWithLogging("compareTwoImagesInSearchContextTest",
                async () => {
                    const image1: string = this.getStoragePath(this.ComparableImage);
                    await this.addImageFeaturesToSearchContext(image1);

                    const image2: string = this.getStoragePath(this.ComparingImageSimilarMore75);
                    await this.addImageFeaturesToSearchContext(image2);

                    const response = await this.imagingApi.postSearchContextCompareImages(
                        new imaging.PostSearchContextCompareImagesRequest({ 
                            searchContextId: this.SearchContextId, imageId1: image1, imageId2: image2, storage: this.TestStorage} ));

                    expect(1).toEqual(response.results.length);
                    expect(response.results[0].similarity).toBeGreaterThanOrEqual(70);
                });
        }

        public async compareLoadedImageToImageInSearchContextTest() {
            await this.runTestWithLogging("compareLoadedImageToImageInSearchContextTest",
                  async () => {
                      const image: string = this.getStoragePath(this.ComparableImage);
                      await this.addImageFeaturesToSearchContext(image);

                      const storagePath: string = this.OriginalDataFolder + "/" + this.ComparingImageSimilarLess15;
                      const imageStream = await this.imagingApi.downloadFile(
                        new imaging.DownloadFileRequest({ path: storagePath, storageName: this.TestStorage}));
                      expect(imageStream).toBeTruthy();

                      const response = await this.imagingApi.postSearchContextCompareImages(
                          new imaging.PostSearchContextCompareImagesRequest({ 
                              searchContextId: this.SearchContextId, imageId1: image, imageData: imageStream, storage: this.TestStorage} ));

                      expect(1).toEqual(response.results.length);
                      expect(response.results[0].similarity).toBeLessThanOrEqual(15);
                  });
        }
}

const testClass: CompareImagesTests = new CompareImagesTests();

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

test(`compareLoadedImageToImageInSearchContextTest`, async () => {
    await testClass.compareLoadedImageToImageInSearchContextTest();
});

test(`compareTwoImagesInSearchContextTest`, async () => {
    await testClass.compareTwoImagesInSearchContextTest();
});
