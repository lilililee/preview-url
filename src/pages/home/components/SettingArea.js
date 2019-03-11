import React from 'react'
import sizeList from './sizeConfig'

export default class SettingArea extends React.PureComponent {
  state = {
    url: this.props.url,
    diyWidth: '',
    diyHeight: ''
  }

  onChange = (e, field) => {
    this.setState({ [field]: e.target.value })
  }

  setDiySize = e => {
    const { diyWidth, diyHeight } = this.state
    if (!diyWidth || +diyWidth <= 0) {
      return alert('请输入合法的宽度')
    }
    if (!diyHeight || +diyHeight <= 0) {
      return alert('请输入合法的高度')
    }
    this.props.setSize(`${diyWidth}x${diyHeight}`)
  }

  render() {
    const { width, height, url, setSize, setUrl } = this.props
    return (
      <div className="setting-area">
        <div className="panel panel-link">
          <div className="panel-title">链接设置</div>
          <div className="panel-content">
            <div className="link">
              <input
                type="text"
                defaultValue={url}
                onChange={e => this.onChange(e, 'url')}
                placeholder="请输入预览链接"
              />
              <div className="btn" onClick={() => setUrl(this.state.url)}>
                确定
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel-size">
          <div className="panel-title">视图设置</div>
          <div className="panel-content">
            <div className="size-list">
              {sizeList.map(i => (
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
              <input type="text" className="input-width" placeholder="宽" onChange={e => this.onChange(e, 'diyWidth')} />
              <span>x</span>
              <input type="text" className="input-height" placeholder="高" onChange={e => this.onChange(e, 'diyHeight')} />
              <span>px</span>
              <div className="btn" onClick={this.setDiySize}>
                确定
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
