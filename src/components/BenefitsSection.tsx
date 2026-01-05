import { ShoppingCart, Wrench, TrendingUp, Users2, Zap, Building2 } from 'lucide-react'

const benefits = [
  {
    icon: Wrench,
    title: 'Soporte Técnico',
    description: 'Tickets organizados por especialidad, asignación automática por departamento. La IA lee el problema y crea la orden de trabajo automáticamente.',
    stat: '3x Más Rápido',
    color: 'text-russian_violet-600',
    bgColor: 'bg-russian_violet-50'
  },
  {
    icon: Zap,
    title: 'De Conversación a Acción',
    description: 'Next-best-action: la IA ejecuta procesos desde el chat. Crea órdenes, genera facturas, envía notificaciones. Todo automático.',
    stat: '70% Menos Carga',
    color: 'text-light_green-600',
    bgColor: 'bg-light_green-50'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Consultas de productos por WhatsApp, seguimiento de pedidos automático, soporte post-venta. Todo desde una sola plataforma.',
    stat: 'Ventas +30%',
    color: 'text-light_green-600',
    bgColor: 'bg-light_green-50'
  },
  {
    icon: Building2,
    title: 'Comunicación Interna',
    description: 'No solo para clientes externos. Automatizá procesos internos: solicitudes entre departamentos, aprobaciones, notificaciones.',
    stat: 'Versátil',
    color: 'text-delft_blue-600',
    bgColor: 'bg-delft_blue-50'
  },
  {
    icon: Users2,
    title: 'Servicios Profesionales',
    description: 'Agendamiento de citas, consultas especializadas, seguimiento de casos. Configurá el comportamiento por cada cliente.',
    stat: 'Personalizado',
    color: 'text-delft_blue-600',
    bgColor: 'bg-delft_blue-50'
  },
  {
    icon: TrendingUp,
    title: 'Escalá sin Límites',
    description: 'Manejá volúmenes crecientes sin contratar más personal. La IA escala con tu negocio, manteniendo la calidad.',
    stat: 'Sin Límites',
    color: 'text-mint-600',
    bgColor: 'bg-mint-50'
  },
]

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint-100 rounded-full text-sm font-medium mb-4 text-mint-900">
            <TrendingUp className="h-4 w-4" />
            <span>Beneficios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Casos de Uso Reales para
            <br />
            <span className="bg-gradient-to-r from-russian_violet-950 to-delft_blue-950 bg-clip-text text-transparent">
              Tu Negocio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resolvé los desafíos reales que tu equipo enfrenta todos los días
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-lg ${benefit.bgColor} ${benefit.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-russian_violet-950 to-delft_blue-950 bg-clip-text text-transparent">
                    {benefit.stat}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection


