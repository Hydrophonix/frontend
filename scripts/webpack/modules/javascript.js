// Core
import { createTransformer } from 'typescript-plugin-styled-components';

// Instruments
import { nodeModulePath } from '../constants';

const styledComponentsTransformer = createTransformer();

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
                    loader:  'awesome-typescript-loader',
                    options: {
                        getCustomTransformers: () => ({ before: [ styledComponentsTransformer ]}),
                    },
                },
                // use:     IS_DEVELOPMENT
                //     ? {
                //         loader: 'ts-loader',
                //     }
                //     : {
                //         loader:  'awesome-typescript-loader',
                //         options: {
                //             getCustomTransformers: () => ({ before: [ styledComponentsTransformer ]}),
                //         },
                //     },

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

