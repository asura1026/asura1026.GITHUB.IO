import React from 'react';
import { Layout } from './components/Layout';
import { HomeHero } from './components/HomeHero';
import { Features } from './components/Features';
import { Showcase } from './components/Showcase';
import { Conversion } from './components/Conversion';

export default function App() {
  return (
    <Layout>
      <HomeHero />
      <Features />
      <Showcase />
      <Conversion />
    </Layout>
  );
}
