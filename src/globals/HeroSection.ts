import type { GlobalConfig } from 'payload'

export const HeroSection: GlobalConfig = {
  slug: 'hero-section',
  label: 'Sección Hero',
  fields: [
    { name: 'badge', type: 'text', label: 'Badge (etiqueta verde)' },
    { name: 'title', type: 'text', label: 'Título principal' },
    { name: 'titleHighlight', type: 'text', label: 'Texto destacado en título' },
    { name: 'subtitle', type: 'textarea', label: 'Subtítulo / descripción' },
    { name: 'ctaPrimaryLabel', type: 'text', label: 'CTA primario (texto botón)' },
    { name: 'ctaSecondaryLabel', type: 'text', label: 'CTA secundario (texto botón)' },
    { name: 'heroImageUrl', type: 'text', label: 'URL imagen hero' },
    { name: 'heroImageCaption', type: 'text', label: 'Caption imagen hero' },
    { name: 'trustBadgeText', type: 'text', label: 'Texto badge de confianza' },
    { name: 'trustRating', type: 'text', label: 'Rating (ej. AA+)' },
    { name: 'trustRatingSource', type: 'text', label: 'Fuente del rating' },
  ],
}
