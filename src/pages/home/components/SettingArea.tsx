import React, { useState,useContext } from 'react'
import QRCode from 'qrcode.react'
import sizeList from './sizeConfig'
import Context from '../../../index'
import {getUrlAction} from '../../../store-hooks/actions'

export interface sizeConfigType {
  size: string,
  name: string
}

export interface diySizeType {
  width: string,
  height: string
}

export interface settingPropsType {
  width: number,
  height: number,
  url: string,
  setSize: any,
  setUrl: any
}

export default (props: settingPropsType) => {
  const [inputUrl, setInputUrl] = useState(props.url)
  const [diyWidth, setDiyWidth] = useState('')
  const [diyHeight, setDiyHeight] = useState('')
  const { width, height, setSize, setUrl } = props

  const { state: {url}, dispatch } = useContext(Context)

  const setDiySize = () => {
    if (!diyWidth || +diyWidth <= 0) {
      return alert('请输入合法的宽度')
    }
    if (!diyHeight || +diyHeight <= 0) {
      return alert('请输入合法的高度')
    }
    setSize(`${diyWidth}x${diyHeight}`)
  }

  return (
    <div className="setting-area">
      <div className="panel panel-link">
        <div className="panel-title">链接设置</div>
        <div className="panel-content">
          <div className="link">
            <input
              type="text"
              defaultValue={url}
              onChange={e => setInputUrl(e.target.value)}
              placeholder="请输入预览链接"
            />
            <div className="btn" onClick={() => dispatch(getUrlAction(inputUrl))}>
              确定
            </div>
          </div>
        </div>
      </div>
      <div className="panel panel-size">
        <div className="panel-title">视图设置</div>
        <div className="panel-content">
          <div className="size-list">
            {sizeList.map((i: sizeConfigType) => (
              <div
                className={`${width}x${height}` === i.size ? 'active size-item' : 'size-item'}
                onClick={() => setSize(i.size)}
                key={i.size}
              >
                {i.name}
              </div>
            ))}
          </div>

          <div className="diy-size">
            <div className="name">自定义：</div>
            <input type="text" className="input-width" placeholder="宽" onChange={e => setDiyWidth(e.target.value)} />
            <span>x</span>
            <input type="text" className="input-height" placeholder="高" onChange={e => setDiyHeight(e.target.value)} />
            <span>px</span>
            <div className="btn" onClick={setDiySize}>
              确定
            </div>
          </div>
        </div>
      </div>
      <div className="panel panel-qrcode">
        <div className="panel-title">扫描二维码预览</div>
        <div className="panel-content">
          <QRCode value={url} />,
        </div>
      </div>
    </div>
  )
}

