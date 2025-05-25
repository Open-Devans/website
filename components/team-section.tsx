"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { teamMembers } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="team" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 right-0 h-80 w-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 h-80 w-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Team</h2>
          <p className="text-muted-foreground text-lg">
            Meet the talented individuals behind Open Devans who bring your ideas to life.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden h-full hover:shadow-md transition-all">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link href={member.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                    <Link href={member.links.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                    <Link href={member.links.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}