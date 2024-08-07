// 0-promise.js
function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        resolve("API response data");
    });
}

export default getResponseFromAPI;
