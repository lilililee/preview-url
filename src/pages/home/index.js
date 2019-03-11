import React from 'react'
import DisplayArea from './components/DisplayArea'
import SettingArea from './components/SettingArea'
import Styles from './index.scss'

export default class Home extends React.Component {
  state = {
    url: 'https://weui.io/',
    width: 375,
    height: 667
  }

  setSize = size => {
    const [width, height] = size.split('x')
    this.setState({
      width,
      height
    })
  }

  setUrl = url => {
    document.getElementById('devices-view')
    this.setState({
      url: ''
    })

    setTimeout(() => {
      this.setState({ url })
    }, 100)
  }

  render() {
    const { width, height } = this.state
    return (
      <div className={Styles.main}>
        <DisplayArea {...this.state} />
        <SettingArea {...this.state} setSize={this.setSize} setUrl={this.setUrl} />
      </div>
    )
  }
}
