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
 * Class for testing ODG-related API calls
 */
class OdgApiTests extends ApiTester {

    public async getImageOdgTest(saveResultToStorage: boolean) {
        const name: string = "test.odg";
        const fromScratch: boolean = false;
        const outName: string = `${name}_specific.png`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "getImageOdgTest", 
                saveResultToStorage,
                `Input image: ${name}`,
                name,
                outName,
                async (fileName, outPath) => {
                    const request = new imaging.GetImageOdgRequest({ name: fileName, fromScratch, outPath, folder, storage });
                    const response = await this.imagingApi.getImageOdg(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.pngProperties).toBeTruthy();
                    expect(originalProperties.odgProperties).toBeTruthy();

                    try {
                        expect(originalProperties.width).toEqual(resultProperties.width);
                    } catch (error) {
                        expect(originalProperties.width).toEqual(resultProperties.width - 1);
                    }

                    try {
                        expect(originalProperties.height).toEqual(resultProperties.height);
                    } catch (error) {
                        expect(originalProperties.height).toEqual(resultProperties.height - 1);
                    }
                    
                    expect(originalProperties.odgProperties.pages).toBeTruthy();
                    expect(2).toEqual(originalProperties.odgProperties.pageCount);
                    expect(originalProperties.odgProperties.pages[0].height).toEqual(originalProperties.height);
                    expect(originalProperties.odgProperties.pages[1].height).toEqual(originalProperties.height);
                    expect(originalProperties.odgProperties.pages[0].width).toEqual(originalProperties.width);
                    expect(originalProperties.odgProperties.pages[0].width).toEqual(originalProperties.width);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async postImageOdgTest(saveResultToStorage: boolean) {
        const name: string = "test.odg";
        const fromScratch: boolean = false;
        const outName: string = `${name}_specific.png`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
                "postImageOdgTest", 
                saveResultToStorage,
                `Input image: ${name}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request = new imaging.PostImageOdgRequest({ imageData: inputStream, fromScratch, outPath, storage });
                    const response = await this.imagingApi.postImageOdg(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(resultProperties.pngProperties).toBeTruthy();
                    expect(originalProperties.odgProperties).toBeTruthy();

                    try {
                        expect(originalProperties.width).toEqual(resultProperties.width);
                    } catch (error) {
                        expect(originalProperties.width).toEqual(resultProperties.width - 1);
                    }

                    try {
                        expect(originalProperties.height).toEqual(resultProperties.height);
                    } catch (error) {
                        expect(originalProperties.height).toEqual(resultProperties.height - 1);
                    }
                    
                    expect(originalProperties.odgProperties.pages).toBeTruthy();
                    expect(2).toEqual(originalProperties.odgProperties.pageCount);
                    expect(originalProperties.odgProperties.pages[0].height).toEqual(originalProperties.height);
                    expect(originalProperties.odgProperties.pages[1].height).toEqual(originalProperties.height);
                    expect(originalProperties.odgProperties.pages[0].width).toEqual(originalProperties.width);
                    expect(originalProperties.odgProperties.pages[0].width).toEqual(originalProperties.width);
                    return Promise.resolve();
                },
                folder,
                storage);
    }
}

const testClass: OdgApiTests = new OdgApiTests();

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
    "OdgTestSuite_V1_V2",
    (saveResultToStorage) => {
        test(`getImageOdgTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.getImageOdgTest(saveResultToStorage);
        });

        test(`postImageOdgTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.postImageOdgTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
