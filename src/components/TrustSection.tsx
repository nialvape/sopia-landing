import { MessageSquare, Instagram, Shield, CheckCircle } from 'lucide-react'

const integrations = [
  { name: 'WhatsApp Business', icon: MessageSquare },
  { name: 'Instagram Direct', icon: Instagram },
  { name: 'Meta Business', icon: Shield },
]

const trustPoints = [
  'Seguridad de nivel empresarial',
  'Encriptación end-to-end',
  'Disponibilidad 99.9%',
  'Datos aislados y protegidos',
]

const TrustSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Integrations */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-sm font-medium mb-4 text-green-900">
              <Shield className="h-4 w-4" />
              <span>Integraciones Oficiales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Conectá con las Plataformas
              <br />
              <span className="bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
                que Tus Clientes Usan
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Integraciones oficiales con Meta para WhatsApp e Instagram
            </p>
            <div className="flex flex-wrap gap-4">
              {integrations.map((integration, index) => {
                const Icon = integration.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-russian_violet-300 transition-colors"
                  >
                    <Icon className="h-6 w-6 text-russian_violet-600" />
                    <span className="font-semibold text-gray-900">{integration.name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Trust Indicators */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint-100 rounded-full text-sm font-medium mb-4 text-mint-900">
              <CheckCircle className="h-4 w-4" />
              <span>Confiable</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Listo para
              <br />
              <span className="bg-gradient-to-r from-russian_violet-950 to-delft_blue-950 bg-clip-text text-transparent">
                Tu Empresa
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Construido con seguridad y confiabilidad como prioridad
            </p>
            <ul className="space-y-4">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-mint-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection


