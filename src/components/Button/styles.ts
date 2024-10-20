import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonStyleButton = "PRIMARY" | "SEGUNDARY"

type Props = {
    type: ButtonStyleButton
}

export const Container = styled(TouchableOpacity)<Props>`
    min-height: 56px;
    max-height: 56px;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${({theme, type}) => type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
    border-radius: 6px;


`;

export const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    color:  ${({theme}) => theme.COLORS.WHITE};
    font-family:  ${({theme}) => theme.FONT_FAMILY.BOLD};
`;
