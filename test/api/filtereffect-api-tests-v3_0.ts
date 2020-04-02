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

import * as filterProperties from "../../lib/api";
import * as imaging from "../../lib/api";
import {ApiTester} from "../base/api-tester";

/**
 * Class for testing filter effect API calls
 */
class FilterEffectApiTests extends ApiTester {

    private filters: Filter[] = [
        new Filter("BigRectangular", new filterProperties.BigRectangularFilterProperties()),
        new Filter("SmallRectangular", new filterProperties.SmallRectangularFilterProperties()),
        new Filter("Median", new filterProperties.MedianFilterProperties({size: 2})),
        new Filter("GaussWiener", new filterProperties.GaussWienerFilterProperties({radius: 2, smooth: 2})),
        new Filter("MotionWiener", new filterProperties.MotionWienerFilterProperties({length: 2, smooth: 2, angle: 12})),
        new Filter("GaussianBlur", new filterProperties.GaussianBlurFilterProperties({radius: 2, sigma: 0.5})),
        new Filter("Sharpen", new filterProperties.SharpenFilterProperties({size: 2, sigma: 0.5})),
        new Filter("BilateralSmoothing", new filterProperties.BilateralSmoothingFilterProperties({
            size: 2,
            spatialFactor: 2,
            spatialPower: 2,
            colorFactor: 2,
            colorPower: 2,
        })),
    ];

    public async filterEffectImageTest(formatExtension: string, ...additionalExportFormats: string[]) {
        let name: string = null;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const formatsToExport: string[] = Object.assign([], this.BasicExportFormats);

        for (const additionalExportFormat of additionalExportFormats) {
            if (!formatsToExport.includes(additionalExportFormat)) {
                formatsToExport.push(additionalExportFormat);
            }
        }

        for (const inputFile of this.BasicInputTestFiles) {
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            for (const filter of this.filters) {
                for (const format of formatsToExport) {
                    await this.testGetRequest(
                        "FilterEffectTest",
                        `Input image: ${name}; Output format: ${format}; Filter type: ${filter.filterType}`,
                        name,
                        async () => {
                            const request: imaging.FilterEffectImageRequest = new imaging.FilterEffectImageRequest({
                                name,
                                filterType: filter.filterType,
                                filterProperties: filter.filterProperties,
                                format,
                                folder,
                                storage
                            });
                            const response = await this.imagingApi.filterEffectImage(request);
                            return response;
                        },
                        null,
                        folder,
                        storage);
                }
            }
        }
    }
}

class Filter {
    public filterType: string;
    public filterProperties: filterProperties.FilterPropertiesBase;

    constructor(type: string, properties: filterProperties.FilterPropertiesBase) {
        this.filterType = type;
        this.filterProperties = properties;
    }
}

const testClass: FilterEffectApiTests = new FilterEffectApiTests();
const useExtendedTests: boolean = process.env.ExtendedTests === "true";

beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () => {
    await testClass.beforeAll();
});

afterAll(async () => {
    await testClass.afterAll();
});

describe.each(useExtendedTests ? [".dicom", ".djvu", ".gif", ".psd", ".tiff", "webp"] : [".psd"])(
    "FilterEffectTestSuite_V3",
    (formatExtension) => {
        test(`filterEffectpedImageTest: format - ${formatExtension}`, async () => {
            await testClass.filterEffectImageTest(formatExtension);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
