import { SafeAreaView } from "react-native-safe-area-context";

import styled, {css} from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    padding: 24px;

    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const Form = styled.View`
    width: 100%;
    height: 56px;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    flex-direction: row;
    border-radius: 6px;
    margin-bottom: 16px;
`;

export const HeadList = styled.View`
    width: 100%;

    flex-direction: row;

    align-items: center;
    margin-bottom: 16px;
`;

export const NumberOfTeam = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.WHITE};
    `}
        margin-right:12px;
    `;