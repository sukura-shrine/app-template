// app entry
import React from 'react'
import ReactDOM from 'react-dom/client'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

type AppProp = {
  [key: string]: any
}

let root

function render (props: AppProp) {
  root = ReactDOM.createRoot(document.getElementById('app'))
  root.render(
    <React.StrictMode>
      <div>App</div>
    </React.StrictMode>
  )
}

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}

renderWithQiankun({
  mount(props) {
    console.log('mount')
    render(props)
  },
  bootstrap() {
    console.log('bootstrap')
  },
  unmount() {
    root.unmount()
  },
  update() {
  }
})
