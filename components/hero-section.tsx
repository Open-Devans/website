"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const scrollToNextSection = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <div className="flex items-center rounded-full px-3 py-1 text-sm leading-6 text-primary-foreground bg-primary mb-6">
                <span>Software Engineering Collective</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              We build exceptional digital experiences
            </h1>
            <p className="text-lg text-muted-foreground max-w-prose">
              A collective of passionate software engineers specialized in
              TypeScript, React Native, Expo, React, Next.js and Node.js
              crafting beautiful and performant web and mobile applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/#contact">Work with us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#work">View our work</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[500px] w-full">
              <div className="absolute top-0 -left-4 h-72 w-72 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 h-80 w-80 bg-primary/10 rounded-full blur-3xl" />

              {/* Code block display */}
              <div className="absolute top-10 right-10 bg-card rounded-lg shadow-xl border p-6 transform rotate-2 w-[300px]">
                <div className="flex items-center mb-4">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <pre className="text-xs overflow-x-auto">
                  <code className="text-primary">
                    {`import React from 'react';
import { motion } from 'framer-motion';

export function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Open Devans</h1>
    </motion.div>
  );
}`}
                  </code>
                </pre>
              </div>

              <div className="absolute bottom-20 -left-5 bg-card rounded-lg shadow-xl border p-6 transform -rotate-3 w-[280px]">
                <div className="space-y-2">
                  <div className="h-2 w-20 bg-primary/20 rounded-full" />
                  <div className="h-2 w-28 bg-primary/15 rounded-full" />
                  <div className="h-2 w-24 bg-primary/20 rounded-full" />
                  <div className="h-2 w-16 bg-primary/15 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNextSection}
          className="animate-bounce"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
