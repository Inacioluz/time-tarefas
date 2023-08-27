import styled, { css } from "styled-components"


    export type ButtonVarriant = 'primary' | 'secondary' | 'danger' | 'success';

    interface ButtonContainerProps {
        variant: ButtonVarriant; 
    }

    const buttonVariants = {
        primary: 'purple',
        secondary: 'orange',
        danger: 'red',
        success: 'green'
    };

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;

    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.white};


    /* ${props => {
        return css`
            background-color: ${buttonVariants[props.variant]}
    `
  }} */
`;