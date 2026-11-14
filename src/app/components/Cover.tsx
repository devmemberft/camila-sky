'use client';
import { motion } from "motion/react";

export default function Cover() {
    return(
        <main className="min-h-screen bg-[#fbf2d1] text-black">
            <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col overflow-hidden px-6 py-7 sm:px-10 lg:px-16">
                <header className="flex items-center justify-between border-b border-[#183D32]/20 pb-5">
                    <span className="font-mono text-[10px] tracking-[0.2em] sm:text-xs">ARCHIVO DE HISTORIA NATURAL</span>
                    <span className="font-mono tracking-widest text-[10px]">VOL. XXIII</span>
                </header>

                <div className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-2 lg:gap-10">
                    <motion.div>
                        <p className="mb-5 font-mono text-xs tracking-[02.em] text-[#66916A]">EXPEDIENTE N. °023</p>

                        <h1 className="max-w-xl font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">Una especie <span className="black italic">extraordinaria.</span></h1>

                        <div className="my-7 h-px w-16 bg-[#66816A]"/>

                        <p className="max-w-md text-sm leading-7 sm:text-base text-[#52675A]">
                            En algún lugar de este vasto mundo existen
                            organismos extraordinarios. Algunos, por su
                            singularidad, merecen ser estudiados con
                            especial atención.

                        </p>

                        <p className="mt-5 font-serif text-lg italic">Tu eres un ejemplar excepcional.</p>

                        <button className="mt-9 border px-6 py-4 font-mono transition-colors duration-300 text-[10px] tracking-widest border-[#183D32] hover:bg-[#183D32] hover:text-[#F3EFDF]">EXPLORAR EXPEDIENTE ↓</button>
                    </motion.div>


                    <motion.div>
                        <div className="relative flex w-full items-center justify-center border p-5 aspect-4/5 max-w-85 border-[#183D32]/20 sm:max-w-105">
                            <div className="absolute left-3 top-3 font-mono tracking-widest text-[9px] text-[#66816A]">
                                PLATE 023
                            </div>

                            <div className="flex h-full w-full items-center justify-center bg-[#eae5d34d]">
                                {/*ilustracion*/}
                                <span className="font-serif text-7xl italic text-[#315C49]/30">Flora</span>
                            </div>

                            <div className="absolute bottom-3 right-3 font-mono tracking-widest text-[9px] text-[#66816A]">FIG. XXIII</div>
                        </div>
                    </motion.div>
                </div>

                <footer className="flex justify-between border-t pt-5 font-mono tracking-widest border-[#182D32]/20 text-[9px] text-[#66916A]">
                    <span>EDICION ESPECIAL</span>
                    <span>2003 · 2026</span>
                </footer>
            </section>
        </main>
    );
}