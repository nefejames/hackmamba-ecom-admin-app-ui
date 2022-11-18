import { Button, Box, Image, Input, VStack, useToast } from "@chakra-ui/react";

export default function AddProductForm() {
  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={6}>
        <Input
          bg="white"
          name="name"
          type="text"
          w="full"
          mb={2}
          display="inline-block"
          placeholder="Name"
        />
        <Input
          bg="white"
          name="price"
          type="text"
          w="full"
          mb={2}
          display="inline-block"
          placeholder="Price"
        />
        <Button
          color="white"
          bg="green.600"
          fontSize="md"
          mb={4}
          _hover={{ bg: "green.500" }}
        >
          Upload Avatar
        </Button>
        {imgUrl && (
          <Box w="50px" height="50px" position="relative">
            <Image
              src={imgUrl}
              objectFit="cover"
              alt="a product"
              layout="fill"
            />
          </Box>
        )}
        <Button
          type="submit"
          color="white"
          bg="green.900"
          fontSize="md"
          w="full"
          _hover={{ bg: "green.800" }}
        >
          Add Product
        </Button>
      </VStack>
    </form>
  );
}
