import React from "react";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

function Card1() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Nothing to see here yet!",
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>
      </Box>
    </Box>
  )
}

export default Card1;