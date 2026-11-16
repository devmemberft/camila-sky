
"use client";

import { motion } from "motion/react";

export default function DiscoveryNote() {
  return (
    <section
      id="nota-final"
      className="relative overflow-hidden bg-bosque px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-3xl">
        {/* Encabezado del documento */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#B8C5AD]">
            DOCUMENTO FINAL · ARCHIVO N.º 1611
          </p>

          <div className="mx-auto my-6 h-px w-16 bg-divisor" />

          <h2 className="font-serif text-4xl text-marfil sm:text-5xl">
            Una última observación.
          </h2>

          <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-[#B8C5AD]">
            NOTA PERSONAL DEL INVESTIGADOR
          </p>
        </motion.div>

        {/* Carta */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative bg-marfil px-7 py-10 shadow-2xl sm:px-14 sm:py-14"
        >
          {/* Referencia del documento */}
          <div className="mb-10 flex items-center justify-between border-b border-[#D7CDB5] pb-4">
            <span className="font-mono text-[9px] tracking-[0.18em] text-divisor">
              REGISTRO CONFIDENCIAL
            </span>
            <span className="font-mono text-[9px] text-divisor">
              2026 / MMXXVI
            </span>
          </div>

          <div className="space-y-6 font-serif text-lg leading-relaxed text-oliva sm:text-xl">
            <p>Después de todo este tiempo de observación, hay algo que debo reconocer:</p>

            <p>
              Ninguna clasificación, por precisa que sea, podría describir
              completamente a una persona. Hay cosas que no aparecen en los
              registros, que no pueden medirse ni ordenarse en una ficha.
            </p>

            <p>
              La forma en que miras el mundo, tu curiosidad por descubrirlo,
              todo aquello que te inspira y las pequeñas cosas que te hacen
              ser tú... son parte de algo mucho más extraordinario que
              cualquier descripción científica.
            </p>

            <p>
              Quizá ese sea el verdadero hallazgo de este expediente:
              que algunas personas no necesitan ser explicadas para
              resultar fascinantes.
            </p>

            <p className="pt-2">
              Y aunque este archivo llegue hoy a su última página,
              espero que tu historia siga llenándose de lugares por conocer,
              cosas por crear, música que bailar y motivos para sorprenderte.
            </p>

            <p className="pt-4">
              Feliz veintitres vueltas al sol. Que todos tus años estén llenos
              de vida, descubrimientos y momentos que merezcan quedarse
              para siempre.
            </p>
          </div>

          {/* Firma */}
          <div className="mt-14 border-t border-[#D7CDB5] pt-7">
            <p className="font-mono text-[9px] tracking-[0.2em] text-divisor">
              CON ADMIRACIÓN Y AFECTO,
            </p>

            <p className="mt-3 font-serif text-2xl italic text-bosque">
              El investigador.
            </p>

            <p className="mt-2 font-mono text-[9px] tracking-wider text-divisor">
              EXPEDIENTE 1611 · CASO IRREPETIBLE
            </p>
          </div>

          {/* Sello de archivo */}
          <div className="absolute -bottom-5 -right-3 flex h-20 w-20 -rotate-12 items-center justify-center rounded-full border border-divisor/60 text-center sm:-right-5">
            <div className="flex h-17 w-17 items-center justify-center rounded-full border border-dashed border-divisor/60">
              <span className="font-mono text-[8px] leading-relaxed tracking-wider text-divisor">
                ARCHIVO
                <br />
                ESPECIAL
                <br />
                ★ 1611 ★
              </span>
            </div>
          </div>
        </motion.div>

        {/* Cierre */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-serif text-2xl italic text-marfil">
            Fin del expediente.
          </p>

          <p className="mt-3 font-mono text-[9px] tracking-[0.25em] text-[#B8C5AD]">
            Te amamos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
