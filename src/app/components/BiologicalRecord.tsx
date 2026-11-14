'use client';
import { motion } from "motion/react";

const taxonomy = [
    { label: "Reino", value: "Animalia" },
    { label: "Clase", value: "Singularis" },
    { label: "Orden", value: "Libertatis" },
    { label: "Familia", value: "Sorceresses" },
    { label: "Género", value: "Anima" },
    { label: "Especie", value: "Half-human" },
];

const characteristics = [
    {number:"01", title:"Espíritu explorador", description:"Cuenta con una curiosidad innata por descubrir nuevos lugares, paisajes y formas de vida", tag:"EXPLORACIÓN" },
    {number:"02", title:"Sensibilidad artítica", description:"Manifiesta una especial afinidad por la música, el dibujo y otras expresiones creativas", tag:"CREATIVIDAD" },
    {number:"04", title:"Danza ilimitada", description:"Su actividad aumenta considerablemente ante la presencia de música. El baile constituye uno de sus comportamientos más característicos.", tag:"MOVIMIENTO" },
];

export default function BiologicalRecord(){

    return(
        <section
            id="clasificacion"
            className="bg-papel px-6 py-20 text-bosque sm:px-10 sm:py-28 lg:px-16">
            <div className="mx-auto max-w-7xl">
                {/*Encabezado*/}
                <motion.div
                    initial={{ opacity:0, y:15 }}
                    whileInView={{ opacity: 1, y:0 }}
                    viewport={{ once: true}}
                    animate={{}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="mb-4 flex items-center gap-3">
                        <span className="h-px w-8 bg-divisor"/>
                        <span className="font-mono text-[10px] tracking-[0.2em] text-divisor">
                            REGISTRO TAXONÓMICO
                        </span>
                    </div>

                    <div className="flex flex-col justify-between gap-4 border-b border-bosque/20 pb-7 sm:flex-row sm:items-end" />
                        <div>
                            <p className="mb-2 font-mono text-sm text-divisor">ARCHIVO N.° 023 / SECCIÓN A</p>

                            <h2 className="font-serif text-4xl sm:text-5xl">Ficha de clasificacion</h2>
                        </div>

                        <span className="font-mono text-[10px] tracking-widest text-divisor">ESPÉCIMEN · 001</span>
                    <div/>
                </motion.div>

                {/* Identificación y taxonomía */}
                <div className="grid gap-12 py-10 lg:grid-cols-2 lg:gap-20">
                    <motion.div
                        initial={{ opacity:0, y:15 }}
                        whileInView={{ opacity:1, y:0 }}
                        viewport={{ once:true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <p className="mb-5 font-mono text-divisor text-[10px] tracking-[0.18em]">A · IDENTIFICACIÓN</p>

                        <p className="mb-2 text-sm text-divisor">Denominación científica</p>

                        <h3 className="font-serif text-4xl italic sm:text-5xl">Anima <br />Extraordinaria</h3>

                        <p className="mt-3 font-mono text-sm text-divisor">(clasificacion simbólica · 2026)</p>

                        <div className="mt-9 grid grid-cols-2 gap-3">
                            <div className="border border-bosque/20 p-4">
                                <span className="block font-mono tracking-widest text-bosque text-[9px]">NOMBRE COMÚN</span>
                                <span className="mt-2 block font-serif text-xl">Souri</span>
                            </div>

                            <div className="border border-bosque/20 p-4">
                                <span className="block font-mono tracking-widest text-bosque text-[9px]">EDAD</span>
                                <span className="mt-2 block font-serif text-xl">23 años</span>
                            </div>

                            <div className="border border-bosque/20 p-4">
                                <span className="block font-mono tracking-widest text-bosque text-[9px]">ESTADO DEL ESPÉCIMEN</span>
                                <span className="mt-2 block font-serif text-xl">En constante evolución</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* clasificacion */}
                    <motion.div
                        initial={{ opacity:0, y:15 }}
                        whileInView={{ opacity:1, y:0 }}
                        viewport={{ once:true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <p className="mb-5 font-mono text-divisor tect-[10px] tracking-[0.18em]">B · CLASIFICACIÓN</p>
                    </motion.div>
                </div>
                
            </div>
        </section>
    );
}