import { useState } from 'react';
import Input from '../simple-lib/Input';
import NotesList from '../components/NotesList/notesList'
import { useNotes } from '../context/NotesTexts';


const InputPage = () => {
    const { setTitleNote } = useNotes()!;
    const [note, setNote] = useState('');

    return (
        <>
            <title>Input Page</title>
            <Input placeholder="Digite a sua nota"
                   addButton
                   value={note} 
                   onChange={(e: any) => setNote(e.target.value)} 
                   onButtonPress={() => setTitleNote(note)}
                   />
            <NotesList />
        </>
    );
}

export default InputPage;
