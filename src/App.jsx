import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodosInput from './components/TodosInput'
import TodosRender from './components/TodosRender'
import { RecoilRoot } from 'recoil'
import FilterBox from './components/FilterBox'


function App() {
 

  return (
    <>
      <RecoilRoot>
        <TodosInput />
        <FilterBox />
        <TodosRender />
      </RecoilRoot>
    </>
  );
}

export default App
