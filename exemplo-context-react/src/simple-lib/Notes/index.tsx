import { NoteContainer } from './notes.styles';

interface NotesProps {
    note: string;
}

const Notes = ({note}: NotesProps) => {
    return (
        <NoteContainer>
            {note}
        </NoteContainer>
    );
}

export default Notes;
