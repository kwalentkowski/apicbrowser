import { FunctionComponent, useState, useEffect, Fragment } from 'react'
import React from 'react'

import SearchForm from './components/searchForm'
import ImageGallery from './components/imageGallery'
import { getImagesByKeyword } from './services'

const App: FunctionComponent = () => {

    const [keyword, setKeyword] = useState('')
    const [images, setImages] = useState([''])
    const [isLoading, setIsLoading] = useState(false)
    const handleSearch = (input: string) => {
        setKeyword(input)
    }

    useEffect(() => {
        if(keyword){
            setIsLoading(true)
            getImagesByKeyword(keyword)
            .then(result => setImages(result.data.images))
            .catch((error:Error) => console.error(error.message))
            .finally(() => setIsLoading(false))
        }
    }, [keyword])

    return (
        <Fragment>
        <SearchForm handleSearch={handleSearch}/>
        <ImageGallery imagesUrls={images} isLoading={isLoading} />
        </Fragment>
    )
}

export default App