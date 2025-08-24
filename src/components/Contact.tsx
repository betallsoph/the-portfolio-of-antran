'use client'

import { Box, Heading, FormControl, FormLabel, Input, Button, Textarea, VStack } from '@chakra-ui/react'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type' // Assume installed

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const formRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Removed: gsap.from(titleRef.current, { opacity: 0, y: 50, duration: 1, scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } })

      if (formRef.current) {
        gsap.from(Array.from(formRef.current.children), {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: { trigger: formRef.current, start: 'top 80%' }
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
    <Box ref={sectionRef} bg="gray.800" color="white" py={20} px={8} id="contact">
      <Box width="100%" textAlign="center" mb={12}>
        <Heading ref={titleRef} as="h2" size="2xl">
          Get in Touch
        </Heading>
      </Box>
      <VStack ref={formRef} maxW="600px" mx="auto" spacing={4}>
        <FormControl>
          <FormLabel>Your Name</FormLabel>
          <Input placeholder="Enter your name" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Tell me about your project or idea!" />
        </FormControl>
        <Button colorScheme="teal" size="lg" width="full">
          Send Message
        </Button>
      </VStack>
    </Box>
  )
}
