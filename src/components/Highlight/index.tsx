import {Container, SubTitulo, Titulo} from './style'

type Props = {
    titulo: string
    subtitulo: string
}
export function Highlight({titulo, subtitulo}: Props){

    return(
        <Container>
            <Titulo>
                {titulo}
            </Titulo>
            <SubTitulo>
                {subtitulo}
            </SubTitulo>
        </Container>

    )
}