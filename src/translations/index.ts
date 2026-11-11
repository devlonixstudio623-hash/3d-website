import { en } from './en';
import { hi } from './hi';
import { Language } from '../types';

export const translations = { en, hi };

export function getDictionary(lang: Language) {
  return lang === 'hi' ? hi : en;
}
