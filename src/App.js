import React from 'react';
import Item from './component/Item';

const App = () => {
  
  return (
    <>
      <div className='flex items-center justify-center h-screen '>
        <div className='h-[30rem] w-[25rem] bg-yellow-600 flex justify-center p-4 rounded-xl'>
          <Item/>
          
        </div>
      </div>
    </>
  )
}

export default App