import {
  Box,
  Container,
  Stack,
  Text,
  Button,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <Box display='flex' pt='30px'>
        <Stack m='auto' spacing={3}>
          <Text textAlign='center' fontSize='lg' fontWeight='bold'>
            Contact Me
          </Text>
          <FormControl isRequired m='auto'>
            <Input
              w='300px'
              h='40px'
              placeholder='your email here'
              onChange={(e) => {
                setEmail(e);
              }}
              value={email}
            ></Input>
          </FormControl>

          <FormControl isRequired m='auto'>
            <Input
              w='300px'
              h='200px'
              placeholder='your message here'
              onChange={(e) => {
                setMessage(e);
              }}
              value={message}
            ></Input>
          </FormControl>
          <Button bg='brand.normalYellow' _hover={{ bg: "brand.prettiPurple" }}>
            Send!
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default ContactSection;
