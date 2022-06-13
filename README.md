# REST API For ScannerQU using Hapijs
## Overview
This API is the main gate that connects the client and the backend service, the main of this API is to handle the request from android that sands images that contain the Quran ayat, and then this API will connect to the model for the prediction.

## How To Install
1. Clone this repository.
2. Install nodejs v16.14.0 a and npm (if you don't have)
3. mkdir uploads
2. cd ./scannerqu-api
5. npm install

## How To Run
Open terminal and type:
    npm run start-prod

## Endpoints
- GET '/' : This endpoint is just for greeting
- POST '/submit' : Use this endpoint to upload the images;

