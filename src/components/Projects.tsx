'use client'

import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      // Enhanced stagger animation for project cards
      const cards = gsap.utils.toArray('.project-card');
      gsap.from(cards, {
        opacity: 0,
        y: 80,
        scale: 0.9,
        rotationY: -15,
        stagger: {
          amount: 0.6,
          from: 'start',
          ease: 'power2.inOut'
        },
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        },
      });

      // Subtle parallax for cards
      gsap.to(cards, {
        y: -30,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1.5,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box ref={containerRef} bg="#faf8f6" color="gray.800" py={20} px={8} id="projects">
      <Box width="100%" textAlign="center" mb={12}>
        <Heading
          ref={titleRef}
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, #ff6b9d, #c084fc)"
          bgClip="text"
        >
          Dự Án Của Mình 🎨
        </Heading>
        <Text mt={4} fontSize="lg" color="gray.600">
          Một số projects mình đã làm
        </Text>
      </Box>

      <SimpleGrid
        ref={gridRef}
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
        maxW="1400px"
        mx="auto"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}