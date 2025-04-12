import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const comedyList = moviesList.filter(
    eashlist => eashlist.categoryId === 'COMEDY',
  )
  const actionList = moviesList.filter(
    eashlist => eashlist.categoryId === 'ACTION',
  )

  return (
    <div className="PrimeVideoBg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="PrimeVideoImg"
      />
      <div className="PrimeVideoBottom">
        <h1 className="primeHeading">Action Movies</h1>
        <MoviesSlider list={actionList} />
        <h1 className="primeHeading">Comedy Movies</h1>
        <MoviesSlider list={comedyList} />
      </div>
    </div>
  )
}

export default PrimeVideo
