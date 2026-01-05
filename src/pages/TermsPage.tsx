import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const TermsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-russian_violet-950 hover:text-russian_violet-800 transition-colors">
                        <ArrowLeft className="h-5 w-5" />
                        <span className="font-semibold">Volver al inicio</span>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 lg:p-12">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Términos y Condiciones
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Última actualización: {new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div className="prose prose-lg max-w-none">
                        {/* 1. Aceptación de los Términos */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Al acceder y utilizar la plataforma Sopia ("el Servicio"), proporcionada por Sopia ("nosotros", "nuestro" o "la Empresa"),
                                usted ("el Usuario" o "Cliente") acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna
                                parte de estos términos, no debe utilizar nuestro Servicio.
                            </p>
                        </section>

                        {/* 2. Descripción del Servicio */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción del Servicio</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Sopia es una plataforma de atención al cliente omnicanal con inteligencia artificial que permite:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Gestión unificada de canales de comunicación (WhatsApp, Instagram, y otros)</li>
                                <li>Asignación inteligente de tickets con balanceo de carga</li>
                                <li>Agentes de IA para respuestas automáticas 24/7</li>
                                <li>CRM integrado para gestión de contactos</li>
                                <li>Analytics y métricas de rendimiento</li>
                            </ul>
                        </section>

                        {/* 3. Registro y Cuenta */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Registro y Cuenta</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                3.1. Para utilizar el Servicio, debe crear una cuenta proporcionando información precisa y completa.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                3.2. Es responsable de mantener la confidencialidad de sus credenciales de acceso.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                3.3. Debe notificarnos inmediatamente sobre cualquier uso no autorizado de su cuenta.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                3.4. Debe ser mayor de 18 años o tener la capacidad legal para contratar en su jurisdicción.
                            </p>
                        </section>

                        {/* 4. Período de Prueba */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Período de Prueba</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                4.1. Ofrecemos un período de prueba de 30 días efectivos sin necesidad de tarjeta de crédito.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                4.2. Durante el período de prueba, tendrá acceso a las funcionalidades del plan seleccionado.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                4.3. Al finalizar el período de prueba, deberá contratar un plan de pago para continuar utilizando el Servicio.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                4.4. Puede cancelar en cualquier momento durante el período de prueba sin cargo alguno.
                            </p>
                        </section>

                        {/* 5. Planes y Pagos */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Planes y Pagos</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                5.1. Los precios de nuestros planes están disponibles bajo consulta y pueden variar según las necesidades específicas.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                5.2. Los pagos se realizan de forma mensual o anual según el plan contratado.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                5.3. Nos reservamos el derecho de modificar los precios con un aviso previo de 30 días.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                5.4. Los pagos no son reembolsables, excepto cuando lo requiera la ley aplicable.
                            </p>
                        </section>

                        {/* 6. Uso Aceptable */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Uso Aceptable</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                El Usuario se compromete a NO:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                                <li>Utilizar el Servicio para actividades ilegales o fraudulentas</li>
                                <li>Enviar spam, contenido malicioso o realizar phishing</li>
                                <li>Intentar acceder sin autorización a sistemas o datos de otros usuarios</li>
                                <li>Realizar ingeniería inversa, descompilar o desensamblar el Servicio</li>
                                <li>Sobrecargar intencionalmente la infraestructura del Servicio</li>
                                <li>Revender o redistribuir el Servicio sin autorización expresa</li>
                            </ul>
                        </section>

                        {/* 7. Propiedad Intelectual */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Propiedad Intelectual</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                7.1. Todo el contenido, diseño, código, marcas y material del Servicio son propiedad de Sopia o sus licenciantes.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                7.2. El Usuario retiene todos los derechos sobre los datos y contenido que carga en la plataforma.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                7.3. Al utilizar el Servicio, el Usuario otorga a Sopia una licencia limitada para procesar y almacenar sus datos
                                con el único fin de proporcionar el Servicio.
                            </p>
                        </section>

                        {/* 8. Privacidad y Protección de Datos */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacidad y Protección de Datos</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                8.1. Nos comprometemos a proteger la privacidad y seguridad de sus datos.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                8.2. Implementamos medidas de seguridad de nivel empresarial, incluyendo encriptación end-to-end.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                8.3. Los datos de cada cliente están completamente aislados y protegidos.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                8.4. No compartimos, vendemos ni alquilamos información personal a terceros sin consentimiento expreso.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                8.5. Cumplimos con las leyes de protección de datos aplicables, incluyendo la Ley de Protección de Datos Personales
                                de Argentina (Ley 25.326).
                            </p>
                        </section>

                        {/* 9. Disponibilidad del Servicio */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disponibilidad del Servicio</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                9.1. Nos esforzamos por mantener una disponibilidad del 99.9% del Servicio.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                9.2. Podemos realizar mantenimientos programados con aviso previo.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                9.3. No garantizamos que el Servicio esté libre de errores o interrupciones.
                            </p>
                        </section>

                        {/* 10. Cancelación y Terminación */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cancelación y Terminación</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                10.1. Puede cancelar su suscripción en cualquier momento desde su panel de control.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                10.2. La cancelación será efectiva al final del período de facturación actual.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                10.3. Nos reservamos el derecho de suspender o terminar cuentas que violen estos Términos.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                10.4. Tras la terminación, sus datos serán eliminados según nuestra política de retención de datos.
                            </p>
                        </section>

                        {/* 11. Limitación de Responsabilidad */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitación de Responsabilidad</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                11.1. El Servicio se proporciona "tal cual" y "según disponibilidad".
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                11.2. No seremos responsables por daños indirectos, incidentales, especiales o consecuentes.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                11.3. Nuestra responsabilidad total no excederá el monto pagado por el Usuario en los últimos 12 meses.
                            </p>
                        </section>

                        {/* 12. Indemnización */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Indemnización</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                El Usuario acepta indemnizar y mantener indemne a Sopia de cualquier reclamo, pérdida, responsabilidad,
                                daño o gasto (incluyendo honorarios legales) que surjan del uso indebido del Servicio o violación de estos Términos.
                            </p>
                        </section>

                        {/* 13. Modificaciones */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Modificaciones a los Términos</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                13.1. Nos reservamos el derecho de modificar estos Términos en cualquier momento.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                13.2. Las modificaciones significativas serán notificadas con al menos 30 días de anticipación.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                13.3. El uso continuado del Servicio después de las modificaciones constituye aceptación de los nuevos términos.
                            </p>
                        </section>

                        {/* 14. Ley Aplicable y Jurisdicción */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Ley Aplicable y Jurisdicción</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                14.1. Estos Términos se rigen por las leyes de la República Argentina.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                14.2. Cualquier disputa será sometida a la jurisdicción exclusiva de los tribunales competentes de la
                                Ciudad Autónoma de Buenos Aires, Argentina.
                            </p>
                        </section>

                        {/* 15. Contacto */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contacto</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Para cualquier consulta sobre estos Términos y Condiciones, puede contactarnos en:
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                <strong>Email:</strong> <a href="mailto:hola@sopia.app" className="text-russian_violet-950 hover:text-russian_violet-800 underline">hola@sopia.app</a>
                            </p>
                        </section>

                        {/* Separador */}
                        <div className="border-t border-gray-200 my-8"></div>

                        {/* Nota final */}
                        <div className="bg-gray-50 rounded-lg p-6">
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Al utilizar Sopia, usted reconoce haber leído, entendido y aceptado estos Términos y Condiciones en su totalidad.
                                Si tiene alguna pregunta o inquietud, no dude en contactarnos.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer simple */}
            <footer className="bg-white border-t border-gray-200 mt-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p className="text-center text-sm text-gray-600">
                        © {new Date().getFullYear()} Sopia. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default TermsPage
