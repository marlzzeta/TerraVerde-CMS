import type { GlobalConfig } from 'payload'

export const ActionAxes: GlobalConfig = {
  slug: 'action-axes',
  label: 'Ejes de Acción',
  fields: [
    { name: 'sectionTitle', type: 'text', label: 'Título de sección' },
    { name: 'axes', type: 'array', label: 'Ejes', fields: [
      { name: 'number', type: 'text', label: 'Número (ej. 01)' },
      { name: 'icon', type: 'select', label: 'Ícono', options: ['Database', 'BookOpen', 'RefreshCw'] },
      { name: 'iconColor', type: 'text', label: 'Color del ícono' },
      { name: 'title', type: 'text', required: true, label: 'Título' },
      { name: 'description', type: 'textarea', label: 'Descripción' },
      { name: 'linkLabel', type: 'text', label: 'Texto del enlace' },
    ]},
  ],
}
