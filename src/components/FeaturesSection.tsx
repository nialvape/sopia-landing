import { Bot, MessageSquare, Zap, Users, BarChart3, Settings, UserCog, Workflow } from 'lucide-react'

const features = [
  {
    icon: Workflow,
    title: 'Next-Best-Action',
    description: 'La IA lee la conversación y ejecuta procesos automáticamente: crea órdenes de trabajo, genera facturas, envía notificaciones. De la charla a la acción.',
    color: 'text-light_green-400'
  },
  {
    icon: MessageSquare,
    title: 'Omnicanal Real',
    description: 'WhatsApp Business API e Instagram integrados oficialmente. Soporte técnico por chat unificado con todos tus canales de comunicación.',
    color: 'text-mint-400'
  },
  {
    icon: UserCog,
    title: 'Asignación Inteligente',
    description: 'Balanceo automático de carga por departamento. Escalá casos entre equipos técnicos y configurá el comportamiento por cada contacto.',
    color: 'text-light_green-400'
  },
  {
    icon: Bot,
    title: 'Agentes de IA 24/7',
    description: 'Respuestas automáticas instantáneas para soporte técnico. Escalamiento inteligente a técnicos humanos cuando es necesario.',
    color: 'text-light_green-400'
  },
  {
    icon: Users,
    title: 'CRM Integrado',
    description: 'Gestión completa de contactos con roles, tags y segmentación. Historial unificado de tickets y casos técnicos. Notas internas para tu equipo.',
    color: 'text-russian_violet-400'
  },
  {
    icon: Zap,
    title: 'Tiempo Real',
    description: 'WebSocket para actualizaciones instantáneas. Indicadores de escritura, notificaciones push y sincronización automática en todos los dispositivos.',
    color: 'text-delft_blue-400'
  },
  {
    icon: Settings,
    title: 'Automatización de Procesos',
    description: 'Configurá flujos que se disparan desde conversaciones. Ideal para comunicación interna y externa: desde soporte hasta ventas.',
    color: 'text-mint-400'
  },
  {
    icon: BarChart3,
    title: 'Analytics Completo',
    description: 'Métricas por canal, tiempos de respuesta, satisfacción del cliente. Dashboard completo para tomar decisiones basadas en datos.',
    color: 'text-mint-400'
  },
]

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-russian_violet-100 rounded-full text-sm font-medium mb-4 text-russian_violet-900">
            <Zap className="h-4 w-4" />
            <span>Funcionalidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Todo lo que Necesitás para
            <br />
            <span className="bg-gradient-to-r from-russian_violet-950 to-delft_blue-950 bg-clip-text text-transparent">
              Soporte Técnico Moderno
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Potentes herramientas que van más allá del soporte tradicional
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-russian_violet-200 transition-all group"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 mb-4 ${feature.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

