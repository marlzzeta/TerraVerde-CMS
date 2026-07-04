import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Projects } from './collections/Projects'
import { SiteSettings } from './globals/SiteSettings'
import { HeroSection } from './globals/HeroSection'
import { ImpactStats } from './globals/ImpactStats'
import { ActionAxes } from './globals/ActionAxes'
import { StrategicSectors } from './globals/StrategicSectors'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// debug-v2
const _dbUri = process.env['DATABASE_URI']
if (_dbUri) {
  try { const u = new URL(_dbUri); console.log('[TV] host:', u.hostname) }
  catch { console.log('[TV] BAD_URL len:', _dbUri.length, 'bytes0-2:', _dbUri.charCodeAt(0), _dbUri.charCodeAt(1), _dbUri.charCodeAt(2)) }
} else {
  console.log('[TV] DATABASE_URI=UNDEFINED')
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
  },
  collections: [Users, Projects],
  globals: [SiteSettings, HeroSection, ImpactStats, ActionAxes, StrategicSectors],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'terraverde-secret',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({ pool: { connectionString: process.env.DATABASE_URI } }),
  plugins: [],
})
