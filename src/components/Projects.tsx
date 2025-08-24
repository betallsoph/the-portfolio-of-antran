'use client'

import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects'; // Import dữ liệu
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type' // Assume installed

gsap.registerPlugin(ScrollTrigger); // Đăng ký plugin ScrollTrigger

export default function Projects() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  console.log('Projects data:', projects); // Debug log

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Removed: gsap.from(titleRef.current, { opacity: 0, y: 50, duration: 1, scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } })

      // Animation cho các thẻ dự án
      gsap.from('.project-card', { // Tóm tất cả các element có class là 'project-card'
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3, // Increased stagger for more dramatic effect
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      });

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box ref={containerRef} bg="gray.900" color="white" py={20} px={8} id="projects">
      <Box width="100%" textAlign="center" mb={12}>
        <Heading ref={titleRef} as="h2" size="2xl">
          My Projects
        </Heading>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} justifyItems="center">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            // Added prop for link (update ProjectCard to handle)
            link="https://example.com" // Placeholder, add real links in data
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}