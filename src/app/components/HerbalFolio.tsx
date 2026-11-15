'use client';
import { motion } from "motion/react";

const specimens = [
  {
    number: "001",
    category: "BOTÁNICA",
    title: "Flora viva",
    description:
      "Una afinidad natural por los paisajes, las plantas y las pequeñas maravillas que crecen lejos del ruido.",
    observation: "Hábitat: cualquier lugar donde la naturaleza conserve su esencia.",
  },
  {
    number: "002",
    category: "BIOLOGÍA",
    title: "Microcosmos",
    description:
      "Interés por las formas de vida, sus misterios y los pequeños mecanismos que hacen posible la existencia.",
    observation: "Campo de estudio: la complejidad de lo aparentemente sencillo.",
  },
  {
    number: "003",
    category: "MÚSICA",
    title: "Frecuencias",
    description:
      "Afinidad por las melodías alternativas, los sonidos inesperados y aquellas canciones que parecen entenderlo todo.",
    observation: "Frecuencia preferida: la que invita a quedarse escuchando.",
  },
  {
    number: "004",
    category: "LITERATURA",
    title: "Entre páginas",
    description:
      "Un universo de historias, palabras y mundos que existen más allá de lo cotidiano.",
    observation: "Territorio: bibliotecas, historias y páginas por descubrir.",
  },
  {
    number: "005",
    category: "ARTES PLÁSTICAS",
    title: "Trazos y pigmentos",
    description:
      "La necesidad de transformar ideas, emociones y observaciones en algo que pueda verse.",
    observation: "Instrumentos: lápices, pinceles y una imaginación inquieta.",
  },
  {
    number: "006",
    category: "MOTOCICLISMO",
    title: "Espíritu nómada",
    description:
      "Una inclinación hacia las carreteras, la velocidad y esa sensación de libertad que acompaña cada trayecto.",
    observation: "Hábitat: carreteras abiertas y horizontes lejanos.",
  },
  {
    number: "007",
    category: "EXPLORACIÓN",
    title: "Cartografía del mundo",
    description:
      "Curiosidad por los lugares desconocidos, las culturas diferentes y todo aquello que espera al otro lado.",
    observation: "Estado: siempre existen nuevos destinos por explorar.",
  },
  {
    number: "008",
    category: "MOVIMIENTO",
    title: "Movimiento perpetuo",
    description:
      "Una energía difícil de contener cuando comienza a sonar la música. El baile aparece como una forma natural de expresión.",
    observation: "Actividad: máxima cuando hay música de por medio.",
  },
];

export default function HerbalFolio(){
    return(
        <section id="herbolario" className="bg-papel text-bosque px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity:0, y:15 }}
                    whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-8 bg-bosque"/>
                        <span className="font-mono text-bosque tracking-[0.2em] text-[10px]">COLECCIÓN DE AFINIDADES</span>
                    </div>

                    <div className="flex flex-col justify-between gap-5 border-b border-divisor/20 pb-8 sm:flex-row sm:items-end">
                        <div>
                            <p className="mb-2 font-mono text-xs text-bosque">
                                PORTAFOLIO PERSONAL · VOL. XI · GRAFH. XVI
                            </p>

                            <h2 className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Un universo de <span className="block italic">pequeñas cosas</span></h2>

                            <p className="masx-w-sm mt-4 text-sm leading-6 text-focus">Una recopilación de intereses, curiosidades y pequeñas obsesiones que conozco de ti y le dan forma a tu mundo propio</p>
                        </div>
                    </div>

                </motion.div>

                {/*coleccion*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {specimens.map((item,i) =>(
                        <motion.article
                            key={item.number}
                            initial={{ opacity:0, y:20 }}
                            whileInView={{ opacity:1, y:0 }}
                            viewport={{ once:true }}
                            transition={{ duration: 0.55, delay:(i % 4) * 0.08, }}
                            className="group relative flex min-h-65 flex-col border-b border-bosque/20 py-6 sm:border-r sm:px-5 sm:first:pl-0 sm:nth-2:border-r-0 sm:nth2:pl-5 sm:nth-3:border-r sm:nth-3:pl-0 sm:nth-4:border-r-0 sm:nth-4:pl-5 lg:border-r lg:px-5 lg:first:pl-0 lg:nth-2:border-r lg:nth-2:pl-5 lg:nth-3:border-r lg:nth-3:pl-5 lg:nth-4:border-r-0 lg:nth-4:pl-5 lg:nth-n+5:border-b-0 lg:nth-n+5:border-r lg:nth-5:pl-0 lg:nth-8:border-r-0"
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <span className="font-mono text-xs text-bosuqe">N.º {item.number}</span>
                                <span className="font-mono text-[9px] tracking-widest text-bosque">
                                {item.category}
                                </span>
                            </div>

                            <h3 className="mb-4 font-serif text-2xl leading-tight transition-colors duration-300 group-hover:text-bosque">
                                {item.title}
                            </h3>

                            <p className="mb-6 text-sm leading-6 text-focus">
                                {item.description}
                            </p>

                            <div className="mt-auto border-t border-bosque/15 pt-4">
                                <p className="font-mono text-[10px] leading-5 text-bosque">
                                {item.observation}
                                </p>
                            </div>

                        </motion.article>
                    ))}
                </div>

                {/* Nota final */}
                <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-12 border-l-2 border-divisor py-2 pl-5"
                >
                <p className="font-serif text-xl italic leading-relaxed sm:text-2xl">
                    Algunas colecciones no se encuentran en la naturaleza.
                    Se descubren conociendo a las personas.
                </p>

                <span className="mt-4 block font-mono text-[9px] tracking-widest text-divisor">
                    NOTA DEL INVESTIGADOR
                </span>
                </motion.div>

                {/* Pie */}
                <div className="mt-12 flex flex-col justify-between gap-2 border-t border-bosque/20 pt-5 font-mono text-[9px] tracking-widest text-divisor sm:flex-row">
                <span>ARCHIVO DE AFINIDADES PERSONALES</span>
                <span>8 REGISTROS CATALOGADOS</span>
                </div>
            </div>
        </section>
    );
};