import { FaqItem } from "./FaqItem";


 const faqs = [
    {
      question: "¿Qué servicios ofrece el contador?",
      answer:
        "Ofrecemos asesoría contable, declaraciones de impuestos y auditorías financieras adaptadas a tus necesidades.",
    },
    {
      question: "¿Cómo puedo agendar una cita?",
      answer:
        "Puedes agendar una cita a través de nuestro formulario de contacto en la página o escribiéndonos directamente a WhatsApp.",
    },
    {
      question: "¿Trabajan con empresas y personas naturales?",
      answer:
        "Sí, ofrecemos servicios tanto a personas naturales como a empresas, sin importar su tamaño.",
    },
  ];

export const FaqGrid = () => {


  return (
    <section id="faqs" className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold text-center mb-8 ">Preguntas Frecuentes</h2>
        <div className="divide-y divide-[var(--primary)]">
          {
            faqs.map((faq) => (
              <FaqItem key={`${faq.question} - ${faq.answer}`} {...faq}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}
