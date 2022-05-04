import Head from 'next/head';
import { Layout } from '../components/general/Layout';

export default function Imprint() {
  return (
    <div>
      <Head>
        <title>Impressum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div style={{ padding: '0 1rem' }}>
          <h1>Impressum</h1>
          <h2>Daten</h2>
          <div style={{ direction: 'rtl', textAlign: 'left', unicodeBidi: 'bidi-override' }}>
            <span>nnamretsuM xaM</span>
            <br />
            <span>11 eßartsretsuM</span>
            <br />
            <span>tdatsretsuM 11111</span>
          </div>
          <h2>Kontakt</h2>
          <div>
            <span>Email: xires.dev@gmail.com</span>
          </div>
        </div>
      </Layout>
    </div>
  );
}
