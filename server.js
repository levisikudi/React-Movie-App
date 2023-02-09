const express = require('express')
require('dotenv').config()
const app = express()
const cors = require('cors')
const axios = require('axios')

const path = require('path')

app.use(express.static(path.join(__dirname, 'build')))

//console.log(process.env.API_KEY);



app.use(cors('*/*'))

app.get('/get_movie/:movieString', async (req, res) =>{
    console.log(req.params.movieString);

    let apiResponse = await axios(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${req.params.movieString}`)
    const data = apiResponse.data;
    //console.log(data);
    res.json(data);
})


app.listen(4002, () => {
    console.log(`Server is Listening on 4002`)
})