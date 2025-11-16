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
      className="project-card"
      maxW="lg"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="gray.800"
      borderColor="gray.700"
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      position="relative"
      _hover={{
        transform: 'translateY(-12px) scale(1.02)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(56, 178, 172, 0.5)',
        borderColor: 'teal.400',
        '& .project-image': {
          transform: 'scale(1.1)',
        },
        '& .project-button': {
          transform: 'translateY(0)',
          opacity: 1,
        }
      }}
    >
      <Box overflow="hidden" position="relative" height="200px">
        <Image
          className="project-image"
          src={image}
          alt={`Screenshot of ${title}`}
          width={400}
          height={200}
          style={{
            height: '200px',
            width: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </Box>

      <Box p={6}>
        <Heading size="md" mb={2} color="white" transition="color 0.3s">
          {title}
        </Heading>
        <Text color="gray.400" mb={4} lineHeight="1.6">
          {description}
        </Text>

        <Wrap mb={4}>
          {tags.map((tag) => (
            <WrapItem key={tag}>
              <Tag
                size="sm"
                colorScheme="teal"
                variant="solid"
                transition="all 0.2s"
                _hover={{ transform: 'scale(1.1)' }}
              >
                {tag}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

        {link && (
          <Button
            className="project-button"
            colorScheme="teal"
            size="sm"
            as="a"
            href={link}
            target="_blank"
            opacity={0.8}
            transform="translateY(5px)"
            transition="all 0.3s ease"
          >
            Xem Project
          </Button>
        )}
      </Box>
    </Box>
  );
}