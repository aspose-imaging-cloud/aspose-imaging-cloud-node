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

import * as imaging from "../../../lib/api";
import {ApiTester} from "../../base/api-tester";

/**
 * Class for testing object detection API calls
 */
class ObjectDetectionApiTests extends ApiTester {

    public async objectDetectionImageTest() {
        const name: string = "object_detection_example.jpg";
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name !== name) {
                continue;
            }

            await this.testObjectDetectionGetRequest(
                    "objectDetectionImageTest",
                    `Input image: ${name}; `,
                    name,
                    async () => {
                        const request: imaging.ObjectBoundsRequest = new imaging.ObjectBoundsRequest({ name,
                            folder, storage });
                        const result = await this.imagingApi.objectBounds(request);
                        return result;
                    },
                    (detectedObjectsList) => {
                        expect(detectedObjectsList).toBeTruthy();
                        expect(detectedObjectsList.detectedObjects).toBeTruthy();
                        expect(detectedObjectsList.detectedObjects.length).toBeGreaterThan(0);
                        return Promise.resolve();
                    },
                    folder,
                    storage);

            await this.testGetRequest(
                "visualObjectDetectionImageTest",
                `Input image: ${name}; `,
                name,
                async () => {
                    const request: imaging.VisualObjectBoundsRequest = new imaging.VisualObjectBoundsRequest({ name,
                        folder, storage });
                    return await this.imagingApi.visualObjectBounds(request);
                },
                (imagingResponse) => {
                    expect(imagingResponse).toBeTruthy();
                    return Promise.resolve();
                },
                folder,
                storage);

        }
    }

    public async createObjectDetectionTest(
        saveResultToStorage: boolean,
        ) {
        const name: string = "object_detection_example.jpg";
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        for (const inputFile of this.InputTestFiles) {
            if (inputFile.name !== name) {
                continue;
            }

            await this.testObjectDetectionPostRequest(
                "createObjectBoundsTest",
                saveResultToStorage,
                `Input image: ${name};`,
                name,
                "object_detection_result.jpg",
                async (inputStream, outPath) => {
                    const request: imaging.CreateObjectBoundsRequest
                        = new imaging.CreateObjectBoundsRequest(
                        { imageData: inputStream, includeClass: true, includeScore: true, outPath, storage });
                    return await this.imagingApi.createObjectBounds(request);
                },
                (detectedObjectsList) => {
                    expect(detectedObjectsList).toBeTruthy();
                    expect(detectedObjectsList.detectedObjects).toBeTruthy();
                    expect(detectedObjectsList.detectedObjects.length).toBeGreaterThan(0);
                    return Promise.resolve();
                },
                folder,
                storage);

            await this.testPostRequest(
                    "createVisualObjectBoundsTest",
                    saveResultToStorage,
                    `Input image: ${name};`,
                    name,
                    "object_detection_result.jpg",
                    async (inputStream, outPath) => {
                        const request: imaging.CreateVisualObjectBoundsRequest
                            = new imaging.CreateVisualObjectBoundsRequest(
                                { imageData: inputStream, includeClass: true, includeScore: true, outPath, storage });
                        return await this.imagingApi.createVisualObjectBounds(request);
                    },
                    (originalProperties, resultProperties) => {
                        expect(originalProperties).toBeTruthy();
                        expect(resultProperties).toBeTruthy();
                        return Promise.resolve();
                    },
                    folder,
                    storage);
        }
    }
}

const testClass: ObjectDetectionApiTests = new ObjectDetectionApiTests();

beforeEach(() => {
    jest.setTimeout(ApiTester.DefaultTimeout);
});

beforeAll(async () =>  {
    await testClass.beforeAll();
});

afterAll(async () =>  {
    await testClass.afterAll();
});

describe.each([true, false])(
    "ObjectDetectionTestSuite_V3",
    (saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`objectDetectionTest`, async () => {
                await testClass.objectDetectionImageTest();
            });
        }

        test(`createobjectDetectionTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createObjectDetectionTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);
