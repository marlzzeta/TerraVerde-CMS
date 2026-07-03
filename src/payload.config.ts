import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
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
  db: sqliteAdapter({ client: { url: process.env.DATABASE_URI || 'file:./payload.db' } }),
  plugins: [],
})
