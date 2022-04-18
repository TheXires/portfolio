import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import { Layout } from '../components/Layout';
import Navbar from '../components/Navbar';
import Works from '../components/Works';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Works />

      <div style={{ height: 500 }} />
    </div>
  );
}
