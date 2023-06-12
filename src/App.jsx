import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routing } from '@/routes';
import { useSetupAxios } from '@/services';
import './App.scss';
import Home from './pages/homePage/Home';

const queryClient = new QueryClient();

function App() {
  useSetupAxios();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='App'>
          <Home />
          {/* <Routing /> */}
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
