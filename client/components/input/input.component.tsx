import styled from 'styled-components';
import React, { FunctionComponent } from 'react'

import { IInputProps } from "./types";

const StyledInput = styled.input<IInputProps>``

const Input: FunctionComponent<IInputProps> = ({className, value, placeholder, ref}) => {
return (
    <StyledInput className={className} value={value} placeholder={placeholder} ref={ref}/>
    )
}

export default Input