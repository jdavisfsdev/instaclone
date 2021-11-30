import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Joe's InstaClone with Next.JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>This is the Instagram 2.0 BUILD</h1>

      {/* Header */}
      <Header />

      {/* Feed */}

      {/* Modal */}
    </div>
  );
}
