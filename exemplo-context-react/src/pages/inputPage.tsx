import Input from '../simple-lib/Input';
import NotesList from '../components/NotesList/notesList'

const inputPage = () => {
    return (
        <>
            <title>Input Page</title>
            <Input placeholder="Digite a sua nota" addButton/>
            <NotesList />
        </>
    );
}

export default inputPage;
