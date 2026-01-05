import { MessageSquare, Bot, Users, Zap, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Cliente Envía Mensaje',
    description: 'Tu cliente te escribe por WhatsApp, Instagram o cualquier canal integrado. El mensaje llega instantáneamente a Sopia.',
    color: 'text-mint-600',
    bgColor: 'bg-mint-50'
  },
  {
    icon: Zap,
    title: 'Procesamiento Automático',
    description: 'Sopia crea o actualiza el ticket automáticamente, identifica al contacto y aplica las reglas de asignación configuradas.',
    color: 'text-light_green-600',
    bgColor: 'bg-light_green-50'
  },
  {
    icon: Bot,
    title: 'Asignación Inteligente',
    description: 'Según tu configuración: el agente de IA responde automáticamente, o se asigna a un agente humano con balanceo de carga por departamento.',
    color: 'text-russian_violet-600',
    bgColor: 'bg-russian_violet-50'
  },
  {
    icon: Users,
    title: 'Respuesta en Tiempo Real',
    description: 'Tu equipo ve el mensaje al instante con WebSocket. Puede responder, agregar notas internas, o escalar a otro departamento si es necesario.',
    color: 'text-delft_blue-600',
    bgColor: 'bg-delft_blue-50'
  },
  {
    icon: CheckCircle2,
    title: 'Seguimiento y Analytics',
    description: 'Todas las interacciones quedan registradas. Medí tiempos de respuesta, satisfacción del cliente y performance por canal.',
    color: 'text-mint-600',
    bgColor: 'bg-mint-50'
  },
]

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-delft_blue-100 rounded-full text-sm font-medium mb-4 text-delft_blue-900">
            <Zap className="h-4 w-4" />
            <span>Cómo Funciona</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Rápido y
            <br />
            <span className="bg-gradient-to-r from-russian_violet-950 to-delft_blue-950 bg-clip-text text-transparent">
              Completamente Automático
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desde el mensaje del cliente hasta la resolución, todo fluye naturalmente
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-mint-200 via-russian_violet-200 to-mint-200" style={{ top: '80px' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Step number and icon */}
                  <div className="flex flex-col items-center mb-4">
                    <div className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center mb-3 relative z-10 border-4 border-white shadow-lg`}>
                      <Icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-russian_violet-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-russian_violet-900 to-delft_blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Empezar Ahora
            <Zap className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection


