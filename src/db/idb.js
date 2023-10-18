import { openDB } from 'idb';

export async function getNotes() {
  const db = await openDB('text-editor-db', 1);
  const tx = db.transaction('notes', 'readonly');
  const store = tx.objectStore('notes');
  const notes = await store.getAll();
  await tx.done;
  return notes;
}
