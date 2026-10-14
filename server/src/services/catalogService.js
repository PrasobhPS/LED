import { readJson } from '../lib/store.js';
import { httpError } from '../http.js';

export function listScreens() {
  return readJson('screens.json', []);
}

export async function getScreen(id) {
  const screens = await listScreens();
  const screen = screens.find((item) => item.id === id);
  if (!screen) throw httpError(404, 'Screen not found', 'not_found');
  return screen;
}

export function listProjects() {
  return readJson('projects.json', []);
}

export function listCities() {
  return readJson('cities.json', []);
}
