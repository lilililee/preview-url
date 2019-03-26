import React, { useState } from 'react'
import DisplayArea from './components/DisplayArea'
import SettingArea from './components/SettingArea'
import './index.scss'

export default function Home(props: object) {
  const [width, setWidth] = useState(375)
  const [height, setHeight] = useState(667)
  const [url, setUrl] = useState('https://weui.io/')

  const assign = { width, height, url }

  const setSize = (size: string) => {
    const [w, h] = size.split('x')
    setWidth(+w)
    setHeight(+h)
  }

  // 实现同一 url 刷新效果
  const handleUrl = url => {
    setUrl('')
    setTimeout(() => {
      setUrl(url)
    }, 100)
  }

  return (
    <div className="main">
      <DisplayArea {...assign} />
      <SettingArea {...assign} setSize={setSize} setUrl={handleUrl} />
    </div>
  )
}
