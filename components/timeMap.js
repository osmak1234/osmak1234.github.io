import {
  Box,
  Text,
  Heading,
  shouldForwardProp,
  chakra,
  Slide,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  SliderMark,
} from "@chakra-ui/react";
import { useState } from "react";

const TimeMap = () => {
  const timeArray = [
    "2022 / Could start working for your company",

    "2021 / Started Highschool in Pisek",
    " 2006 / I was born in Czech Budejovice",
  ];
  const [text, setText] = useState(timeArray[0]);

  return (
    <>
      <Box m='auto' alignItems='center' pb='40px'>
        <Text fontSize='lg' fontWeight='bold' textAlign='center'>
          My timeline
        </Text>
        <Stack
          direction='row'
          display='flex'
          m='auto'
          w='full'
          alignItems='center'
          justifyContent='center'
        >
          <Slider
            onChange={(val) => setText(timeArray[val])}
            min={0}
            max={2}
            step={1}
            margin='30px'
            justifySelf='center'
            display='flex'
            defaultValue={3}
            orientation='vertical'
            minH='64px'
          >
            <SliderTrack>
              <SliderFilledTrack bg='brand.normalYellow' />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Box
            textAlign='center'
            h='80px'
            w='400px'
            p='16px'
            bg='brand.prettiPurple'
          >
            <Text>{text}</Text>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default TimeMap;
