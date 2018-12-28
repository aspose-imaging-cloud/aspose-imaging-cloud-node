### Imaging - Convert to another format (other operations are similar to use)
```ts
// optional parameters are base URL, API version, authentication type and debug mode
// default base URL is https://api.aspose.cloud/
// default API version is v2
// default authentication type is OAuth2.0
// default debug mode is false
const imagingApi = new imaging.ImagingApi("yourAppKey", "yourAppSID");

// this GET request converts image files
// optional parameters are output file path, input file folder and Aspose storage name (if you have more than one storage and want to use non-default one) 
// if output file path is not set, resulting image is returned in a stream; otherwise, it's saved at the specified path in the storage and null is returned
const getSaveRequest = new imaging.GetImageSaveAsRequest({ 
    name: "inputImage.jpg", format: "png", outPath: "ResultFolder/resultImage.png", folder: "InputFolder" });

// returns null, saves result to storage
await imagingApi.getImageSaveAs(getSaveRequest);

const getStreamRequest = new imaging.GetImageSaveAsRequest({ 
    name: "inputImage.jpg", format: "png", outPath: null, folder: "InputFolder" });

// returns resulting stream
const resultGetImageStream: Buffer = await imagingApi.getImageSaveAs(getStreamRequest);
// process resulting stream

// another option is to use POST request and send image in a stream, if it's not present in your storage
let inputImageStream: Buffer = fs.readFileSync("yourLocalImagePath");
const postSaveRequest = new imaging.PostImageSaveAsRequest({ 
    imageData: inputImageStream, format: "png", outPath: "ResultFolder/resultImage.png" });

// returns null, saves result to storage
await imagingApi.postImageSaveAs(postSaveRequest);

inputImageStream = fs.readFileSync("yourAnotherImagePath");
const postStreamRequest = new imaging.PostImageSaveAsRequest({ imageData: inputImageStream, format: "png" });

// returns resulting stream
const resultPostImageStream: Buffer = await imagingApi.postImageSaveAs(postStreamRequest);
// process resulting stream

// another Imaging requests typically follow the same principles
```

### Imaging.AI - Compare two images
```ts
// optional parameters are base URL, API version, authentication type and debug mode
// default base URL is https://api.aspose.cloud/
// default API version is v2
// default authentication type is OAuth2.0
// default debug mode is false
const imagingApi = new imaging.ImagingApi("yourAppKey", "yourAppSID");
 
// create search context or use existing search context ID if search context was created earlier
const apiResponse = await imagingApi.postCreateSearchContext(new imaging.PostCreateSearchContextRequest());
const searchContextId = apiResponse.id;
 
// specify images for comparing (image ID is a path to image in storage)
const imageInStorage1 = "WorkFolder\Image1.jpg";
const imageInStorage2 = "WorkFolder\Image2.jpg";
  
// compare images
const response = await imagingApi.postSearchContextCompareImages(
    new imaging.PostSearchContextCompareImagesRequest({ searchContextId, imageId1: imageInStorage1, imageId2: imageInStorage2 }));
const similarity = response.results[0].similarity;
```

### Imaging.AI - Find similar images
```ts
// optional parameters are base URL, API version, authentication type and debug mode
// default base URL is https://api.aspose.cloud/
// default API version is v2
// default authentication type is OAuth2.0
// default debug mode is false
const imagingApi = new imaging.ImagingApi("yourAppKey", "yourAppSID");
 
// create search context or use existing search context ID if search context was created earlier
const apiResponse = await imagingApi.postCreateSearchContext(new imaging.PostCreateSearchContextRequest());
const searchContextId = apiResponse.id;
 
// extract images features if it was not done before
await imagingApi.postSearchContextExtractImageFeatures(
    new imaging.PostSearchContextExtractImageFeaturesRequest({ searchContextId, imageId: null, imagesFolder: "WorkFolder" }));
 
// wait 'till image features extraction is completed
while ((await imagingApi.getSearchContextStatus(new imaging.GetSearchContextStatusRequest({ searchContextId }))).searchStatus !== "Idle") {
     await new Promise((resolve) => setTimeout(resolve, 10000));
}    
 
const imageFromStorage: boolean = true;
 
let results: imaging.SearchResultsSet;
if (imageFromStorage) {
    // use search image from storage
    const storageImageId = "searhImage.jpg";
    results = await imagingApi.getSearchContextFindSimilar(
        new imaging.GetSearchContextFindSimilarRequest({ 
            searchContextId: apiResponse.id, similarityThreshold: 90, maxCount: 5, imageData: null, imageId: storageImageId }));
} else {
    // load search image as a stream
    const imageStream: Buffer = fs.readFileSync("yourLocalImagePath");
    results = await imagingApi.getSearchContextFindSimilar(
            new imaging.GetSearchContextFindSimilarRequest({ 
                searchContextId: apiResponse.id, similarityThreshold: 90, maxCount: 5, imageData: imageStream }));
}
             
// process search results
for (const searchResult of results.results) {
   console.log(`ImageName: ${searchResult.imageId}, Similarity: ${searchResult.similarity}`);
}
```

### Imaging.AI - Find duplicate images
```ts
// optional parameters are base URL, API version, authentication type and debug mode
// default base URL is https://api.aspose.cloud/
// default API version is v2
// default authentication type is OAuth2.0
// default debug mode is false
const imagingApi = new imaging.ImagingApi("yourAppKey", "yourAppSID");
 
// create search context or use existing search context ID if search context was created earlier
const apiResponse = await imagingApi.postCreateSearchContext(new imaging.PostCreateSearchContextRequest());
const searchContextId = apiResponse.id;
 
// extract images features if it was not done before
await imagingApi.postSearchContextExtractImageFeatures(
    new imaging.PostSearchContextExtractImageFeaturesRequest({ searchContextId, imageId: null, imagesFolder: "WorkFolder" }));
 
// wait 'till image features extraction is completed
while ((await imagingApi.getSearchContextStatus(new imaging.GetSearchContextStatusRequest({ searchContextId }))).searchStatus !== "Idle") {
    await new Promise((resolve) => setTimeout(resolve, 10000));
}    

// request finding duplicates
const response = await imagingApi.getSearchContextFindDuplicates(
    new imaging.GetSearchContextFindDuplicatesRequest({ searchContextId, similarityThreshold: 90 }));
 
// process duplicates search results
for (const duplicates of response.duplicates) {
    console.log("Duplicates:");
    for (const duplicate of duplicates.duplicateImages) { 
        console.log(
           `ImageName: ${duplicate.imageId}, Similarity: ${duplicate.similarity}`);
    }
}
```

### Imaging.AI - Search images by tags
```ts
// optional parameters are base URL, API version, authentication type and debug mode
// default base URL is https://api.aspose.cloud/
// default API version is v2
// default authentication type is OAuth2.0
// default debug mode is false
const imagingApi = new imaging.ImagingApi("yourAppKey", "yourAppSID");
 
// create search context or use existing search context ID if search context was created earlier
const apiResponse = await imagingApi.postCreateSearchContext(new imaging.PostCreateSearchContextRequest());
const searchContextId = apiResponse.id;
 
// extract images features if it was not done before
await imagingApi.postSearchContextExtractImageFeatures(
    new imaging.PostSearchContextExtractImageFeaturesRequest({ searchContextId, imageId: null, imagesFolder: "WorkFolder" }));
 
// wait 'till image features extraction is completed
while ((await imagingApi.getSearchContextStatus(new imaging.GetSearchContextStatusRequest({ searchContextId }))).searchStatus !== "Idle") {
    await new Promise((resolve) => setTimeout(resolve, 10000));
}    
 
const tag = "MyTag";
// load tag image as a stream
const tagImageStream: Buffer = fs.readFileSync("yourLocalImage");
await imagingApi.postSearchContextAddTag(
    new imaging.PostSearchContextAddTagRequest({ imageData: tagImageStream, searchContextId, tagName: tag }));
 
// serialize search tags collection to JSON
const searchTags = JSON.stringify([ tag ]);
 
// search images by tags
const response = await imagingApi.postSearchContextFindByTags(
    new imaging.PostSearchContextFindByTagsRequest({ tags: searchTags, searchContextId, similarityThreshold: 90, maxCount: 10 }));
 
// process search results
for (const searchResult of response.results) {
    console.log(`ImageName: ${searchResult.imageId}, Similarity: ${searchResult.similarity}`);
}
```

### Imaging.AI - Delete search context
```ts
// search context is stored in the storage, and in case if search context is not needed anymore it should be removed
await imagingApi.deleteSearchContext(new imaging.DeleteSearchContextRequest({ searchContextId }));
```

### Exception handling and error codes
```ts
try {
    await imagingApi.deleteSearchContext(new imaging.DeleteSearchContextRequest({ searchContextId: "xxx" }));
} catch (err) {
    console.log(`Error status code: ${err.statusCode}`);
    console.log(`Error message: ${err.message}`);
}
```