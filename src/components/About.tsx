'use client'

import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

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

      // Smooth fade-in for description
      if (descriptionRef.current) {
        gsap.from(descriptionRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })
      }

      // Stagger animation for stats with scale and rotation
      if (statsRef.current) {
        const statElements = Array.from(statsRef.current.children as HTMLCollectionOf<HTMLElement>)
        gsap.from(statElements, {
          opacity: 0,
          y: 50,
          scale: 0.8,
          rotation: -5,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        })

        // Parallax effect for stats
        gsap.to(statElements, {
          y: -20,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <Box ref={sectionRef} bg="white" color="gray.800" py={20} px={8} id="about">
      <Heading
        ref={titleRef}
        as="h2"
        size="2xl"
        textAlign="center"
        mb={6}
        bgGradient="linear(to-r, #ff6b9d, #c084fc)"
        bgClip="text"
      >
        Về Mình 💫
      </Heading>
      <Text
        ref={descriptionRef}
        textAlign="center"
        maxW="800px"
        mx="auto"
        mb={12}
        fontSize="lg"
        lineHeight="1.9"
        color="gray.600"
      >
        Mình là Antt, một Software Engineer đam mê xây dựng các ứng dụng web hiện đại.
        Với nhiều năm kinh nghiệm với React, Next.js và các công nghệ mới nhất, mình tập trung
        vào việc tạo ra những giải pháp đẹp mắt, hiệu quả và thân thiện với người dùng ✨
      </Text>
      <SimpleGrid
        ref={statsRef}
        columns={{ base: 2, md: 4 }}
        spacing={8}
        maxW="1000px"
        mx="auto"
      >
        <Box
          textAlign="center"
          p={6}
          bg="linear-gradient(135deg, #fce7f3 0%, #fff 100%)"
          borderRadius="2xl"
          border="1px solid"
          borderColor="pink.100"
          transition="all 0.3s ease"
          _hover={{
            transform: 'scale(1.05) translateY(-5px)',
            boxShadow: '0 10px 30px rgba(255, 107, 157, 0.15)'
          }}
        >
          <Text fontSize="4xl" fontWeight="bold" color="pink.500">5+</Text>
          <Text color="gray.600" mt={2} fontSize="sm">Năm Kinh Nghiệm</Text>
        </Box>
        <Box
          textAlign="center"
          p={6}
          bg="linear-gradient(135deg, #f3e8ff 0%, #fff 100%)"
          borderRadius="2xl"
          border="1px solid"
          borderColor="purple.100"
          transition="all 0.3s ease"
          _hover={{
            transform: 'scale(1.05) translateY(-5px)',
            boxShadow: '0 10px 30px rgba(192, 132, 252, 0.15)'
          }}
        >
          <Text fontSize="4xl" fontWeight="bold" color="purple.500">30+</Text>
          <Text color="gray.600" mt={2} fontSize="sm">GitHub Repos</Text>
        </Box>
        <Box
          textAlign="center"
          p={6}
          bg="linear-gradient(135deg, #dbeafe 0%, #fff 100%)"
          borderRadius="2xl"
          border="1px solid"
          borderColor="blue.100"
          transition="all 0.3s ease"
          _hover={{
            transform: 'scale(1.05) translateY(-5px)',
            boxShadow: '0 10px 30px rgba(96, 165, 250, 0.15)'
          }}
        >
          <Text fontSize="4xl" fontWeight="bold" color="blue.500">100%</Text>
          <Text color="gray.600" mt={2} fontSize="sm">Open Source</Text>
        </Box>
        <Box
          textAlign="center"
          p={6}
          bg="linear-gradient(135deg, #fef3c7 0%, #fff 100%)"
          borderRadius="2xl"
          border="1px solid"
          borderColor="yellow.100"
          transition="all 0.3s ease"
          _hover={{
            transform: 'scale(1.05) translateY(-5px)',
            boxShadow: '0 10px 30px rgba(251, 191, 36, 0.15)'
          }}
        >
          <Text fontSize="4xl" fontWeight="bold" color="yellow.600">8+</Text>
          <Text color="gray.600" mt={2} fontSize="sm">Tech Stacks</Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
