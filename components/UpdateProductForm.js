import { useRouter } from "next/router";
import { Button, Input, VStack, useToast } from "@chakra-ui/react";

export default function UpdateProductForm({ product }) {
  const toast = useToast();
  const router = useRouter();

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
          type="submit"
          color="white"
          bg="green.900"
          fontSize="md"
          w="full"
          _hover={{ bg: "green.800" }}
        >
          Update Product
        </Button>
      </VStack>
    </form>
  );
}
