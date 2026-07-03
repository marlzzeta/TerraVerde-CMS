/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import React from 'react'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import config from '@payload-config'
import { importMap } from './admin/importMap'
import './custom.scss'

type Args = {
  children: React.ReactNode
}

const serverFunction = handleServerFunctions

const Layout = ({ children }: Args) =>
  RootLayout({ config, children, importMap, serverFunction })

export default Layout
