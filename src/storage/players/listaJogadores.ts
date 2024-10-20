import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "../storageConfig";
import { PropsJogadores } from "./typeJogador";


export async function listarJogadores(group:string) {
    try {
        const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)

        const players : PropsJogadores[] = storage ? JSON.parse(storage) : []
        
        return players

    } catch (error) {
        throw error
    }
}