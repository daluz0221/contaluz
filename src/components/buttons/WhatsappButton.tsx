
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

const phoneNumber = "573185324133";
const message = "¡Hola! Me gustaría más información sobre tus servicios.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

export const WhatsappButton = () => {
  return (
    <a
        href={whatsappUrl}
        target='_blank'
        rel='noopener noreferrer'
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition transform hover:scale-110 z-50"
    >
        <FaWhatsapp className='w-7 h-7' />
    </a>
  )
}
