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

import * as imaging from "../../../lib/api";
import { ApiTester } from "../../base/api-tester";
import { TestImagingAIBase } from "./test-imaging-ai-base";

class SearchContextTests extends TestImagingAIBase {
        private readonly SmallTestImage: string = "ComparableImage.jpg";
        private readonly TestImage: string = "ComparingImageSimilar15.jpg";

        public async createSearchContextTest() {
            this.runTestWithLogging("createSearchContextTest",
                async () => {
                    try {
                        expect(this.SearchContextId).toBeTruthy();
                        return Promise.resolve();
                    } catch (error) {
                        return Promise.reject(error);
                    }
                });
        }

        public async deleteImageSearchTest() {
            await this.runTestWithLogging("deleteImageSearchTest",
                async () => {
                    await this.deleteImageSearch(this.SearchContextId);

                    let caught: boolean;
                    try {
                        await this.imagingApi.getImageSearchStatus(
                            new imaging.GetImageSearchStatusRequest({ searchContextId: this.SearchContextId, storage: this.TestStorage }));
                    } catch (error) {
                        expect(error instanceof imaging.ApiError).toBeTruthy();
                        caught = true;
                    }

                    expect(caught).toBeTruthy();
                });
        }

        public async addImageTest() {
            await this.runTestWithLogging("addImageTest",
                async () => {
                    await this.addImage(this.TestImage);
                });
        }

        public async deleteImageTest() {
            await this.runTestWithLogging("deleteImageTest",
                async () => {
                    const image = this.TestImage;
                    await this.addImage(image);

                    const destServerPath = `${this.TempFolder}/${image}`;

                    await this.imagingApi.deleteSearchImage(
                        new imaging.DeleteSearchImageRequest({ searchContextId: this.SearchContextId, imageId: destServerPath, storage: this.TestStorage }));

                    let caught: boolean;
                    try {
                        await this.imagingApi.getSearchImage(
                            new imaging.GetSearchImageRequest({ searchContextId: this.SearchContextId, imageId: destServerPath, storage: this.TestStorage }));
                    } catch (error) {
                        expect(error instanceof imaging.ApiError).toBeTruthy();
                        caught = true;
                    }

                    expect(caught).toBeTruthy();
                });
        }

        public async getImageTest() {
            await this.runTestWithLogging("getImageTest",
                async () => {
                    const image = this.TestImage;
                    await this.addImage(image);
                    const responseStream = await this.getImage(image);
                    expect(responseStream).toBeTruthy();
                    expect(responseStream.length).toBeGreaterThan(50000);
                });
        }

        public async updateImageTest() {
            await this.runTestWithLogging("updateImageTest",
                async () => {
                    let image = this.TestImage;
                    await this.addImage(image);
                    let responseStream = await this.getImage(image);
                    expect(responseStream).toBeTruthy();
                    expect(responseStream.length).toBeGreaterThan(50000);

                    image = this.SmallTestImage;
                    const destServerPath = `${this.TempFolder}/${image}`;

                    const storagePath = this.OriginalDataFolder + "/" + image;
                    const imageStream = await this.imagingApi.downloadFile(
                        new imaging.DownloadFileRequest({ path: storagePath, storageName: this.TestStorage}));
                    expect(imageStream).toBeTruthy();

                    await this.imagingApi.updateSearchImage(
                        new imaging.UpdateSearchImageRequest({ 
                            searchContextId: this.SearchContextId, imageId: destServerPath, imageData: imageStream, storage: this.TestStorage }));

                    responseStream = await this.getImage(image);
                    expect(responseStream).toBeTruthy();
                    expect(responseStream.length).toBeLessThan(40000);
                });
        }

        public async extractImageFeaturesTest() {
            await this.runTestWithLogging("extractImageFeaturesTest",
                async () => {
                    const image = this.TestImage;
                    await this.addImage(image);
                    const destServerPath = `${this.TempFolder}/${image}`;
                    const response = await this.imagingApi.extractImageFeatures(
                            new imaging.ExtractImageFeaturesRequest({ 
                                searchContextId: this.SearchContextId, imageId: destServerPath, storage: this.TestStorage }));
                    expect(response.imageId.includes(image)).toBeTruthy();
                    expect(response.features).toBeTruthy();
                    expect(response.features.length).toBeGreaterThan(0);
                });
        }

        public async extractAndAddImageFeaturesTest() {
            await this.runTestWithLogging("extractAndAddImageFeaturesTest",
                async () => {
                    await this.addImageFeatures(this.TestImage);
                });
        }

        public async extractAndAddImageFeaturesFromFolderTest() {
            await this.runTestWithLogging("extractAndAddImageFeaturesFromFolderTest",
                async () => {
                    await this.imagingApi.createImageFeatures(
                        new imaging.CreateImageFeaturesRequest({
                            searchContextId: this.SearchContextId, imagesFolder: `${this.OriginalDataFolder}/FindSimilar`, storage: this.TestStorage }));

                    await this.waitSearchContextIdle();

                    const response = await this.imagingApi.getImageFeatures(
                        new imaging.GetImageFeaturesRequest({
                            searchContextId: this.SearchContextId, imageId: `${this.OriginalDataFolder}/FindSimilar/3.jpg`, storage: this.TestStorage }));

                    expect(response.imageId.includes("3.jp")).toBeTruthy();
                    expect(response.features).toBeTruthy();
                    expect(response.features.length).toBeGreaterThan(0);
                });
        }

        public async getImageFeaturesTest() {
            await this.runTestWithLogging("getImageFeaturesTest",
                async () => {
                    await this.addImageFeatures(this.TestImage);
                    const response = await this.getImageFeatures(this.TestImage);
                    expect(response.imageId.includes(this.TestImage)).toBeTruthy();
                    const features = response.features;
                    expect(features.length).toBeGreaterThan(0);
                });
        }

        public async deleteImageFeaturesTest() {
            await this.runTestWithLogging("deleteImageFeaturesTest",
                async () => {
                    const image = this.TestImage;
                    await this.addImageFeatures(image);
                    const destServerPath = `${this.TempFolder}/${image}`;
                    await this.imagingApi.deleteSearchImage(
                        new imaging.DeleteSearchImageRequest({ searchContextId: this.SearchContextId, imageId: destServerPath, storage: this.TestStorage }));
                    
                    let caught: boolean;
                    try {
                        await this.imagingApi.getSearchImage(
                            new imaging.GetSearchImageRequest({ searchContextId: this.SearchContextId, imageId: destServerPath, storage: this.TestStorage }));
                    } catch (error) {
                        expect(error instanceof imaging.ApiError).toBeTruthy();
                        caught = true;
                    }

                    expect(caught).toBeTruthy();
                });
        }

        public async updateImageFeaturesTest() {
            await this.runTestWithLogging("updateImageFeaturesTest",
                async () => {
                    const image = this.TestImage;
                    await this.addImageFeatures(image);
                    let response = await this.getImageFeatures(image);
                    expect(response.imageId.includes(image)).toBeTruthy();
                    const features = response.features;
                    const featuresLength = features.length;

                    const destServerPath = `${this.OriginalDataFolder}/${image}`;

                    const storagePath = this.OriginalDataFolder + "/" + this.SmallTestImage;
                    const imageStream = await this.imagingApi.downloadFile(
                        new imaging.DownloadFileRequest({ path: storagePath, storageName: this.TestStorage}));
                    expect(imageStream).toBeTruthy();

                    await this.imagingApi.updateImageFeatures(
                         new imaging.UpdateImageFeaturesRequest({ 
                            searchContextId: this.SearchContextId, imageId: destServerPath, imageData: imageStream, storage: this.TestStorage }));

                    response = await this.getImageFeatures(image);
                    expect(response.imageId.includes(image)).toBeTruthy();
                    expect(featuresLength).not.toEqual(response.features.length);
                });
        }

        private async addImage(image: string) {
            const destServerPath = `${this.TempFolder}/${image}`;

            const storagePath = this.OriginalDataFolder + "/" + image;
            const imageStream = await this.imagingApi.downloadFile(
                new imaging.DownloadFileRequest({ path: storagePath, storageName: this.TestStorage}));
            expect(imageStream).toBeTruthy();

            await this.imagingApi.addSearchImage(
                new imaging.AddSearchImageRequest({searchContextId: this.SearchContextId, imageId: destServerPath, imageData: imageStream,
                    storage: this.TestStorage }));

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest ({ path: destServerPath, storageName: this.TestStorage }))).exists).toBeTruthy();
        }

        private async getImage(image: string) {
            const destServerPath = `${this.TempFolder}/${image}`;
            const response = await this.imagingApi.getSearchImage(
                new imaging.GetSearchImageRequest({ searchContextId: this.SearchContextId, imageId: destServerPath, storage: this.TestStorage }));
           
            return response;
        }

        private async addImageFeatures(image: string) {
            const destServerPath = `${this.OriginalDataFolder}/${image}`;

            await this.imagingApi.createImageFeatures(
                new imaging.CreateImageFeaturesRequest({ searchContextId: this.SearchContextId, imageId: destServerPath, storage: this.TestStorage }));
        }

        private async getImageFeatures(image: string) {
            const destServerPath = `${this.OriginalDataFolder}/${image}`;

            const response = await this.imagingApi.getImageFeatures(
                new imaging.GetImageFeaturesRequest({ searchContextId: this.SearchContextId, imageId: destServerPath, storage: this.TestStorage }));

            return response;
        }
}

const testClass: SearchContextTests = new SearchContextTests();

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

test(`createSearchContextTest`, async () => {
    await testClass.createSearchContextTest();
});

test(`deleteImageSearchTest`, async () => {
    await testClass.deleteImageSearchTest();
});

test(`addImageTest`, async () => {
    await testClass.addImageTest();
});

test(`deleteImageTest`, async () => {
    await testClass.deleteImageTest();
});

test(`getImageTest`, async () => {
    await testClass.getImageTest();
});

test(`updateImageTest`, async () => {
    await testClass.updateImageTest();
});

test(`extractImageFeaturesTest`, async () => {
    await testClass.extractImageFeaturesTest();
});

test(`extractAndAddImageFeaturesTest`, async () => {
    await testClass.extractAndAddImageFeaturesTest();
});

test(`extractAndAddImageFeaturesFromFolderTest`, async () => {   
     await testClass.extractAndAddImageFeaturesFromFolderTest();
});

test(`getImageFeaturesTest`, async () => {
    await testClass.getImageFeaturesTest();
});

test(`deleteImageFeaturesTest`, async () => {
    await testClass.deleteImageFeaturesTest();
});

test(`updateImageFeaturesTest`, async () => {
    await testClass.updateImageFeaturesTest();
});
