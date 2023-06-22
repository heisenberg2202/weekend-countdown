import { useState } from 'react'
import './App.css'

function App() {
  const date = new Date();
  const daysOfWeek = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  };

  var month = date.getMonth()+1;
  var day = date.getDate();
  return (
    <article>
      <h1>Countdown to weekend</h1>
      <p>Today's Date:  {`${day < 10 ? '0' + day : day}`}.{`${month < 10 ? '0' + month : month}`}.{date.getFullYear()}</p>
      <p>Today's Day: {daysOfWeek[date.getDay()]}</p>
      <p>Days till weekend: {6-(date.getDay())}</p>
    </article>
  )
}

export default App
