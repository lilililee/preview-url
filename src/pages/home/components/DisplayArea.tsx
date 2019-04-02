import React, { useContext } from 'react'
import Context from '../../../index'

export interface displayPropsType {
  width: number,
  height: number,
  url: string
}

const scale = 0.8

export default (props: displayPropsType) => {
  const { state: {url}, dispatch } = useContext(Context)
  // console.log(112,ctx)

  const { width, height } = props
  return (
    <div className="display-area">
      <div className="devices-container">
        <iframe
          id="devices-view"
          style={{ width: `${width * scale}px`, height: `${height * scale}px` }}
          src={url}
          frameBorder="0"
          scrolling-x="no"
          title="view"
        />
      </div>
    </div>
  )
}
