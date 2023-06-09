import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routing } from '@/routes';
import { useSetupAxios } from '@/services';
import './App.scss';

const queryClient = new QueryClient();

function App() {
  useSetupAxios();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='App'>
          <Routing />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
