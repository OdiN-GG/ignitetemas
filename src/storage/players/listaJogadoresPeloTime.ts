import { listarJogadores } from "./listaJogadores";

export async function listaJogadoresPeloTime(grupo:string, time:string) {
    try {
        const todosJogadores = await listarJogadores(grupo)

        const filtraTime = todosJogadores.filter(jogadores => jogadores.time === time)

        return filtraTime
        
    } catch (error) {
        throw error
    }
}