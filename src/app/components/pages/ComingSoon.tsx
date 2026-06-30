import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#081827]">

      {/* Blueprint Grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081827]/80 via-[#081827]/70 to-[#081827]" />
{/* Blueprint Overlay */}
<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">

  {/* Vertical */}
  <div className="absolute left-[8%] top-0 h-full w-px bg-white/15"></div>
  <div className="absolute left-[20%] top-[5%] h-[75%] w-px bg-white/10"></div>
  <div className="absolute right-[22%] top-[10%] h-[65%] w-px bg-white/10"></div>
  <div className="absolute right-[5%] top-0 h-full w-px bg-white/15"></div>

  {/* Horizontal */}
  <div className="absolute top-[18%] left-0 h-px w-full bg-white/10"></div>
  <div className="absolute top-[42%] left-[10%] h-px w-[75%] bg-white/10"></div>
  <div className="absolute bottom-[15%] left-0 h-px w-full bg-white/10"></div>

  {/* Dashed */}
  <div className="absolute top-[24%] left-[12%] w-[260px] border-t border-dashed border-white/20"></div>
  <div className="absolute top-[58%] right-[10%] w-[300px] border-t border-dashed border-white/20"></div>

  {/* Diagonals */}
  <div className="absolute top-[12%] right-[18%] w-[260px] h-px bg-white/15 origin-left -rotate-45"></div>

  <div className="absolute bottom-[22%] left-[5%] w-[200px] h-px bg-white/15 origin-left rotate-45"></div>

  {/* Blueprint Circles */}
  <div className="absolute left-[6%] top-[20%] w-10 h-10 rounded-full border border-white/20">
      <div className="absolute inset-2 rounded-full border border-white/20"></div>
  </div>

  <div className="absolute right-[4%] top-[6%] w-5 h-5 rounded-full border border-white/20"></div>

  <div className="absolute left-[16%] bottom-[12%] w-4 h-4 rounded-full border border-white/20"></div>

  {/* Crosshair */}
  <div className="absolute left-[35%] top-[30%]">

      <div className="w-6 h-px bg-white/25"></div>

      <div className="absolute top-[-12px] left-3 h-6 w-px bg-white/25"></div>

  </div>

  <div className="absolute right-[30%] bottom-[28%]">

      <div className="w-6 h-px bg-white/25"></div>

      <div className="absolute top-[-12px] left-3 h-6 w-px bg-white/25"></div>

  </div>

</div>

<motion.div
    className="absolute inset-x-0 h-56 bg-gradient-to-b from-transparent via-cyan-300/20 to-transparent blur-3xl"

    animate={{
        y:["-25%","120%"]
    }}

    transition={{
        duration:8,
        repeat:Infinity,
        ease:"linear"
    }}
/>

      <section className="relative z-20 flex min-h-screen items-center justify-center">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="mb-6 tracking-[0.45em] uppercase text-[#D8B36A]"
          >
            Something New Is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="font-black uppercase text-white leading-none"
            style={{
              fontSize: "clamp(5rem,13vw,11rem)"
            }}
          >
            Coming
            <br />
            Soon
          </motion.h1>

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:.6 }}
            className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/70"
          >
            We're carefully designing something exceptional.
            Every great studio begins with a blueprint.
          </motion.p>

          <motion.a
  whileHover={{
    scale: 1.04,
    y: -2,
  }}
  whileTap={{
    scale: 0.98,
  }}
  href="/products"
  className="
    group
    relative
    mt-14
    inline-flex
    items-center
    justify-center
    overflow-hidden
    rounded-full
    border
    border-white/20
    bg-white/10
    px-12
    py-5
    text-base
    font-medium
    tracking-wide
    text-white
    backdrop-blur-xl
    shadow-[0_8px_30px_rgba(0,0,0,0.25)]
    transition-all
    duration-300
    hover:border-white/40
    hover:bg-white/15
    hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]
  "
>
  {/* Animated shine */}
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

 <span
  className="relative z-10 font-medium tracking-wide"
  style={{ color: "#ffffff" }}
>
  Explore Our Designs
</span>
</motion.a>

        </div>

      </section>

    </main>
  );
}