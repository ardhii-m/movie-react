import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import NowPlayingPage from './pages/NowPlayingPage';
import UpcomingPage from './pages/UpcomingPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <>
      <div>
        <header className='flex flex-col sm:flex-row items-center gap-4 justify-between px-8 shadow-md py-4'>
          <h1 className='text-center font-bold text-3xl sm:text-3xl text-red-600'>MOVIE CATALOGUE</h1>
          <Navigation />
        </header>
        <main className='pt-4 mx-5'>
          <Routes>
            <Route path='/' element={<NowPlayingPage />}/>
            <Route path='/upcoming' element={<UpcomingPage />} />
            <Route path='/*' element={<NotFoundPage />} />
            <Route path='/detail/:movieId' element={<DetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App;
