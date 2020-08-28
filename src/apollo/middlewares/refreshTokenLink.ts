// Core
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';

// Instruments
import { accessToken } from '../localState';
import { fetchAccessToken } from '../../utils';

export const tokenRefreshLink = new TokenRefreshLink({
    accessTokenField:        'accessToken',
    isTokenValidOrUndefined: () => {
        const token = accessToken();

        if (!token) {
            return true;
        }

        try {
            const { exp } = jwtDecode(token);

            if (Date.now() >= exp * 1000) {
                return false;
            }

            return true;
        } catch {
            return false;
        }
    },
    fetchAccessToken,
    handleFetch: (newAccessToken) => {
        accessToken(newAccessToken);
    },
    handleError: (error) => {
        // full control over handling token fetch Error
        console.warn('Your refresh token is invalid. Try to relogin');
        console.error(error);

        // your custom action here
        accessToken(null);
    },
});
