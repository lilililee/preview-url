import React, { useState, useContext } from 'react'
import QRCode from 'qrcode.react'
import sizeList from './sizeConfig'
import Context from '../../../store-hooks/index'
import { getUrlAction, getSizeAction } from '../../../store-hooks/actions'

export interface sizeConfigType {
  size: string,
  name: string
}

export default props => {
  const [inputUrl, setInputUrl] = useState(props.url)
  const [diyWidth, setDiyWidth] = useState('')
  const [diyHeight, setDiyHeight] = useState('')

  const {
    state: {
      url,
      size: { width, height }
    },
    dispatch
  } = useContext(Context)
  
  // 实现同一 url 刷新效果
  const dispatchUpdateUrl = () => {
    dispatch(getUrlAction(''))
    setTimeout(() => {
      dispatch(getUrlAction(inputUrl))
    }, 100)
  }

  const dispatchUpdateSize = size => {
    const [width, height] = size.split('x')
    dispatch(getSizeAction({ width, height }))
  }

  const setDiySize = () => {
    if (!diyWidth || +diyWidth <= 0) {
      return alert('请输入合法的宽度')
    }
    if (!diyHeight || +diyHeight <= 0) {
      return alert('请输入合法的高度')
    }
    dispatchUpdateSize(`${diyWidth}x${diyHeight}`)
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
            <div className="btn" onClick={dispatchUpdateUrl}>
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
                onClick={() => dispatchUpdateSize(i.size)}
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
