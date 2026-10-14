import { Router } from 'express';
import { sendData, sendError } from '../http.js';
import { getScreen, listCities, listProjects, listScreens } from '../services/catalogService.js';

export const screenRouter = Router();
export const projectRouter = Router();
export const cityRouter = Router();

screenRouter.get('/', async (_req, res, next) => {
  try {
    const screens = await listScreens();
    sendData(res, screens, { total: screens.length });
  } catch (error) {
    next(error);
  }
});

screenRouter.get('/:id', async (req, res, next) => {
  try {
    const screen = await getScreen(req.params.id);
    sendData(res, screen);
  } catch (error) {
    if (error.status) {
      sendError(res, error.status, error.message, error.code);
      return;
    }
    next(error);
  }
});

projectRouter.get('/', async (req, res, next) => {
  try {
    const category = typeof req.query.category === 'string' ? req.query.category : '';
    const projects = await listProjects();
    const filtered = category
      ? projects.filter((project) => project.category === category)
      : projects;
    sendData(res, filtered, { total: filtered.length });
  } catch (error) {
    next(error);
  }
});

cityRouter.get('/', async (_req, res, next) => {
  try {
    const cities = await listCities();
    sendData(res, cities, { total: cities.length });
  } catch (error) {
    next(error);
  }
});
