// Core
import merge from 'webpack-merge';

// Configurations
import { getCommonConfig } from './webpack.common';

// Modules
import * as modules from '../modules';

export const getProdConfig = () => {
    return merge(
        getCommonConfig(),
        {
            mode:    'none', // none to remove bundle chunk size warning
            devtool: false,
        },
        modules.defineEnvVariables(true),
        modules.loadImagesProd(),
        modules.loadProdCss(),
        modules.loadPWAManifest(),
        modules.loadPWAServiceWorker(),
        modules.cleanDirectories(),
        modules.filterLodashModules(),
        modules.filterMomentLocales(),
        modules.connectBuildProgressIndicator(),
        modules.optimizeBuild(),
        modules.connectBundleAnalyzer(),
    );
};
