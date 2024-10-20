import styled from "styled-components/native"

export const Container = styled.View`
    width: 100%;
  
    align-items: center;
    margin: 32px 0;
`;

export const Titulo = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme }) => theme.FONT_SIZE.XL};
`;

export const SubTitulo = styled.Text`
     color: ${({theme}) => theme.COLORS.GRAY_300};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme }) => theme.FONT_SIZE.MD};
`;