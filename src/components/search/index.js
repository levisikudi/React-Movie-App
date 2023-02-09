import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Search = (props) => {
    let {setSearchedMovie} = props;

    const[searchString, setSearchString] = useState('')

    useEffect(() => {
        console.log("making api call");
        makeServerCall("Infinity War")
    }, []);

    const handleChange = (e) =>{
        console.dir(e.target.value)
        setSearchString(e.target.value)
    }


    const makeServerCall = async (string) => {
        let serverResponse = await axios({
            method: 'GET',
            url: `/get_movie/${string}`
        });
        console.log(serverResponse);
        setSearchString('');
        setSearchedMovie(serverResponse.data);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log("Submitting");

        let serverResponse = await axios({
            method: 'GET',
            url: `/get_movie/${searchString}`
        });
        console.log(serverResponse);
        setSearchString('')
        setSearchedMovie(serverResponse.data)


    }

  return (
    <div>
        <section>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h3>Search</h3>
                <label htmlFor='movie-search' >Type the name of the movie that you want to see!</label><br/>
                
                <input 
                type="search" 
                name="movie-search" 
                value={searchString}
                placeholder='Movie name'
                onChange={(event) => handleChange(event)}
                />
            </form>
            <hr/>
        </section>
    </div>
  )
}

export default Search