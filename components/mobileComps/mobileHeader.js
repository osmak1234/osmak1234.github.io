import { Box, Container, Text, Stack, Button } from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";
import { GiCat } from "react-icons/gi";
import { motion } from "framer-motion";

const MobileHeader = () => {
  return (
    <>
      <Box
        position='fixed'
        top='0'
        as='nav'
        w='100%'
        css={{ backdropFilter: "blur(10px)" }}
        zIndex={2}
        alignSelf='start'
      >
        <Container
          display='flex'
          p={2}
          maxW='container.md'
          wrap='wrap'
          align='center'
          justify='space-between'
        >
          <Stack
            spacing={2}
            direction={"row"}
            display={"flex"}
            w='full'
            alignItems='center'
            justifyContent='center'
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 1.2, rotate: -10 }}
            >
              <Text
                mr='5px'
                fontSize='lg'
                fontWeight='bold'
                display='inline-flex'
              >
                <GiCat />
                Tadeáš Hanus
              </Text>
            </motion.div>

            <a href='http://localhost:3000/'>
              <motion.div whileHover={{ scale: 1.2, rotate: 360 }}>
                <a>
                  <Button
                    ml='20px'
                    bg='brand.normalYellow'
                    _hover={{ bg: "brand.prettiPurple" }}
                  >
                    Desktop
                  </Button>
                </a>
              </motion.div>
            </a>
            <Text mr={5}>Contacts</Text>
            <Text
              as='a'
              target='_blank'
              href='https://github.com/osmak1234'
              display='inline-flex'
              alignItems='center'
              style={{ gap: 4 }}
              pl={2}
            >
              <GoMarkGithub />
              My Page
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
//hi
export default MobileHeader;
