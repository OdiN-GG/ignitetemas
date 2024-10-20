import { TouchableOpacityProps } from "react-native";
import { Container, Title, ButtonStyleButton } from "./styles";

export type Props = TouchableOpacityProps & {
    title: string,
    type?: ButtonStyleButton
}

export function Button({title, type="PRIMARY", ...rest }: Props){
    return(
        <Container
            type={type}
            {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
    )
}''