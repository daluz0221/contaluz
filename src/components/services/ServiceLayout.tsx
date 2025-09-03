import React from 'react'
import { ServiceItem } from './ServiceItem'
import { Briefcase, Calculator, FileText } from 'lucide-react'

export const ServiceLayout = () => {
  return (
    <main className='min-h-screen py-12' id='servicios'>
        <h2 className='w-full text-center text-[var(--title)] flex items-center justify-center py-20 text-7xl min-h-100'>Servicios</h2>
        <ServiceItem 
          bg='bg-[var(--neutralFondo)]' 
          title='Asesoría contable' 
          text='Optimiza tus registros y toma decisiones con información clara.' 
          image='https://img.freepik.com/foto-gratis/mujeres-negocios-revisando-resultados_1098-1682.jpg'
          details={{
            description: "Brindamos asesoría integral en contabilidad financiera, fiscal y administrativa para asegurar el cumplimiento normativo y la eficiencia en la gestión.",
            cards: [
              { icon: <Briefcase size={28} />, title: "Gestión Fiscal", text: "Cumplimiento tributario y reportes." },
            { icon: <FileText size={28} />, title: "Informes", text: "Elaboración de reportes claros y útiles." },
            { icon: <Calculator size={28} />, title: "Optimización", text: "Procesos contables más eficientes." },
            ]
          }}
          />
        <ServiceItem 
          title="Declaración de Impuestos"
          text="Cumple tus obligaciones tributarias sin complicaciones."
          image="https://img.freepik.com/fotos-premium/formulario-1065-irs-declaracion-ingresos-sociedad-estadounidense_76080-9774.jpg"
          reverse
          details={{
            description:
              "Nos encargamos de la preparación, revisión y presentación de declaraciones fiscales, minimizando riesgos y aprovechando beneficios legales.",
            cards: [
              { icon: <Calculator size={28} />, title: "Planeación", text: "Diseño de estrategias fiscales." },
              { icon: <FileText size={28} />, title: "Declaraciones", text: "Presentación ante autoridades." },
              { icon: <Briefcase size={28} />, title: "Soporte", text: "Acompañamiento en auditorías." },
            ],
          }}
        />
        <ServiceItem 
          bg='bg-[var(--neutralFondo)]' 
          title="Auditoría Financiera"
          text="Identifica riesgos y fortalece la confianza en tu negocio."
          image="https://img.freepik.com/fotos-premium/empresario-lupa-documentos_220873-7940.jpg"
          details={{
            description:
              "Realizamos auditorías financieras y operativas para garantizar transparencia, detectar áreas de mejora y fortalecer la toma de decisiones.",
            cards: [
              { icon: <FileText size={28} />, title: "Reportes claros", text: "Análisis profundo y accesible." },
              { icon: <Briefcase size={28} />, title: "Control Interno", text: "Evaluación de procesos internos." },
              { icon: <Calculator size={28} />, title: "Eficiencia", text: "Identificación de mejoras." },
            ],
          }}
          />
    </main>
  )
}
