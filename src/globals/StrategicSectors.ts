import type { GlobalConfig } from 'payload'

export const StrategicSectors: GlobalConfig = {
  slug: 'strategic-sectors',
  label: 'Sectores Estratégicos',
  fields: [
    { name: 'sectionTitle', type: 'text', label: 'Título de sección' },
    { name: 'sectionSubtitle', type: 'text', label: 'Subtítulo de sección' },
    { name: 'sectors', type: 'array', label: 'Sectores', fields: [
      { name: 'title', type: 'text', required: true, label: 'Título' },
      { name: 'description', type: 'text', label: 'Descripción' },
      { name: 'icon', type: 'select', label: 'Ícono', options: ['TreePine', 'Wheat', 'Zap', 'Flower2'] },
      { name: 'accent', type: 'text', label: 'Color accent hex' },
    ]},
  ],
}
