import styled, {css} from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant:ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 100px;

    ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`
    }}
`

// USANDO DEFAULT THEME background-color: ${props => props.theme.primary};


// <ThemeProvider theme={defaultTheme}>
// <Button variant='primary'/>
// <Button variant='secondary'/>
// <Button variant='danger'/>
// <Button variant='success'/>
// <Button />
// </ThemeProvider>

// .button {
//     width: 100px;
//     height: 40px;
// }

// .primary{
//     background-color: purple;
// }

// .secondary{
//     background-color: orange;
// }

// .danger{
//     background-color: red;
// }

// .success{
//     background-color: green;
// }