// Minimal IndexedDB stub for local-first persistence.
// Falls back to in-memory Map when IndexedDB is unavailable.

const memory = new Map();

function idb() {
  return typeof indexedDB !== "undefined" ? indexedDB : null;
}

export async function dbGet(store, key) {
  if (!idb()) return memory.get(`${store}:${key}`) ?? null;
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("opentutor", 1);
    req.onupgradeneeded = () => req.result.createObjectStore("kv");
    req.onerror = () => reject(req.error);
    req.onsuccess = () => {
      const db = req.result;
      const tx = db.transaction("kv", "readonly");
      const get = tx.objectStore("kv").get(`${store}:${key}`);
      get.onsuccess = () => resolve(get.result ?? null);
      get.onerror = () => reject(get.error);
      tx.oncomplete = () => db.close();
    };
  });
}

export async function dbSet(store, key, value) {
  if (!idb()) {
    memory.set(`${store}:${key}`, value);
    return;
  }
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("opentutor", 1);
    req.onupgradeneeded = () => req.result.createObjectStore("kv");
    req.onerror = () => reject(req.error);
    req.onsuccess = () => {
      const db = req.result;
      const tx = db.transaction("kv", "readwrite");
      tx.objectStore("kv").put(value, `${store}:${key}`);
      tx.oncomplete = () => {
        db.close();
        resolve();
      };
      tx.onerror = () => reject(tx.error);
    };
  });
}
