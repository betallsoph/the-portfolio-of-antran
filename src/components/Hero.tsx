'use client' // Cần 'use client' vì chúng ta sẽ dùng hook (useRef, useLayoutEffect)

import { Box, Heading, Text } from '@chakra-ui/react'
import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // useLayoutEffect chạy trước khi trình duyệt paint, tốt cho animation
  useLayoutEffect(() => {
    const timeline = gsap.timeline();

    // Context giúp cleanup animation dễ dàng hơn
    const ctx = gsap.context(() => {
      timeline
        .from(titleRef.current, {
          duration: 1,
          opacity: 0,
          y: 30, // Di chuyển từ dưới lên
          ease: 'power4.out'
        })
        .from(subtitleRef.current, {
          duration: 1,
          opacity: 0,
          y: 30,
          ease: 'power4.out'
        }, "-=0.8"); // Bắt đầu animation này sớm hơn 0.8s
    }, containerRef); // Scope context vào container

    return () => ctx.revert(); // Cleanup khi component unmount
  }, []);

  return (
    <Box
      ref={containerRef}
      bg="gray.900"
      color="white"
      minH="100vh" // Cao bằng chiều cao màn hình
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={4}
      style={{
        background: 'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)'
      }}
    >
      <Heading ref={titleRef} as="h1" size="4xl" mb={4}>
        Chào bạn, mình là Antt
      </Heading>
      <Text ref={subtitleRef} fontSize="2xl" opacity={0.8}>
        Một Software engineer siu ngu!
      </Text>
    </Box>
  )
}