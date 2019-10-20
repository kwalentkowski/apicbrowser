import React, { FunctionComponent } from 'react'

import { IImageGalleryProps } from "./types"
import Image from '../image'
import { getShuffledArray } from '../../common/getShuffledArray'

const ImageGallery: FunctionComponent<IImageGalleryProps> = ({ imagesUrls, isLoading }) => {
    return (
        <div>
            {imagesUrls && getShuffledArray(imagesUrls).map((imageUrl, index) =>
                <Image key={index} src={imageUrl} />
            )}
            {!isLoading && !imagesUrls.length &&
                <div>no results</div>
            }
        </div>
    )
}

export default ImageGallery