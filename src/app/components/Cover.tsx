'use client';
import { motion } from "motion/react";
import Image from "next/image";

export default function Cover() {
    return(
        <main className="min-h-screen bg-papel text-black">
            <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col overflow-hidden px-6 py-7 sm:px-10 lg:px-16">
                <header className="flex items-center justify-between border-b border-bosque/20 pb-5">
                    <span className="font-mono text-[10px] tracking-[0.2em] sm:text-xs">ARCHIVO DE HISTORIA NATURAL</span>
                    <span className="font-mono tracking-widest text-[10px]">VOL. XXIII</span>
                </header>

                <div className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-2 lg:gap-10">
                    <motion.div
                        initial={{ opacity:0, y:20 }}
                        animate={{ opacity:1, y:0 }}
                        transition={{ duration:0.8 }}
                        whileInView={{ opacity:1 }}
                        layout
                        // cambiar el orden en que se muestra la ilustracion: className="order-2 lg:order-1"
                    >
                        <p className="mb-5 font-mono text-xs tracking-[02.em] text-[#66916A]">EXPEDIENTE N. ° 1199</p>

                        <h1 className="max-w-xl font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-widest">· Soury ·</h1>
                        <h2 className="black italic lg:text-3xl tracking-widest sm:text-2xl">Una especie singular.</h2>

                        <div className="my-7 h-px w-16 bg-divisor"/>

                        <p className="max-w-md text-sm leading-7 sm:text-base text-focus">
                            En algún lugar de este vasto mundo existen
                            organismos extraordinarios. Algunos, por su
                            singularidad, merecen ser estudiados con
                            especial atención.

                        </p>

                        <p className="mt-5 font-serif text-lg italic">Tu eres un ejemplar excepcional.</p>

                        <button className="mt-9 border px-6 py-4 font-mono transition-colors duration-300 text-[10px] tracking-widest border-bosque hover:bg-bosque hover:text-marfil">EXPLORAR EXPEDIENTE ↓</button>
                    </motion.div>


                    <motion.div
                        initial={{ opacity:1, scale: 0.96 }}
                        animate={{ opacity:1, scale:1 }}
                        transition={{ duration:1, delay: 0.2 }}
                        className="order-1 flex justify-center lg:order-2"
                    >
                        <div className="relative flex w-full items-center justify-center border p-5 aspect-4/5 max-w-85 border-bosque/20 sm:max-w-105">
                            <div className="absolute left-3 top-3 font-mono tracking-widest text-[9px] text-divisor">
                                PLATE 016
                            </div>

                            <div className="flex h-full w-full items-center justify-center bg-[#eae5d34d]">
                                {/*ilustracion*/}
                                <Image
                                    src="/souri.png"
                                    alt="recreacion botanica de souri"
                                    width={512}
                                    height={512}
                                    className="h-auto w-full object-contain"
                                    loading="eager"
                                />
                                {/* <span className="font-serif text-7xl italic text-oliva/30">Flora <img src="@/public/souri.png" alt="" /></span> */}
                            </div>

                            <div className="absolute bottom-3 right-3 font-mono tracking-widest text-[9px] text-divisor">FIG. XVI</div>
                        </div>
                    </motion.div>
                </div>

                <footer className="flex justify-between border-t pt-5 font-mono tracking-widest border-[#182D32]/20 text-[9px] text-[#66916A]">
                    <span>EDICION ESPECIAL</span>
                    <span>16·11·2003 · 16·11·2026</span>
                </footer>
            </section>
        </main>
    );
}