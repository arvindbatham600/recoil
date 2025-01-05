import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodosInput from './components/TodosInput'
import TodosRender from './components/TodosRender'
import { RecoilRoot } from 'recoil'


function App() {
 

  return (
    <>
      <RecoilRoot>
        <TodosInput />
        <TodosRender />
      </RecoilRoot>
    </>
  );
}

export default App
