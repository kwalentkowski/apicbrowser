
import bodyParser from 'body-parser'
import express from 'express'
import axios from 'axios'

import { PIXABAY_API_URL, GIPHY_API_URL } from './config/apiKeys';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

interface IPixabayResponseData {
  totalHits: number,
  hits: Array<{
    webformatURL: string
  }>
}

interface IGiphyResponseData {
  data: Array<{
    url: string
   }>
   pagination: {
     total_count: number
   }
}

const extractPixabayImages = (data: IPixabayResponseData): string[]  => {
  if(!data || !data.totalHits || !data.hits.length) {
    return []
  }
  return data.hits.map(_ => _.webformatURL)
}
const extractGiphyImages = (data: IGiphyResponseData) => {
  if(!data || !data.pagination.total_count || !data.data.length) {
    return []
  }
  return data.data.map(_ => _.url)
}

app.get("/api/images/:keyword", (req, res) => {
  axios.all([
    axios.get(`${PIXABAY_API_URL}&q=${req.params.keyword}`),
    axios.get(`${GIPHY_API_URL}&q=${req.params.keyword}`)
  ])
  .then(axios.spread((pixabay, giphy) => {
    res.status(200)
    res.send([...extractPixabayImages(pixabay.data),...extractGiphyImages(giphy.data)])
  })).catch((err:Error)=> {
    console.error(err)
    res.status(500)
    res.send({ error: err.message })
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));
