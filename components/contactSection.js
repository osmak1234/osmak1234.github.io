import {
  Box,
  Container,
  Stack,
  Text,
  Button,
  FormControl,
  Input,
} from "@chakra-ui/react";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app, database } from "../pages/firebase";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const collectionRef = collection(database, "messages");
  let i = 0;

  const handleSendMessage = () => {
    if (i <= 0) {
      addDoc(collectionRef, {
        email: email,
        message: message,
      });
      console.log("message sent!");
      i++;
    } else {
      alert("You already send a message.");
    }
  };
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
                setEmail(e.target.value);
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
                setMessage(e.target.value);
              }}
              value={message}
            ></Input>
          </FormControl>
          <Button
            onClick={handleSendMessage}
            bg='brand.normalYellow'
            _hover={{ bg: "brand.prettiPurple" }}
          >
            Send!
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default ContactSection;
