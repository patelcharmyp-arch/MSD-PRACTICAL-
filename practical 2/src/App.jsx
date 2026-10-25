import { useState } from 'react'
import './App.css'

function WorkoutCard({ name, icon, minutes, change }) {
  return (
    <div className="card">
      <h2>{icon} {name}</h2>
      <p>Workout Duration</p>
      <div className="controls">  <button onClick={() => change(-5)}>−</button>
        <b>{minutes} min</b>
        <button onClick={() => change(5)}>+</button>
      </div>
    </div>
  )}
function App() {
  const [times, setTimes] = useState([20, 15, 30])
  const [saved, setSaved] = useState(false)
  const names = ['Cardio', 'Yoga', 'Strength Training']
  const icons = ['🏃', '🧘', '🏋️']

  const changeTime = (i, value) => {
    setTimes(times.map((t, index) =>
      i === index ? Math.max(0, t + value) : t
    ))
    setSaved(false)
  }

  return (
    <div className="app">
      <h1>💪 My Workout Planner</h1>
      <p>Plan your workout, stay healthy!</p>

      <div className="cards">
        {names.map((name, i) => (
          <WorkoutCard
            key={name}
            name={name}
            icon={icons[i]}
            minutes={times[i]}
            change={(v) => changeTime(i, v)}
          />
        ))}
      </div>

      <div className="summary">
        <h2>Total: {times.reduce((a, b) => a + b, 0)} minutes</h2>
        <button onClick={() => setSaved(true)}>Save My Plan</button>
        {saved && <p>✅ Plan saved successfully!</p>}
      </div>
    </div>
  )
}

export default App
