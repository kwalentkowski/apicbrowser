import styled from 'styled-components';
import React, { FunctionComponent } from 'react'

import { IImageProps } from "./types";

const StyledImage = styled.img<IImageProps>``

const Image: FunctionComponent<IImageProps> = ({className, alt, src}) => {
return (
    <StyledImage className={className} src={src} alt={alt}/>
    )
}

export default Image