import axios from 'axios';

class QueryClient {
  constructor(token = "") {
    this.axiosInstance = axios.create({
      baseURL: 'https://api.ooreafrica.org',
      timeout: 5000, 
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
  }

  async get(url, params = {}) {
    try {
      const response = await this.axiosInstance.get(url, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async post(url, data = {}) {
    try {
      const response = await this.axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default QueryClient;