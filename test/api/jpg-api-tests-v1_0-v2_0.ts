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
 * Class for testing JPG-related API calls
 */
class JpgApiTests extends ApiTester {

    public async getImageJpgTest(saveResultToStorage: boolean) {
        const name: string = "test.jpg";
        const quality: number = 65;
        const compressionType: string = "progressive";
        const fromScratch: boolean = false;
        const outName: string = `${name}_specific.jpg`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "getImageJpgTest", 
                saveResultToStorage,
                `Input image: ${name}; Quality: ${quality}; Compression type: ${compressionType}`,
                name,
                outName,
                async (fileName, outPath) => {
                    const request = new imaging.GetImageJpgRequest({ name: fileName, quality, compressionType, fromScratch, outPath, folder, storage });
                    const response = await this.imagingApi.getImageJpg(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.jpegProperties).toBeTruthy();
                    expect(originalProperties.jpegProperties).toBeTruthy();
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async postImageJpgTest(saveResultToStorage: boolean) {
        const name: string = "test.jpg";
        const quality: number = 65;
        const compressionType: string = "progressive";
        const fromScratch: boolean = false;
        const outName: string = `${name}_specific.jpg`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
                "postImageJpgTest", 
                saveResultToStorage,
                `Input image: ${name}; Quality: ${quality}; Compression type: ${compressionType}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request = new imaging.PostImageJpgRequest({ imageData: inputStream, quality, compressionType, fromScratch, outPath, storage });
                    const response = await this.imagingApi.postImageJpg(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.jpegProperties).toBeTruthy();
                    expect(originalProperties.jpegProperties).toBeTruthy();
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }
}

const testClass: JpgApiTests = new JpgApiTests();

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
    "JpgTestSuite_V1_V2",
    (saveResultToStorage) => {
        test(`getImageJpgTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.getImageJpgTest(saveResultToStorage);
        });

        test(`postImageJpgTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postImageJpgTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
