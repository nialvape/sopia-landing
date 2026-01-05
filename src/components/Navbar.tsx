const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Sopia" className="h-10 w-10 object-contain" />
                        <span className="text-2xl font-bold text-white">Sopia</span>
                    </div>

                    {/* CTA */}
                    <a
                        href="#contact"
                        className="btn-primary px-6 py-2.5 text-sm font-semibold bg-white text-russian_violet-950 hover:bg-gray-100 transition-all"
                    >
                        Contactar
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
