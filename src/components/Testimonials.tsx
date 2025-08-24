'use client'

import { Box, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type' // Assume installed

gsap.registerPlugin(ScrollTrigger)

// Sample testimonials (replace with real ones)
const testimonials = [
  { name: 'Tech Startup CEO', quote: 'Antt delivered an amazing MVP for our app - fast, scalable, and with killer animations!', score: '5/5 Stars' },
  { name: 'Fellow Developer', quote: 'Working with Antt on this project was great; his Next.js expertise saved us weeks of development time.', score: 'Highly Recommended' },
  { name: 'Client from Freelance', quote: 'The custom web app Antt built exceeded our expectations, especially the responsive design and integrations.', score: 'Excellent Work' },
];

export default function Testimonials() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Removed: gsap.from(titleRef.current, { opacity: 0, y: 50, duration: 1, scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } })

      if (cardsRef.current) {
        gsap.from(Array.from(cardsRef.current.children), {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
        })
      }

      // Keep: Split and animate title per character
      if (titleRef.current) {
        const titleSplit = new SplitType(titleRef.current, { types: 'chars' })
        gsap.from(titleSplit.chars, {
          opacity: 0,
          y: 10,
          skewY: 3,
          duration: 0.64,
          stagger: 0.08,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 115%',
            scrub: 1,
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box ref={sectionRef} bg="gray.900" color="white" py={20} px={8} id="testimonials">
      <Heading ref={titleRef} as="h2" size="2xl" textAlign="center" mb={12}>
        What People Say
      </Heading>
      <SimpleGrid ref={cardsRef} columns={{ base: 1, md: 3 }} spacing={10}>
        {testimonials.map((test, index) => (
          <VStack key={index} p={6} bg="gray.700" borderRadius="md" boxShadow="lg" textAlign="center">
            <Text fontSize="lg" fontStyle="italic">"{test.quote}"</Text>
            <Text fontWeight="bold" mt={4}>{test.name}</Text>
            <Text color="teal.300">{test.score}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}
