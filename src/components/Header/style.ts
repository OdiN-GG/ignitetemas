import { House } from "@phosphor-icons/react";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;


`;

export const Image = styled.Image`
    width: 46px;
    height: 55px;
`;

export const ButtonIcon = styled.TouchableOpacity`
    flex: 1
`;

export const BackIcon = styled(House).attrs(({ theme }) => ({
    color: theme.COLORS.WHITE,
    size: 32
}))``;