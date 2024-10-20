import { useNavigation } from "@react-navigation/native";

import {BackIcon, ButtonIcon, Container, Image}from "./style";
import logoImg from "@assets/logo.png"

type Props = {
    showBackButton?: boolean
}

export function Header({ showBackButton = false } : Props) {
    
    const navegation = useNavigation()
    
    return (
        <Container>
            
            {   showBackButton &&
                <ButtonIcon
                    onPress={()=> {
                        navegation.navigate("groups")
                    }}
                >
                    <BackIcon/>
                </ButtonIcon>
            }

            <Image source={logoImg}/>

        </Container>

    )
}