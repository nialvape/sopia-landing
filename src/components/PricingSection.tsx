import { Check, Zap } from 'lucide-react'

const PricingSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-russian_violet-100 rounded-full text-sm font-medium mb-4 text-russian_violet-900">
            <Zap className="h-4 w-4" />
            <span>Planes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Precios Simples y
            <br />
            <span className="bg-gradient-to-r from-russian_violet-950 to-delft_blue-950 bg-clip-text text-transparent">
              Transparentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elegí el plan que se ajuste a tu equipo, o contactanos para soluciones empresariales
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-russian_violet-300 transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Inicial</h3>
            <p className="text-gray-600 mb-6">Perfecto para equipos pequeños</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">200 USD</span>
              <span className="text-gray-600 ml-2">/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-mint-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Hasta 2 cuentas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-mint-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">1 agente IA</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-mint-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Hasta 5 automatizaciones</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-mint-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Analytics básico</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="btn-outline w-full justify-center"
            >
              Comenzar Ahora
            </a>
          </div>

          {/* Professional Plan - Featured */}
          <div className="bg-gradient-to-br from-russian_violet-950 to-delft_blue-950 text-white p-8 rounded-xl border-2 border-russian_violet-800 relative transform scale-105 shadow-xl">
            <div className="absolute top-4 right-4 bg-light_green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
              Más Versátil
            </div>
            <h3 className="text-2xl font-bold mb-2">Flex</h3>
            <p className="text-gray-300 mb-6">Recursos y precio a medida</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">Consultar</span>
              <span className="text-gray-300 ml-2">precio</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-light_green-400 flex-shrink-0 mt-0.5" />
                <span>Cuentas a medida</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-light_green-400 flex-shrink-0 mt-0.5" />
                <span>Agentes de IA adicionales</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-light_green-400 flex-shrink-0 mt-0.5" />
                <span>Automatizaciones personalizadas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-light_green-400 flex-shrink-0 mt-0.5" />
                <span>Analytics avanzado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-light_green-400 flex-shrink-0 mt-0.5" />
                <span>Soporte prioritario</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="bg-white text-russian_violet-950 hover:bg-gray-100 btn-primary w-full justify-center"
            >
              Contactar Ventas
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-russian_violet-300 transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <p className="text-gray-600 mb-6">Para grandes organizaciones</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">2000 USD</span>
              <span className="text-gray-600 ml-2">/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-mint-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Cuentas ilimitadas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-mint-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Hasta 10 agentes IA</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-mint-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Automatizaciones ilimitadas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-mint-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Soporte dedicado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-mint-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Garantía de Disponibilidad (SLA)</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="btn-outline w-full justify-center"
            >
              Contactar Ventas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection


