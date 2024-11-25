import React from 'react';
import Slider from '../components/Slider';
import Filter from '../components/Filter';
import TopNovels from '../components/TopNovels';
import NewNovels from '../components/NewNovels';
import Categories from '../components/Categories';
import UpdatedNovels from '../components/UpdatedNovels';
import Banner from '../components/Banner';
import RecentComments from '../components/RecentComments';
import MostFollowed from '../components/MostFollowed';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <Slider />
      <Filter />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <TopNovels />
          <NewNovels />
          <Categories />
          <Banner />
        </div>
        <div className="space-y-8">
          <UpdatedNovels />
          <RecentComments />
          <MostFollowed />
        </div>
      </div>
    </div>
  );
};

export default Home;