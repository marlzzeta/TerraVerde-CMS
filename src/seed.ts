import { getPayload } from 'payload'
import config from './payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('Seeding projects...')

  const projects = [
    {
      id: 'TVH-GT-0012',
      name: 'Programa de Conservación de Bosques Tropicales y Carbono Azul — Cuenca del Usumacinta',
      country: 'Guatemala',
      image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80',
      category: 'Bosques y Costas',
      riskRating: 'Bajo',
      credits: 12375,
      status: 'En ejecución',
    },
    {
      id: 'TVH-CR-0007',
      name: 'Pagos por Servicios Ambientales y Biodiversidad — Programa Nacional FONAFIFO',
      country: 'Costa Rica',
      image: 'https://images.unsplash.com/photo-1552799446-159ba9523315?w=800&q=80',
      category: 'Biodiversidad',
      riskRating: 'Muy Bajo',
      credits: 28900,
      status: 'En ejecución',
    },
    {
      id: 'TVH-HN-0019',
      name: 'Manejo Sostenible de Suelos Agrícolas y Agroforestería — Corredor Seco de Honduras',
      country: 'Honduras',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      category: 'Agricultura',
      riskRating: 'Medio',
      credits: 9800,
      status: 'En ejecución',
    },
    {
      id: 'TVH-NI-0008',
      name: 'Restauración de Ecosistemas de Manglar — Costa Caribe Norte de Nicaragua',
      country: 'Nicaragua',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      category: 'Bosques y Costas',
      riskRating: 'Medio',
      credits: 6540,
      status: 'En ejecución',
    },
    {
      id: 'TVH-PA-0015',
      name: 'Conservación del Corredor Biológico del Darién y Bosques Húmedos Tropicales',
      country: 'Panamá',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      category: 'Biodiversidad',
      riskRating: 'Bajo',
      credits: 19200,
      status: 'Aprobado',
    },
    {
      id: 'TVH-SV-0004',
      name: 'Cocinas Eficientes y Energías Renovables para Comunidades Rurales de El Salvador',
      country: 'El Salvador',
      image: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f31?w=800&q=80',
      category: 'Eficiencia',
      riskRating: 'Bajo',
      credits: 3200,
      status: 'En ejecución',
    },
    {
      id: 'TVH-BZ-0011',
      name: 'Protección de la Barrera de Coral y Manglares Costeros del Caribe de Belice',
      country: 'Belice',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80',
      category: 'Bosques y Costas',
      riskRating: 'Muy Bajo',
      credits: 8750,
      status: 'En ejecución',
    },
    {
      id: 'TVH-DO-0006',
      name: 'Conservación de Ecosistemas Montañosos y Ríos — Cordillera Central de República Dominicana',
      country: 'Rep. Dominicana',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
      category: 'Biodiversidad',
      riskRating: 'Bajo',
      credits: 5100,
      status: 'Aprobado',
    },
  ]

  for (const project of projects) {
    try {
      await payload.create({ collection: 'projects', data: project as any })
      console.log(`Created project: ${project.id}`)
    } catch (err) {
      console.error(`Failed to create ${project.id}:`, err)
    }
  }

  console.log('Seeding globals...')

  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      topBarLinks: [
        { label: 'Transparencia e Integridad', href: '#' },
        { label: 'Mecanismos de Quejas', href: '#' },
        { label: 'Gestión del Conocimiento', href: '#' },
      ],
      navLinks: [
        { label: 'Acerca de la Plataforma', href: '#' },
        { label: 'Ejes de Acción', href: '#' },
        { label: 'Impacto Regional', href: '#' },
      ],
      footerLinks: [
        { label: 'Meta-Registro', href: '#' },
        { label: 'Centro de Conocimiento', href: '#' },
        { label: 'Fondo Revolvente', href: '#' },
      ],
      footerLegalLinks: [
        { label: 'Política de Privacidad', href: '#' },
        { label: 'Términos de Uso', href: '#' },
      ],
      footerTagline: 'Una iniciativa del BCIE para el desarrollo sostenible de Centroamérica y el Caribe.',
    } as any,
  })

  await payload.updateGlobal({
    slug: 'hero-section',
    data: {
      badge: 'Motor de la Transformación Positiva',
      title: 'Impulsando mercados ambientales de alta integridad en la región SICA.',
      titleHighlight: 'alta integridad',
      subtitle: 'Una plataforma gestionada por el BCIE para articular, visibilizar y financiar proyectos de carbono y biodiversidad en Centroamérica y el Caribe.',
      ctaPrimaryLabel: 'Explorar Proyectos',
      ctaSecondaryLabel: 'Ver Metodología',
      heroImageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
      heroImageCaption: 'Bosques tropicales de Centroamérica',
    } as any,
  })

  await payload.updateGlobal({
    slug: 'impact-stats',
    data: {
      stats: [
        { value: '168 MtCO2e', description: 'Emisiones de GEI netas anuales de la región SICA, representando el potencial de reducción.', color: '#10B981' },
        { value: '5% – 12%', description: 'De la diversidad biológica mundial se encuentra en la región, un activo invaluable.', color: '#3B82F6' },
        { value: '8 Países', description: 'Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica, Panamá, Belice y República Dominicana.', color: '#0F172A' },
      ],
    } as any,
  })

  await payload.updateGlobal({
    slug: 'action-axes',
    data: {
      axes: [
        { number: '01', title: 'Meta-registro de Proyectos', description: 'Registro centralizado y verificado de proyectos de carbono y biodiversidad en la región SICA.', linkLabel: 'Ver Proyectos', icon: 'Database' },
        { number: '02', title: 'Centro de Conocimiento', description: 'Biblioteca de metodologías, estándares y mejores prácticas para el mercado ambiental.', linkLabel: 'Explorar', icon: 'BookOpen' },
        { number: '03', title: 'Fondo Revolvente', description: 'Mecanismo de financiamiento para acelerar proyectos con alto potencial de impacto ambiental.', linkLabel: 'Conocer más', icon: 'RefreshCw' },
      ],
    } as any,
  })

  await payload.updateGlobal({
    slug: 'strategic-sectors',
    data: {
      sectors: [
        { title: 'Bosques y Costas', description: 'Conservación y restauración de ecosistemas forestales y costeros.', icon: 'TreePine', accent: '#10B981' },
        { title: 'Agricultura', description: 'Prácticas agrícolas sostenibles y agroforestería.', icon: 'Wheat', accent: '#F59E0B' },
        { title: 'Eficiencia', description: 'Proyectos de eficiencia energética y energías renovables.', icon: 'Zap', accent: '#22D3EE' },
        { title: 'Biodiversidad', description: 'Protección de ecosistemas ricos en biodiversidad.', icon: 'Flower2', accent: '#34D399' },
      ],
    } as any,
  })

  console.log('Seeding complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
