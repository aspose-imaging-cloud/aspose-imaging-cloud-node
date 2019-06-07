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
 * Class for testing WEBP-related API calls
 */
class WebpApiTests extends ApiTester {

    public async modifyWebpTest() {
        const name: string = "Animation.webp";
        const animBackgroundColor: string = "gray";
        const animLoopCount: number = 5;
        const quality: number = 90;
        const lossLess: boolean  = true;
        const fromScratch: boolean = false;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "modifyWebpTest", 
                `Input image: ${name}; Animation loop count: ${animLoopCount}; Quality: ${quality}; Animation background color: ${animBackgroundColor}; Lossless: ${lossLess}`,
                name,
                async () => {
                    const request = new imaging.ModifyWebPRequest({ name, lossLess, quality, animLoopCount, animBackgroundColor, fromScratch, folder, storage });
                    const response = await this.imagingApi.modifyWebP(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.webPProperties).toBeTruthy();
                    expect(originalProperties.webPProperties).toBeTruthy();
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async createModifiedWebpTest(saveResultToStorage: boolean) {
        const name: string = "Animation.webp";
        const animBackgroundColor: string = "gray";
        const animLoopCount: number = 5;
        const quality: number = 90;
        const lossLess: boolean  = true;
        const fromScratch: boolean = false;
        const outName: string = `${name}_specific.webp`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
                "createModifiedWebpTest", 
                saveResultToStorage,
                `Input image: ${name}; Animation loop count: ${animLoopCount}; Quality: ${quality}; Animation background color: ${animBackgroundColor}; Lossless: ${lossLess}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request = new imaging.CreateModifiedWebPRequest({ imageData: inputStream, lossLess, quality, animLoopCount, animBackgroundColor, fromScratch, outPath, storage });
                    const response = await this.imagingApi.createModifiedWebP(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.webPProperties).toBeTruthy();
                    expect(originalProperties.webPProperties).toBeTruthy();
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }
}

const testClass: WebpApiTests = new WebpApiTests();

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
    "WebpTestSuite_V3",
    (saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`modifyWebpTest`, async () => {
                await testClass.modifyWebpTest();
            });
        }

        test(`createModifiedWebpTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createModifiedWebpTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
