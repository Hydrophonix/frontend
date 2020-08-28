// Instruments
import { TOKEN_URL } from '../constants';

export const fetchAccessToken = () => fetch(
    TOKEN_URL,
    { credentials: 'include', method: 'POST' },
);

