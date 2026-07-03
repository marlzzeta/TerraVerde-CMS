import type { ReactNode } from 'react'
import '../globals.css'

export const metadata = { title: 'BCIE TerraVerde Hub', description: 'Plataforma de mercados ambientales de alta integridad' }

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white font-sans antialiased">{children}</body>
    </html>
  )
}
