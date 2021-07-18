import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { TopNav } from "./components/top-nav";
import { HomePage } from "./components/home-page";


const App: React.FC = () => {
  const [notes, setNotes] = React.useState<note[]>([]);

  React.useEffect(() => {
    const dummyNotes = [
      {
        id: "Odork5n5jPVd0wvm0w_dY",
        title: "Hey 👋",
        body:
          "I'm dummy note here. Try to update me. Click me to see my remaining part. You can also delete me 😔. But I'll be here again by reopening the app link 😃. "
      }
    ];
    setNotes(dummyNotes);
  }, []);

  const handleNoteCreate = (note: note) => {
    const newNotesState: note[] = [...notes];
    newNotesState.push(note);
    setNotes(newNotesState);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" p={5}>
        <TopNav handleNoteCreate={handleNoteCreate} />
           <HomePage notes={notes} setNotes={setNotes} />
      </Box>
    </ChakraProvider>
  );
};

export default App
