// ============ ACCESS TOKEN ============ //
// Get the access token from session storage
export const getAccessToken = () => {
    return sessionStorage.getItem('accessToken');
}

// Store the access token in session storage, prefixed with "Bearer"
export const setAccessToken = (accessToken) => {
    sessionStorage.setItem('accessToken', `Bearer ${accessToken}`);
}



// ============ REFRESH TOKEN ============ //
// Get the refresh token from session storage
export const getRefreshToken = () => {
    return sessionStorage.getItem('refreshToken');
}

// Store the refresh token in session storage, prefixed with "Bearer"
export const setRefreshToken = (refreshToken) => {
    sessionStorage.setItem('refreshToken', `Bearer ${refreshToken}`);
}



// ============ ELLIPSIS UTILITY ============ //
// Shortens a string if it exceeds the given limit and adds "..." at the end
// Example: "HelloWorld" with limit 5 => "Hello..."
export const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + '...' : str;
}



// ============ GET TYPE (used in API calls) ============ //
// Decides whether to pass data as query string (URL) or query params
// based on the structure of the SERVICE_URLS definition

// If 'params' is true, we attach 'body' as query params
// If 'query' is true, we append the ID value to the endpoint URL
export const getType = (value, body) => {
    if (value.params) {
        // Used for GET APIs that send filter/sort/page as query parameters
        return { params: body };
    } else if (value.query) {
        // Used for routes like /post/:id
        if (typeof body === 'object') {
            return { query: body._id };  // extract _id from object
        } else {
            return { query: body };      // body is already an ID string
        }
    }
    return {}; // default, no special query or param structure
}
