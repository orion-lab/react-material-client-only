import defaultConfig from './default';

const defaultConfigValue = defaultConfig();

function getWithDotNotation(notation, object) {
  return notation.split('.').reduce((a, b) => a[b], object);
}

export default function getConfig(key) {
  if (key && key.includes('.')) {
    return getWithDotNotation(key, defaultConfigValue);
  } else if (key && defaultConfigValue[key]) {
    return defaultConfigValue[key];
  }
  return null;
}
