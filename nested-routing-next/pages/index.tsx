import Head from 'next/head'
import { HomeContainer } from '../styles/Home.styles';
import Menu from '../components/Menu';

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>HOME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu options={['a', 'b', 'c']} />
      <p>Essa é a página Home</p>
    </HomeContainer>
  )
}
