"use client"
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [menuAnimation, setMenuAnimation] = useState('animate-menu-in');
    
    

    const toggleMenu = () => {
        if (isOpen) {
        // animación de salida
        setMenuAnimation('animate-menu-out');
        setTimeout(() => {
            setIsOpen(false);
            setShowMenu(false);
        }, 700); // duración de la animación
        } else {
        setIsOpen(true);
        setShowMenu(true);
        setMenuAnimation('animate-menu-in');
        }
    };
    return (
        <>
            <header className={`
                     flex justify-between items-center px-8 py-4 max-w-7xl mx-auto z-20 transition duration-300 
                `}>
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Image
                        src="/contaluz-logo-transparent.png" // coloca tu logo en /public/logo.png
                        alt="Logo Contador"
                        width={100}
                        height={100}
                    />
                </div>

                {/* Nav links */}
                <nav className="hidden md:flex space-x-8 text-lg font-medium">
                    <a href="#servicios" className="hover:text-[var(--primaryHover)] transition">
                        Servicios
                    </a>
                    <a href="#faqs" className="hover:text-[var(--primaryHover)] transition">
                        Faqs
                    </a>
                    <a href="#contacto" className="hover:text-[var(--primaryHover)] transition">
                        Contacto
                    </a>
                </nav>

                {/* Nombre de la web para SEO */}
                <h1 className="hidden md:block text-2xl font-bold">Contaluz</h1>
                <button
                    className="md:hidden p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </header>

            {/* MOBILE MENU */}
            {showMenu && (
                <div className={`md:hidden  text-white px-6 py-4 space-y-4 ${menuAnimation}`}>
                    <nav className="flex flex-col space-y-3 text-lg text-center font-medium">
                        {["Servicios", "Faqs", "Contacto"].map((link, index) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className={`hover:text-[var(--primaryHover)] transition animate-slide-fade-up`}
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    <hr className="border-[var(--primaryHover)]" />

                    <h1 className="text-xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-t from-white to-blue-300 animate-slide-fade-up"
                        style={{ animationDelay: '0.5s' }}>
                        Contaluz
                    </h1>
                </div>
            )}
        </>
    )
}
