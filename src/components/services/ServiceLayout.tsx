import React from 'react'
import { ServiceItem } from './ServiceItem'

export const ServiceLayout = () => {
  return (
    <section className='h-500'>
        <h2 className='w-full text-center text-[var(--title)] flex items-center justify-center py-20 text-7xl min-h-100'>Servicios</h2>
        <ServiceItem bg='bg-[var(--neutralFondo)]' />
        <ServiceItem />
    </section>
  )
}
