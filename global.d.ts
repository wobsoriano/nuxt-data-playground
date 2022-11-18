// fallback
declare module '*?client'
declare module '*?server'

// named export
declare module '@/lib/prisma?server' {
  import * as all from '@/lib/prisma'
  export = all
}
