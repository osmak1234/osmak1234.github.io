import { Box, Text, Image, Stack, Heading } from "@chakra-ui/react";
import Section from "./animatedComps/about";
import Skills from "./animatedComps/skills";

const Main = () => {
  return (
    <>
      <Section>
        <Box
          bg='brand.prettiPurple'
          rounded='lg'
          p={4}
          width='100%'
          justifyContent='center'
          align='center'
          h='fit-content'
          w='fit-content'
          mt='100px'
          mb='30px'
          ml='auto'
          mr='auto'
        >
          <Text>Web developer based in Czech Republic</Text>
        </Box>
        <Stack
          mb={10}
          ml='0'
          spacing={6}
          direction={"row"}
          display={"flex"}
          w='full'
          alignItems='center'
          justifyContent='center'
        >
          <Stack mr='60px'>
            <Text fontSize='lg' fontWeight='bold'>
              Tadeáš Hanus
            </Text>
            <Text>Web developer/student</Text>
          </Stack>

          <Image
            m='auto'
            rounded='full'
            w='100px'
            src='images/profile.png'
          ></Image>
        </Stack>

        <Box>
          <Heading
            textAlign='center'
            fontSize='lg'
            fontWeight='bold'
            color='white'
          >
            Work
          </Heading>
          <Text color='white' w='400px' m='auto'>
            Im currently a highschool student learning web development on the
            side. Currently in Czech republic, but I would love to travel abroad
            some day.If you want anything you can can contact me in the form at
            the bottom of the page or through the social media icons.
          </Text>
        </Box>
        <Box bg='brand.prettiPurple' pb='40px'>
          <Text
            mb='30px'
            mt='20px'
            fontSize='30px'
            fontWeight='bold'
            textAlign='center'
          >
            My Skills
          </Text>
          <Skills />
        </Box>
      </Section>
    </>
  );
};

export default Main;
