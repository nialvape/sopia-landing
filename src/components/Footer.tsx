import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Sopia" className="h-8 w-8 object-contain" />
              <span className="text-xl font-bold text-white">Sopia</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Plataforma omnicanal con IA para equipos de atención al cliente.
              Nunca pierdas un mensaje con agentes de IA 24/7.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Producto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integraciones
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="mailto:hola@sopia.app" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <Link to="/terminos" className="hover:text-white transition-colors">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-sm">
          <p>© {new Date().getFullYear()} Sopia. Todos los derechos reservados.</p>
          <div className="mt-4 sm:mt-0">
            <span className="text-gray-500">Construido para equipos de atención al cliente</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer



