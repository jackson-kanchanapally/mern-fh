import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { ChakraProvider,Stack} from '@chakra-ui/react'
import  Home  from './pages/Home';
import {Navbar} from './components/Navbar';
import Dtab from './components/Dtab';
import CF from './components/CF';
function App() {
  return (
    <ChakraProvider>
      <Stack>
   {/* <BrowserRouter>
   <Navbar/>
   <div>
    <Routes>
      <Route 
      path='/'
      element={<Home/>}
      />

     
   <Dtab/>
    </Routes>
   </div>
   </BrowserRouter> */}
   <Dtab/>
   <CF/>
   </Stack>
   </ChakraProvider>
  );
}

export default App;
