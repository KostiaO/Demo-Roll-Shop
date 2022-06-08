import React from 'react';
import { Header } from './components/Header/Header';
import { RollSection } from './components/RollSection/RollSection';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <RollSection />
    </>
  );
}
