import { useContext, createContext, useState } from 'react';

interface DefaultProps {
    titles: string[];
    setTitleNote: any;
}

const ctxDefaultValue = {
    titles: [],
    setTitleNote: (newText: string) => {}
};

const NotesContext = createContext<DefaultProps>(ctxDefaultValue);

interface Props {
    children: React.ReactNode;
  }

export const NotesProvider = ({children}: Props) => {
    const [titles, setNotesTitles] = useState<string[]>(ctxDefaultValue.titles);

    const setTitleNote = (newText: string) => {
        setNotesTitles([...titles,newText]);
    }

    return (
        <NotesContext.Provider value={{titles, setTitleNote}}>
            {children}
        </NotesContext.Provider>
    );
}

export const useNotes = () => useContext(NotesContext);
