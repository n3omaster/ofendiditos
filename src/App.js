import React from 'react'
import { OffenseView } from "./components/OffenseView";

// Wouter Router like React Router
import { Link, Route } from "wouter";
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="bg-cyan-100 py-4 px-6">

      <Link href="/">
        <a><h1 className="text-3xl font-bold text-center">Ofendiditos</h1></a>
      </Link>

      <Route path="/" component={HomePage} />
      <Route path="/offense/:id" component={OffenseView} />

      <div className='text-center mt-8'>
        Con ❤️ de parte de <a href='https://twitter.com/ErichGarciaCruz' className='text-blue-700 '>@ErichGarciaCruz</a>
      </div>
    </div>
  );
}

export default App;
