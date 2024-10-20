import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput)`
    flex: 1;

    width: 100%;
    min-height: 56px;
    max-height: 56px;

    border-radius: 6px;
    margin-bottom: 16px;
    padding: 12px;

    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${({theme}) => theme.FONT_SIZE.MD} ;
`;