// i18n.js
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js'; // ✅ Use I18n class properly

import en from './en';
import ur from './ur';

const i18n = new I18n(); // ✅ Create a new instance

i18n.translations = { en, ur };
i18n.enableFallback = true;
i18n.locale = Localization.locale.startsWith('ur') ? 'ur' : 'en';

export default i18n; // ✅ Now `i18n.t()` will work
