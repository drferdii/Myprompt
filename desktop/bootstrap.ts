const Module = require('node:module')
const path = require('node:path')

const originalResolveFilename = Module._resolveFilename
const distRoot = path.resolve(__dirname, '..')

Module._resolveFilename = function (
  request: string,
  parent: NodeJS.Module | null | undefined,
  isMain: boolean,
  options?: unknown
) {
  if (typeof request === 'string' && request.startsWith('@/')) {
    request = path.join(distRoot, request.slice(2))
  }

  return originalResolveFilename.call(this, request, parent, isMain, options)
}

require('./main')
