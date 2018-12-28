/*
* --------------------------------------------------------------------------------------------------------------------
* <copyright company="Aspose">
*   Copyright (c) 2018 Aspose Pty Ltd. All rights reserved.
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
 * Class for testing PNG-related API calls
 */
class PngApiTests extends ApiTester {

    public async getImagePngTest(saveResultToStorage: boolean) {
        const name: string = "test.png";
        const fromScratch: boolean = false;
        const outName: string = `${name}_specific.png`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "getImagePngTest", 
                saveResultToStorage,
                `Input image: ${name}`,
                name,
                outName,
                async (fileName, outPath) => {
                    const request = new imaging.GetImagePngRequest({ name: fileName, fromScratch, outPath, folder, storage });
                    const response = await this.imagingApi.getImagePng(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.pngProperties).toBeTruthy();
                    expect(originalProperties.pngProperties).toBeTruthy();
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    
                    // TODO: this should be uncommented when IMAGINGCLOUD-48 is done
                    // expect(originalProperties.bitsPerPixel).toEqual(resultProperties.bitsPerPixel);
                    expect(originalProperties.horizontalResolution).toEqual(resultProperties.horizontalResolution);
                    expect(originalProperties.verticalResolution).toEqual(resultProperties.verticalResolution);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async postImagePngTest(saveResultToStorage: boolean) {
        const name: string = "test.png";
        const fromScratch: boolean = false;
        const outName: string = `${name}_specific.png`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
                "postImagePngTest", 
                saveResultToStorage,
                `Input image: ${name}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request = new imaging.PostImagePngRequest({ imageData: inputStream, fromScratch, outPath, storage });
                    const response = await this.imagingApi.postImagePng(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.pngProperties).toBeTruthy();
                    expect(originalProperties.pngProperties).toBeTruthy();
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);

                    // TODO: this should be uncommented when IMAGINGCLOUD-48 is done
                    // expect(originalProperties.bitsPerPixel).toEqual(resultProperties.bitsPerPixel);
                    expect(originalProperties.horizontalResolution).toEqual(resultProperties.horizontalResolution);
                    expect(originalProperties.verticalResolution).toEqual(resultProperties.verticalResolution);
                    return Promise.resolve();
                },
                folder,
                storage);
    }
}

const testClass: PngApiTests = new PngApiTests();

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
    "PngTestSuite_V1_V2",
    (saveResultToStorage) => {
        test(`getImagePngTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.getImagePngTest(saveResultToStorage);
        });

        test(`postImagePngTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postImagePngTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
