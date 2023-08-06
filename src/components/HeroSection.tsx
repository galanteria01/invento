import React from 'react'
import { Box, Flex, Heading, Text, Button, Link, Image } from '@chakra-ui/react';


export default function HeroSection() {
  return (
    <Box h={'full'} py={20}>
      <Flex direction="column" alignItems="center" justifyContent="center" h={'full'}>
        <Image src='/inventory.svg' />
        <Heading mb={4} fontSize="5xl">
          Manage your Inventory with Ease
        </Heading>
        <Text textAlign={'center'} fontSize="xl" mb={8}>
          Invento is a easier way to manage your inventory which increases the efficiency by 42%.
        </Text>
        <Link href='/signin'>
          <Button colorScheme='teal' size="lg" >
            Get Started
          </Button>
        </Link>
      </Flex>
    </Box>
  )
}
