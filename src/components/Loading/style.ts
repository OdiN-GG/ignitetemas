import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme })=> theme.COLORS.GRAY_600};
`

export const LoadingIndicador = styled.ActivityIndicator.attrs(({ theme}) => ({ 
    color: theme.COLORS.GREEN_700,
    size: 56,
}))`
    width: max-content;
`
export const Title = styled.Text`
    color: ${({theme}) => theme.COLORS.WHITE};
    margin-top: 50px;
`;

