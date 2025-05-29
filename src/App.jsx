


import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import Loading from './SubComponents/Loading';
import './App.scss'

const Home = React.lazy(() => import('./Components/Home'));
const About = React.lazy(() => import('./Components/About'));
const Collection = React.lazy(() => import('./Components/Collections'));
const OnlineShop = React.lazy(() => import ('./Components/OnlineShop'))
const Arkadia = React.lazy(() => import('./Collections/Arkadia'));
const Everest = React.lazy(() => import('./Collections/Everest'));
const Jungle  = React.lazy(() => import('./Collections/Jungle'));
const Thaj = React.lazy(() => import('./Collections/Thaj'));
const KingDom = React.lazy(() => import('./Collections/KingDom'));
const Valcano = React.lazy(() => import('./Collections/Valcano'));

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/items' element={<Collection />} />
        <Route path='/shop' element={<OnlineShop />} />
        <Route path='/collections/arkadia' element={<Arkadia />} />
        <Route path='/collections/kingdom' element={<KingDom />} />
        <Route path='/collections/jungle' element={<Jungle />} />
        <Route path='/collections/everest' element={<Everest />} />
        <Route path='/collections/thaj' element={<Thaj />} />
        <Route path='/collections/valcano' element={<Valcano />} />
      

      </Routes>
    </Suspense>
  );
};

export default App;

