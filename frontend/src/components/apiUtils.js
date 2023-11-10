// apiUtils.js

export async function fetchDataFromAPI(apiUrl) {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error('Error al cargar datos desde la API', error.message);
    return null;
  }
}

export async function fetchProductData() {
  const productApiUrl = 'http://localhost:3010/api/productos';
  return fetchDataFromAPI(productApiUrl);
}

export async function fetchUserData() {
  const userApiUrl = 'http://localhost:3010/api/usuarios';
  return fetchDataFromAPI(userApiUrl);
}
