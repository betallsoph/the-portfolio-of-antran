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
      w="full"
      borderWidth="1px"
      borderRadius="2xl"
      overflow="hidden"
      bg="white"
      borderColor="gray.100"
      boxShadow="0 4px 20px rgba(0,0,0,0.06)"
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      position="relative"
      _hover={{
        transform: 'translateY(-12px)',
        boxShadow: '0 20px 50px rgba(255, 107, 157, 0.15)',
        borderColor: 'pink.200',
        '& .project-image': {
          transform: 'scale(1.08)',
        },
        '& .project-overlay': {
          opacity: 1,
        }
      }}
    >
      <Box overflow="hidden" position="relative" height="220px">
        <Image
          className="project-image"
          src={image}
          alt={`Screenshot of ${title}`}
          width={400}
          height={220}
          style={{
            height: '220px',
            width: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        {/* Overlay gradient */}
        <Box
          className="project-overlay"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="linear-gradient(to top, rgba(255, 107, 157, 0.3), transparent)"
          opacity={0}
          transition="opacity 0.4s ease"
        />
      </Box>

      <Box p={6}>
        <Heading size="md" mb={2} color="gray.800" transition="color 0.3s">
          {title}
        </Heading>
        <Text color="gray.600" mb={4} lineHeight="1.7" fontSize="sm">
          {description}
        </Text>

        <Wrap mb={4} spacing={2}>
          {tags.map((tag) => (
            <WrapItem key={tag}>
              <Tag
                size="sm"
                bg="pink.50"
                color="pink.600"
                borderRadius="full"
                px={3}
                py={1}
                fontWeight="medium"
                fontSize="xs"
                transition="all 0.2s"
                _hover={{
                  transform: 'scale(1.05)',
                  bg: 'pink.100'
                }}
              >
                {tag}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

        {link && (
          <Button
            className="project-button"
            size="sm"
            as="a"
            href={link}
            target="_blank"
            bg="linear-gradient(135deg, #ff6b9d 0%, #c084fc 100%)"
            color="white"
            borderRadius="full"
            px={5}
            transition="all 0.3s ease"
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: '0 8px 20px rgba(255, 107, 157, 0.3)'
            }}
          >
            Xem Chi Tiết →
          </Button>
        )}
      </Box>
    </Box>
  );
}