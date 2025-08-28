'use client'

import { Box, Heading, Text, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type' // Assume installed

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Removed: gsap.from(titleRef.current, { opacity: 0, y: 50, duration: 1, scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } })

      if (statsRef.current) {
        gsap.from(Array.from(statsRef.current.children as HTMLCollectionOf<HTMLElement>), {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          scrollTrigger: { trigger: statsRef.current, start: 'top 80%' }
        })
      }

      // Keep: Split and animate title per character
      if (titleRef.current) {
        const titleSplit = new SplitType(titleRef.current, { types: 'chars' })
        gsap.from(titleSplit.chars, {
          opacity: 0,
          y: 10,
          skewY: 3,
          duration: 0.18,
          stagger: 0.02,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 115%',
            scrub: 0.4,
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
      <Text textAlign="center" maxW="800px" mx="auto" mb={12} fontSize="lg">
        I&apos;m Antt, a passionate Software Engineer specializing in web development. With years of experience in building scalable apps using React, Next.js, and modern tech stacks, I focus on creating efficient, user-centric solutions. Graduated from [Your University], I&apos;ve worked on various projects from startups to enterprise levels.
      </Text>
      <SimpleGrid ref={statsRef} columns={{ base: 1, md: 4 }} spacing={10} justifyItems="center">
        <Stat textAlign="center">
          <StatNumber>5+</StatNumber>
          <StatLabel>Years in IT</StatLabel>
        </Stat>
        <Stat textAlign="center">
          <StatNumber>30+</StatNumber>
          <StatLabel>GitHub Repos</StatLabel>
        </Stat>
        <Stat textAlign="center">
          <StatNumber>100%</StatNumber>
          <StatLabel>Open Source Contributor</StatLabel>
        </Stat>
        <Stat textAlign="center">
          <StatNumber>8+</StatNumber>
          <StatLabel>Tech Stacks Mastered</StatLabel>
        </Stat>
      </SimpleGrid>
    </Box>
  )
}
