import React, { useContext } from 'react'
import Context from '../../../store-hooks/index'

const scale = 0.8

export default props => {
  const {
    state: {
      url,
      size: { width, height }
    }
  } = useContext(Context)

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
