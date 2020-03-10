// Instruments
import { nodeModulePath } from '../constants';

export const loadJavaScript = () => ({
    module: {
        rules: [
            {
                test:    /\.js$/,
                exclude: /node_modules/,
                use:     {
                    loader: 'babel-loader',
                },
            },
        ],
    },
});

export const loadTypeScript = () => ({
    module: {
        rules: [
            {
                test:    /\.ts(x?)$/,
                exclude: /node_modules/,
                use:     {
                    loader: 'awesome-typescript-loader',
                },

            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test:    /\.js$/,
                loader:  'source-map-loader',
                exclude: [ nodeModulePath('apollo-link-token-refresh') ],
            },
        ],
    },
});

