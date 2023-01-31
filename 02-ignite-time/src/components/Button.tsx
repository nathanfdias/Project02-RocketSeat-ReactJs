import styles from './Button.module.css';
import { ButtonContainer, ButtonVariant } from './Button.styles';

interface ButtonProps{
    variant?: ButtonVariant;
}

export function Button({variant = 'primary'}: ButtonProps) {
    return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}

// className={`${styles.button} ${styles[color]}`}

{/* EXEMPLO COMPONENT 
<Button variant='primary'/>
<Button variant='secondary'/>
<Button variant='danger'/>
<Button variant='success'/>
<Button /> */}