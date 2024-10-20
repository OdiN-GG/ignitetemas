import { useEffect, useState, useRef } from "react"
import { Alert, FlatList, TextInput } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"

import { Header } from "@/src/components/Header"
import { Highlight } from "@/src/components/Highlight"
import { ButtonIcon } from "@/src/components/ButtonIcon"
import { Input } from "@/src/components/Input"
import { Filter } from "@/src/components/Filter"
import { PlayersCard } from "@/src/components/PlayersCard"
import { Button } from "@/src/components/Button"
import { ListEmpty } from "@/src/components/ListEmpty"

import { criarJogador } from "@/src/storage/players/criarJogadores"

import { Container, Form, HeadList, NumberOfTeam  } from "./styles"
import { PropsJogadores } from "@/src/storage/players/typeJogador"
import { AppError } from "@/src/utils/AppError"
import { listaJogadoresPeloTime } from "@/src/storage/players/listaJogadoresPeloTime"
import { deletarJogador } from "@/src/storage/players/deletarJogador"
import { removerGrupo } from "@/src/storage/grupos/removerGrupo"

type RouteParams ={
    group: string
}

export function Players(){

    const [novoJogador, setNovoJogador] = useState("")
    const [team, setTeam] = useState<string>("time 1")
    const [player, setPlayer] = useState<PropsJogadores[]>([])

    const navegacao = useNavigation()

    const route = useRoute()

    const {group} = route.params as RouteParams

    async function handlerAdcionarJogador() {

        if (novoJogador.trim().length === 0) {
            return console.log("Digite o nome do jogador")
        }
        
        const jogador = {
            name: novoJogador,
            time: team
        }

        try {
            await criarJogador(jogador, group )

            setNovoJogador("")

            listaTime()

            novoJogadorInputRef.current?.blur 

            
        } catch (error) {

            if (error instanceof AppError) {
                Alert.alert(error.menssagem)
            }else{
                Alert.alert("erro normal ")
            }
        }
    }

    async function listaTime(){
        try {

            const jogadoresDoTime = await listaJogadoresPeloTime(group, team)

            setPlayer(jogadoresDoTime)

        } catch (error) {
            console.log(error)
        }
        
    }

    async function handlerRemoverJogado(jogador: PropsJogadores){
        try {
            const del = await deletarJogador(jogador, group)
            listaTime()
            
        } catch (error) {
            console.log(error)
        }
    } 

    async function handlerDeletarGrupo(){
        try {
            await removerGrupo(group)
            navegacao.navigate("groups")


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {listaTime()}, [team])

    const novoJogadorInputRef = useRef<TextInput>(null)

    return (
        <Container> 

            <Header
                showBackButton               
            />

            <Highlight
                titulo={group}
                subtitulo="Adcione a galera e separe os times"
            />

            <Form>
                <Input
                    placeholder="Nome do participante"
                    onChangeText={setNovoJogador}
                    value={novoJogador}
                    inputRef={novoJogadorInputRef}

                />

                <ButtonIcon
                    type="PRIMARY"
                    icon="add"
                    onPress={handlerAdcionarJogador}
                />
            </Form>
            
            <HeadList>
                <FlatList
                    data={["time 1", "time 2"]}
                    keyExtractor={ item => item}
                    renderItem={({item}) => (
                        <Filter
                            titulo={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}

                    horizontal

                />

                <NumberOfTeam>
                    {player.length}
                </NumberOfTeam>

            </HeadList>
            
            <FlatList
                data={player}
                keyExtractor={ item => item.name}
                renderItem={({item}) => (
                    <PlayersCard
                        nome={item.name}
                        onRemove={()=>{handlerRemoverJogado(item)}}
                        
                    />
                
                )}

                ListEmptyComponent={()=> (
                    <ListEmpty
                        message="A lista está vazia!"
                    />
                )}

                contentContainerStyle={player.length === 0 && {flex: 1}}

            />
            <Button
                title="Remover turma"
                type="SEGUNDARY"
                onPress={() => { handlerDeletarGrupo()}}
                
            />
            

        </Container>
    )
}