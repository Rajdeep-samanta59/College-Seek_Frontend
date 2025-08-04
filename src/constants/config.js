// API NOTIFICATION MESSAGES
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded. Please wait"
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    requestFailure: {
        title: "Error!",
        message: "An error occur while parsing request data"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
}


// API SERVICE URL
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: "/", method: "POST/GET/PUT/DELETE" }
export const SERVICE_URLS = {
    userLogin: { url: '/login', method: 'POST' },
    userSignup: { url: '/signup', method: 'POST' },
    uploadFile: { url: '/file/upload', method: 'POST' },
    createPost: { url: 'create', method: 'POST' },
    getAllPosts: { url: '/posts', method: 'GET', params: true },
    getPostById: { url: 'post', method: 'GET', query: true },
    updatePost: { url: 'update', method: 'PUT', query: true },
    deletePost: { url: 'delete', method: 'DELETE', query: true },
    newComment: { url: '/comment/new', method: 'POST' },
    getAllComments: { url: 'comments', method: 'GET', query: true },
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true }
    // getRefreshToken: { url: '/token', method: 'POST' },  
}


// The `config.js` file serves two primary purposes in the College Seek project:

// 1. **Centralized Notification Messages (`API_NOTIFICATION_MESSAGES`)**
//    This section defines a standardized set of user-friendly messages that the application can use to communicate the status of API operations. It includes feedback for various scenarios such as:

//    * **`loading`**: Indicates data is being fetched or processed.
//    * **`success`**: Used when an API request completes successfully.
//    * **`requestFailure`**: Triggered when there is an error while forming or sending a request.
//    * **`responseFailure`**: Used when the server responds with an error (e.g., 500 or invalid data).
//    * **`networkError`**: Indicates issues like no internet connection or server unreachable.
//      By storing these messages in a single object, the app ensures consistency and reusability throughout the UI.

// 2. **Service Route Definitions (`SERVICE_URLS`)**
//    This object acts as a **centralized registry for all API endpoints** used across the frontend. Each property inside `SERVICE_URLS` maps to a specific backend route with details such as:

//    * `url`: The actual API path (like `/login`, `/create`, etc.)
//    * `method`: The HTTP method to be used (`GET`, `POST`, `PUT`, `DELETE`)
//    * Additional flags like `params` or `query`: These indicate how the request should be constructed, e.g., whether URL parameters or query strings are needed.

//    Example: `getPostById` has `query: true`, which means when constructing this API call, the post ID will be appended as a query string (like `/post/:id`).

// Overall, `config.js` plays a key architectural role in **decoupling UI components from hardcoded API details and notification messages**. This improves maintainability, as any updates to API paths or text feedback can be done in one place rather than across multiple files.
