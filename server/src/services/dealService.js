import crypto from 'node:crypto';
import { updateJson } from '../lib/store.js';
import { cleanText, requireEmail, requireOneOf, requireText } from '../lib/validate.js';

const DISPLAY_TYPES = [
  'outdoor-billboard',
  'indoor-videowall',
  'transparent-led',
  'curved-3d',
  'stadium-perimeter',
  'other',
];
const SIZES = ['small', 'medium', 'large', 'flagship'];
const TIMELINES = ['immediate', 'q1-2', 'future', 'budgetary'];
const BUDGETS = ['50k-150k', '150k-350k', '350k-750k', '750k+'];

function optionalChoice(value, field, allowed) {
  const text = cleanText(value, 80);
  if (!text) return '';
  return requireOneOf(text, field, allowed);
}

export async function createDeal(body) {
  const deal = {
    id: crypto.randomUUID(),
    partnerCompany: requireText(body.partnerCompany, 'Partner company', 160),
    partnerRep: requireText(body.partnerRep, 'Partner representative', 120),
    partnerEmail: requireEmail(body.partnerEmail),
    partnerPhone: requireText(body.partnerPhone, 'Partner phone', 40),
    clientProject: requireText(body.clientProject, 'Client project', 180),
    projectLocation: requireText(body.projectLocation, 'Project location', 160),
    displayType: requireOneOf(body.displayType, 'Display type', DISPLAY_TYPES),
    estimatedSize: requireOneOf(body.estimatedSize, 'Estimated size', SIZES),
    targetTimeline: optionalChoice(body.targetTimeline, 'Target timeline', TIMELINES),
    projectBudget: optionalChoice(body.projectBudget, 'Project budget', BUDGETS),
    notes: cleanText(body.notes, 4000),
    createdAt: new Date().toISOString(),
  };

  await updateJson('deals.json', async (current) => {
    const list = Array.isArray(current) ? current : [];
    list.push(deal);
    return list;
  });

  return { id: deal.id, createdAt: deal.createdAt };
}
