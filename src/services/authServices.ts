import axios from 'axios';

const API_BASE_URL = 'https://mytinerary-server.onrender.com/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function registerUser(data: any) {
  try {
    const response = await apiClient.post('/auth/register', data);
    return response.data;
  } catch (error: any) {
    return handleApiError(error);
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  } catch (error: any) {
    return handleApiError(error);
  }
}

function handleApiError(error: any) {
  if (error.response) {
    return {
      success: false,
      message: error.response.data?.message || 'Error en la solicitud',
    };
  } else if (error.request) {
    return {
      success: false,
      message: 'No hay respuesta del servidor. Revisa tu conexión.',
    };
  } else {
    return {
      success: false,
      message: 'Ocurrió un error inesperado',
    };
  }
}

export default apiClient;