import styled from 'styled-components';
import React, { FunctionComponent, createRef, FormEvent } from 'react'

import { ISearchFormProps } from "./types";
// import Input from '../input';
import Button from '../button';

const StyledForm = styled.form`
`

const SearchForm: FunctionComponent<ISearchFormProps> = ({handleSearch, className}) => {

const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    if(searchInputRef.current){
        return handleSearch(searchInputRef.current.value)
    }
    return ''
}

const searchInputRef = createRef<HTMLInputElement>()

return (
    <StyledForm className={className} onSubmit={handleSubmit}>
        <input placeholder={'Type keyword...'} ref={searchInputRef}/>
        <Button type={'submit'}>Search!</Button>
    </StyledForm>
    )
}

export default SearchForm