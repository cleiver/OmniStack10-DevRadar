import React, { useState, useEffect } from 'react'
import api from './services/api'

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import DevForm from './components/DevForm'
import DevItem from './components/DevItem'

function App() {
  const [devs, setDevs] = useState([])

  // Load devs data
  useEffect(() => {
    /**
     * a função do useffect não pode ser async, então criamos uma função
     * interna e executamos ela no final
     */
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
    }

    loadDevs()
  })

  // Form submission
  async function handleAddDev(data) {

    const apiResponse = await api.post('/devs', data)

    setDevs([apiResponse.data, ...devs])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem dev={dev} key={dev._id} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
