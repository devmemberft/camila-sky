'use client';
import { motion } from "motion/react";

const knownInfo = [
    { label:"NOMBRE", value:"Soury"},
    { label:"EDAD", value:"23 ciclos solares"},
    { label:"ESTADO", value:"En evolución constante"},
    { label:"HABILIDAD", value:"Transmutación"},
    { label:"COMPONENTE PRINCIPAL", value:"Curación"},
    { label:"PODER ESPECIAL", value:"Intuición"},
    { label:"ACTITUD", value:"Sumamente independiente"},
    
];

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
    {number:"02", title:"Sensibilidad artística", description:"Manifiesta una especial afinidad por la música, el dibujo y otras expresiones creativas", tag:"CREATIVIDAD" },
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
                            <p className="mb-2 mt-4 font-mono text-sm text-divisor">ARCHIVO N.° 1199 / SECCIÓN A</p>

                            <h2 className="font-serif text-4xl sm:text-5xl">Ficha de clasificación</h2>
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

                        <h3 className="font-serif text-4xl italic sm:text-5xl">Animalia <br />Singularis</h3>

                        <p className="mt-3 font-mono text-sm text-divisor">(clasificacion simbólica · 6202)</p>

                        <div className="mt-9 grid grid-cols-2 gap-3">
                            {knownInfo.map((item,i)=>(
                                <div key={i} id={item.label} className="border border-bosque/20 p-4">
                                    <span className="block font-mono tracking-widest text-bosque text-[9px]">{item.label}</span>
                                    <span className="mt-2 block font-serif text-xl">{item.value}</span>
                                    
                                </div>
                            ))}

                        </div>
                    </motion.div>

                    {/* clasificacion */}
                    <motion.div
                        initial={{ opacity:0, y:15 }}
                        whileInView={{ opacity:1, y:0 }}
                        viewport={{ once:true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <p className="mb-5 font-mono text-divisor text-[10px] tracking-[0.18em]">B · CLASIFICACIÓN</p>

                        <div className="border-t border-bosque/30">
                            {taxonomy.map((item,i)=>(
                                <div 
                                key={item.label}
                                className="flex items-center justify-between gap-4 border-b border-bosque/20 py-4">
                                    <span className="font-mono tracking-widest text-bosque text-[10px]">
                                        {String(i+1).padStart(3,"0")} · {item.label}
                                    </span>

                                    <span className="text-right font-serif text-lg italic sm:text-xl">{item.value}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-6 bg-bosque p-5 text-marfil">
                            <span className="font mono text-light text-[9px] tracking-[0.2em]">NIVEL DE RAREZA</span>

                            <div className="mt-2 flex items-end justify-between">
                                <span className="font-serif text-3xl italic">Mítico</span>
                                <span className="font-mono text-sm text-light">∞ / ∞</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/*caracteristicas*/}
                <div className="border-t border-divisor/20 pt-9">
                    <motion.div
                        initial={{ opacity:0, y:15 }}
                        whileInView={{ opacity:1, y:0 }}
                        viewport={{ once:true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="mb-3 font-mono text-divisor text-[10px] tracking-[0.18em]">C · CARACTERÍSTICAS OBSERVADAS</p>

                        <h3 className="mb-8 font-serif text-3xl sm:text-4xl">Rasgos distintivos</h3>
                    </motion.div>

                    <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
                        { characteristics.map((item,i)=>(
                            <motion.article
                                key={item.number}
                                initial={{ opacity:0, y:15 }}
                                whileInView={{ opacity:1, y:0 }}
                                viewport={{ once:true }}
                                transition={{ duration: 0.6, delay: i * 0.12 }}
                                className="border-t border-divisor/20 py-6 sm:px-5 sm:first:pl-0 sm:nth-2:border-l sm:nth-3:border-l"
                            >
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="font-mono text-xs text-divisor">[{item.number}]</span>

                                    <span className="font-mono tracking-widest text-divisor text-[9px]">{item.tag}</span>
                                </div>

                                <h4 className="mb-3 font-serif text-2xl">{item.title}</h4>

                                <p className="text-sm leading-7 text-oliva">{item.description}</p>

                            </motion.article>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex flex-col justify-between gap-2 border-t border-divisor/20 pt-5 font-mono tracking-widest text-divisor sm:flex-row text-[9px]">
                        <span>DEPARTAMENTO DE BIOLOGIA EXTRAORDINARIA</span>
                        <span>REGISTRO ACTUALIZADO · 2026</span>
                </div>
                
            </div>
        </section>
    );
}