'use client';

import { motion } from "motion/react";

const observations = [
  {
    number: "01",
    category: "COMPORTAMIENTO EXPLORATORIO",
    title: "Una curiosidad difícil de contener",
    description:
      "Se observa una tendencia persistente a descubrir nuevos lugares, recorrer caminos desconocidos y encontrar belleza en escenarios inesperados.",
    note:
      "La curiosidad parece ser una característica permanente.",
  },
  {
    number: "02",
    category: "RESPUESTA A ESTÍMULOS",
    title: "El fenómeno musical",
    description:
      "Se registra un incremento considerable de actividad cuando el espécimen entra en contacto con estímulos musicales. En determinadas circunstancias, resulta imposible permanecer quieta.",
    note:
      "Comportamiento especialmente frecuente ante una buena canción.",
  },
  {
    number: "03",
    category: "ACTIVIDAD CREATIVA",
    title: "Una mirada diferente",
    description:
      "Presenta una notable capacidad para observar el mundo desde perspectivas diferentes y transformar aquello que percibe en expresiones artísticas.",
    note:
      "Se recomienda no interrumpir los procesos creativos.",
  },
  {
    number: "04",
    category: "INTERACCIÓN SOCIAL",
    title: "Una presencia singular",
    description:
      "Su presencia constituye un elemento distintivo de su entorno. Se recomienda estudiar especialmente su capacidad para generar momentos memorables.",
    note:
      "Existen características que la ciencia todavía no consigue explicar.",
  },
];

export default function ResearchNotes(){
    return(
        <section
            id="observaciones"
            className="bg-papel px-6 py-20 text-bosque sm:px-10 sm:py-29 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                {/* Encabezado */}
                <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                >
                <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-divisor" />
                    <span className="font-mono text-[10px] tracking-[0.2em] text-divisor">
                    CUADERNO DE CAMPO
                    </span>
                </div>

                <div className="flex flex-col justify-between gap-5 border-b border-bosque/20 pb-8 sm:flex-row sm:items-end">
                    <div>
                    <p className="mb-2 font-mono text-xs text-divisor">
                        REGISTRO DE INVESTIGACIÓN · N.º 023
                    </p>

                    <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                        Observaciones
                        <span className="block italic">
                        particulares.
                        </span>
                    </h2>
                    </div>

                    <span className="w-fit border border-divisor/50 px-3 py-2 font-mono text-[9px] tracking-[0.2em] text-divisor">
                    ARCHIVO RESERVADO
                    </span>
                </div>
                </motion.div>
                {/* Introducción */}
                <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="my-9 max-w-2xl font-serif text-xl italic leading-relaxed text-focus sm:text-2xl"
                >
                Durante el periodo de observación se han identificado
                una serie de comportamientos y particularidades que
                merecen quedar documentados.
                </motion.p>

                {/* Observaciones */}
                <div className="border-t border-bosque/25">
                {observations.map((item, index) => (
                    <motion.article
                    key={item.number}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                    }}
                    className="grid gap-5 border-b border-bosque/20 py-8 sm:grid-cols-[90px_1fr] sm:gap-8 lg:grid-cols-[120px_1fr]"
                    >
                    {/* Numeración */}
                    <div className="flex items-start justify-between sm:block">
                        <span className="font-serif text-4xl italic text-divisor/60">
                        {item.number}
                        </span>

                        <span className="font-mono text-[9px] tracking-widest text-divisor sm:mt-3 sm:block">
                        OBSERVACIÓN
                        </span>
                    </div>

                    {/* Contenido */}
                    <div>
                        <span className="font-mono text-[9px] tracking-[0.16em] text-divisor">
                        {item.category}
                        </span>

                        <h3 className="mt-2 font-serif text-2xl sm:text-3xl">
                        {item.title}
                        </h3>

                        <p className="mt-4 max-w-3xl text-sm leading-7 text-focus sm:text-base">
                        {item.description}
                        </p>

                        {/* Nota manuscrita */}
                        <div className="mt-5 border-l border-divisor pl-4">
                        <p className="font-serif text-base italic text-divisor">
                            Nota del investigador: {item.note}
                        </p>
                        </div>
                    </div>
                    </motion.article>
                ))}
                </div>

                {/* Conclusión */}
                <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-12 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end"
                >
                <div>
                    <span className="font-mono text-[9px] tracking-[0.2em] text-divisor">
                    CONCLUSIÓN PROVISIONAL
                    </span>

                    <p className="mt-3 max-w-2xl font-serif text-2xl italic leading-relaxed sm:text-3xl">
                    Cuanto más se observa, más razones aparecen
                    para continuar investigando.
                    </p>
                </div>

                <span className="font-mono text-[9px] tracking-widest text-divisor">
                    FIN DE LAS NOTAS
                </span>
                </motion.div>

                {/* Pie */}
                <div className="mt-12 flex flex-col justify-between gap-2 border-t border-bosque/20 pt-5 font-mono text-[9px] tracking-widest text-divisor sm:flex-row">
                <span>DEPARTAMENTO DE OBSERVACIÓN</span>
                <span>4 REGISTROS DOCUMENTADOS</span>
                </div>

            </div>

        </section>
    );
};