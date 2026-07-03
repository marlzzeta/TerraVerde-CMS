import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Configuración del Sitio',
  fields: [
    { name: 'topBarLinks', type: 'array', label: 'Links barra superior', fields: [
      { name: 'label', type: 'text', required: true },
      { name: 'href', type: 'text', defaultValue: '#' },
    ]},
    { name: 'navLinks', type: 'array', label: 'Links de navegación', fields: [
      { name: 'label', type: 'text', required: true },
      { name: 'href', type: 'text', defaultValue: '#' },
    ]},
    { name: 'navCtaLabel', type: 'text', label: 'Botón CTA nav', defaultValue: 'Explorar Proyectos' },
    { name: 'footerTagline', type: 'textarea', label: 'Tagline footer' },
    { name: 'footerLinks', type: 'array', label: 'Links footer columna 1', fields: [{ name: 'label', type: 'text' }]},
    { name: 'footerLegalLinks', type: 'array', label: 'Links legales footer', fields: [{ name: 'label', type: 'text' }]},
  ],
}
