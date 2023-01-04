import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Heading,
  Flex,
  Spacer,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useGlobalContext } from "../context";
import DeleteInvoice from "../components/DeleteInvoice";
import EditInvoice from "../components/EditInvoice";

//  set up the invoice history page with data gotten from the allInvoiceData state from context.
const InvoiceHistory = () => {
  const { allInvoiceData, handlePrint, handleEditInvoice, isFormEditing } =
    useGlobalContext();

  const [id, setId] = useState("print-section");

  return (
    <div>
      {allInvoiceData.map((invoice, index) => {
        const {
          dateCreated,
          dateDue,
          billFromEmail,
          billFromName,
          billFromPhoneNumber,
          billToEmail,
          billToName,
          billToPhoneNumber,
          bankName,
          accountName,
          bankAccount,
          itemContent,
          itemQty,
          itemPrice,
          itemTotal,
        } = invoice;

        return (
          <Stack
            key={index}
            width={{ base: "100%", md: "90%", lg: "70%" }}
            maxW="960px"
            m="auto"
            mb="6"
            p="6"
            boxShadow="dark-lg"
            rounded="md"
            bg="white"
            id="print-section"
          >
            {/* Date */}
            <Box>
              <Heading size="md">{billFromName}</Heading>
              <Text>{billFromPhoneNumber}</Text>
              <Text>{billFromEmail}</Text>
            </Box>

            {/* Invoice date and due date */}
            <Flex>
              <Box>
                <Heading size="sm">Invoice date</Heading>
                <Text>{dateCreated}</Text>
              </Box>
              <Spacer />
              <Box>
                <Heading size="sm">Due date</Heading>
                <Text>{dateDue}</Text>
              </Box>
            </Flex>

            {/* Billed to */}
            <Box>
              <Heading size="sm">Billed to</Heading>
              <Text>{billToName}</Text>
              <Text>{billToPhoneNumber}</Text>
              <Text>{billToEmail}</Text>
            </Box>

            {/* Bank details */}
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
                    <Td>{bankName}</Td>
                    <Td>{accountName}</Td>
                    <Td isNumeric>{bankAccount}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            {/* Invoice Items */}
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr bg="gray.100">
                    <Th>Item Details</Th>
                    <Th isNumeric>Qty</Th>
                    <Th isNumeric>Item Price</Th>
                    <Th isNumeric>Amount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{itemContent}</Td>
                    <Td isNumeric>{itemQty}</Td>
                    <Td isNumeric>{itemPrice}</Td>
                    <Td isNumeric>{itemTotal}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            {/* Buttons  */}
            <Flex>
              <Button onClick={handlePrint} colorScheme="blue" mt="10px">
                <Text>Download</Text>
              </Button>

              <Box>
                {/* same index from the map above */}
                <DeleteInvoice id={index} />
              </Box>

              {/* Edit invoice render */}
              {/* <Box>
                  <EditInvoice id={index} />
                </Box> */}
            </Flex>
          </Stack>
          /* {isFormEditing && <InvoiceApp buttonText="SaveBtn" />} */
        );
      })}
    </div>
  );
};

export default InvoiceHistory;
