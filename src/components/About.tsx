'use client'

import { Box, Heading, Text, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react'
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
    <Box ref={sectionRef} bg="gray.800" color="white" py={20} px={8} id="about">
      <Heading ref={titleRef} as="h2" size="2xl" textAlign="center" mb={12}>
        About Me
      </Heading>
      <Text
        ref={descriptionRef}
        textAlign="center"
        maxW="800px"
        mx="auto"
        mb={12}
        fontSize="lg"
        lineHeight="1.8"
      >
        I&apos;m Antt, a passionate Software Engineer specializing in web development. With years of experience in building scalable apps using React, Next.js, and modern tech stacks, I focus on creating efficient, user-centric solutions. Graduated from [Your University], I&apos;ve worked on various projects from startups to enterprise levels.
      </Text>
      <SimpleGrid ref={statsRef} columns={{ base: 1, md: 4 }} spacing={10} justifyItems="center">
        <Stat
          textAlign="center"
          transition="all 0.3s ease"
          _hover={{ transform: 'scale(1.1)', color: 'teal.300' }}
        >
          <StatNumber fontSize="4xl">5+</StatNumber>
          <StatLabel>Years in IT</StatLabel>
        </Stat>
        <Stat
          textAlign="center"
          transition="all 0.3s ease"
          _hover={{ transform: 'scale(1.1)', color: 'teal.300' }}
        >
          <StatNumber fontSize="4xl">30+</StatNumber>
          <StatLabel>GitHub Repos</StatLabel>
        </Stat>
        <Stat
          textAlign="center"
          transition="all 0.3s ease"
          _hover={{ transform: 'scale(1.1)', color: 'teal.300' }}
        >
          <StatNumber fontSize="4xl">100%</StatNumber>
          <StatLabel>Open Source Contributor</StatLabel>
        </Stat>
        <Stat
          textAlign="center"
          transition="all 0.3s ease"
          _hover={{ transform: 'scale(1.1)', color: 'teal.300' }}
        >
          <StatNumber fontSize="4xl">8+</StatNumber>
          <StatLabel>Tech Stacks Mastered</StatLabel>
        </Stat>
      </SimpleGrid>
    </Box>
  )
}
