import React from 'react';
import Note from '../../simple-lib/Notes';
import { NotesListContainer } from './notesList.styles';
import { useNotes } from '../../context/NotesTexts';

const NotesList = () => {
    const { titles } = useNotes()!;
    return (
        <NotesListContainer>
            {titles.map((title) => <Note note={title}/>)}
        </NotesListContainer>
    );
}

export default NotesList;
