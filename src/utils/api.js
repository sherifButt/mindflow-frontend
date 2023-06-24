



/**
 * Utility function to make a GET request to the API.
 * @param {string} url - The URL to make the GET request to.
 * @returns {Promise} - A promise that resolves to the response data.
 */
export async function get(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`GET request to ${url} failed: ${error.message}`);
  }
}

/**
 * Utility function to make a POST request to the API.
 * @param {string} url - The URL to make the POST request to.
 * @param {object} data - The data to send in the request body.
 * @returns {Promise} - A promise that resolves to the response data.
 */
export async function post(url, data) {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw new Error(`POST request to ${url} failed: ${error.message}`);
  }
}

/**
 * Utility function to make a PUT request to the API.
 * @param {string} url - The URL to make the PUT request to.
 * @param {object} data - The data to send in the request body.
 * @returns {Promise} - A promise that resolves to the response data.
 */
export async function put(url, data) {
  try {
    const response = await axios.put(url, data);
    return response.data;
  } catch (error) {
    throw new Error(`PUT request to ${url} failed: ${error.message}`);
  }
}

/**
 * Utility function to make a DELETE request to the API.
 * @param {string} url - The URL to make the DELETE request to.
 * @returns {Promise} - A promise that resolves to the response data.
 */
export async function del(url) {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    throw new Error(`DELETE request to ${url} failed: ${error.message}`);
  }
}





// Make a GET request
const getData = async () => {
  try {
    const response = await get('/api/data');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

// Make a POST request
const postData = async () => {
  try {
    const data = { name: 'John Doe', age: 30 };
    const response = await post('/api/data', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

// Make a PUT request
const putData = async () => {
  try {
    const data = { name: 'John Doe', age: 30 };
    const response = await put('/api/data/1', data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

// Make a DELETE request
const deleteData = async () => {
  try {
    const response = await del('/api/data/1');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

