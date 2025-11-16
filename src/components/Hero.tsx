'use client'

import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Box, Button, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react'

gsap.registerPlugin(ScrollTrigger)

// Sample achievements data (adapt to your real ones)
const achievements = [
  { score: 'React Master', label: 'Frontend Development' },
  { score: 'Next.js Expert', label: 'Full-Stack Apps' },
  { score: 'GSAP Pro', label: 'Animations & Interactions' },
  { score: 'TypeScript Guru', label: 'Type-Safe Code' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    const ctx = gsap.context(() => {
      // Smooth entrance animations with better timing
      timeline
        .from(titleRef.current, {
          duration: 1.2,
          opacity: 0,
          y: 50,
          scale: 0.95,
          ease: 'power4.out'
        })
        .from(subtitleRef.current, {
          duration: 1,
          opacity: 0,
          y: 30,
          ease: 'power3.out'
        }, '-=0.9')
        .from(
          achievementsRef.current ? Array.from(achievementsRef.current.children as HTMLCollectionOf<HTMLElement>) : [],
          {
            duration: 0.8,
            opacity: 0,
            y: 30,
            scale: 0.9,
            stagger: 0.15,
            ease: 'back.out(1.5)'
          },
          '-=0.6'
        )
        .from(ctaRef.current, {
          duration: 0.8,
          opacity: 0,
          scale: 0.8,
          ease: 'back.out(2)'
        }, '-=0.4');

      // Parallax effect on scroll
      gsap.to(titleRef.current, {
        y: 100,
        opacity: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });

      gsap.to(subtitleRef.current, {
        y: 80,
        opacity: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        }
      });

      gsap.to(achievementsRef.current, {
        y: 60,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  };

  return (
    <Box
      ref={containerRef}
      bgGradient="linear(135deg, #1A202C 0%, #2D3748 100%)"
      color="white"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={4}
      position="relative"
      overflow="hidden"
    >
      <VStack spacing={8}>
        <Heading ref={titleRef} as="h1" size="3xl" fontWeight="bold">
          Chào bạn, mình là Antt - Software Engineer
        </Heading>
        <Text ref={subtitleRef} fontSize="xl" opacity={0.8}>
          Chuyên xây dựng web apps hiện đại với React và Next.js!
        </Text>

        {/* Achievements like IELTS scores */}
        <SimpleGrid ref={achievementsRef} columns={{ base: 2, md: 4 }} spacing={6}>
          {achievements.map((ach, index) => (
            <VStack
              key={index}
              p={4}
              bg="gray.700"
              borderRadius="md"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-5px) scale(1.05)',
                boxShadow: 'xl',
                bg: 'gray.600'
              }}
            >
              <Text fontSize="2xl" fontWeight="bold">{ach.score}</Text>
              <Text>{ach.label}</Text>
            </VStack>
          ))}
        </SimpleGrid>

        {/* CTA Button with magnetic effect */}
        <Button
          ref={ctaRef}
          colorScheme="teal"
          size="lg"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          transition="all 0.3s ease"
          _hover={{
            transform: 'scale(1.05)',
            boxShadow: '0 10px 30px rgba(56, 178, 172, 0.4)'
          }}
        >
          Xem Portfolio của mình
        </Button>
      </VStack>
    </Box>
  )
}