import { MessageCircle, Instagram, Mail, Globe, ArrowRight, Check } from 'lucide-react'

const channels = [
    {
        icon: MessageCircle,
        name: 'WhatsApp',
        description: 'Business API oficial',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        features: ['Mensajes', 'Media', 'Templates']
    },
    {
        icon: Instagram,
        name: 'Instagram',
        description: 'Direct integrado',
        color: 'text-pink-600',
        bgColor: 'bg-pink-50',
        features: ['DMs', 'Imágenes', 'Videos']
    },
    {
        icon: Mail,
        name: 'Email',
        description: 'Próximamente',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        features: ['SMTP', 'IMAP', 'Plantillas']
    },
    {
        icon: Globe,
        name: 'Web Chat',
        description: 'Próximamente',
        color: 'text-purple-600',
        bgColor: 'bg-purple-50',
        features: ['Widget', 'Tiempo real', 'Personalizable']
    },
]

const OmnichannelSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-mint-100 rounded-full text-sm font-medium mb-4 text-mint-900">
                        <MessageCircle className="h-4 w-4" />
                        <span>Omnicanal</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Todos tus Canales en
                        <br />
                        <span className="bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
                            Un Solo Lugar
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Integraciones oficiales con las plataformas que tus clientes ya usan
                    </p>
                </div>

                {/* Channels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {channels.map((channel, index) => {
                        const Icon = channel.icon
                        return (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm border-2 border-gray-200 hover:border-russian_violet-300 transition-all group"
                            >
                                <div className={`inline-flex p-3 rounded-lg ${channel.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`h-8 w-8 ${channel.color}`} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                    {channel.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-4">
                                    {channel.description}
                                </p>
                                <ul className="space-y-2">
                                    {channel.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <Check className="h-4 w-4 text-mint-600" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>

                {/* Flow Diagram */}
                <div className="bg-gradient-to-br from-russian_violet-50 to-delft_blue-50 rounded-2xl p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Flujo de Mensajería Unificado
                    </h3>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
                        {/* Channels */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm">
                                <MessageCircle className="h-5 w-5 text-green-600" />
                                <span className="font-medium text-gray-900">WhatsApp</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm">
                                <Instagram className="h-5 w-5 text-pink-600" />
                                <span className="font-medium text-gray-900">Instagram</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm opacity-50">
                                <Mail className="h-5 w-5 text-blue-600" />
                                <span className="font-medium text-gray-900">Email</span>
                            </div>
                        </div>

                        {/* Arrow */}
                        <ArrowRight className="h-8 w-8 text-russian_violet-600 rotate-90 lg:rotate-0" />

                        {/* Sopia Platform */}
                        <div className="bg-gradient-to-br from-russian_violet-900 to-delft_blue-900 text-white px-8 py-6 rounded-xl shadow-lg">
                            <div className="text-center">
                                <h4 className="text-2xl font-bold mb-2">Sopia</h4>
                                <p className="text-sm text-gray-300">Plataforma Unificada</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/20">
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-mint-400" />
                                        <span>Tickets automáticos</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-mint-400" />
                                        <span>Asignación inteligente</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-mint-400" />
                                        <span>IA + Humanos</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Arrow */}
                        <ArrowRight className="h-8 w-8 text-russian_violet-600 rotate-90 lg:rotate-0" />

                        {/* Agents */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm">
                                <div className="h-8 w-8 rounded-full bg-mint-100 flex items-center justify-center">
                                    <span className="text-sm font-semibold text-mint-900">IA</span>
                                </div>
                                <span className="font-medium text-gray-900">Agente IA</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-sm">
                                <div className="h-8 w-8 rounded-full bg-russian_violet-100 flex items-center justify-center">
                                    <span className="text-sm font-semibold text-russian_violet-900">👤</span>
                                </div>
                                <span className="font-medium text-gray-900">Equipo Humano</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-gray-600 mt-8 text-sm">
                        Recibí mensajes de cualquier canal → Procesá automáticamente → Respondé con IA o humanos
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OmnichannelSection
