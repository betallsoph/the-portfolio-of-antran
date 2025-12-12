'use client'

import { Box, Heading, Text, FormControl, FormLabel, Input, Button, Textarea, VStack } from '@chakra-ui/react'
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
    <Box ref={sectionRef} bg="white" color="gray.800" py={20} px={8} id="contact">
      <Box width="100%" textAlign="center" mb={12}>
        <Heading
          ref={titleRef}
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, #ff6b9d, #c084fc)"
          bgClip="text"
        >
          Liên Hệ Với Mình 📮
        </Heading>
        <Text mt={4} fontSize="lg" color="gray.600">
          Có dự án hay ý tưởng thú vị? Hãy chia sẻ với mình nhé!
        </Text>
      </Box>
      <VStack
        ref={formRef}
        maxW="600px"
        mx="auto"
        spacing={6}
        bg="white"
        p={8}
        borderRadius="2xl"
        boxShadow="0 4px 30px rgba(0,0,0,0.08)"
        border="1px solid"
        borderColor="gray.100"
      >
        <FormControl>
          <FormLabel fontWeight="semibold" color="gray.700">Tên của bạn</FormLabel>
          <Input
            placeholder="Nhập tên của bạn"
            bg="gray.50"
            borderColor="gray.200"
            borderRadius="xl"
            _hover={{ borderColor: 'pink.300', bg: 'white' }}
            _focus={{
              borderColor: 'pink.400',
              boxShadow: '0 0 0 3px rgba(255, 107, 157, 0.1)',
              transform: 'translateY(-2px)',
              transition: 'all 0.2s',
              bg: 'white'
            }}
            transition="all 0.2s"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold" color="gray.700">Email</FormLabel>
          <Input
            type="email"
            placeholder="email@example.com"
            bg="gray.50"
            borderColor="gray.200"
            borderRadius="xl"
            _hover={{ borderColor: 'pink.300', bg: 'white' }}
            _focus={{
              borderColor: 'pink.400',
              boxShadow: '0 0 0 3px rgba(255, 107, 157, 0.1)',
              transform: 'translateY(-2px)',
              transition: 'all 0.2s',
              bg: 'white'
            }}
            transition="all 0.2s"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="semibold" color="gray.700">Lời nhắn</FormLabel>
          <Textarea
            placeholder="Hãy chia sẻ về dự án hoặc ý tưởng của bạn..."
            bg="gray.50"
            borderColor="gray.200"
            borderRadius="xl"
            rows={6}
            _hover={{ borderColor: 'pink.300', bg: 'white' }}
            _focus={{
              borderColor: 'pink.400',
              boxShadow: '0 0 0 3px rgba(255, 107, 157, 0.1)',
              transform: 'translateY(-2px)',
              transition: 'all 0.2s',
              bg: 'white'
            }}
            transition="all 0.2s"
          />
        </FormControl>
        <Button
          ref={buttonRef}
          size="lg"
          width="full"
          bg="linear-gradient(135deg, #ff6b9d 0%, #c084fc 100%)"
          color="white"
          borderRadius="full"
          py={6}
          fontSize="lg"
          fontWeight="bold"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          transition="all 0.3s ease"
          boxShadow="0 8px 25px rgba(255, 107, 157, 0.3)"
          _hover={{
            transform: 'scale(1.02)',
            boxShadow: '0 15px 40px rgba(255, 107, 157, 0.4)'
          }}
        >
          Gửi Tin Nhắn 🚀
        </Button>
      </VStack>
    </Box>
  )
}
