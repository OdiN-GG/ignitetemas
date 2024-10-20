import { ThemeProvider } from "styled-components/native";
import { StatusBar } from 'expo-status-bar';
import theme from "../src/theme"
import {Roboto_400Regular,Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

import { Loading } from "@/src/components/Loading";
import { Routes } from "@/src/routes";

export default function Index() {
    const [fontsLoaded] = useFonts({
      Roboto_400Regular,
      Roboto_700Bold,
    });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading/> }

    </ThemeProvider>
  );
}
