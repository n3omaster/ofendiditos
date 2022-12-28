import React from 'react'
import OffenseList from "./components/OffenseList";
import OffensePost from "./components/OffensePost";

function App() {

  return (
    <div className="py-4 px-6">
      <h1 className="text-3xl font-bold text-center">Ofendiditos</h1>
      <p className='text-center'>El lugar ideal para soltar tu veneno</p>
      <OffensePost />
      <OffenseList />
    </div>
  );
}

export default App;
