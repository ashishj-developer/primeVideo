import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {eachList} = props
  const {thumbnailUrl, videoUrl} = eachList

  return (
    <div>
      <Popup
        modal
        trigger={
          <button className="triggerBtn" type="button">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="btn">
              <button
                data-testid="closeButton"
                className="triggerBtn"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose />
              </button>
            </div>
            <div className="player">
              <ReactPlayer url={videoUrl} />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
