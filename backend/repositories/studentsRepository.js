import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Setup the absolute path to the JSON file
const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, '../students.json'); 

// --- HELPER FUNCTIONS ---
export async function loadData() {
  const data = await readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function saveData(studentsArray) {
  // The 'null, 2' arguments keep the JSON nicely formatted with indents!
  await writeFile(filePath, JSON.stringify(studentsArray, null, 2));
}