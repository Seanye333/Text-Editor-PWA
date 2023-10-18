import { openDB } from 'idb';

export function initEditor() {
  const editor = document.getElementById('editor');
  const saveBtn = document.getElementById('saveBtn');
  const statusDiv = document.getElementById('status');

  let db;

  async function initDatabase() {
    db = await openDB('text-editor-db', 1, {
      upgrade(db) {
        db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
      },
    });
  }

  async function saveNote() {
    const content = editor.value.trim();
    if (content === '') {
      statusDiv.textContent = 'Cannot save an empty note.';
      return;
    }

    const note = { content, timestamp: new Date() };

    const tx = db.transaction('notes', 'readwrite');
    const store = tx.objectStore('notes');
    const noteId = await store.add(note);
    await tx.done;

    statusDiv.textContent = `Note saved with ID: ${noteId}`;
  }

  initDatabase();

  saveBtn.addEventListener('click', saveNote);
}
