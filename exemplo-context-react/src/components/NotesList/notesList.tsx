import React from 'react';
import Note from '../../simple-lib/Notes';
import { NotesListContainer } from './notesList.styles'

const NotesList = () => {
    return (
        <NotesListContainer>
            <Note note="AAAA"/>
            <Note note="AAAA"/>
        </NotesListContainer>
    );
}

export default NotesList;
