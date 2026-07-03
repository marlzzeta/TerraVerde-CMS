import type { GlobalConfig } from 'payload'

export const ImpactStats: GlobalConfig = {
  slug: 'impact-stats',
  label: 'Estadísticas de Impacto',
  fields: [
    { name: 'sectionTitle', type: 'text', label: 'Título de sección' },
    { name: 'sectionSubtitle', type: 'text', label: 'Subtítulo de sección' },
    { name: 'stats', type: 'array', label: 'Estadísticas', fields: [
      { name: 'value', type: 'text', required: true, label: 'Valor (ej. 168 MtCO2e)' },
      { name: 'description', type: 'textarea', required: true, label: 'Descripción' },
      { name: 'color', type: 'text', label: 'Color hex (ej. #10B981)' },
    ]},
  ],
}
