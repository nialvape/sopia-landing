import { useState } from 'react'
import { X, Mail, User, Building, Phone, MessageSquare } from 'lucide-react'

interface DemoModalProps {
    isOpen: boolean
    onClose: () => void
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            // Enviar email usando EmailJS
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                    accessToken: import.meta.env.VITE_EMAILJS_PRIVATE_KEY,
                    template_params: {
                        from_name: formData.name,
                        from_email: formData.email,
                        company: formData.company,
                        phone: formData.phone,
                        message: formData.message,
                        to_email: 'hola@sopia.app'
                    }
                })
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', company: '', phone: '', message: '' })
                setTimeout(() => {
                    onClose()
                    setSubmitStatus('idle')
                }, 2000)
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Error sending email:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-russian_violet-950 to-delft_blue-950 text-white p-6 rounded-t-2xl">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Solicitar Demo</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Cerrar"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    <p className="text-gray-300 mt-2">
                        Completá tus datos y te contactamos en menos de 24hs
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Nombre */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre completo *
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-russian_violet-500 focus:border-transparent outline-none transition-all"
                                placeholder="Juan Pérez"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email corporativo *
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-russian_violet-500 focus:border-transparent outline-none transition-all"
                                placeholder="juan@empresa.com"
                            />
                        </div>
                    </div>

                    {/* Empresa */}
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Empresa *
                        </label>
                        <div className="relative">
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                id="company"
                                required
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-russian_violet-500 focus:border-transparent outline-none transition-all"
                                placeholder="Mi Empresa S.A."
                            />
                        </div>
                    </div>

                    {/* Teléfono */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Teléfono
                        </label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-russian_violet-500 focus:border-transparent outline-none transition-all"
                                placeholder="+54 9 11 1234-5678"
                            />
                        </div>
                    </div>

                    {/* Mensaje */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            ¿Algo que te gustaría agregar?
                        </label>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={4}
                                className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-russian_violet-500 focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Contanos sobre tu caso de uso..."
                            />
                        </div>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-green-800 text-sm font-medium">
                                ✓ ¡Solicitud enviada! Te contactaremos pronto.
                            </p>
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-800 text-sm font-medium">
                                ✗ Hubo un error. Por favor, intentá de nuevo o escribinos a hola@sopia.app
                            </p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-russian_violet-950 to-delft_blue-950 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Enviando...' : 'Solicitar Demo'}
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                        Al enviar este formulario, aceptás que te contactemos sobre Sopia.
                    </p>
                </form>
            </div>
        </div>
    )
}

export default DemoModal
