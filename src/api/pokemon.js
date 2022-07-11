import { API_HOST } from "../utils/constants";

export async function getPokemons(next) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const request = await fetch(next || url);
    const response = await request.json();
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonByUrl(url) {
  try {
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getPokemon(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const request = await fetch(url);
    const response = await request.json();
    return response;
  } catch (error) {
    throw error;
  }
}