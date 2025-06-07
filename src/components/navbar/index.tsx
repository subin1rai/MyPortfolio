"use client";
import Container from "../container";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import ThemeToggle from "../themeToggle";

const Navbar = () => {
  const navItems = [
    // { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <Container>
      <motion.nav
  animate={
    typeof window !== "undefined" && window.innerWidth >= 1024 // Tailwind's 'lg'
      ? {
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          width: scrolled ? "40%" : "100%",
          y: scrolled ? 10 : 0,
        }
      : {}
  }
//   transition={
//     typeof window !== "undefined" && window.innerWidth >= 1024 // Tailwind's 'lg'
//       ? { duration: 0.3, ease: "linear" }
//       : {}
//   }
  className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-none px-4 py-2 backdrop-blur-md lg:rounded-full lg:px-4 lg:bg-white/30 lg:dark:bg-neutral-900/30"
>

        <motion.div
          whileHover={{ rotateY: 360 }}
          whileTap={{rotateY: 360 }}
          whileDrag={{ rotateY: 360 }}
          whileFocus={{ rotateY: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-10 w-10 overflow-hidden rounded-full"
        >
          <Image
            src="/me.jpg"
            alt="Avatar"
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="flex items-center">
          {navItems.map((item, no) => (
            <Link
              className="relative px-2 py-1 text-sm"
              key={no}
              href={item.href}
              onMouseEnter={() => setHovered(no)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === no && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="text-primary dark:text-white relative z-10">
                {item.name}
              </span>
            </Link>
          ))}
          <ThemeToggle/>
        </div>

      </motion.nav>
    </Container>
  );
};

export default Navbar;
