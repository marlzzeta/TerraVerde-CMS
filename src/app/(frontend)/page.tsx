export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import config from '@payload-config'
import { Database, BookOpen, RefreshCw, TreePine, Wheat, Zap, Flower2, Leaf, ChevronRight, Shield, Globe, TrendingUp } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="w-8 h-8" />,
  BookOpen: <BookOpen className="w-8 h-8" />,
  RefreshCw: <RefreshCw className="w-8 h-8" />,
  TreePine: <TreePine className="w-8 h-8" />,
  Wheat: <Wheat className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Flower2: <Flower2 className="w-8 h-8" />,
}

const riskColor: Record<string, string> = {
  'Muy Bajo': 'bg-emerald-100 text-emerald-800',
  'Bajo': 'bg-green-100 text-green-800',
  'Medio': 'bg-yellow-100 text-yellow-800',
  'Alto': 'bg-red-100 text-red-800',
}

const categoryColor: Record<string, string> = {
  'Bosques y Costas': 'bg-emerald-600',
  'Biodiversidad': 'bg-blue-600',
  'Agricultura': 'bg-amber-600',
  'Eficiencia': 'bg-cyan-600',
}

export default async function Home() {
  const payload = await getPayload({ config })

  const [siteSettings, hero, impactStats, actionAxes, strategicSectors, projectsData] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings' }).catch(() => null),
    payload.findGlobal({ slug: 'hero-section' }).catch(() => null),
    payload.findGlobal({ slug: 'impact-stats' }).catch(() => null),
    payload.findGlobal({ slug: 'action-axes' }).catch(() => null),
    payload.findGlobal({ slug: 'strategic-sectors' }).catch(() => null),
    payload.find({ collection: 'projects', limit: 100 }).catch(() => ({ docs: [] })),
  ])

  const projects = (projectsData as any)?.docs || []
  const stats = (impactStats as any)?.stats || []
  const axes = (actionAxes as any)?.axes || []
  const sectors = (strategicSectors as any)?.sectors || []
  const topBarLinks = (siteSettings as any)?.topBarLinks || []
  const navLinks = (siteSettings as any)?.navLinks || []
  const footerLinks = (siteSettings as any)?.footerLinks || []
  const footerLegalLinks = (siteSettings as any)?.footerLegalLinks || []

  return (
    <div className="min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-[#0F172A] border-b border-white/10 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-3 h-3 text-emerald-400" />
            <span>Plataforma Oficial BCIE</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {topBarLinks.map((link: any, i: number) => (
              <a key={i} href={link.href || '#'} className="hover:text-white transition-colors">{link.label}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Header / Nav */}
      <header className="bg-[#0F172A]/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-tight">TerraVerde Hub</div>
              <div className="text-emerald-400 text-xs">BCIE · Mercados Ambientales</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link: any, i: number) => (
              <a key={i} href={link.href || '#'} className="text-slate-300 hover:text-white text-sm transition-colors">{link.label}</a>
            ))}
          </nav>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Acceder al Panel
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F172A] to-[#1E3A5F] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 text-sm font-medium">{(hero as any)?.badge || 'Motor de la Transformación Positiva'}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Impulsando mercados ambientales de{' '}
              <span className="text-emerald-400">{(hero as any)?.titleHighlight || 'alta integridad'}</span>{' '}
              en la región SICA.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {(hero as any)?.subtitle || 'Una plataforma gestionada por el BCIE para articular, visibilizar y financiar proyectos de carbono y biodiversidad en Centroamérica y el Caribe.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center gap-2">
                {(hero as any)?.ctaPrimaryLabel || 'Explorar Proyectos'}
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-xl transition-colors">
                {(hero as any)?.ctaSecondaryLabel || 'Ver Metodología'}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={(hero as any)?.heroImageUrl || 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80'}
                alt={(hero as any)?.heroImageCaption || 'Bosques tropicales de Centroamérica'}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust badge */}
      <div className="bg-slate-50 border-b py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-6 items-center justify-center text-sm text-slate-600">
          <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-500" /><span>Verificado por VERRA</span></div>
          <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-blue-500" /><span>Estándares ICVCM</span></div>
          <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-emerald-500" /><span>Alineado con Acuerdo de París</span></div>
        </div>
      </div>

      {/* Impact Stats */}
      {stats.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Impacto Regional</h2>
            <p className="text-center text-slate-600 mb-12">Métricas clave del mercado ambiental en la región SICA</p>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat: any, i: number) => (
                <div key={i} className="rounded-2xl p-8 text-center border border-slate-100 hover:shadow-lg transition-shadow" style={{ borderTop: `4px solid ${stat.color || '#10B981'}` }}>
                  <div className="text-4xl font-bold mb-3" style={{ color: stat.color || '#10B981' }}>{stat.value}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Action Axes */}
      {axes.length > 0 && (
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Ejes de Acción</h2>
            <p className="text-center text-slate-600 mb-12">Tres pilares que articulan nuestra plataforma</p>
            <div className="grid md:grid-cols-3 gap-8">
              {axes.map((axis: any, i: number) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                  <div className="text-5xl font-black text-slate-100 mb-4">{axis.number}</div>
                  <div className="text-emerald-500 mb-4">{iconMap[axis.icon] || <Database className="w-8 h-8" />}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{axis.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{axis.description}</p>
                  {axis.linkLabel && (
                    <a href="#" className="text-emerald-500 text-sm font-medium hover:text-emerald-600 flex items-center gap-1">
                      {axis.linkLabel} <ChevronRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Meta-Registro de Proyectos</h2>
          <p className="text-center text-slate-600 mb-12">Proyectos verificados de carbono y biodiversidad en la región</p>
          {projects.length === 0 ? (
            <p className="text-center text-slate-400">No hay proyectos aún. Ejecuta el seed script para cargar los datos.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projects.map((project: any) => (
                <div key={project.id} className="rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow bg-white">
                  <div className="relative h-40">
                    <img
                      src={project.image || 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80'}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded-full ${categoryColor[project.category] || 'bg-slate-600'}`}>
                      {project.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-slate-400 font-mono mb-1">{project.id} · {project.country}</div>
                    <h3 className="font-semibold text-slate-900 text-sm leading-tight mb-2 line-clamp-2">{project.name}</h3>
                    <div className="flex justify-between items-center mt-3">
                      <div>
                        <div className="text-lg font-bold text-emerald-600">{project.credits?.toLocaleString()}</div>
                        <div className="text-xs text-slate-500">créditos tCO2e</div>
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${riskColor[project.riskRating] || 'bg-slate-100 text-slate-600'}`}>
                        {project.riskRating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Strategic Sectors */}
      {sectors.length > 0 && (
        <section className="py-16 px-4 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-4">Sectores Estratégicos</h2>
            <p className="text-center text-slate-400 mb-12">Áreas prioritarias de intervención ambiental</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector: any, i: number) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="mb-4" style={{ color: sector.accent || '#10B981' }}>
                    {iconMap[sector.icon] || <TreePine className="w-8 h-8" />}
                  </div>
                  <h3 className="text-white font-bold mb-2">{sector.title}</h3>
                  {sector.description && <p className="text-slate-400 text-sm">{sector.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#0F172A] border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold">TerraVerde Hub</span>
              </div>
              <p className="text-slate-400 text-sm max-w-xs">
                {(siteSettings as any)?.footerTagline || 'Una iniciativa del BCIE para el desarrollo sostenible de Centroamérica y el Caribe.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              {footerLinks.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-3 text-sm">Plataforma</h4>
                  <ul className="space-y-2">
                    {footerLinks.map((link: any, i: number) => (
                      <li key={i}><a href={link.href || '#'} className="text-slate-400 hover:text-white text-sm transition-colors">{link.label}</a></li>
                    ))}
                  </ul>
                </div>
              )}
              {footerLegalLinks.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-3 text-sm">Legal</h4>
                  <ul className="space-y-2">
                    {footerLegalLinks.map((link: any, i: number) => (
                      <li key={i}><a href={link.href || '#'} className="text-slate-400 hover:text-white text-sm transition-colors">{link.label}</a></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} BCIE TerraVerde Hub. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
