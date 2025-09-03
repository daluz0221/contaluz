import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-[var(--neutralFondo)] text-[var(--text)] mt-12'>
        <div className='max-w-7xl mx-auto px-6 py-10'>
            {/* Fast Links */}
            <nav className='flex flex-wrap justify-center gap-8 text-lg font-medium'>
                <Link href="#hero" className="hover:text-[var(--primary)] transition">
                    Inicio
                </Link>
                <Link
                    href="#servicios"
                    className="hover:text-[var(--primaryHover)] transition"
                >
                    Servicios
                </Link>
                <Link href="#faqs" className="hover:text-[var(--primaryHover)] transition">
                    FAQS
                </Link>
                <Link href="#contacto" className="hover:text-[var(--primaryHover)] transition">
                    Contacto
                </Link>
            </nav>

             {/* Línea divisora */}
            <div className="my-8 border-t border-gray-300" />

             {/* Redes sociales */}
                <div className="flex justify-center gap-6 mb-6">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition"
                >
                    <Facebook className="w-6 h-6" />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition"
                >
                    <Instagram className="w-6 h-6" />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition"
                >
                    <Linkedin className="w-6 h-6" />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition"
                >
                    <Twitter className="w-6 h-6" />
                </a>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-[var(--primary)] hover:text-white transition"
                >
                    <Youtube className="w-6 h-6" />
                </a>
                </div>

                {/* Derechos reservados */}
                <p className="text-center text-sm text-gray-600">
                © {new Date().getFullYear()} Derechos reservados, Luis Felipe Echeverry
                </p>
       
        </div>
    </footer>
  )
}
