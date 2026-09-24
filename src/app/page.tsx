import React from 'react';
import BannerSection from './components/Banner';
import BooksSection from './components/Books';

const HomePage = async () => {
  return (
    <div>
      <BannerSection/>
      <BooksSection/>
    </div>
  );
};

export default HomePage;