// Core
import {
    DefinePlugin,
    ProvidePlugin,
    HotModuleReplacementPlugin,
} from 'webpack';
import WebpackBar from 'webpackbar';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import dotenv from 'dotenv';

export const connectBuildProgressIndicator = () => ({
    plugins: [ new WebpackBar() ],
});

export const connectFriendlyErrors = () => ({
    plugins: [ new FriendlyErrorsWebpackPlugin() ],
});

export const connectHMR = () => ({
    plugins: [ new HotModuleReplacementPlugin() ],
});

export const cleanDirectories = () => ({
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
        }),
    ],
});

export const connectBundleAnalyzer = () => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode:      'disabled',
            openAnalyzer:      false,
            generateStatsFile: true,
        }),
    ],
});

export const defineEnvVariables = () => ({
    plugins: [
        new DefinePlugin({
            'process.env': JSON.stringify({
                ...dotenv.config().parsed,
            }),
        }),
    ],
});

export const provideGlobals = () => ({
    plugins: [
        new ProvidePlugin({
            React: 'react',
        }),
    ],
});

// export const setupStaticServing = () => ({
//     plugins: [
//         new CopyWebpackPlugin([
//             {
//                 from: `${STATIC}/CI/now.json`,
//                 to:   `${BUILD}/now.json`,
//             },
//         ]),
//     ],
// });
