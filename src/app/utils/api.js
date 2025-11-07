const NEBULA_API_ENDPOINT = 'https://api.nebula.dev/';

export async function nebulaFetch(path) {
    const url = `${NEBULA_API_ENDPOINT}${path}`;
    const headers = {
        'x-api-key': process.env.NEXT_PUBLIC_NEBULA_API_KEY,
    };
    const response = await fetch(url, {
        headers,
    });
    console.log('Nebula API Response:', response);
    if (!response.ok) {
        throw new Error(`Nebula API request failed: ${response.status} ${response.statusText}`);
    }
    return response.json();
}