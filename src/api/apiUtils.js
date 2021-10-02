export async function handleResponse(response) {
    if (response.ok) return response.json();
    if (response.status === 400) {
      const error = await response.text();
      throw new Error(error);
    }
    throw new Error("La risposta della rete è errata.");
  }
  

  export function handleError(error) {
    console.error("Chiamata API fallita. " + error);
    throw error;
  }
  