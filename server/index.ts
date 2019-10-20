
import bodyParser from 'body-parser'
import express from 'express'
import axios from 'axios'
import cors from 'cors'

import { PIXABAY_API_URL, GIPHY_API_URL } from '../config/api';
import { extractPixabayImages } from './utilities/extractPixabayImages';
import { extractGiphyImages } from './utilities/extractGiphyImages';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/images/:keyword", (req, res) => {
  axios.all([
    axios.get(`${PIXABAY_API_URL}&q=${req.params.keyword}`),
    axios.get(`${GIPHY_API_URL}&q=${req.params.keyword}`)
  ])
  .then(axios.spread((pixabay, giphy) => {
    res.status(200)
    res.send(
      {
        images: [...extractPixabayImages(pixabay.data),...extractGiphyImages(giphy.data)]
      })
  })).catch((err:Error)=> {
    console.error(err)
    res.status(500)
    res.send({ error: err.message })
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));
