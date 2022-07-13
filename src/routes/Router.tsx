import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import Recipe from '../pages/Recipe';
import Search from '../pages/Search';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/search' element={<Search />} />
      <Route path='/recipe/:id' element={<Recipe />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
