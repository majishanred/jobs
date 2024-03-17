import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Jobs from './components/Jobs';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className='w-full '>
        <img className='w-full h-auto overflow-hidden' src='/bg-header-desktop.svg'></img>
      </div>
      <div className='fixed w-full h-full bg-[hsl(180,52%,96%)] left-0 top-0 -z-50'></div>
      <div className='flex w-full justify-center gap-10 py-10'>
        <Jobs></Jobs>
      </div>
    </QueryClientProvider>
  )
};

export default App
