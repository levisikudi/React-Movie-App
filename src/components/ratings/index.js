import React from 'react'

const Ratings = (props) => {
    let {searchedMovie} = props;
    console.log(searchedMovie);

    const returnLoader = () => {
        return (
            <div>
                loading...
            </div>
        )
    }
    const returnMovieRatings = () => {
        let movieRatingsJSX = searchedMovie.Ratings.map((item, index) => {
            return (
                <div key={index}>
                    <h4>{item.Source}</h4>
                    <h5>{item.Value}</h5>
                </div>
            )
        })

        return movieRatingsJSX; 
        // array of jsx
    }


    


    
  return (
    <div>
        
        <h3>Ratings</h3>
        {searchedMovie === null ? returnLoader() : returnMovieRatings()}

    
    </div>
  )
}

export default Ratings