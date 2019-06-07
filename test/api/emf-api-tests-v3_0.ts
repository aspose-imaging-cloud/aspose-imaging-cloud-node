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
 * Class for testing EMF-related API calls
 */
class EmfApiTests extends ApiTester {

    public async modifyEmfTest() {
        const name: string = "test.emf";
        const fromScratch: boolean = false;
        const bkColor: string = "gray";
        const pageWidth: number = 300;
        const pageHeight: number = 300;
        const borderX: number = 50;
        const borderY: number = 50;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "modifyEmfTest", 
                `Input image: ${name}; BackColor: ${bkColor}; Page width: ${pageWidth}; Page height: ${pageHeight}; BorderX: ${borderX}; BorderY: ${borderY}`,
                name,
                async () => {
                    const request = new imaging.ModifyEmfRequest({ name, bkColor, pageWidth, pageHeight, borderX, borderY, fromScratch, folder, storage });
                    const response = await this.imagingApi.modifyEmf(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(originalProperties).toBeTruthy();
                    expect(resultProperties.pngProperties).toBeTruthy();
                    expect(pageWidth + borderX * 2).toEqual(resultProperties.width);
                    expect(pageHeight + borderX * 2).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async createModifiedEmfTest(saveResultToStorage: boolean) {
        const name: string = "test.emf";
        const fromScratch: boolean = false;
        const bkColor: string = "gray";
        const pageWidth: number = 300;
        const pageHeight: number = 300;
        const borderX: number = 50;
        const borderY: number = 50;
        const outName: string = `${name}_specific.png`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
                "createModifiedEmfTest", 
                saveResultToStorage,
                `Input image: ${name}; BackColor: ${bkColor}; Page width: ${pageWidth}; Page height: ${pageHeight}; BorderX: ${borderX}; BorderY: ${borderY}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request = new imaging.CreateModifiedEmfRequest({ imageData: inputStream, bkColor, pageWidth, pageHeight, borderX, borderY, fromScratch, outPath, storage });
                    const response = await this.imagingApi.createModifiedEmf(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(originalProperties).toBeTruthy();
                    expect(resultProperties.pngProperties).toBeTruthy();
                    expect(pageWidth + borderX * 2).toEqual(resultProperties.width);
                    expect(pageHeight + borderX * 2).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }
}

const testClass: EmfApiTests = new EmfApiTests();

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
    "EmfTestSuite_V3",
    (saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`modifyEmfTest`, async () => {
                await testClass.modifyEmfTest();
            });
        }

        test(`createModifiedEmfTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createModifiedEmfTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
