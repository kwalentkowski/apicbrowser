import styled from 'styled-components';
import React, { FunctionComponent } from 'react'

import { IButtonProps } from "./types";

const StyledButton = styled.button<IButtonProps>`
    background-color: ${({backgroundColor}) => backgroundColor}
`

const Button: FunctionComponent<IButtonProps> = ({className, children, backgroundColor, type}) => {
return (
    <StyledButton className={className} backgroundColor={backgroundColor} type={type}>
        {children}
    </StyledButton>
    )
}

export default Button