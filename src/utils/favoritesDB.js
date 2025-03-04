import { openDB } from "idb";

const DB_NAME = 'moviesDB';
const STORE_NAME = 'favorites';

async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
}

export async function addFavorite(movie) {
  const db = await getDB();
  await db.put(STORE_NAME, movie);
}

export async function removeFavorite(movieId) {
  const db = await getDB();
  await db.delete(STORE_NAME, movieId);
}

export async function getFavorite(movieId) {
  const db = await getDB();
  return db.get(STORE_NAME, movieId);
}

export async function getAllFavorites() {
  const db = await getDB();
  return db.getAll(STORE_NAME);
}