'use client'

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Box, Center, Container, Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Container
        display={'flex'}
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        maxW="container.lg"
        flex="1"
        py={8}
        h={"full"}
      >
        <HeroSection />
      </Container>
      {/* <Footer /> */}
    </Flex>
  )
}
