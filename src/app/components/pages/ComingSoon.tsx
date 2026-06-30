import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  Home,
  Hammer,
  Trees,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ComingSoon() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

const TRAIL_LENGTH = 10;

const [trail, setTrail] = useState(
  Array.from({ length: TRAIL_LENGTH }, () => ({
    x: 0,
    y: 0,
  }))
);

  const [hovering, setHovering] = useState(false);

  const [cursorLabel, setCursorLabel] = useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 140,
    damping: 18,
  });

  const springY = useSpring(mouseY, {
    stiffness: 140,
    damping: 18,
  });

  const glowX = useTransform(springX, (v) => v - 250);
  const glowY = useTransform(springY, (v) => v - 250);
  

  useEffect(() => {
  const move = (e: MouseEvent) => {

    const { clientX, clientY } = e;

    setMouse({
      x: clientX,
      y: clientY,
    });

    mouseX.set(clientX);
    mouseY.set(clientY);

    setTrail((prev) => {

      const next = [...prev];

      next.unshift({
        x: clientX,
        y: clientY,
      });

      next.pop();

      return next;

      

    });

  };

  window.addEventListener("mousemove", move);

  return () => window.removeEventListener("mousemove", move);

}, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F6F2] cursor-none">

      {/* ================= GRID ================= */}

      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(#1A1A1A 1px, transparent 1px),linear-gradient(90deg,#1A1A1A 1px,transparent 1px)",
          backgroundSize: "86px 86px",
        }}
      />

      {/* ================= MOUSE GLOW ================= */}

      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        className="
        fixed
        pointer-events-none
        h-[500px]
        w-[500px]
        rounded-full
        bg-[#C9A97A]/20
        blur-[140px]
        z-0
      "
      />

      {/* ================= CUSTOM CURSOR ================= */}
{trail.map((point, index) => (
  <motion.div
    key={index}
    animate={{
      x: point.x,
      y: point.y,
      scale: 1 - index * 0.08,
      opacity: 1 - index * 0.12,
    }}
    transition={{
      duration: 0.15 + index * 0.03,
      ease: "easeOut",
    }}
    className={`
      fixed
      pointer-events-none
      rounded-full
      z-[9999]
      -translate-x-1/2
      -translate-y-1/2
      ${
        index === 0
          ? "h-4 w-4 bg-[#B78F63] shadow-[0_0_30px_rgba(183,143,99,.65)]"
          : "h-2 w-2 bg-[#D5B48A]"
      }
    `}
  />
))}

<motion.div
  animate={{
    x: trail[0]?.x ?? 0,
    y: trail[0]?.y ?? 0,
    rotate: 360,
  }}
  transition={{
    rotate: {
      repeat: Infinity,
      duration: 10,
      ease: "linear",
    },
    x: {
      type: "spring",
      stiffness: 250,
      damping: 22,
    },
    y: {
      type: "spring",
      stiffness: 250,
      damping: 22,
    },
  }}
  className="
    fixed
    pointer-events-none
    z-[9998]
    h-10
    w-10
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    border
    border-[#B78F63]/50
  "
>
  <div className="absolute top-0 left-1/2 h-2 w-px -translate-x-1/2 bg-[#B78F63]" />
  <div className="absolute bottom-0 left-1/2 h-2 w-px -translate-x-1/2 bg-[#B78F63]" />
  <div className="absolute left-0 top-1/2 h-px w-2 -translate-y-1/2 bg-[#B78F63]" />
  <div className="absolute right-0 top-1/2 h-px w-2 -translate-y-1/2 bg-[#B78F63]" />
</motion.div>
{cursorLabel && (

<motion.div

    initial={{
        scale:0,
        opacity:0
    }}

    animate={{
        scale:1,
        opacity:1,
        x:trail[0]?.x ?? 0,
        y:trail[0]?.y ?? 0
    }}

    exit={{
        scale:0,
        opacity:0
    }}

    transition={{
        type:"spring",
        stiffness:250,
        damping:20
    }}

    className="
        fixed
        z-[10000]
        pointer-events-none
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#1F1F1F]
        px-5
        py-2
        text-xs
        tracking-[0.28em]
        uppercase
        text-white
        font-medium
        shadow-xl
    "
>

    {cursorLabel}

</motion.div>

)}

      {/* ================= FLOATING BLOBS ================= */}

      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -left-40
        top-16
        h-[520px]
        w-[520px]
        rounded-full
        bg-[#E7D5BD]/45
        blur-[140px]
      "
      />

      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-[-150px]
        bottom-[-100px]
        h-[600px]
        w-[600px]
        rounded-full
        bg-[#EFE6DA]
        blur-[170px]
      "
      />

      {/* ================= HERO ================= */}

     <main
  className="
    relative
    z-10
    pt-28
    lg:pt-32
  "
>

  <div
    className="
      mx-auto
      min-h-[calc(100vh-8rem)]
      max-w-[1700px]
      flex
      flex-col
      items-center
      justify-center
      px-6
      pb-24
    "
  >

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#D7CCBE]
              bg-white/70
              px-6
              py-3
              backdrop-blur-xl
            "
          >
            <Sparkles size={16} />

            <span className="text-xs tracking-[0.35em] uppercase">
              Something New
            </span>

          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.8,
            }}
            className="
              mt-10
              max-w-4xl
              text-center
              font-serif
              text-[62px]
              leading-[0.95]
              md:text-[92px]
              xl:text-[118px]
            "
          >
            The Future of
            <br />

            Backyard Living
            <br />

            is Almost Here.
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .3,
            }}
            className="
              mt-10
              max-w-3xl
              text-center
              text-xl
              leading-relaxed
              text-[#666]
            "
          >
            We're crafting something that will completely transform the
            Backyard Nest experience. While we're putting the final touches
            together, discover our premium range of backyard studios,
            granny flats and custom outdoor spaces.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .45,
            }}
            className="
              mt-14
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
            "
          >
            <Link
              to="/products/studio"
             onMouseEnter={() => {
    setHovering(true);
    setCursorLabel("GO");
}}

onMouseLeave={() => {
    setHovering(false);
    setCursorLabel("");
}}
              className="
group
inline-flex
items-center
gap-3
rounded-full
bg-white
text-[#1F1F1F]
font-medium
px-9
py-5
transition-all
duration-500
hover:-translate-y-1
hover:bg-[#F6F1EA]
"
            >
              View Our Designs

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>

            <Link
              to="/contact"
              onMouseEnter={() => {
    setHovering(true);
    setCursorLabel("GO");
}}

onMouseLeave={() => {
    setHovering(false);
    setCursorLabel("");
}}
              className="
                rounded-full
                border
                border-[#D8CDBF]
                bg-white/70
                px-10
                py-5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#A68864]
                hover:bg-white
              "
            >
              Book a Consultation
            </Link>
          </motion.div>


                    {/* ================= SHOWCASE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
            }}
            style={{
              rotateX: (mouse.y - window.innerHeight / 2) * -0.003,
              rotateY: (mouse.x - window.innerWidth / 2) * 0.003,
            }}
            className="
              relative
              mt-20
              w-full
              max-w-[1450px]
              overflow-hidden
              rounded-[42px]
              border
              border-[#E6DDD2]
              bg-white/60
              backdrop-blur-2xl
              shadow-[0_40px_100px_rgba(0,0,0,.08)]
            "
          >

            <img
              src="/images/hero.webp"
              alt="Backyard Nest"
              className="
                aspect-[16/8]
                w-full
                object-cover
                transition
                duration-700
                hover:scale-105
              "
            />

            {/* Gradient */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Overlay */}

            <div className="absolute bottom-12 left-12 max-w-xl">

              <motion.div
                whileHover={{
                  x: 8,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/90
                  px-5
                  py-3
                  backdrop-blur-xl
                "
              >
                <Sparkles size={16} />

                <span className="text-sm uppercase tracking-[0.3em]">
                  Launching Soon
                </span>

              </motion.div>

              <h2
                className="
                  mt-8
                  text-5xl
                  font-serif
                  text-white
                "
              >
                Beautiful spaces.
                <br />
                Thoughtfully designed.
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-white/90">
                While our newest experience is being crafted,
                discover our existing range of premium backyard
                studios and granny flats.
              </p>

            </div>

          </motion.div>

          {/* ================= FLOATING FEATURE CARDS ================= */}

          <div
            className="
              relative
              mt-24
              grid
              w-full
              max-w-7xl
              grid-cols-1
              gap-8
              md:grid-cols-3
            "
          >

            {[
              {
                icon: Home,
                title: "Premium Designs",
                text: "Architecturally designed backyard studios and granny flats tailored for modern Australian living.",
              },
              {
                icon: Trees,
                title: "Australian Built",
                text: "Crafted using premium materials with meticulous attention to detail and sustainability.",
              },
              {
                icon: Hammer,
                title: "Custom Built",
                text: "Designed around your lifestyle with personalised layouts and premium finishes.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .15,
                  }}
                  whileHover={{
                    y: -12,
                  }}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className="
                    group
                    rounded-[34px]
                    border
                    border-[#E6DDD2]
                    bg-white/70
                    p-9
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-[#B78F63]
                    hover:shadow-[0_30px_60px_rgba(0,0,0,.08)]
                  "
                >

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#F5EFE7]
                      transition-all
                      duration-500
                      group-hover:rotate-6
                      group-hover:bg-[#B78F63]
                      group-hover:text-white
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-8 text-3xl font-serif">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-[#666]">
                    {item.text}
                  </p>

                </motion.div>

              );

            })}

          </div>

          {/* ================= STATS ================= */}

          <div
            className="
              mt-20
              grid
              w-full
              max-w-6xl
              grid-cols-2
              gap-8
              lg:grid-cols-4
            "
          >

            {[
              {
                number: "250+",
                label: "Projects Completed",
              },
              {
                number: "15+",
                label: "Years Experience",
              },
              {
                number: "100%",
                label: "Australian Built",
              },
              {
                number: "5★",
                label: "Customer Rating",
              },
            ].map((item) => (

              <motion.div
                key={item.label}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-[30px]
                  border
                  border-[#E6DDD2]
                  bg-white/60
                  p-10
                  text-center
                  backdrop-blur-xl
                "
              >

                <div className="text-5xl font-serif">
                  {item.number}
                </div>

                <p
                  className="
                    mt-4
                    uppercase
                    tracking-[0.22em]
                    text-sm
                    text-[#777]
                  "
                >
                  {item.label}
                </p>

              </motion.div>

            ))}

          </div>    
                    {/* ================= WHAT'S COMING ================= */}

          <section className="relative mt-36 w-full max-w-[1600px]">

            <div className="text-center">

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="
                  uppercase
                  tracking-[0.4em]
                  text-[#A68864]
                  text-sm
                "
              >
                What's Coming
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .15 }}
                className="
                  mt-6
                  text-5xl
                  md:text-7xl
                  font-serif
                "
              >
                A Better Experience
                <br />
                Is Being Crafted.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: .25 }}
                className="
                  mt-8
                  mx-auto
                  max-w-3xl
                  text-xl
                  leading-relaxed
                  text-[#666]
                "
              >
                We're designing a richer digital experience to help you
                explore our premium backyard studios, granny flats and
                custom spaces with ease.
              </motion.p>

            </div>
          </section>


                    {/* ================= FINAL CTA ================= */}

          <section className="mt-36 w-full max-w-6xl">

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                rounded-[42px]
                border
                border-[#E6DDD2]
                bg-[#1F1F1F]
                px-10
                py-20
                text-center
                text-white
              "
            >

              {/* Background Glow */}

              <div className="absolute inset-0 overflow-hidden">

                <motion.div
                  animate={{
                    x: [0, 120, 0],
                    y: [0, -80, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 18,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -left-32
                    -top-32
                    h-80
                    w-80
                    rounded-full
                    bg-[#A68864]/30
                    blur-[120px]
                  "
                />

                <motion.div
                  animate={{
                    x: [0, -120, 0],
                    y: [0, 60, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    bottom-0
                    right-0
                    h-96
                    w-96
                    rounded-full
                    bg-[#8F7150]/30
                    blur-[150px]
                  "
                />

              </div>

              <div className="relative z-10">

                <p className="uppercase tracking-[0.35em] text-sm text-[#D9C3A3]">
                  Stay Inspired
                </p>

                <h2
                  className="
                    mt-6
                    text-5xl
                    md:text-7xl
                    font-serif
                  "
                >
                  Don't Wait.
                  <br />
                  Start Your Project Today.
                </h2>

                <p
                  className="
                    mx-auto
                    mt-8
                    max-w-3xl
                    text-xl
                    leading-relaxed
                    text-white/80
                  "
                >
                  While this experience is under construction,
                  our team is already helping homeowners create
                  beautiful backyard spaces across Melbourne.
                </p>

                <div
                  className="
                    mt-14
                    flex
                    flex-wrap
                    justify-center
                    gap-5
                  "
                >

                  <Link
                    to="/products/studio"
                   onMouseEnter={() => {
    setHovering(true);
    setCursorLabel("GO");
}}

onMouseLeave={() => {
    setHovering(false);
    setCursorLabel("");
}}
                    className="
group
inline-flex
items-center
gap-3
rounded-full
bg-[#1F1F1F]
text-white
font-medium
px-10
py-5
shadow-2xl
transition-all
duration-500
hover:bg-[#A68864]
"
                  >
                    Explore Designs

                    <ArrowRight
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-2
                      "
                    />

                  </Link>

                  <Link
                    to="/contact"
                    onMouseEnter={() => {
    setHovering(true);
    setCursorLabel("GO");
}}

onMouseLeave={() => {
    setHovering(false);
    setCursorLabel("");
}}
                    className="
                      rounded-full
                      border
                      border-white/30
                      px-9
                      py-5
                      transition-all
                      duration-500
                      hover:bg-white/10
                    "
                  >
                    Contact Us
                  </Link>

                </div>

              </div>

            </motion.div>

          </section>
        </div>
      </main>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="
          fixed
          bottom-8
          left-1/2
          -translate-x-1/2
          text-[#A68864]
          z-50
          pointer-events-none
        "
      >
        <ChevronDown size={34} />
      </motion.div>

    </section>
  );
}