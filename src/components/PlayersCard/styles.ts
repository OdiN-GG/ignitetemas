import styled, {css} from "styled-components/native";
import { MaterialIcons} from "@expo/vector-icons"
import theme from "@/src/theme";

export const Container = styled.View`
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-radius: 6px;
    width: 100%;
    height: 56px;

    align-items: center;
    justify-content: center;

    flex-direction: row;

    margin-bottom: 12;
`;

export const Icon = styled(MaterialIcons).attrs(({theme}) => ({
    size: 32,
    color: theme.COLORS.GRAY_200
}))`
margin-left: 12;
margin-right: 4;
`;

export const Nome = styled.Text`
    flex: 1;

    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;