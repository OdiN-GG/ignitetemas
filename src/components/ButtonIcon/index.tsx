import { TouchableOpacityProps } from "react-native"
import { Container, Icon, ButtonIconTypeProps } from "./styles"

import {  MaterialIcons } from "@expo/vector-icons"

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    type: ButtonIconTypeProps
}

export function ButtonIcon({icon, type, ...rest} : Props){
    return(
        <Container {...rest}>
            <Icon {...rest}
                type={type}
                name={icon}
            />
            
        </Container>
    )
}