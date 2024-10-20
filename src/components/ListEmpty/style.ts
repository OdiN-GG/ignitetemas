import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;

`

export const Message = styled.Text`
align-items: center;

font-size: ${({theme}) => theme.FONT_SIZE.MD};
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
color: ${({theme}) => theme.COLORS.GRAY_300};
`

