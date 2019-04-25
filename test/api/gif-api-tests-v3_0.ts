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

import * as imaging from "../../lib/api";
import { ApiTester } from "../base/api-tester";

/**
 * Class for testing GIF-related API calls
 */
class GifApiTests extends ApiTester {

    public async getImageGifTest(saveResultToStorage: boolean) {
        const name: string = "test.gif";
        const fromScratch: boolean = false;
        const hasTrailer: boolean = true;
        const interlaced: boolean = false;
        const isPaletteSorted: boolean = true;
        const backgroundColorIndex: number = 5;
        const pixelAspectRatio: number = 4;
        const colorResolution: number = 4;
        const outName: string = `${name}_specific.gif`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "getImageGifTest", 
                saveResultToStorage,
                `Input image: ${name}; Has trailer: ${hasTrailer}; Interlaced: ${interlaced}; Palette is sorted: ${isPaletteSorted}; 
                    Back color index: ${backgroundColorIndex}; Pixel aspect ratio: ${pixelAspectRatio}; Color resolution: ${colorResolution}`,
                name,
                outName,
                async (fileName, outPath) => {
                    const request = new imaging.GetImageGifRequest({ name: fileName, backgroundColorIndex, colorResolution, hasTrailer, interlaced, isPaletteSorted, 
                        pixelAspectRatio, fromScratch, outPath, folder, storage });
                    const response = await this.imagingApi.getImageGif(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(originalProperties.gifProperties).toBeTruthy();
                    expect(resultProperties.gifProperties).toBeTruthy();
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    expect(pixelAspectRatio).toEqual(resultProperties.gifProperties.pixelAspectRatio);
                    // expect(resultProperties.gifProperties.hasTrailer).toBeTruthy();
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async postImageGifTest(saveResultToStorage: boolean) {
        const name: string = "test.gif";
        const fromScratch: boolean = false;
        const hasTrailer: boolean = true;
        const interlaced: boolean = false;
        const isPaletteSorted: boolean = true;
        const backgroundColorIndex: number = 5;
        const pixelAspectRatio: number = 4;
        const colorResolution: number = 4;
        const outName: string = `${name}_specific.gif`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
                "postImageGifTest", 
                saveResultToStorage,
                `Input image: ${name}; Has trailer: ${hasTrailer}; Interlaced: ${interlaced}; Palette is sorted: ${isPaletteSorted}; 
                    Back color index: ${backgroundColorIndex}; Pixel aspect ratio: ${pixelAspectRatio}; Color resolution: ${colorResolution}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request = new imaging.PostImageGifRequest({ imageData: inputStream, backgroundColorIndex, colorResolution, hasTrailer, interlaced, isPaletteSorted, 
                        pixelAspectRatio, fromScratch, outPath, storage });
                    const response = await this.imagingApi.postImageGif(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(originalProperties.gifProperties).toBeTruthy();
                    expect(resultProperties.gifProperties).toBeTruthy();
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    expect(pixelAspectRatio).toEqual(resultProperties.gifProperties.pixelAspectRatio);
                    // expect(resultProperties.gifProperties.hasTrailer).toBeTruthy();
                    return Promise.resolve();
                },
                folder,
                storage);
    }
}

const testClass: GifApiTests = new GifApiTests();

beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () =>  {
    await testClass.beforeAll();
});

afterAll(async () =>  {
    await testClass.afterAll();
});

describe.each([[true], [false]])(
    "GifTestSuite_V3",
    (saveResultToStorage) => {
        test(`getImageGifTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.getImageGifTest(saveResultToStorage);
        });

        test(`postImageGifTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postImageGifTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
