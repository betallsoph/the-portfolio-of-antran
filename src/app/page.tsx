"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { SparklesText } from "@/components/ui/sparkles-text";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { ComicText } from "@/components/ui/comic-text";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-black font-sans">
      {/* Grid background */}
      <InteractiveGridPattern squaresClassName="hover:fill-blue-200/30" />

      {/* Header / Nav */}
      <header className="relative z-10 w-full border-b-2 border-black bg-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter">
            PORTFOLIO<span className="text-blue-400">.</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 font-medium">
            <Link href="#about" className="hover:underline">About</Link>
            <Link href="#projects" className="hover:underline">Projects</Link>
            <Link href="#contact" className="hover:underline">Contact</Link>
          </nav>
          <Button size="sm">Download CV</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center py-24 px-4 text-center">
        <ComicText fontSize={6} className="mb-6 hidden md:block">
          HELLO WORLD
        </ComicText>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 md:hidden">
          HELLO WORLD
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          I&apos;m <SparklesText>Antran</SparklesText>
        </h2>

        <p className="max-w-2xl text-lg md:text-xl text-zinc-600 mb-10 bg-white/80 p-4 border-2 border-black shadow-secondary rotate-1">
          A Full Stack Developer who loves building <span className="font-bold bg-yellow-200 px-1">bold</span>, <span className="font-bold bg-pink-200 px-1">fun</span>, and <span className="font-bold bg-blue-200 px-1">accessible</span> web experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="text-lg">
            View Projects
          </Button>
          <Button variant="oppositeDefault" size="lg" className="text-lg">
            Contact Me
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 bg-blue-50 border-y-2 border-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="relative">
                <div className="absolute inset-0 bg-black translate-x-4 translate-y-4 border-2 border-black rounded-[6px]"></div>
                <div className="relative z-10 w-full h-auto border-2 border-black rounded-[6px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="Profile"
                    width={774}
                    height={774}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-black text-white px-2 transform -rotate-2">WHO</span>
                <span>AM I?</span>
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                I am a passionate software engineer with a knack for creating unique digital experiences. I specialize in React, Next.js, and Node.js, but I&apos;m always learning new technologies.
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new coffee shops, reading sci-fi novels, or playing retro video games.
              </p>

              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "GraphQL"].map((tech) => (
                  <span key={tech} className="px-3 py-1 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm font-bold hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold inline-block border-b-4 border-blue-300 pb-2">Selected Work</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="h-full hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay={item * 100}>
                <div className="h-48 w-full border-b-2 border-black bg-gray-100 relative overflow-hidden group">
                   <div className="absolute inset-0 flex items-center justify-center bg-blue-200 text-6xl font-black text-blue-300 opacity-50 select-none">
                      PROJECT {item}
                   </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Awesome Project {item}</CardTitle>
                  <CardDescription className="text-black font-medium mt-2">Next.js • Tailwind • Supabase</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A brief description of this amazing project. It solves a real problem and looks great doing it.
                  </p>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button size="sm" className="w-full">Demo</Button>
                  <Button size="sm" variant="oppositeDefault" className="w-full"><Github className="w-4 h-4 mr-2" /> Code</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Services Section */}
      <section className="relative z-10 py-20 bg-yellow-50 border-t-2 border-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border-2 border-black bg-white shadow-primary" data-aos="zoom-in">
               <div className="w-12 h-12 bg-pink-300 border-2 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <span className="text-2xl">🚀</span>
               </div>
               <h3 className="text-2xl font-bold mb-3">Fast Performance</h3>
               <p>Optimized for speed and efficiency. Every millisecond counts when it comes to user experience.</p>
            </div>

            <div className="p-8 border-2 border-black bg-white shadow-primary" data-aos="zoom-in" data-aos-delay="100">
               <div className="w-12 h-12 bg-lime-300 border-2 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <span className="text-2xl">🎨</span>
               </div>
               <h3 className="text-2xl font-bold mb-3">Unique Design</h3>
               <p>Standing out from the crowd with bold choices, vibrant colors, and distinctive typography.</p>
            </div>

            <div className="p-8 border-2 border-black bg-white shadow-primary" data-aos="zoom-in" data-aos-delay="200">
               <div className="w-12 h-12 bg-purple-300 border-2 border-black flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 <span className="text-2xl">📱</span>
               </div>
               <h3 className="text-2xl font-bold mb-3">Responsive</h3>
               <p>Looks perfect on any device, from massive desktop monitors to the smallest mobile screens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="border-2 border-black p-8 md:p-12 bg-pink-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-300 border-2 border-black rounded-full flex items-center justify-center animate-bounce">
              <span className="text-2xl">👋</span>
            </div>

            <h2 className="text-4xl font-bold mb-6 text-center">Let&apos;s Work Together!</h2>
            <p className="text-center text-lg mb-10 max-w-2xl mx-auto">
              Have a project in mind? Want to discuss the latest tech trends? Or just want to say hi? Drop me a message!
            </p>

            <form className="space-y-6 max-w-lg mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-bold">Name</label>
                  <input type="text" className="w-full p-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="font-bold">Email</label>
                  <input type="email" className="w-full p-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-bold">Message</label>
                <textarea rows={4} className="w-full p-3 border-2 border-black focus:outline-none focus:ring-4 focus:ring-blue-300/50 transition-all" placeholder="Tell me about your project..."></textarea>
              </div>
              <Button size="lg" className="w-full text-lg">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t-2 border-black bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">PORTFOLIO.</h3>
              <p className="text-gray-400">© 2025 Antran. All rights reserved.</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="p-3 border-2 border-white hover:bg-white hover:text-black transition-all rounded-full">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 border-2 border-white hover:bg-white hover:text-black transition-all rounded-full">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 border-2 border-white hover:bg-white hover:text-black transition-all rounded-full">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 border-2 border-white hover:bg-white hover:text-black transition-all rounded-full">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
