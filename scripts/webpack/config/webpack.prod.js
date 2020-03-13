// Core
import merge from 'webpack-merge';

// Configurations
import getCommonConfig from './webpack.common';

// Modules
import * as modules from '../modules';

export default () => {
    return merge(
        getCommonConfig(),
        {
            mode:    'none', // none to remove bundle chunk size warning
            devtool: false,
        },
        modules.cleanDirectories(),
        modules.connectBuildProgressIndicator(),
        modules.optimizeBuild(),
        modules.optimizeImages(),
        modules.connectBundleAnalyzer(),
    );
};
