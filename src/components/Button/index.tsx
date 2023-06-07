import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  ButtonStyle,
  Title
} from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string,
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container>
      <ButtonStyle {...rest}>
        <Title>{title}</Title>
      </ButtonStyle>
    </Container>
  )
}