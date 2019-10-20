import { RefObject } from "react";

export interface IInputProps {
    name?: string
    className?: string
    value?: string
    placeholder?: string
    ref?: RefObject<HTMLInputElement>
}

