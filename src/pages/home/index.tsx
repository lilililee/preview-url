import React from 'react'
import DisplayArea from './components/DisplayArea'
import SettingArea from './components/SettingArea'
import './index.scss'

export default function Home(props: object) {
  return (
    <div className="main">
      <DisplayArea />
      <SettingArea />
    </div>
  )
}
