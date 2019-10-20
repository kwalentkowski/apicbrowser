import { ReactNode } from 'react'

type ButtonType = 'submit' | 'button' | 'reset'

export interface IButtonProps {
    className?: string
    backgroundColor?: string
    children?: ReactNode
    type?: ButtonType
}