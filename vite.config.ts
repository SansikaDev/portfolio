import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

function vcardMime(): Plugin {
  const apply = (req: { url?: string }, res: { setHeader: (name: string, value: string) => void }, next: () => void) => {
    if (req.url?.split('?')[0].endsWith('.vcf')) {
      res.setHeader('Content-Type', 'text/vcard; charset=utf-8')
    }
    next()
  }
  return {
    name: 'vcard-mime',
    configureServer(server) {
      server.middlewares.use(apply)
    },
    configurePreviewServer(server) {
      server.middlewares.use(apply)
    },
  }
}

export default defineConfig({
  plugins: [react(), vcardMime()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
