import { motion, Variants } from "framer-motion";
import { Box, Stack } from "@chakra-ui/react";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiNextdotjs, SiFramer } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const iconProps = {
  size: "50px",
  margin: "Auto",
};

const Frame = ({ children }) => {
  return (
    <Box>
      <Box
        pt='10px'
        display='flex'
        justifyContent='center'
        h='100px'
        w='100px'
        bg='brand.prettiPurple'
      >
        {children}
      </Box>
    </Box>
  );
};

const Section = ({ children, delay = 0 }) => (
  <Box m='auto' justifyContent='center'>
    <Stack
      mb={10}
      ml='0'
      spacing={6}
      direction={"column"}
      display={"flex"}
      w='full'
      alignItems='center'
      justifyContent='center'
    >
      <motion.div
        initial={{ y: 100, x: 400, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 3, delay }}
      >
        <Frame>
          <AiFillHtml5 {...iconProps} />
        </Frame>
      </motion.div>
      <motion.div
        initial={{ y: -300, x: -360, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 3, delay }}
      >
        <SiCss3 {...iconProps} />
      </motion.div>
      <motion.div
        initial={{ y: -360, x: 60, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 3, delay }}
      >
        <FaReact {...iconProps} />
      </motion.div>
      <motion.div
        initial={{ y: 100, x: 100, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 3, delay }}
      >
        <FaNodeJs {...iconProps} />
      </motion.div>
      <motion.div
        initial={{ y: -230, x: -260, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 3, delay }}
      >
        <BsGithub {...iconProps} />
      </motion.div>
      <motion.div
        initial={{ y: 100, x: 260, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 3, delay }}
      >
        <SiNextdotjs {...iconProps} />
      </motion.div>
      <motion.div
        initial={{ y: 10, x: 160, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 3, delay }}
      >
        <SiFramer {...iconProps} />
      </motion.div>
    </Stack>
  </Box>
);

export default Section;
