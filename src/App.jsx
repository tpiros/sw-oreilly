import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import About from './components/About';
// import CharacterInfo from './components/CharacterInfo';
// import CharacterList from './components/CharacterList';
// import Home from './components/Home';
// import Nav from './components/Nav';
// import Search from './components/Search';
const About = lazy(() => import('./components/About'));
const CharacterInfo = lazy(() => import('./components/CharacterInfo'));
const CharacterList = lazy(() => import('./components/CharacterList'));
const Home = lazy(() => import('./components/Home'));
const Nav = lazy(() => import('./components/Nav'));
const Search = lazy(() => import('./components/Search'));

function App() {
  return (
    <div>
      <Nav />
      <div className="flex bg-gray-200 py-24 justify-center">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/characters"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <CharacterList />
              </Suspense>
            }
          />
          <Route
            path="/characters/:id"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <CharacterInfo />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Search />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
