'use client'

import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { Box, Button, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react'

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
    const timeline = gsap.timeline();

    const ctx = gsap.context(() => {
      timeline
        .from(titleRef.current, { duration: 1, opacity: 0, y: 30, ease: 'power4.out' })
        .from(subtitleRef.current, { duration: 1, opacity: 0, y: 30, ease: 'power4.out' }, '-=0.8')
        .from(achievementsRef.current ? Array.from(achievementsRef.current.children as HTMLCollectionOf<HTMLElement>) : [], { duration: 0.8, opacity: 0, y: 20, stagger: 0.2, ease: 'power3.out' }, '-=0.5')
        .from(ctaRef.current, { duration: 0.8, opacity: 0, scale: 0.9, ease: 'back.out(1.7)' }, '-=0.3');

      // Removed: Split and animate title (keep normal)
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
            <VStack key={index} p={4} bg="gray.700" borderRadius="md" boxShadow="md">
              <Text fontSize="2xl" fontWeight="bold">{ach.score}</Text>
              <Text>{ach.label}</Text>
            </VStack>
          ))}
        </SimpleGrid>
        
        {/* CTA Button */}
        <Button ref={ctaRef} colorScheme="teal" size="lg" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          Xem Portfolio của mình
        </Button>
      </VStack>
    </Box>
  )
}