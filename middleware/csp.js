// csp.js
import helmet from 'helmet';

export default helmet.contentSecurityPolicy({
  useDefaults: true,
  directives: {
    // Customize your CSP directives here
    'script-src': ["'self'","https://youtube.com"],
    // 'style-src': ["'self'",],
  },
});
