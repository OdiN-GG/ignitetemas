import AsyncStorage from "@react-native-async-storage/async-storage";
import { listarJogadores } from "./listaJogadores";
import { PropsJogadores } from "./typeJogador";
import { PLAYER_COLLECTION } from "../storageConfig";
export async function deletarJogador(Jogador: PropsJogadores, grupo: string) {
try {

    const todosJoagores = await listarJogadores(grupo)

    const filtrado = todosJoagores.filter(jogador => jogador.name !== Jogador.name )

    const attJogadores = JSON.stringify(filtrado)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${grupo}`, attJogadores)
    
} catch (error) {
    console.log(error)
}
}