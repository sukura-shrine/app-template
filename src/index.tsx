// app entry
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { registerMicroApps, start } from 'qiankun'
import Nav from './nav'

const entry = '//localhost:3000'
const container = '#main-app'

const data = [
  { name: 'app1', activeRule: 'app1' },
]

const apps = data.map(item => ({ ...item, entry, container }))
registerMicroApps(apps)

function App () {
  useEffect(() => {
    start()
  }, [])

  return (<div id="main-app"></div>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Nav data={data} />
      <App />
    </div>
  </React.StrictMode>
)
