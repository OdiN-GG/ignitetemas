import { ButtonIcon } from "../ButtonIcon";
import { Container, Icon, Nome } from "./styles";

type Props = {
    nome: string
    onRemove: () => void
}

export function PlayersCard({nome, onRemove}: Props){
    return (
        <Container>

            <Icon
                name="person"
            />

            <Nome>
                {nome}
            </Nome>

            <ButtonIcon
                icon="close"
                type="SECUNDARY"
                onPress={onRemove}
                
            />
            

        </Container>
    )
}