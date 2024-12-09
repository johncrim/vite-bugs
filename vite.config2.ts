import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/foo': {
        bypass: async (req, res, options) => {
          await timeout(3000);
          res.writeHead(200, {
            'Content-Type': 'text/plain'
          });
          res.end('Hello after 3 seconds (async timeout)')
        }
      }
    }
  }
})

function timeout(ms: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  })
}
