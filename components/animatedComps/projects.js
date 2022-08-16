import {
  Box,
  Container,
  Stack,
  Text,
  Button,
  FormControl,
  Input,
  Image,
} from "@chakra-ui/react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <Box bg='brand.prettiPurple' p='40px'>
        <Stack direction='column'>
          <Box w='300px'>
            <motion.div
              initial={{ y: 0, x: 0, opacity: 0 }}
              whileInView={{ y: 0, x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 2 }}
            >
              <Text mb='20px' fontWeight='bold' fontSize='30px'>
                AnonTelly
              </Text>
              <BsFillJournalBookmarkFill size='300px' />
              <Text mt='20px' fontWeight='bold'>
                Descrisption
              </Text>
              <Text>
                AnonTelly is a web application that allows users to anonymously
                share their stories. (currently in development, link will be
                added on realease)
              </Text>
            </motion.div>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Projects;
