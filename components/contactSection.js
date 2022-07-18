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
import { database } from "./firebase";

const ContactSection = () => {
  return (
    <>
      <Box display='flex' pt='30px' margin='auto'>
        <iframe
          src='https://docs.google.com/forms/d/e/1FAIpQLSccA5lqJsVq_yLcDzHUQf7vVw3KhBAJ4_94ob5cEec6KXr4Wg/viewform?embedded=true'
          width='650'
          height='674'
          frameborder='0'
          marginheight='50'
          marginwidth='auto'
        >
          Loading...
        </iframe>
      </Box>
    </>
  );
};

export default ContactSection;
