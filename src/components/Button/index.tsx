import type { TouchableOpacityProps } from 'react-native'
import { Container, Loading, Title } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export function Button({ isLoading = false, title, ...rest }: ButtonProps) {
  return (
    <Container
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading && <Loading />}
      {!isLoading && <Title>{title}</Title>}
    </Container>
  )
}
