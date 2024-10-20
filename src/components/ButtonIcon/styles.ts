import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";
import { MaterialIcons} from "@expo/vector-icons"

export type ButtonIconTypeProps = "PRIMARY" | "SECUNDARY" 

type Props = {
    type: ButtonIconTypeProps
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

`;
;

export const Icon = styled(MaterialIcons).attrs<Props>(({theme,type}) => ({
    size: 32,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK
}))``;