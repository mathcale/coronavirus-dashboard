import { messages } from './messages';

export const getMessage = (key, lang, ...replaceValues) => {
  if (!messages[key][lang])
    return '';

  if (replaceValues.length > 0) {
    const vals = {};

    replaceValues.forEach((v, i) => {
      vals[`#${i+1}#`] = v;
    });

    const search = new RegExp(Object.keys(vals).join('|'), 'gi');

    return messages[key][lang].replace(search, matched => vals[matched]);
  } else {
    return messages[key][lang];
  }
};
