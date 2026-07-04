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

const dbUri = process.env.DATABASE_URI
console.log('[TerraVerde] DATABASE_URI set:', !!dbUri, '| length:', dbUri?.length ?? 0)
if (dbUri) {
  try {
    const u = new URL(dbUri)
    console.log('[TerraVerde] DB host:', u.hostname, '| port:', u.port)
  } catch {
    console.log('[TerraVerde] DATABASE_URI is NOT a valid URL:', dbUri.slice(0, 40))
  }
} else {
  console.log('[TerraVerde] DATABASE_URI is UNDEFINED — check Vercel env vars')
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
