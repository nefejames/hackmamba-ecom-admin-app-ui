import Head from "next/head";
import Image from "next/image";
import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import ProductModal from "@components/ProductModal";
import UpdateProductForm from "@components/UpdateProductForm";

export default function Product({ product }) {
  return (
    <Box>
      <Head>
        <title>{`Product - ${product.name}`}</title>
      </Head>
      <Box>
        <Flex justify="space-between" align="center" mb={5}>
          <Heading as="h1">{product.name}</Heading>

          <HStack spacing={3}>
            <ProductModal
              modalTitle="Update product"
              modalBtnTitle="Update Product"
            >
              <UpdateProductForm product={product} />
            </ProductModal>
            <Button
              color="white"
              bg="red.700"
              fontSize="md"
              _hover={{ bg: "red.600" }}
              onClick={() => deleteProduct(product.id)}
            >
              Delete product
            </Button>
          </HStack>
        </Flex>

        <Box w={["full", "500px"]} height="290px" position="relative" mb={5}>
          <Image
            src={product.img}
            objectFit="cover"
            alt="a product"
            layout="fill"
          />
        </Box>
        <Text fontsize={["md", "xl"]}>Price: ${product.price}</Text>
      </Box>
    </Box>
  );
}
