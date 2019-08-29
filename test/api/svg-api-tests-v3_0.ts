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
 * Class for testing SVG-related API calls
 */
class SvgApiTests extends ApiTester {

    public async modifySvgTest() {
        const name: string = "test.svg";
        const fromScratch: boolean = false;
        const bkColor: string = "gray";
        const pageWidth: number = 300;
        const pageHeight: number = 300;
        const borderX: number = 50;
        const borderY: number = 50;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
            "modifySvgTest",
            `Input image: ${name}; BackColor: ${bkColor}; Page width: ${pageWidth}; Page height: ${pageHeight}; BorderX: ${borderX}; BorderY: ${borderY}`,
            name,
            async () => {
                const request = new imaging.ModifySvgRequest({ name, bkColor, pageWidth, pageHeight, borderX, borderY, fromScratch, folder, storage });
                const response = await this.imagingApi.modifySvg(request);
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

    public async createModifiedSvgTest(saveResultToStorage: boolean) {
        const name: string = "test.svg";
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
            "createModifiedSvgTest",
            saveResultToStorage,
            `Input image: ${name}; BackColor: ${bkColor}; Page width: ${pageWidth}; Page height: ${pageHeight}; BorderX: ${borderX}; BorderY: ${borderY}`,
            name,
            outName,
            async (inputStream, outPath) => {
                const request = new imaging.CreateModifiedSvgRequest({ imageData: inputStream, bkColor, pageWidth, pageHeight, borderX, borderY, fromScratch, outPath, storage });
                const response = await this.imagingApi.createModifiedSvg(request);
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

const testClass: SvgApiTests = new SvgApiTests();

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
    "SvgTestSuite_V3",
    (saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`modifySvgTest`, async () => {
                await testClass.modifySvgTest();
            });
        }

        test(`createModifiedSvgTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createModifiedSvgTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
