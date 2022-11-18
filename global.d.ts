// fallback
declare module '*?client'
declare module '*?server'

// named export
declare module '@/db/todos?server' {
  import * as all from '~/db/todos'
  export = all
}
