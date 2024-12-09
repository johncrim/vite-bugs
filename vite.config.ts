import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/foo': {
        bypass: (req, res, options) => {
          setTimeout(() => {
            res.writeHead(200, {
              'Content-Type': 'text/plain'
            });
            res.end('Hello after 3 seconds (setTimeout)')
          }, 3000);
        },
        // The error message says a target is required, but
        // uncommenting this completely breaks the proxy.
        //target: 'http://not.localhost'
      }
    }
  }
})
