import { messages } from './messages';

export const getMessage = (key, lang, ...replaceValues) => {
  if (!messages[key][lang])
    return '';

  if (replaceValues.length > 0) {
    return replaceValues.map((v, i) => messages[key][lang].replace(`#${i+1}#`, v));
  } else {
    return messages[key][lang];
  }
};
