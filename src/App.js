import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Feed from './Feed';
import ChannelDetail from './ChannelDetail';
import SearchFeed from './SearchFeed';
import VideoDetail from './VideoDetail';
function App() {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundColor:"#000"}}>
       <Navbar/>
      <Routes>
        <Route path='/' exact element={<Feed/>} />
        <Route path='/video/:id' element={<VideoDetail/>} />
        <Route path='/channel/:id' element={<ChannelDetail/>} />
        <Route path='/search/:searchTerm' element={<SearchFeed/>} />
      </Routes>
    </Box>
      
    </BrowserRouter>
  );
}

export default App;