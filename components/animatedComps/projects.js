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
import Link from "next/link"

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
                Pokeswipe
              </Text>
              <BsFillJournalBookmarkFill size='300px' />
              <Text mt='20px' fontWeight='bold'>
                Descrisption
              </Text>
              <Text>
                Pokeswipe is a tinder like app for pokemon, after users swipe database saves all the data, and then you can view the results on a scoreboard.
              </Text>
                <Link href="https://pokeswipe.vercel.app/">Link to the app <Link/>
            </motion.div>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Projects;
