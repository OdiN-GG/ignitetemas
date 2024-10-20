import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { PLAYER_COLLECTION} from "../storageConfig";


import { groupsGetAll } from "./groupGetAll";


export async function  removerGrupo(delGrupo: string) {
    try {
        
        const allJogadoresGrupo = await groupsGetAll()

        const attGrupo = allJogadoresGrupo.filter(grupo => grupo !== delGrupo )

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(attGrupo))

        await AsyncStorage.removeItem(PLAYER_COLLECTION)

    } catch (error) {
        console.log(error)
        throw error 

    }
}