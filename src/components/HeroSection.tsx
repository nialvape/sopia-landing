import { ArrowRight, MessageSquare, Zap, Bot } from 'lucide-react'
import { useState } from 'react'
import Navbar from './Navbar'
import DemoModal from './DemoModal'

const HeroSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="relative bg-gradient-to-br from-russian_violet-950 via-russian_violet-900 to-delft_blue-950 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-light_green-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mint-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Navbar */}
      <Navbar />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32 sm:pt-36 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="text-center">
          {/* Logo grande con nombre */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/logo.png" alt="Sopia" className="h-24 w-24 sm:h-28 sm:w-28 object-contain" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Sopia
            </h1>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20 hover:bg-white/15 transition-all">
            <Bot className="h-4 w-4 text-light_green-400" />
            <span>IA + Agentes Humanos 24/7</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Soporte Técnico Inteligente
            <br />
            <span className="bg-gradient-to-r from-light_green-400 to-mint-400 bg-clip-text text-transparent">
              que Automatiza Procesos
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Plataforma omnicanal con IA para <span className="text-white font-semibold">soporte técnico por chat</span>.
            <br />
            De la conversación a la acción: <span className="text-light_green-400 font-semibold">crea órdenes, facturas y más automáticamente</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group shadow-lg shadow-russian_violet-900/50 hover:shadow-xl hover:shadow-russian_violet-900/70 transition-all"
            >
              Solicitar Demo
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#features"
              className="btn-outline text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all"
            >
              Ver Funcionalidades
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <MessageSquare className="h-5 w-5 text-mint-400" />
              <span className="text-gray-300">WhatsApp + Instagram</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Zap className="h-5 w-5 text-light_green-400" />
              <span className="text-gray-300">Respuestas en Tiempo Real</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Bot className="h-5 w-5 text-mint-400" />
              <span className="text-gray-300">Asignación Inteligente</span>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  )
}

export default HeroSection
