import axios from 'axios';
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config';
import { getAccessToken, getType } from '../utils/common-utils';

// Base URL for the backend API
const API_URL = "https://college-seek.vercel.app/"; // Use this in production
// const API_URL = "http://localhost:8000/"; // Uncomment for local testing

// Creating a reusable axios instance with default configs
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Accept": "application/json, uform-data",
        "Content-Type": "application/json"
    }
});

// Request Interceptor
// Modifies request config before sending to server
axiosInstance.interceptors.request.use(
    function (config) {
        if (config.TYPE?.params) {
            config.params = config.TYPE.params; // Attach query params
        } else if (config.TYPE?.query) {
            config.url = config.url + '/' + config.TYPE.query; // Append path params
        }
        return config;
    },
    function (error) {
        return Promise.reject(error); // Reject if config fails
    }
);

// Response Interceptor
// Standardizes responses (both success & error)
axiosInstance.interceptors.response.use(
    function (response) {
        return processResponse(response); // Wrap success
    },
    function (error) {
        return Promise.reject(processError(error)); // Wrap error
    }
);

// Function to handle valid responses (status 200)
const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data };
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        };
    }
};

// Function to handle errors from API calls
const processError = (error) => {
    if (error.response) {
        // Server responded with a non-200 error
        console.log("ERROR IN RESPONSE: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status
        };
    } else if (error.request) {
        // Request was sent but no response received
        console.log("ERROR IN REQUEST: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        };
    } else {
        // Other unexpected errors (e.g. config issue)
        console.log("ERROR IN NETWORK: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        };
    }
};

// Main API object that dynamically generates request functions
const API = {};

// Dynamically create API functions for each entry in SERVICE_URLS
for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: value.method === 'DELETE' ? {} : body,
            responseType: value.responseType,
            headers: {
                authorization: getAccessToken(), // Send auth token
            },
            TYPE: getType(value, body), // Generates config for query/params
            onUploadProgress: function (progressEvent) {
                if (showUploadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentCompleted); // Callback for upload progress
                }
            },
            onDownloadProgress: function (progressEvent) {
                if (showDownloadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentCompleted); // Callback for download progress
                }
            }
        });
}

// Exporting the API object so it can be used in your frontend
export { API };
