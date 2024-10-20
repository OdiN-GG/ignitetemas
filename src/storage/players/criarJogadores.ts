import AsyncStorage from "@react-native-async-storage/async-storage";

import { listarJogadores } from "./listaJogadores";

import { PLAYER_COLLECTION } from "../storageConfig";

import {PropsJogadores} from "./typeJogador"
import { AppError } from "@/src/utils/AppError";

export async function criarJogador(jogador:PropsJogadores, grupo: string) {
    try {
        const storagePlayers = await listarJogadores(grupo)

        const verificarExistencia = storagePlayers.filter( storagePlayers => storagePlayers.name === jogador.name )

       if (verificarExistencia.length > 0 ) {
        throw new AppError("Jogador ja está cadastrado")
       }

       const getPlayers = JSON.stringify([...storagePlayers, jogador],)

       await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${grupo}`, getPlayers)
    } catch (error) {
        
    }
}