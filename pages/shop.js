import Head from "next/head";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import ProductCard from "@components/ProductCard";
import ProductModal from "@components/ProductModal";
import AddProductForm from "@components/AddProductForm";

export default function Shop({ data }) {
  return (
    <Box>
      <Head>
        <title>Shop</title>
      </Head>

      <Flex justify="space-between" align="">
        <Heading as="h1" mb={5}>
          Products
        </Heading>

        <ProductModal modalTitle="Add product" modalBtnTitle="Add Product">
          <AddProductForm />
        </ProductModal>
      </Flex>

      <VStack spacing="2em">
        {data.map(({ id, img, name, price }) => (
          <ProductCard id={id} img={img} name={name} price={price} key={id} />
        ))}
      </VStack>
    </Box>
  );
}
