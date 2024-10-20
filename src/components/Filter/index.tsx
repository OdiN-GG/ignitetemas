import { Container, Titulo, FormStyledProps } from "./styles"

import { TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & FormStyledProps & {
    titulo: string
}

export function Filter({titulo, ...rest} : Props){
    return (
        <Container
            {...rest} 
        >
            <Titulo>
                {titulo}
            </Titulo>
        </Container>
    )
}