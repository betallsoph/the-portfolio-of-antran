'use client'

import { Box, Heading, FormControl, FormLabel, Input, Button, Textarea, VStack } from '@chakra-ui/react'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

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

      // Stagger animation for form elements
      if (formRef.current) {
        const formElements = Array.from(formRef.current.children as HTMLCollectionOf<HTMLElement>)
        gsap.from(formElements, {
          opacity: 0,
          x: -30,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        })
      }

      // Button animation
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.2,
      y: y * 0.2,
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
    <Box ref={sectionRef} bg="gray.800" color="white" py={20} px={8} id="contact">
      <Box width="100%" textAlign="center" mb={12}>
        <Heading ref={titleRef} as="h2" size="2xl">
          Get in Touch
        </Heading>
      </Box>
      <VStack ref={formRef} maxW="600px" mx="auto" spacing={6}>
        <FormControl>
          <FormLabel fontWeight="semibold">Your Name</FormLabel>
          <Input
            placeholder="Enter your name"
            bg="gray.700"
            borderColor="gray.600"
            _hover={{ borderColor: 'teal.400' }}
            _focus={{
              borderColor: 'teal.400',
              boxShadow: '0 0 0 1px rgba(56, 178, 172, 0.6)',
              transform: 'translateY(-2px)',
              transition: 'all 0.2s'
            }}
            transition="all 0.2s"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold">Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            bg="gray.700"
            borderColor="gray.600"
            _hover={{ borderColor: 'teal.400' }}
            _focus={{
              borderColor: 'teal.400',
              boxShadow: '0 0 0 1px rgba(56, 178, 172, 0.6)',
              transform: 'translateY(-2px)',
              transition: 'all 0.2s'
            }}
            transition="all 0.2s"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold">Message</FormLabel>
          <Textarea
            placeholder="Tell me about your project or idea!"
            bg="gray.700"
            borderColor="gray.600"
            rows={6}
            _hover={{ borderColor: 'teal.400' }}
            _focus={{
              borderColor: 'teal.400',
              boxShadow: '0 0 0 1px rgba(56, 178, 172, 0.6)',
              transform: 'translateY(-2px)',
              transition: 'all 0.2s'
            }}
            transition="all 0.2s"
          />
        </FormControl>
        <Button
          ref={buttonRef}
          colorScheme="teal"
          size="lg"
          width="full"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          transition="all 0.3s ease"
          _hover={{
            transform: 'scale(1.05)',
            boxShadow: '0 10px 30px rgba(56, 178, 172, 0.4)'
          }}
        >
          Send Message
        </Button>
      </VStack>
    </Box>
  )
}
