import { ArrowRight, Mail, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import DemoModal from './DemoModal'

const FinalCTASection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-russian_violet-950 via-russian_violet-900 to-delft_blue-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          ¿Listo para Transformar tu Atención al Cliente?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Unite a los equipos que ya revolucionaron su atención al cliente con nuestra plataforma omnicanal con IA.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:hola@sopia.app"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group bg-white text-russian_violet-950 hover:bg-gray-100"
          >
            <Mail className="h-5 w-5" />
            Contactar Ventas
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="btn-outline text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:border-white/50 inline-flex items-center gap-2"
          >
            <MessageSquare className="h-5 w-5" />
            Solicitar Demo
          </button>
        </div>

        {/* Additional trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400 pt-8 border-t border-white/10">
          <div>Sin tarjeta de crédito</div>
          <div>•</div>
          <div>30 días de prueba gratuita</div>
          <div>•</div>
          <div>Cancelá cuando quieras</div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}

export default FinalCTASection
