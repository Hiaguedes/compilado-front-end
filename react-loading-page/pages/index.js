import Head from 'next/head';
import GlobalStyle from '../styles/globals';
import styled from 'styled-components';
import LoadingPage from '../components/loadingPage';

const Card = styled.div`
  max-width: 30rem;
  width: 80%;
  height: 12rem;
  border-radius: 1rem;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <div style={{height: '100vh',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Head>
        <title>React Loading Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Card>
        <LoadingPage text="Trazendo Informações"/>
      </Card>
   </div>
  )
}
