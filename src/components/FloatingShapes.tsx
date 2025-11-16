'use client'

import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import gsap from 'gsap'

export default function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const shapes = containerRef.current.querySelectorAll('.floating-shape')

    shapes.forEach((shape, index) => {
      gsap.to(shape, {
        y: `${Math.random() * 100 - 50}`,
        x: `${Math.random() * 100 - 50}`,
        rotation: 360,
        duration: 15 + index * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5,
      })
    })
  }, [])

  return (
    <Box
      ref={containerRef}
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      overflow="hidden"
      pointerEvents="none"
      zIndex={0}
    >
      {/* Circle shapes */}
      <Box
        className="floating-shape"
        position="absolute"
        top="10%"
        left="10%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="linear-gradient(135deg, rgba(255, 107, 157, 0.15), rgba(192, 132, 252, 0.15))"
        filter="blur(60px)"
      />
      <Box
        className="floating-shape"
        position="absolute"
        top="60%"
        right="15%"
        w="250px"
        h="250px"
        borderRadius="full"
        bg="linear-gradient(135deg, rgba(96, 165, 250, 0.15), rgba(192, 132, 252, 0.15))"
        filter="blur(60px)"
      />
      <Box
        className="floating-shape"
        position="absolute"
        bottom="10%"
        left="20%"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="linear-gradient(135deg, rgba(252, 231, 243, 0.3), rgba(219, 234, 254, 0.3))"
        filter="blur(40px)"
      />
      <Box
        className="floating-shape"
        position="absolute"
        top="30%"
        right="25%"
        w="180px"
        h="180px"
        borderRadius="full"
        bg="linear-gradient(135deg, rgba(192, 132, 252, 0.2), rgba(255, 107, 157, 0.2))"
        filter="blur(50px)"
      />
      <Box
        className="floating-shape"
        position="absolute"
        bottom="30%"
        right="10%"
        w="220px"
        h="220px"
        borderRadius="full"
        bg="linear-gradient(135deg, rgba(96, 165, 250, 0.15), rgba(255, 107, 157, 0.15))"
        filter="blur(55px)"
      />
    </Box>
  )
}
