export const transformStyleObjectToText = (styles: {}) => {
    return Object.entries(styles)
        .reduce((acc, [ key, value ]) => `${acc} ${key}:${value}`, '');
};
