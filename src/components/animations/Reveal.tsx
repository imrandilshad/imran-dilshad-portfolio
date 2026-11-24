"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

const elements = {
  div: m.div,
  li: m.li,
  header: m.header,
  aside: m.aside,
  h3: m.h3,
};

interface RevealProps {
  as?: keyof typeof elements;
  /** Delay in seconds, used to stagger siblings. */
  delay?: number;
  className?: string;
  children: ReactNode;
}

export function Reveal({ as = "div", delay = 0, className, children }: RevealProps) {
  const Component = elements[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
