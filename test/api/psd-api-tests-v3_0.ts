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

import * as imaging from "../../lib/api";
import { ApiTester } from "../base/api-tester";

/**
 * Class for testing PSD-related API calls
 */
class PsdApiTests extends ApiTester {

    public async modifyPsdTest() {
        const name: string = "test.psd";
        const channelsCount: number = 3;
        const compressionMethod: string = "raw";
        const fromScratch: boolean = false;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "modifyPsdTest", 
                `Input image: ${name}; Channels count: ${channelsCount}; Compression method: ${compressionMethod}`,
                name,
                async () => {
                    const request = new imaging.ModifyPsdRequest({ name, channelsCount, compressionMethod, fromScratch, folder, storage });
                    const response = await this.imagingApi.modifyPsd(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.psdProperties).toBeTruthy();
                    expect(compressionMethod).toEqual(resultProperties.psdProperties.compression.toLowerCase());
                    expect(channelsCount).toEqual(Math.ceil(resultProperties.psdProperties.channelsCount));

                    expect(originalProperties.psdProperties).toBeTruthy();
                    expect(originalProperties.psdProperties.bitsPerChannel).toEqual(resultProperties.psdProperties.bitsPerChannel);
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async createModifiedPsdTest(saveResultToStorage: boolean) {
        const name: string = "test.psd";
        const channelsCount: number = 3;
        const compressionMethod: string = "raw";
        const fromScratch: boolean = false;
        const outName: string = `${name}_specific.psd`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
                "createModifiedPsdTest", 
                saveResultToStorage,
                `Input image: ${name}; Channels count: ${channelsCount}; Compression method: ${compressionMethod}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request = new imaging.CreateModifiedPsdRequest({ imageData: inputStream, channelsCount, compressionMethod, fromScratch, outPath, storage });
                    const response = await this.imagingApi.createModifiedPsd(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.psdProperties).toBeTruthy();
                    expect(compressionMethod).toEqual(resultProperties.psdProperties.compression.toLowerCase());
                    expect(channelsCount).toEqual(Math.ceil(resultProperties.psdProperties.channelsCount));

                    expect(originalProperties.psdProperties).toBeTruthy();
                    expect(originalProperties.psdProperties.bitsPerChannel).toEqual(resultProperties.psdProperties.bitsPerChannel);
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }
}

const testClass: PsdApiTests = new PsdApiTests();

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
    "PsdTestSuite_V3",
    (saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`modifyPsdTest`, async () => {
                await testClass.modifyPsdTest();
            });
        }

        test(`createModifiedPsdTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createModifiedPsdTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
