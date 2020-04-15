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

import * as path from "path";
import {ImagingResponse} from "../../lib/api";
import * as imaging from "../../lib/api";
import { ApiTester } from "../base/api-tester";

/**
 * Class for testing frames API calls
 */
class FramesApiTests extends ApiTester {
    /**
     * Formats without specified property field in ImagingResponse
     */
    private readonly formatsWithoutProperties = [".cdr", ".cmx", ".otg"];

    public async getSingleFrameTest(formatExtension: string) {
        const frameId: number = 1;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const exportFormat = await this.getExportFormat(formatExtension, true);

        for (const inputFile of this.MultipageInputTestFiles) {
            let name: string = null;
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            await this.testGetRequest(
                "getImageFrameTest",
                `Input image: ${name}; Frame id: ${frameId}`,
                name,
                async () => {
                    const request: imaging.GetImageFrameRequest = new imaging.GetImageFrameRequest({name, frameId, folder, storage});
                    return await this.imagingApi.getImageFrame(request);
                },
                async (_, resultProperties, __) => {
                    expect(resultProperties).not.toBeNull();
                    if (this.formatsWithoutProperties.some((x) => x === exportFormat)) {
                        return;
                    }

                    const propertiesName: string = await FramesApiTests.getPropertiesName(exportFormat);
                    const resultFormatProperties = resultProperties[propertiesName];
                    expect(resultFormatProperties).not.toBeNull();
                },
                folder,
                storage);
        }
    }

    public async createSingleFrameTest(formatExtension: string, saveResultToStorage: boolean) {
        const frameId: number = 0;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const exportFormat = await this.getExportFormat(formatExtension, true);

        for (const inputFile of this.MultipageInputTestFiles) {
            let name: string = null;
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            const outName: string = `${name}_single_frame${exportFormat}`;

            await this.testPostRequest(
                "createImageFrameTest",
                saveResultToStorage,
                `Input image: ${name}; Frame id: ${frameId}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request: imaging.CreateImageFrameRequest = new imaging.CreateImageFrameRequest({imageData: inputStream, frameId, outPath, storage});
                    return await this.imagingApi.createImageFrame(request);
                },
                async (_, resultProperties, __) => {
                    expect(resultProperties).not.toBeNull();
                    if (this.formatsWithoutProperties.some((x) => x === exportFormat)) {
                        return;
                    }

                    const propertiesName: string = await FramesApiTests.getPropertiesName(exportFormat);
                    const resultFormatProperties = resultProperties[propertiesName];
                    expect(resultFormatProperties).not.toBeNull();
                },
                folder,
                storage);
        }
    }

    public async getFrameRangeTest(formatExtension: string) {
        const startFrameId: number = 0;
        const endFrameId: number = 1;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const exportFormat = await this.getExportFormat(formatExtension, false);

        for (const inputFile of this.MultipageInputTestFiles) {
            let name: string = null;
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            await this.testGetRequest(
                "getImageFrameRangeTest",
                `Input image: ${name}; Start frame id: ${startFrameId}; End frame id: ${endFrameId}`,
                name,
                async () => {
                    const request: imaging.GetImageFrameRangeRequest = new imaging.GetImageFrameRangeRequest({name, startFrameId, endFrameId, folder, storage});
                    return await this.imagingApi.getImageFrameRange(request);
                },
                async (_, resultProperties, __) => {
                    expect(resultProperties).not.toBeNull();
                    if (this.formatsWithoutProperties.some((x) => x === exportFormat)) {
                        return;
                    }

                    const propertiesName: string = await FramesApiTests.getPropertiesName(exportFormat);
                    const resultFormatProperties = resultProperties[propertiesName];
                    expect(resultFormatProperties).not.toBeNull();
                },
                folder,
                storage);
        }
    }

    public async createFrameRangeTest(formatExtension: string, saveResultToStorage: boolean) {
        const startFrameId: number = 0;
        const endFrameId: number = 1;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;
        const exportFormat = await this.getExportFormat(formatExtension, false);

        for (const inputFile of this.MultipageInputTestFiles) {
            let name: string = null;
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            const outName: string = `${name}_frame_range${exportFormat}`;

            await this.testPostRequest(
                "createImageFrameRangeTest",
                saveResultToStorage,
                `Input image: ${name}; Start frame id: ${startFrameId}; End frame id: ${endFrameId}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request: imaging.CreateImageFrameRangeRequest = new imaging.CreateImageFrameRangeRequest({imageData: inputStream, startFrameId, endFrameId, outPath, storage});
                    return await this.imagingApi.createImageFrameRange(request);
                },
                async (_, resultProperties, __) => {
                    expect(resultProperties).not.toBeNull();
                    if (this.formatsWithoutProperties.some((x) => x === exportFormat)) {
                        return;
                    }

                    const propertiesName: string = await FramesApiTests.getPropertiesName(exportFormat);
                    const resultFormatProperties = resultProperties[propertiesName];
                    expect(resultFormatProperties).not.toBeNull();
                },
                folder,
                storage);
        }
    }

    public async getFramePropertiesTest(formatExtension: string) {
        const frameId: number = 1;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        for (const inputFile of this.MultipageInputTestFiles) {
            let name: string = null;
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            this.copyInputFileToTestFolder(name, folder, storage);

            console.log("GetImageFrameProperties");
            console.log(`Input image: ${name}; Frame id: ${frameId}`);

            const responseMessage: ImagingResponse = await this.imagingApi.getImageFrameProperties(new imaging.GetImageFramePropertiesRequest({name, frameId, folder, storage}));

            expect(responseMessage).not.toBeNull();
            if (this.formatsWithoutProperties.some((x) => x === formatExtension)) {
                return;
            }

            const propertiesName: string = await FramesApiTests.getPropertiesName(formatExtension);
            const resultFormatProperties = responseMessage[propertiesName];
            expect(resultFormatProperties).not.toBeNull();
        }
    }

    public async extractFramePropertiesTest(formatExtension: string) {
        const frameId: number = 1;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        for (const inputFile of this.MultipageInputTestFiles) {
            let name: string = null;
            if (inputFile.name.endsWith(formatExtension)) {
                name = inputFile.name;
            } else {
                continue;
            }

            this.copyInputFileToTestFolder(name, folder, storage);
            const imageData: Buffer = await this.imagingApi.downloadFile(new imaging.DownloadFileRequest({path: path.join(folder, name), storageName: storage}));

            console.log("ExtractImageFrameProperties");
            console.log(`Input image: ${name}; Frame id: ${frameId}`);

            const responseMessage: ImagingResponse = await this.imagingApi.extractImageFrameProperties(new imaging.ExtractImageFramePropertiesRequest({imageData, frameId}));

            expect(responseMessage).not.toBeNull();
            if (this.formatsWithoutProperties.some((x) => x === formatExtension)) {
                return;
            }

            const propertiesName: string = await FramesApiTests.getPropertiesName(formatExtension);
            const resultFormatProperties = responseMessage[propertiesName];
            expect(resultFormatProperties).not.toBeNull();
        }
    }

    /**
     * Returns name of a field with properties
     * @param format Image format
     */
    private static async getPropertiesName(format: string) {
        if (!format) {
            throw new Error("Invalid format");
        }

        if (format === ".jpg") {
            format = ".jpeg";
        } else if (format === ".j2k") {
            format = ".jpeg2000";
        } else if (format === ".webp") {
            format = ".webP";
        } else if (format === ".tif") {
            format = ".tiff";
        }

        return (format[0] === "." ? format.substring(1) : format) + "Properties";
    }

    /**
     * Returns default export format
     * @param format The original image format
     * @param isSingleFrame Singleframe or multiframe operation
     */
    private async getExportFormat(format: string, isSingleFrame: boolean) {
        if ([".dicom", ".dng", ".djvu", ".cdr", ".cmx", ".odg", ".otg", ".svg"].some((x) => x === format)) {
            return isSingleFrame ? ".psd" : ".pdf";
        }
        return format;
    }
}

const testClass: FramesApiTests = new FramesApiTests();

beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () => {
    await testClass.beforeAll();
});

afterAll(async () => {
    await testClass.afterAll();
});

describe.each([[".tif", true], [".tif", false]])(
    "FramesTestSuite_V3",
    (formatExtension, saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`getSingleFrameTest`, async () => {
                await testClass.getSingleFrameTest(formatExtension);
            });

            test(`getFrameRangeTest`, async () => {
                await testClass.getFrameRangeTest(formatExtension);
            });

            test(`getFramePropertiesTest`, async () => {
                await testClass.getFramePropertiesTest(formatExtension);
            });

            test(`extractFramePropertiesTest`, async () => {
                await testClass.extractFramePropertiesTest(formatExtension);
            });
        }

        test(`createSingleFrameTest`, async () => {
            await testClass.createSingleFrameTest(formatExtension, saveResultToStorage);
        });

        test(`createFrameRangeTest`, async () => {
            await testClass.createFrameRangeTest(formatExtension, saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);

const useExtendedTests: boolean = process.env.ExtendedTests === "true";

if (useExtendedTests) {
    console.log("Extended tests enabled");

    describe.each([
        [".cdr", true], [".cdr", false],
        [".cmx", true], [".cmx", false],
        [".dicom", true], [".dicom", false],
        [".djvu", true], [".djvu", false],
        [".gif", true], [".gif", false],
        [".odg", true], [".odg", false],
        [".otg", true], [".otg", false],
        [".psd", true], [".psd", false],
        [".webp", true], [".webp", false],
    ])
    ("FramesTestSuite_V3",
        (formatExtension, saveResultToStorage) => {
            if (!saveResultToStorage) {
                test(`getSingleFrameTest`, async () => {
                    await testClass.getSingleFrameTest(formatExtension);
                });

                test(`getFrameRangeTest`, async () => {
                    await testClass.getFrameRangeTest(formatExtension);
                });

                test(`getFramePropertiesTest`, async () => {
                    await testClass.getFramePropertiesTest(formatExtension);
                });

                test(`extractFramePropertiesTest`, async () => {
                    await testClass.extractFramePropertiesTest(formatExtension);
                });
            }

            test(`createSingleFrameTest`, async () => {
                await testClass.createSingleFrameTest(formatExtension, saveResultToStorage);
            });

            test(`createFrameRangeTest`, async () => {
                await testClass.createFrameRangeTest(formatExtension, saveResultToStorage);
            });

            beforeEach(() => {
                jest.setTimeout(ApiTester.DefaultTimeout);
            });
        },
    );
}
