/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import React from 'react'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import config from '@payload-config'
import { importMap } from './admin/importMap'
import './custom.scss'

type Args = {
  children: React.ReactNode
}

// Wrap as a proper server action so React 19 allows passing it to client components
async function serverFunction(...args: Parameters<typeof handleServerFunctions>) {
  'use server'
  return handleServerFunctions(...args)
}

const Layout = ({ children }: Args) =>
  RootLayout({ config, children, importMap, serverFunction })

export default Layout
