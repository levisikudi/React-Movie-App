import React from 'react'

const DisplayMovie = (props) => {

  let {searchedMovie} = props;
  const returnMovieJSX = () => {
    if (searchedMovie !== null) {
      return (
        <div>
        <h3>MOVIE DISPLAY</h3>
        <h4>{searchedMovie.Title}</h4>
        <p>{searchedMovie.Plot}</p>
      {/* check if posterURL exists */}
        <img src={searchedMovie.Poster} alt="" />
      </div>
      )
    } else {
      return (
        <div>
          waiting for movie...
        </div>
      )
    }
  }

  return (
    <section>
      { returnMovieJSX() }
    </section>
  )
  
}

export default DisplayMovie