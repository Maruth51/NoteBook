import * as React from "react";
import {
  Box,
  Text,
  Flex,
  Spacer,
  Heading,
  Menu,
  MenuItem,
  MenuDivider,
  MenuButton,
  IconButton,
  MenuList,
  HStack,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AddIcon, HamburgerIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import NoteForm from "./note-form";
import { motion } from "framer-motion";

export interface TopNavProps {
  handleNoteCreate?: (note: note) => void;
}

export const TopNav: React.SFC<TopNavProps> = ({ handleNoteCreate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex mb={"30px"} align="center">
        <Box p="2" as={Link} to="/">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Heading
              as="h1"
              size="xl"
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
              _focus={{ boxShadow: "none", outline: "none" }}
              _hover={{
                textDecoration: "none",
                bgGradient: "linear(to-r, red.500, yellow.500)"
              }}
            >
              Notebook App
            </Heading>
          </motion.div>
          <Button
              leftIcon={<AddIcon />}
              variant="outline"
              size="sm"
              onClick={onOpen}
            >
              Add new note
          </Button>
        </Box>
        <Spacer />
        <Box>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
      </Flex>
      <NoteForm
        isOpen={isOpen}
        onClose={onClose}
        handleNoteCreate={handleNoteCreate}
      />
    </>
  );
};
