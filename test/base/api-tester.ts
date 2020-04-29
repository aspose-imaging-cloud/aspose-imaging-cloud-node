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

import * as fs from "fs";
import * as path from "path";
import * as imaging from "../../lib/api";

export type PropertiesTesterDelegate = (originalProperties: imaging.ImagingResponse, resultProperties: imaging.ImagingResponse, resultBuffer: Buffer) => Promise<void>;
export type GetRequestInvokerDelegate = () => Promise<Buffer>;
export type PostRequestInvokerDelegate = (inputStream: Buffer, outPath: string) => Promise<Buffer>;

/**
 * API tester base class.
 */
export abstract class ApiTester {

    /**
     * The default timeout (ms)
     */
    public static readonly DefaultTimeout: number = 600000;

    /**
     * If any test failed
     */
    protected static FailedAnyTest: boolean = false;

    /**
     * The server access file
     */
    protected readonly ServerAccessFile: string = "serverAccess.json";

    /**
     * The API version
     */
    protected readonly ApiVersion: string = "v3.0";

    /**
     * The base URL
     */
    protected readonly BaseUrl: string = "https://api.aspose.cloud/";

    /**
     * The local test folder
     */
    protected readonly LocalTestFolder: string = "testdata";

    /**
     * The default cloud storage
     */
    protected readonly DefaultStorage: string = "Imaging-CI";

    /**
     * The basic export formats
     */
    protected readonly BasicExportFormats: string[] =
    [
        "bmp",
        "gif",
        "jpg",
        "png",
        "psd",
        "tiff",
        "webp",
    ];

    /**
     * Cloud test folder prefix.
     */
    protected readonly CloudTestFolderPrefix: string = "ImagingCloudTestNodeJS";

    /**
     * Original data folder.
     */
    protected readonly OriginalDataFolder: string = "ImagingIntegrationTestData";

    /**
     * Gets or sets a value indicating whether resulting images should be removed from cloud storage.
     */
    protected RemoveResult: boolean = true;

    /**
     * Input test files info
     */
    protected InputTestFiles: imaging.StorageFile[];

    /**
     * Basic input test files info
     */
    protected BasicInputTestFiles: imaging.StorageFile[];

    /**
     * Multipage input test files info
     */
    protected MultipageInputTestFiles: imaging.StorageFile[];

    /**
     * Dynamic temp folder name.
     */
    protected TempFolder: string;

    /**
     * Current test storage
     */
    protected TestStorage: string;

    /**
     * Aspose.Imaging Cloud API
     */
    protected imagingApi: imaging.ImagingApi;

    /**
     * Setup method
     */
    public async beforeAll() {
        let tempPostfix: string = process.env.BUILD_NUMBER;
        if (!tempPostfix) {
            tempPostfix = require("os").userInfo().username;
        }
        this.TempFolder = `${this.CloudTestFolderPrefix}_${tempPostfix}`;

        this.TestStorage = process.env.StorageName;

        if (!this.TestStorage) {
            console.log("Storage name is not set by environment variable. Using the default one.");
            this.TestStorage = this.DefaultStorage;
        }

        await this.createApiInstances();
        if (!ApiTester.FailedAnyTest && this.RemoveResult && 
            (await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest ({ path: this.TempFolder, storageName: this.TestStorage }))).exists) {
            await this.imagingApi.deleteFolder(
                new imaging.DeleteFolderRequest({ storageName: this.TestStorage, path: this.TempFolder, recursive: true }));
            await this.imagingApi.createFolder(
                new imaging.CreateFolderRequest({ path: this.TempFolder, storageName: this.TestStorage }));
        } 
    }
    
    /**
     * Teardown method
     */
    public async afterAll() {
        if (!ApiTester.FailedAnyTest && this.RemoveResult && 
            (await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest ({ path: this.TempFolder, storageName: this.TestStorage }))).exists) {
            await this.imagingApi.deleteFolder(
                new imaging.DeleteFolderRequest({ storageName: this.TestStorage, path: this.TempFolder, recursive: true }));
        } 
    }

    /**
     * Creates the API instances using given access parameters.
     */
    protected async createApiInstances() {
        console.log("Trying to obtain the creds from environment variables.");
        const onPremise = process.env.OnPremise === "true";
        let appKey = onPremise ? undefined : process.env.AppKey;
        let appSid = onPremise ? undefined : process.env.AppSid;
        let baseUrl = process.env.ApiEndpoint;
        let apiVersion = process.env.ApiVersion;

        if ((!onPremise && (!appKey || !appSid)) || !baseUrl || !apiVersion) {
            console.log("Access data isn't set completely by environment variables. Filling unset data with default values.");
        }

        if (!apiVersion) {
            apiVersion = this.ApiVersion;
            console.log("Set default API version");
        }

        const serverAccessPath: string = path.join(this.LocalTestFolder, this.ServerAccessFile);
        const stats = fs.statSync(serverAccessPath);
        if (stats && stats.isFile() && stats.size > 0) {
            const accessData: any = JSON.parse(fs.readFileSync(serverAccessPath).toString());
            if (!appKey && !onPremise) {
                appKey = accessData.AppKey;
                console.log("Set default App key");
            }

            if (!appSid && !onPremise) {
                appSid = accessData.AppSid;
                console.log("Set default App SID");
            }

            if (!baseUrl) {
                baseUrl = accessData.BaseURL;
                console.log("Set default base URL");
            }
        } else if (!onPremise) {
            throw new Error("Please, specify valid access data (AppKey, AppSid, Base URL)");
        }

        console.log(`On-premise: ${onPremise}`);
        console.log(`App key: ${appKey}`);
        console.log(`App SID: ${appSid}`);
        console.log(`Storage: ${this.TestStorage}`);
        console.log(`Base URL: ${baseUrl}`);
        console.log(`API version: ${apiVersion}`);

        this.imagingApi = new imaging.ImagingApi(appKey, appSid, baseUrl, false, apiVersion);
        this.InputTestFiles = await this.fetchInputTestFilesInfo();
        this.BasicInputTestFiles = this.InputTestFiles.filter(function(element)  { return !element.name.startsWith("multipage_"); });
        this.MultipageInputTestFiles = this.InputTestFiles.filter(function(element)  { return element.name.startsWith("multipage_"); });
    }

    /**
     * Checks if input file exists
     * @param inputFileName Input file name
     */
    protected checkInputFileExists(inputFileName: string): boolean {
        for (const storageFileInfo of this.InputTestFiles) {
            if (storageFileInfo.name === inputFileName) {
                return true;
            }
        }

        return false;
    }

    /**
     * Gets the storage file information.
     * @param folder The folder which contains a file.
     * @param fileName Name of the file.
     * @param storage The storage.
     */
    protected async getStorageFileInfo(folder: string, fileName: string, storage: string): Promise<imaging.StorageFile> {
        const files = await this.imagingApi.getFilesList(
            new imaging.GetFilesListRequest({ path: folder, storageName: storage }));
        for (const storageFileInfo of files.value) {
            if (storageFileInfo.name === fileName) {
                return Promise.resolve(storageFileInfo);
            }
        }

        return Promise.resolve(null);
    }

     /**
      * Tests the typical GET request.
      * @param testMethodName Name of the test method.
      * @param parametersLine The parameters line.
      * @param inputFileName Name of the input file.
      * @param requestInvoker The request invoker.
      * @param propertiesTester The properties tester.
      * @param folder The input folder.
      * @param storage The storage.
      */
    protected async testGetRequest(testMethodName: string, parametersLine: string, inputFileName: string,
                                   requestInvoker: GetRequestInvokerDelegate, propertiesTester: PropertiesTesterDelegate, folder: string, 
                                   storage: string = this.DefaultStorage) {

            await this.testRequest(testMethodName, false, parametersLine, inputFileName, null, 
                () => this.obtainGetResponse(requestInvoker), propertiesTester, folder, storage);
    }

     /**
      * Tests the typical POST request.
      * @param testMethodName Name of the test method.
      * @param saveResultToStorage If set to true, save result to storage.
      * @param parametersLine The parameters line.
      * @param inputFileName Name of the input file.
      * @param resultFileName Name of the result file.
      * @param requestInvoker The request invoker.
      * @param propertiesTester The properties tester.
      * @param folder The input folder.
      * @param storage The storage.
      */
    protected async testPostRequest(testMethodName: string, saveResultToStorage: boolean, parametersLine: string, inputFileName: string, resultFileName: string,
                                    requestInvoker: PostRequestInvokerDelegate, propertiesTester: PropertiesTesterDelegate, folder: string, 
                                    storage: string = this.DefaultStorage) {
            let outPath: string = "";
            if (saveResultToStorage) {
                outPath = `${folder}/${resultFileName}`;
            }

            await this.testRequest(testMethodName, saveResultToStorage, parametersLine, inputFileName, resultFileName, 
                () => this.obtainPostResponse(folder + "/" + inputFileName, outPath, storage, requestInvoker), propertiesTester, folder, storage);
    }

    /**
     * Copies original test file to specified folder in cloud
     * @param inputFileName The original test file name
     * @param folder The folder
     * @param storage The storage
     */
    protected async copyInputFileToTestFolder(inputFileName: string, folder: string, storage: string) {
        if (!this.checkInputFileExists(inputFileName)) {
            throw new Error(`Input file ${inputFileName} doesn't exist in the specified storage folder: ${folder}. Please, upload it first.`);
        }

        await this.imagingApi.copyFile(
            new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${inputFileName}`, destPath: `${folder}/${inputFileName}`,
                srcStorageName: storage, destStorageName: storage }));
    }

    /**
     * Obtains the typical GET request response.
     * @param requestInvoker The output path to save the result.
     */
    private async obtainGetResponse(requestInvoker: GetRequestInvokerDelegate) {
        const response: Buffer = await requestInvoker.call(null);
        expect(response).toBeTruthy();
        expect(response.length).toBeGreaterThan(0);
        return response;
    }

    /**
     * Obtains the typical POST request response.
     * @param inputPath The input path.
     * @param outPath The output path to save the result.
     * @param storage The storage.
     * @param requestInvoker The request invoker.
     */
    private async obtainPostResponse(inputPath: string, outPath: string, storage: string, requestInvoker: PostRequestInvokerDelegate) {
        const responseBody = await this.imagingApi.downloadFile(
            new imaging.DownloadFileRequest({ path: inputPath, storageName: storage}));
        const response: Buffer = await requestInvoker.call(null, responseBody, outPath);
        if (!outPath) {
            expect(response).toBeTruthy();
            expect(response.length).toBeGreaterThan(0);
            return response;
        }

        return null;
    }

    /**
     * Fetches the input test files info.
     */
    private async fetchInputTestFilesInfo(): Promise<imaging.StorageFile[]> {
        return (await this.imagingApi.getFilesList(
            new imaging.GetFilesListRequest({path: this.OriginalDataFolder, storageName: this.TestStorage}))).
            value;
    }

    /**
     * Tests the typical request.
     * @param testMethodName Name of the test method.
     * @param saveResultToStorage If set to true, save result to storage.
     * @param parametersLine The parameters line.
     * @param inputFileName Name of the input file.
     * @param resultFileName Name of the result file.
     * @param invokeRequestAction The invoke request action.
     * @param propertiesTester The properties tester.
     * @param folder The folder.
     * @param storage The storage.
     */
    private async testRequest(testMethodName: string, saveResultToStorage: boolean, parametersLine: string, inputFileName: string, resultFileName: string, 
                              invokeRequestAction: () => Promise<Buffer>, propertiesTester: PropertiesTesterDelegate, folder: string, storage: string = this.DefaultStorage) {
                            console.log(testMethodName);

                            await this.copyInputFileToTestFolder(inputFileName, folder, storage);

                            let passed: boolean = false;
                            let outPath: string = null;

                            try {
                                console.log(parametersLine);

                                if (saveResultToStorage) {
                                    outPath = folder + "/" + resultFileName;
                                    if ((await this.imagingApi.objectExists(
                                        new imaging.ObjectExistsRequest ({ path: outPath, storageName: storage }))).exists) {
                                        await this.imagingApi.deleteFile(
                                            new imaging.DeleteFileRequest({ path: outPath, storageName: storage }));
                                    }
                                }

                                let resultProperties: imaging.ImagingResponse = null;
                                const response = await invokeRequestAction();

                                if (saveResultToStorage) {
                                    const resultInfo = await this.getStorageFileInfo(folder, resultFileName, storage);
                                    if (resultInfo == null) {
                                        throw new Error(
                                            `Result file ${resultFileName} doesn't exist in the specified storage folder: ${folder}. 
                                            Result isn't present in the storage by an unknown reason.`);
                                    }
                                    if (!resultFileName.endsWith(".pdf")) {
                                        resultProperties = await this.imagingApi.getImageProperties(
                                            new imaging.GetImagePropertiesRequest({ name: resultFileName, folder, storage }));
                                        expect(resultProperties).toBeTruthy();
                                    }
                                } else if (!await this.fileIsPdf(response)) {
                                    resultProperties = await this.imagingApi.extractImageProperties(
                                        new imaging.ExtractImagePropertiesRequest({ imageData: response }));
                                    expect(resultProperties).toBeTruthy();
                                }
                                
                                const originalProperties = await this.imagingApi.getImageProperties(
                                    new imaging.GetImagePropertiesRequest({ name: inputFileName, folder, storage }));
                                expect(originalProperties).toBeTruthy();

                                if (propertiesTester && resultProperties) {
                                    await propertiesTester.call(null, originalProperties, resultProperties, response);
                                }

                                passed = true;

                            } catch (e) {
                                ApiTester.FailedAnyTest = true;
                                console.log(e);
                                throw e;
                            } finally {
                                if (!ApiTester.FailedAnyTest && passed && saveResultToStorage && this.RemoveResult && (await this.imagingApi.objectExists(
                                    new imaging.ObjectExistsRequest ({ path: outPath, storageName: storage }))).exists) {
                                    await this.imagingApi.deleteFile(
                                        new imaging.DeleteFileRequest({ path: outPath, storageName: storage }));
                                }
                
                                console.log(`Test passed: ${passed}`);
                                console.warn(`Heap usage: ${process.memoryUsage().heapUsed / (1024 * 1024)} MB`);
                                console.warn(`Heap total: ${process.memoryUsage().heapTotal / (1024 * 1024)} MB`);
                                console.warn(`RSS: ${process.memoryUsage().rss / (1024 * 1024)} MB`);
                            }
    }

    /**
     * Checks that stream represents PDF file
     * @param file The file stream
     */
    private async fileIsPdf(file: Buffer) {
        return file[0] === 0x25 && file[1] === 0x50 && file[2] === 0x44 && file[3] === 0x46 &&
            file[4] === 0x2d;
    }
}
