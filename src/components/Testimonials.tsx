'use client'

import { Box, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

// Sample testimonials (replace with real ones)
const testimonials = [
  { name: 'Tech Startup CEO', quote: 'Antt delivered an amazing MVP for our app - fast, scalable, and with killer animations!', score: '5/5 Stars' },
  { name: 'Fellow Developer', quote: 'Working with Antt on this project was great; his Next.js expertise saved us weeks of development time.', score: 'Highly Recommended' },
  { name: 'Client from Freelance', quote: 'The custom web app Antt built exceeded our expectations, especially the responsive design and integrations.', score: 'Excellent Work' },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title with character split
      if (titleRef.current) {
        const titleSplit = new SplitType(titleRef.current, { types: 'chars' })
        gsap.from(titleSplit.chars, {
          opacity: 0,
          y: 20,
          rotateX: -90,
          stagger: 0.03,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })
      }

      // Enhanced stagger animation for testimonial cards
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children as HTMLCollectionOf<HTMLElement>)
        gsap.from(cards, {
          opacity: 0,
          y: 60,
          scale: 0.85,
          rotationX: -20,
          stagger: 0.2,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        })

        // Parallax effect for cards
        gsap.to(cards, {
          y: -25,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1.5,
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
          <VStack
            key={index}
            p={6}
            bg="gray.700"
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            borderWidth="1px"
            borderColor="gray.600"
            _hover={{
              transform: 'translateY(-10px) scale(1.03)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(56, 178, 172, 0.4)',
              bg: 'gray.650',
              borderColor: 'teal.400'
            }}
          >
            <Text
              fontSize="lg"
              fontStyle="italic"
              lineHeight="1.7"
              position="relative"
              _before={{
                content: '"""',
                position: 'absolute',
                left: '-15px',
                top: '-10px',
                fontSize: '3xl',
                color: 'teal.400',
                opacity: 0.5
              }}
            >
              {test.quote}
            </Text>
            <Text fontWeight="bold" mt={4} fontSize="md">
              {test.name}
            </Text>
            <Text color="teal.300" fontWeight="semibold">
              {test.score}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}
