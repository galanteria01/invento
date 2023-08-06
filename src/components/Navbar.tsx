'use client';
import { Box, Flex, HStack, IconButton, Image, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box py={4} px={8}>
      <Flex alignItems="center" justifyContent={"space-between"}>
        <Image src={'/next.svg'} height={6} textColor={"#fff"} />
        <Flex ml={4}>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Flex>
      </Flex>
    </Box>
  )
}
