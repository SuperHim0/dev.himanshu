import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import './App.css'
import AppRouter from './Router/AppRouter';

function App() {


  return (
    <div className=' flex flex-col'>
      <MantineProvider>
        <div className='mt-4 '>
          
          <AppRouter />
        </div>
        {/* <AppRouter /> */}
      </MantineProvider>
    </div>
  )
}

export default App
