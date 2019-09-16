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

    public async modifySvgSizeRasterizationTest() {
        const name: string = "test.svg";
        const fromScratch: boolean = false;
        const bkColor: string = "gray";
        const pageWidth: number = 300;
        const pageHeight: number = 300;
        // borderX and borderY are not supported right now, see IMAGINGNET-3543
        const borderX: number = 0;
        const borderY: number = 0;
        const format: string = "png";
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
            "modifySvgSizeRasterizationTest",
            `Input image: ${name}; BackColor: ${bkColor}; Page width: ${pageWidth}; Page height: ${pageHeight}; BorderX: ${borderX}; BorderY: ${borderY}`,
            name,
            async () => {
                const request = new imaging.ModifySvgRequest({ name, bkColor, pageWidth, pageHeight, borderX, borderY, fromScratch, folder, storage, format });
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

    public async modifySvgScaleRasterizationTest() {
        const name: string = "test.svg";
        const fromScratch: boolean = false;
        const bkColor: string = "gray";
        const scaleX: number = 2.0;
        const scaleY: number = 2.0;
        const format: string = "png";
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
            "modifySvgScaleRasterizationTest",
            `Input image: ${name}; BackColor: ${bkColor}; Scale X: ${scaleX}; Scale Y: ${scaleY}`,
            name,
            async () => {
                const request = new imaging.ModifySvgRequest({ name, bkColor, scaleX, scaleY, fromScratch, folder, storage, format });
                const response = await this.imagingApi.modifySvg(request);
                return response;
            },
            (originalProperties, resultProperties) => {
                expect(originalProperties).toBeTruthy();
                expect(resultProperties.pngProperties).toBeTruthy();
                expect(originalProperties.width * scaleX).toEqual(resultProperties.width);
                expect(originalProperties.height * scaleY).toEqual(resultProperties.height);
                return Promise.resolve();
            },
            folder,
            storage);
    }

    public async modifySvgUpdatePropertiesTest() {
        const name: string = "test.svg";
        const fromScratch: boolean = false;
        // Only RGB color type is supported right now, see IMAGINGNET-3543
        const colorType: string = "rgb";
        const textAsShapes: boolean = true;
        const format: string = "svg";
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
            "modifySvgUpdatePropertiesTest",
            `Input image: ${name}; Color type: ${colorType}; Text as shapes: ${textAsShapes}`,
            name,
            async () => {
                const request = new imaging.ModifySvgRequest({ name, colorType, textAsShapes, fromScratch, folder, storage, format });
                const response = await this.imagingApi.modifySvg(request);
                return response;
            },
            (originalProperties, resultProperties) => {
                expect(originalProperties).toBeTruthy();
                expect(resultProperties.svgProperties).toBeTruthy();
                expect(colorType).toEqual(resultProperties.svgProperties.colorType);
                return Promise.resolve();
            },
            folder,
            storage);
    }

    public async createModifiedSizeRasterizationSvgTest(saveResultToStorage: boolean) {
        const name: string = "test.svg";
        const fromScratch: boolean = false;
        const bkColor: string = "gray";
        const pageWidth: number = 300;
        const pageHeight: number = 300;
        // borderX and borderY are not supported right now, see IMAGINGNET-3543
        const borderX: number = 0;
        const borderY: number = 0;
        const format: string = "png";
        const outName: string = `${name}_specific.png`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
            "createModifiedSizeRasterizationSvgTest",
            saveResultToStorage,
            `Input image: ${name}; BackColor: ${bkColor}; Page width: ${pageWidth}; Page height: ${pageHeight}; BorderX: ${borderX}; BorderY: ${borderY}`,
            name,
            outName,
            async (inputStream, outPath) => {
                const request = new imaging.CreateModifiedSvgRequest({ imageData: inputStream, bkColor, pageWidth, pageHeight, borderX, borderY, fromScratch, outPath, storage, format });
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

    public async createModifiedScaleRasterizationSvgTest(saveResultToStorage: boolean) {
        const name: string = "test.svg";
        const fromScratch: boolean = false;
        const bkColor: string = "gray";
        const scaleX: number = 2.0;
        const scaleY: number = 2.0;
        const format: string = "png";
        const outName: string = `${name}_specific.png`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
            "createModifiedScaleRasterizationSvgTest",
            saveResultToStorage,
            `Input image: ${name}; BackColor: ${bkColor}; Scale X: ${scaleX}; Scale Y: ${scaleY}`,
            name,
            outName,
            async (inputStream, outPath) => {
                const request = new imaging.CreateModifiedSvgRequest({ imageData: inputStream, bkColor, scaleX, scaleY, fromScratch, outPath, storage, format });
                const response = await this.imagingApi.createModifiedSvg(request);
                return response;
            },
            (originalProperties, resultProperties) => {
                expect(originalProperties).toBeTruthy();
                expect(resultProperties.pngProperties).toBeTruthy();
                expect(originalProperties.width * scaleX).toEqual(resultProperties.width);
                expect(originalProperties.height * scaleY).toEqual(resultProperties.height);
                return Promise.resolve();
            },
            folder,
            storage);
    }

    public async createModifiedUpdatePropertiesSvgTest(saveResultToStorage: boolean) {
        const name: string = "test.svg";
        const fromScratch: boolean = false;
        // Only RGB color type is supported right now, see IMAGINGNET-3543
        const colorType: string = "rgb";
        const textAsShapes: boolean = true;
        const format: string = "svg";
        const outName: string = `${name}_specific.png`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
            "createModifiedUpdatePropertiesSvgTest",
            saveResultToStorage,
            `Input image: ${name}; Color type: ${colorType}; Text as shapes: ${textAsShapes}`,
            name,
            outName,
            async (inputStream, outPath) => {
                const request = new imaging.CreateModifiedSvgRequest({ imageData: inputStream, colorType, textAsShapes, fromScratch, outPath, storage, format });
                const response = await this.imagingApi.createModifiedSvg(request);
                return response;
            },
            (originalProperties, resultProperties) => {
                expect(originalProperties).toBeTruthy();
                expect(resultProperties.svgProperties).toBeTruthy();
                expect(colorType).toEqual(resultProperties.svgProperties.colorType);
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
            test(`modifySvgSizeRasterizationTest`, async () => {
                await testClass.modifySvgSizeRasterizationTest();
            });
            test(`modifySvgScaleRasterizationTest`, async () => {
                await testClass.modifySvgScaleRasterizationTest();
            });
            test(`modifySvgUpdatePropertiesTest`, async () => {
                await testClass.modifySvgUpdatePropertiesTest();
            });
        }

        test(`createModifiedSizeRasterizationSvgTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createModifiedSizeRasterizationSvgTest(saveResultToStorage);
        });
        test(`createModifiedScaleRasterizationSvgTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createModifiedScaleRasterizationSvgTest(saveResultToStorage);
        });
        test(`createModifiedUpdatePropertiesSvgTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createModifiedUpdatePropertiesSvgTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
