import { createBrowserRouter , Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout'
import CitiesListLayout from './layouts/CitiesListLayout'

// pages
import Quiz from './pages/Quiz'
import AboutUs from './pages/AboutUs'
import CitiesList, { citiesLoader } from './pages/CitiesList'
import NotFound from './pages/NotFound'
import CityDetail from './pages/CityDetail'

// style
import './App.scss'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Quiz />} /> 

      <Route path='citylist/' element={<CitiesListLayout />} >
        <Route 
          index 
          element={<CitiesList />}
          loader={citiesLoader}
          />
        <Route 
          path=':cityName'
          element={<CityDetail />}
          />
      </Route>

      <Route path='/aboutus' element={<AboutUs />} />


      <Route path='*' element={<NotFound/>} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}  />
  );
}

export default App
