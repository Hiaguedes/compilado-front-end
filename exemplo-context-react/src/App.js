import { GlobalStyle } from './globalStyles';
import InputPage from './pages/inputPage';
import { NotesProvider } from './context/NotesTexts';

function App() {
  return (
    <NotesProvider>
      <GlobalStyle />
      <InputPage />
    </NotesProvider>
  );
}

export default App;
