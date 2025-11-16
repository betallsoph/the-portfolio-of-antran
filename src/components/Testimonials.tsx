'use client'

import { Box, Heading, Text, SimpleGrid, VStack } from '@chakra-ui/react'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

// Sample testimonials (replace with real ones)
const testimonials = [
  { name: 'CEO Startup Công Nghệ', quote: 'Antt đã làm MVP cực kỳ ấn tượng - nhanh, mượt và animations đẹp quá trời! 🚀', score: '⭐⭐⭐⭐⭐', role: 'Tech Startup' },
  { name: 'Anh Developer', quote: 'Làm việc với Antt rất vui! Kinh nghiệm Next.js của bạn ấy giúp team mình tiết kiệm được nhiều tuần phát triển.', score: '💯 Recommended', role: 'Senior Developer' },
  { name: 'Khách Hàng Freelance', quote: 'Website mà Antt làm vượt quá mong đợi của mình, đặc biệt là phần responsive design và integrations!', score: '🎯 Tuyệt Vời', role: 'Business Owner' },
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
    <Box ref={sectionRef} bg="#faf8f6" color="gray.800" py={20} px={8} id="testimonials">
      <Heading
        ref={titleRef}
        as="h2"
        size="2xl"
        textAlign="center"
        mb={6}
        bgGradient="linear(to-r, #ff6b9d, #c084fc)"
        bgClip="text"
      >
        Mọi Người Nói Gì 💬
      </Heading>
      <Text textAlign="center" fontSize="lg" color="gray.600" mb={12}>
        Feedback từ những người đã làm việc với mình
      </Text>
      <SimpleGrid ref={cardsRef} columns={{ base: 1, md: 3 }} spacing={8} maxW="1200px" mx="auto">
        {testimonials.map((test, index) => (
          <VStack
            key={index}
            p={8}
            bg="white"
            borderRadius="2xl"
            boxShadow="0 4px 20px rgba(0,0,0,0.06)"
            textAlign="center"
            transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            borderWidth="1px"
            borderColor="gray.100"
            spacing={4}
            _hover={{
              transform: 'translateY(-10px)',
              boxShadow: '0 20px 50px rgba(255, 107, 157, 0.15)',
              borderColor: 'pink.200'
            }}
          >
            <Text fontSize="4xl" mb={2}>
              💭
            </Text>
            <Text
              fontSize="md"
              fontStyle="italic"
              lineHeight="1.8"
              color="gray.600"
              position="relative"
            >
              &ldquo;{test.quote}&rdquo;
            </Text>
            <Box mt={4}>
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                {test.name}
              </Text>
              <Text fontSize="sm" color="gray.500" mt={1}>
                {test.role}
              </Text>
              <Text fontSize="lg" mt={2}>
                {test.score}
              </Text>
            </Box>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}
