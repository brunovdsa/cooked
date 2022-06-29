import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Recipe from '../pages/Recipe';
import Search from '../pages/Search';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/search' element={<Search />} />
      <Route path='/recipe/:id' element={<Recipe />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
