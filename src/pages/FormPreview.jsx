import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import {
  Flex,
  Spacer,
  Box,
  Stack,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";

import { useGlobalContext } from "../context";

const FormPreview = () => {
  const { invoiceFormData, setInvoiceFormData } = useGlobalContext();

  // const handleEdit = () => {
  //   setInvoiceFormData((prev) => {
  //     return {...invoiceFormData,
  //     invoiceFormData.tot
  //     }
  //   })
  // };
  return (
    <div id="form-input">
      <Stack
        width={{ base: "100%", md: "90%", lg: "70%" }}
        maxW="960px"
        m="auto"
        mb="6"
        mt="6"
        p="6"
        boxShadow="dark-lg"
        rounded="md"
        bg="white"
      >
        {/* Date */}
        <Box>
          <Heading size="md">{invoiceFormData.billFromName}</Heading>
          <Text>{invoiceFormData.billFromPhoneNumber}</Text>
          <Text>{invoiceFormData.billFromEmail}</Text>
        </Box>

        {/* Invoice date and due date */}
        <Flex>
          <Box>
            <Heading size="sm">Invoice date</Heading>
            <Text>{invoiceFormData.dateCreated}</Text>
          </Box>
          <Spacer />
          <Box>
            <Heading size="sm">Due date</Heading>
            <Text>{invoiceFormData.dateDue}</Text>
          </Box>
        </Flex>

        {/* Billed to */}
        <Box>
          <Heading size="sm">Billed to</Heading>
          <Text>{invoiceFormData.billToName}</Text>
          <Text>{invoiceFormData.billToPhoneNumber}</Text>
          <Text>{invoiceFormData.billToEmail}</Text>
        </Box>

        {/* Bank details */}
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr bg="gray.100">
                <Th>Bank Name</Th>
                <Th>Account Name</Th>
                <Th isNumeric>Account Number</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{invoiceFormData.bankName}</Td>
                <Td>{invoiceFormData.accountName}</Td>
                <Td isNumeric>{invoiceFormData.bankAccount}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        {/* Invoice Items */}
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr bg="gray.100">
                <Th>Item Name</Th>
                <Th isNumeric>Qty</Th>
                <Th isNumeric>Price</Th>

                <Th isNumeric>Total Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{invoiceFormData.itemContent}</Td>
                <Td isNumeric>{invoiceFormData.itemQty}</Td>
                <Td>{invoiceFormData.itemPrice}</Td>
                <Td isNumeric>
                  #
                  {parseInt(
                    invoiceFormData.itemQty * invoiceFormData.itemPrice
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <AiOutlineEdit />
                </Td>
                <Td>
                  <AiOutlineDelete />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </div>
  );
};

export default FormPreview;
