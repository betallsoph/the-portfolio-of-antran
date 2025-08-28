'use client'

import { Box, Heading, Text, Tag, Wrap, WrapItem, Button } from '@chakra-ui/react';
import Image from 'next/image';

// Định nghĩa kiểu dữ liệu cho props
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string; // New prop for project link
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <Box
      className="project-card" // Thêm class để GSAP có thể "tóm" được
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="gray.800"
      borderColor="gray.700"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-10px)', // Enhanced hover
        boxShadow: 'xl',
        borderColor: 'teal.500',
      }}
    >
      <Image 
        src={image} 
        alt={`Screenshot of ${title}`} 
        width={400}
        height={200}
        style={{
          height: '200px',
          width: '100%',
          objectFit: 'cover'
        }}
      />

      <Box p={6}>
        <Heading size="md" mb={2}>{title}</Heading>
        <Text color="gray.400" mb={4}>{description}</Text>

        <Wrap mb={4}>
          {tags.map((tag) => (
            <WrapItem key={tag}>
              <Tag size="sm" colorScheme="teal" variant="solid">{tag}</Tag>
            </WrapItem>
          ))}
        </Wrap>

        {link && (
          <Button colorScheme="teal" size="sm" as="a" href={link} target="_blank">
            Xem Project
          </Button>
        )}
      </Box>
    </Box>
  );
}