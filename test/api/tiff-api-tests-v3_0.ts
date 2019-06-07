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
 * Class for testing TIFF-related API calls
 */
class TiffApiTests extends ApiTester {

    public async modifyTiffTest() {
        const name: string = "test.tiff";
        const fromScratch: boolean = false;
        const compression: string = "adobedeflate";
        const resolutionUnit: string = "inch";
        const bitDepth: number = 1;
        const horizontalResolution: number = 150;
        const verticalResolution: number = 150;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "modifyTiffTest", 
                `Input image: ${name}; Compression: ${compression}; Resolution unit: ${resolutionUnit}; Bit depth: ${bitDepth}; 
                    Horizontal resolution: ${horizontalResolution}; Vertical resolution: ${verticalResolution}`,
                name,
                async () => {
                    const request = new imaging.ModifyTiffRequest({ name, compression, resolutionUnit, bitDepth, fromScratch, 
                        horizontalResolution, verticalResolution, folder, storage });
                    const response = await this.imagingApi.modifyTiff(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(originalProperties.tiffProperties).toBeTruthy();
                    expect(resultProperties.tiffProperties).toBeTruthy();

                    let bits: number = bitDepth;
                    if (bitDepth > 1) {
                        bits = bits * 4;
                    }
                    
                    expect(bits).toEqual(resultProperties.bitsPerPixel);
                    expect(verticalResolution).toEqual(resultProperties.verticalResolution);
                    expect(horizontalResolution).toEqual(resultProperties.horizontalResolution);

                    expect(originalProperties.tiffProperties.frames.length).toEqual(resultProperties.tiffProperties.frames.length);
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async createModifiedTiffTest(saveResultToStorage: boolean) {
        const name: string = "test.tiff";
        const fromScratch: boolean = false;
        const compression: string = "adobedeflate";
        const resolutionUnit: string = "inch";
        const bitDepth: number = 1;
        const horizontalResolution: number = 150;
        const verticalResolution: number = 150;
        const outName: string = `${name}_specific.tiff`;
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testPostRequest(
                "createModifiedTiffTest", 
                saveResultToStorage,
                `Input image: ${name}; Compression: ${compression}; Resolution unit: ${resolutionUnit}; Bit depth: ${bitDepth}; 
                    Horizontal resolution: ${horizontalResolution}; Vertical resolution: ${verticalResolution}`,
                name,
                outName,
                async (inputStream, outPath) => {
                    const request = new imaging.CreateModifiedTiffRequest({ imageData: inputStream, compression, resolutionUnit, bitDepth, fromScratch, 
                        horizontalResolution, verticalResolution, outPath, storage });
                    const response = await this.imagingApi.createModifiedTiff(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(originalProperties.tiffProperties).toBeTruthy();
                    expect(resultProperties.tiffProperties).toBeTruthy();

                    let bits: number = bitDepth;
                    if (bitDepth > 1) {
                        bits = bits * 4;
                    }
                    
                    expect(bits).toEqual(resultProperties.bitsPerPixel);
                    expect(verticalResolution).toEqual(resultProperties.verticalResolution);
                    expect(horizontalResolution).toEqual(resultProperties.horizontalResolution);

                    expect(originalProperties.tiffProperties.frames.length).toEqual(resultProperties.tiffProperties.frames.length);
                    expect(originalProperties.width).toEqual(resultProperties.width);
                    expect(originalProperties.height).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async convertTiffToFaxTest() {
        const name: string = "test.tiff";
        const folder: string = this.TempFolder;
        const storage: string = this.TestStorage;

        await this.testGetRequest(
                "convertTiffToFaxTest", 
                `Input image: ${name}`,
                name,
                async () => {
                    const request = new imaging.ConvertTiffToFaxRequest({ name, storage, folder });
                    const response = await this.imagingApi.convertTiffToFax(request);
                    return response;
                },
                (originalProperties, resultProperties) => {
                    expect(originalProperties.tiffProperties).toBeTruthy();
                    expect(resultProperties.tiffProperties).toBeTruthy();
                    expect(1).toEqual(resultProperties.bitsPerPixel);
                    expect(196).toEqual(resultProperties.verticalResolution);
                    expect(204).toEqual(resultProperties.horizontalResolution);
                    expect(1728).toEqual(resultProperties.width);
                    expect(2200).toEqual(resultProperties.height);
                    return Promise.resolve();
                },
                folder,
                storage);
    }

    public async appendTiffTest() {
        console.log("appendTiffTest");

        const inputFileName: string = "test.tiff";
        const folder: string = this.TempFolder;

        if (!this.checkInputFileExists(inputFileName)) {
          throw new Error(`Input file ${inputFileName} doesn't exist in the specified storage folder: ${folder}. Please, upload it first.`);
        }

        const resultFileName: string = inputFileName + "_merged.tiff";
        let outPath: string = null;
        const storage: string = this.TestStorage;

        let passed: boolean = false;

        try {
          console.log("Input image: " + inputFileName);

          outPath = folder + "/" + resultFileName;
        
          if ((await this.imagingApi.objectExists(
            new imaging.ObjectExistsRequest ({ path: outPath, storageName: storage }))).exists) {
            await this.imagingApi.deleteFile(
                new imaging.DeleteFileRequest({ path: outPath, storageName: storage }));
          }

          await this.imagingApi.copyFile(
            new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${inputFileName}`, destPath: `${folder}/${resultFileName}`, 
            srcStorageName: storage, destStorageName: storage }));
          await this.imagingApi.copyFile(
            new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${inputFileName}`, destPath: `${folder}/${inputFileName}`, 
            srcStorageName: storage, destStorageName: storage }));

          const request: imaging.AppendTiffRequest = new imaging.AppendTiffRequest({ name: resultFileName, appendFile: inputFileName, storage, folder});
          await this.imagingApi.appendTiff(request);
          
          const resultInfo = await this.getStorageFileInfo(folder, resultFileName, storage);
          if (resultInfo == null) {
                  throw new Error(
                      `Result file ${resultFileName} doesn't exist in the specified storage folder: ${folder}. Result isn't present in the storage by an unknown reason.`);
          }

          const resultProperties = await this.imagingApi.getImageProperties(
            new imaging.GetImagePropertiesRequest({ name: resultFileName, folder, storage }));
          expect(resultProperties).toBeTruthy();

          const originalProperties = await this.imagingApi.getImageProperties(
            new imaging.GetImagePropertiesRequest({ name: inputFileName, folder, storage }));
          expect(originalProperties).toBeTruthy();

          expect(resultProperties).toBeTruthy();
          expect(originalProperties).toBeTruthy();
          expect(resultProperties.tiffProperties).toBeTruthy();
          expect(originalProperties.tiffProperties).toBeTruthy();
          expect(originalProperties.tiffProperties.frames.length * 2).toEqual(resultProperties.tiffProperties.frames.length);
          expect(originalProperties.width).toEqual(resultProperties.width);
          expect(originalProperties.height).toEqual(resultProperties.height);

          passed = true;

      } catch (e) {
          ApiTester.FailedAnyTest = true;
          console.log(e);
          throw e;
      } finally {
          if (!ApiTester.FailedAnyTest && passed && this.RemoveResult && (await this.imagingApi.objectExists(
            new imaging.ObjectExistsRequest ({ path: outPath, storageName: storage }))).exists) {
            await this.imagingApi.deleteFile(
                new imaging.DeleteFileRequest({ path: outPath, storageName: storage }));
          }

          console.log(`Test passed: ${passed}`);
      }
    }
}

const testClass: TiffApiTests = new TiffApiTests();

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
    "TiffTestSuite_V3",
    (saveResultToStorage) => {
        if (!saveResultToStorage) {
            test(`modifyTiffTest`, async () => {
                await testClass.modifyTiffTest();
            });
        }

        test(`createModifiedTiffTest: saveResultToStorage - ${saveResultToStorage}`, async () => {
            await testClass.createModifiedTiffTest(saveResultToStorage);
        });

        beforeEach(() => {
            jest.setTimeout(ApiTester.DefaultTimeout);
        });
    },
);

test(`convertTiffToFaxTest`, async () => {
    await testClass.convertTiffToFaxTest();
});

test(`appendTiffTest`, async () => {
    await testClass.appendTiffTest();
});
