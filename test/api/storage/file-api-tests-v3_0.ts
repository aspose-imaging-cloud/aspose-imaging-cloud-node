﻿/*
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
import { StorageApiTester } from "./storage-api-tester";

/**
 * Specific file API tests for Storage.
 */
class FileApiTests extends StorageApiTester {

    public async copyDownloadFileTest() {
        const folder = `${this.TempFolder}/Storage`;
        const file = "Storage.txt";
        try {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(
                    new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();

            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({
                    srcPath: `${this.OriginalDataFolder}/${file}`, destPath: `${folder}/${file}`,
                    srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            const existResponse = await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: `${folder}/${file}`, storageName: this.TestStorage }));
            expect(existResponse).toBeTruthy();
            expect(existResponse.isFolder).toBeFalsy();
            expect(existResponse.exists).toBeTruthy();

            const originalFileInfo =
                (await this.imagingApi.getFilesList(
                    new imaging.GetFilesListRequest({ path: this.OriginalDataFolder, storageName: this.TestStorage }))).
                    value.find((f) => f.name === file);
            const copiedFileInfo =
                (await this.imagingApi.getFilesList(new imaging.GetFilesListRequest({ path: folder, storageName: this.TestStorage }))).
                    value.find((f) => f.name === file);
            expect(originalFileInfo.size).toEqual(copiedFileInfo.size);

            const originalFile =
                await this.imagingApi.downloadFile(
                    new imaging.DownloadFileRequest({ path: `${this.OriginalDataFolder}/${file}`, storageName: this.TestStorage }));
            const copiedFile =
                await this.imagingApi.downloadFile(
                    new imaging.DownloadFileRequest({ path: `${folder}/${file}`, storageName: this.TestStorage }));

            expect(originalFile.length).toEqual(copiedFile.length);
            expect(originalFile.length).toEqual(originalFileInfo.size);
            expect(originalFile.toString()).toEqual(copiedFile.toString());
            expect(originalFile.toString()).toEqual(this.trim(originalFileInfo.path, "/"));
            expect(originalFile.toString().replace(this.OriginalDataFolder, folder)).toEqual(this.trim(copiedFileInfo.path, "/"));
        } finally {
            await this.imagingApi.deleteFile(
                new imaging.DeleteFileRequest({ path: `${folder}/${file}`, storageName: this.TestStorage }));
            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: `${folder}/${file}`, storageName: this.TestStorage }))).exists).toBeFalsy();

            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(
                    new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();
        }
    }

    public async moveFileTest() {
        const folder = `${this.TempFolder}/Storage`;
        const file = "Storage.txt";
        try {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();

            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${file}`, destPath: `${folder}/${file}.copied`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            let existResponse = await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: `${folder}/${file}.copied`, storageName: this.TestStorage }));
            expect(existResponse).toBeTruthy();
            expect(existResponse.isFolder).toBeFalsy();
            expect(existResponse.exists).toBeTruthy();

            await this.imagingApi.moveFile(
                new imaging.MoveFileRequest({ srcPath: `${folder}/${file}.copied`, destPath: `${folder}/${file}`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: `${folder}/${file}.copied`, storageName: this.TestStorage }))).exists).toBeFalsy();
            existResponse = await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: `${folder}/${file}`, storageName: this.TestStorage }));
            expect(existResponse).toBeTruthy();
            expect(existResponse.isFolder).toBeFalsy();
            expect(existResponse.exists).toBeTruthy();

            const originalFileInfo =
                (await this.imagingApi.getFilesList(
                    new imaging.GetFilesListRequest({ path: this.OriginalDataFolder, storageName: this.TestStorage }))).
                    value.find((f) => f.name === file);
            const movedFileInfo =
                (await this.imagingApi.getFilesList(
                    new imaging.GetFilesListRequest({ path: folder, storageName: this.TestStorage }))).
                    value.find((f) => f.name === file);
            expect(originalFileInfo.size).toEqual(movedFileInfo.size);

            const originalFile =
                await this.imagingApi.downloadFile(
                    new imaging.DownloadFileRequest({ path: `${this.OriginalDataFolder}/${file}`, storageName: this.TestStorage }));
            const copiedFile =
                await this.imagingApi.downloadFile(
                    new imaging.DownloadFileRequest({ path: `${folder}/${file}`, storageName: this.TestStorage }));

            expect(originalFile.length).toEqual(copiedFile.length);
            expect(originalFile.length).toEqual(originalFileInfo.size);
            expect(originalFile.toString()).toEqual(copiedFile.toString());
            expect(originalFile.toString()).toEqual(this.trim(originalFileInfo.path, "/"));
            expect(originalFile.toString().replace(this.OriginalDataFolder, folder)).toEqual(this.trim(movedFileInfo.path, "/"));
        } finally {
            await this.imagingApi.deleteFile(
                new imaging.DeleteFileRequest({ path: `${folder}/${file}`, storageName: this.TestStorage }));
            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: `${folder}/${file}`, storageName: this.TestStorage }))).exists).toBeFalsy();

            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(
                    new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();
        }
    }

    public async uploadFileTest() {
        const folder = `${this.TempFolder}/Storage`;
        const file = "Storage.txt";
        try {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(
                    new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();

            let originalFile =
                await this.imagingApi.downloadFile(
                    new imaging.DownloadFileRequest({ path: `${this.OriginalDataFolder}/${file}`, storageName: this.TestStorage }));
            const result =
                await this.imagingApi.uploadFile(
                    new imaging.UploadFileRequest({ path: `${folder}/${file}`, file: originalFile, storageName: this.TestStorage }));

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: `${folder}/${file}`, storageName: this.TestStorage }))).exists).toBeTruthy();
            
            expect(result).toBeTruthy();
            expect(result.errors === null || result.errors.length === 0).toBeTruthy();
            expect(result.uploaded).toBeTruthy();
            expect(result.uploaded.length).toEqual(1);
            expect(file).toEqual(result.uploaded[0]);

            const existResponse = await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: `${folder}/${file}`, storageName: this.TestStorage }));
            expect(existResponse).toBeTruthy();
            expect(existResponse.isFolder).toBeFalsy();
            expect(existResponse.exists).toBeTruthy();

            const originalFileInfo =
                (await this.imagingApi.getFilesList
                    (new imaging.GetFilesListRequest({ path: this.OriginalDataFolder, storageName: this.TestStorage }))).
                    value.find((f) => f.name === file);
            const uploadedFileInfo =
                (await this.imagingApi.getFilesList(new imaging.GetFilesListRequest({ path: folder, storageName: this.TestStorage }))).
                    value.find((f) => f.name === file);
            expect(originalFileInfo.size).toEqual(uploadedFileInfo.size);

            originalFile =
                await this.imagingApi.downloadFile(
                    new imaging.DownloadFileRequest({ path: `${this.OriginalDataFolder}/${file}`, storageName: this.TestStorage }));
            const copiedFile =
                await this.imagingApi.downloadFile(
                    new imaging.DownloadFileRequest({ path: `${folder}/${file}`, storageName: this.TestStorage }));

            expect(originalFile.length).toEqual(copiedFile.length);
            expect(originalFile.length).toEqual(originalFileInfo.size);
            expect(originalFile.toString()).toEqual(copiedFile.toString());
            expect(originalFile.toString()).toEqual(this.trim(originalFileInfo.path, "/"));
            expect(originalFile.toString().replace(this.OriginalDataFolder, folder)).toEqual(this.trim(uploadedFileInfo.path, "/"));
        } finally {
            await this.imagingApi.deleteFile(
                new imaging.DeleteFileRequest({ path: `${folder}/${file}`, storageName: this.TestStorage }));
            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: `${folder}/${file}`, storageName: this.TestStorage }))).exists).toBeFalsy();

            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(
                    new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();
        }
    }

    public async fileVersionsCreateTest() {
		
        if (this.imagingApi.configuration.onPremise) {
            return;
        }
        
        const folder = `${this.TempFolder}/Storage`;
        const file1 = "Storage.txt";
        const file2 = "Folder1/Folder1.txt";

        const file1Size = (await this.imagingApi.getFilesList(
            new imaging.GetFilesListRequest({ path: this.OriginalDataFolder, storageName: this.TestStorage })))
            .value.find((f) => f.name === file1).size;
        const file2Size = (await this.imagingApi.getFilesList(
            new imaging.GetFilesListRequest({ path: `${this.OriginalDataFolder}/Folder1`, storageName: this.TestStorage })))
            .value.find((f) => f.name === "Folder1.txt").size;

        try {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(
                    new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();

            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${file1}`, destPath: `${folder}/${file1}`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${file2}`, destPath: `${folder}/${file1}`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            const versions =
                (await this.imagingApi.getFileVersions(
                    new imaging.GetFileVersionsRequest({ path: `${folder}/${file1}`, storageName: this.TestStorage })))
                    .value;
            expect(versions.length).toEqual(2);
            const recentVersion = versions.find((v) => v.isLatest);
            const oldVersion = versions.find((v) => !v.isLatest);
            const recentVersionSize = recentVersion.size;
            const oldVersionSize = oldVersion.size;
            expect(recentVersionSize).not.toEqual(oldVersionSize);
            expect(oldVersionSize).toEqual(file1Size);
            expect(recentVersionSize).toEqual(file2Size);
        } finally {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(
                    new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }
        }
    }

    public async fileVersionsDownloadTest() {
        if (this.imagingApi.configuration.onPremise) {
            return;
        }

        const folder = `${this.TempFolder}/Storage`;
        const file1 = "Storage.txt";
        const file2 = "Folder1/Folder1.txt";

        try {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(
                    new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();

            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${file1}`, destPath: `${folder}/${file1}`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${file2}`, destPath: `${folder}/${file1}`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            const versions =
                (await this.imagingApi.getFileVersions(
                    new imaging.GetFileVersionsRequest({ path: `${folder}/${file1}`, storageName: this.TestStorage })))
                    .value;
            const recentVersion = versions.find((v) => v.isLatest);
            const oldVersion = versions.find((v) => !v.isLatest);
            const recentVersionSize = recentVersion.size;
            const oldVersionSize = oldVersion.size;

            const oldFile =
                await this.imagingApi.downloadFile(new imaging.DownloadFileRequest({ path: `${folder}/${file1}`, 
                storageName: this.TestStorage, versionId: oldVersion.versionId }));
            expect(oldVersionSize).toEqual(oldFile.length);

            const recentFile =
                await this.imagingApi.downloadFile(new imaging.DownloadFileRequest({ path: `${folder}/${file1}`, 
                storageName: this.TestStorage, versionId: recentVersion.versionId }));
            expect(recentVersionSize).toEqual(recentFile.length);
        } finally {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(
                    new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }
        }
    }

    public async fileVersionsCopyTest() {
        if (this.imagingApi.configuration.onPremise) {
            return;
        }

        const folder = `${this.TempFolder}/Storage`;
        const file1 = "Storage.txt";
        const file2 = "Folder1/Folder1.txt";

        try {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(
                    new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();

            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${file1}`, destPath: `${folder}/${file1}`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${file2}`, destPath: `${folder}/${file1}`,
                 srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            const versions =
                (await this.imagingApi.getFileVersions(
                    new imaging.GetFileVersionsRequest({ path: `${folder}/${file1}`, storageName: this.TestStorage })))
                    .value;
            const recentVersion = versions.find((v) => v.isLatest);
            const oldVersion = versions.find((v) => !v.isLatest);

            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${folder}/${file1}`, destPath: `${folder}/${file1}.recent`,
                    srcStorageName: this.TestStorage, destStorageName: this.TestStorage, versionId: recentVersion.versionId }));
            let copiedVersions = (await this.imagingApi.getFileVersions(
                new imaging.GetFileVersionsRequest({ path: `${folder}/${file1}.recent`, storageName: this.TestStorage }))).value;
            expect(copiedVersions.length).toEqual(1);
            expect(copiedVersions[0].isLatest).toBeTruthy();
            expect(recentVersion.size).toEqual(copiedVersions[0].size);

            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${folder}/${file1}`, destPath: `${folder}/${file1}.old`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage, versionId: oldVersion.versionId }));
            copiedVersions =
                (await this.imagingApi
                    .getFileVersions(new imaging.GetFileVersionsRequest({ path: `${folder}/${file1}.old`, 
                    storageName: this.TestStorage }))).value;

            expect(copiedVersions.length).toEqual(1);
            expect(copiedVersions[0].isLatest).toBeTruthy();
            expect(oldVersion.size).toEqual(copiedVersions[0].size);
        } finally {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(
                    new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }
        }
    }

    public async fileVersionsMoveTest() {
        if (this.imagingApi.configuration.onPremise) {
            return;
        }

        const folder = `${this.TempFolder}/Storage`;
        const file1 = "Storage.txt";
        const file2 = "Folder1/Folder1.txt";

        try {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(
                    new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();

            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${file1}`, destPath: `${folder}/${file1}`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${file2}`, destPath: `${folder}/${file1}`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            let versions =
                (await this.imagingApi.getFileVersions(
                    new imaging.GetFileVersionsRequest({ path: `${folder}/${file1}`, storageName: this.TestStorage })))
                    .value;
            const recentVersion = versions.find((v) => v.isLatest);

            await this.imagingApi.moveFile(
                new imaging.MoveFileRequest({ srcPath: `${folder}/${file1}`, destPath: `${folder}/${file1}.recent`, srcStorageName: this.TestStorage, 
                destStorageName: this.TestStorage, versionId: recentVersion.versionId }));
            let copiedVersions =
                (await this.imagingApi
                    .getFileVersions(new imaging.GetFileVersionsRequest({ path: `${folder}/${file1}.recent`, storageName: this.TestStorage })))
                    .value;
            expect(copiedVersions.length).toEqual(1);
            expect(copiedVersions[0].isLatest).toBeTruthy();
            expect(recentVersion.size).toEqual(copiedVersions[0].size);

            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${file1}`, destPath: `${folder}/${file1}`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${file2}`, destPath: `${folder}/${file1}`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            versions =
                (await this.imagingApi.getFileVersions(new imaging.GetFileVersionsRequest({ path: `${folder}/${file1}`, storageName: this.TestStorage })))
                    .value;
            const oldVersion = versions.find((v) => !v.isLatest);
            await this.imagingApi.moveFile(
                new imaging.MoveFileRequest({ srcPath: `${folder}/${file1}`, destPath: `${folder}/${file1}.old`, srcStorageName: 
                this.TestStorage, destStorageName: this.TestStorage, versionId: oldVersion.versionId }));
            copiedVersions =
                (await this.imagingApi
                    .getFileVersions(new imaging.GetFileVersionsRequest({ path: `${folder}/${file1}.old`, storageName: this.TestStorage })))
                    .value;
            expect(copiedVersions.length).toEqual(1);
            expect(copiedVersions[0].isLatest).toBeTruthy();
            expect(oldVersion.size).toEqual(copiedVersions[0].size);
        } finally {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }
        }
    }

    public async fileVersionsDeleteTest() {
        if (this.imagingApi.configuration.onPremise) {
            return;
        }

        const folder = `${this.TempFolder}/Storage`;
        const file1 = "Storage.txt";
        const file2 = "Folder1/Folder1.txt";

        try {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(
                    new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }

            expect((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists).toBeFalsy();

            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${file1}`, destPath: `${folder}/${file1}`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            await this.imagingApi.copyFile(
                new imaging.CopyFileRequest({ srcPath: `${this.OriginalDataFolder}/${file2}`, destPath: `${folder}/${file1}`, 
                srcStorageName: this.TestStorage, destStorageName: this.TestStorage }));
            let versions =
                (await this.imagingApi.getFileVersions(
                    new imaging.GetFileVersionsRequest({ path: `${folder}/${file1}`, storageName: this.TestStorage })))
                    .value;
            const recentVersion = versions.find((v) => v.isLatest);
            const oldVersion = versions.find((v) => !v.isLatest);
            expect((await this.imagingApi
                .objectExists(new imaging.ObjectExistsRequest({ path: `${folder}/${file1}`, storageName: 
                this.TestStorage, versionId: recentVersion.versionId }))).exists).toBeTruthy();
            expect((await this.imagingApi
                .objectExists(new imaging.ObjectExistsRequest({ path: `${folder}/${file1}`, 
                storageName: this.TestStorage, versionId: oldVersion.versionId }))).exists).toBeTruthy();

            await this.imagingApi.deleteFile(
                new imaging.DeleteFileRequest({ path: `${folder}/${file1}`, storageName: this.TestStorage, versionId: recentVersion.versionId }));
            versions =
                (await this.imagingApi.getFileVersions(
                    new imaging.GetFileVersionsRequest({ path: `${folder}/${file1}`, storageName: this.TestStorage })))
                    .value;
            expect((await this.imagingApi
                .objectExists(new imaging.ObjectExistsRequest({ path: `${folder}/${file1}`, storageName: this.TestStorage, 
                versionId: recentVersion.versionId }))).exists).toBeFalsy();
            expect((await this.imagingApi
                .objectExists(new imaging.ObjectExistsRequest({ path: `${folder}/${file1}`, storageName: this.TestStorage, 
                versionId: oldVersion.versionId }))).exists).toBeTruthy();
            expect(versions.length).toEqual(1);
            expect(oldVersion.size).toEqual(versions[0].size);

            await this.imagingApi.deleteFile(new imaging.DeleteFileRequest({ path: `${folder}/${file1}`, 
            storageName: this.TestStorage, versionId: oldVersion.versionId }));
            expect((await this.imagingApi
                .objectExists(new imaging.ObjectExistsRequest({ path: `${folder}/${file1}`, storageName: this.TestStorage }))).exists);
        } finally {
            if ((await this.imagingApi.objectExists(
                new imaging.ObjectExistsRequest({ path: folder, storageName: this.TestStorage }))).exists) {
                await this.imagingApi.deleteFolder(new imaging.DeleteFolderRequest({ path: folder, storageName: this.TestStorage, recursive: true }));
            }
        }
    }
}

const testClass: FileApiTests = new FileApiTests();

beforeEach(() => {
    jest.setTimeout(StorageApiTester.DefaultTimeout);
});

beforeAll(async () => {
    await testClass.beforeAll();
});

afterAll(async () => {
    await testClass.afterAll();
});

test(`copyDownloadFileTest`, async () => {
    await testClass.copyDownloadFileTest();
});

test(`moveFileTest`, async () => {
    await testClass.moveFileTest();
});

test(`uploadFileTest`, async () => {
    await testClass.uploadFileTest();
});

test(`fileVersionsCreateTest`, async () => {
	// IMAGINGCLOUD-644
    // await testClass.fileVersionsCreateTest();
});

test(`fileVersionsDownloadTest`, async () => {
	// IMAGINGCLOUD-644
    // await testClass.fileVersionsDownloadTest();
});

test(`fileVersionsCopyTest`, async () => {
	// IMAGINGCLOUD-644
    // await testClass.fileVersionsCopyTest();
});

test(`fileVersionsMoveTest`, async () => {
	// IMAGINGCLOUD-644
    // await testClass.fileVersionsMoveTest();
});

test(`fileVersionsDeleteTest`, async () => {
	// IMAGINGCLOUD-644
    // await testClass.fileVersionsDeleteTest();
});
