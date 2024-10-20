import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@/src/components/Highlight";
import { GroupCard } from "@/src/components/GrupCard";
import { ListEmpty } from "@/src/components/ListEmpty";
import { Button } from "@/src/components/Button";

import { groupsGetAll } from "@/src/storage/grupos/groupGetAll"; 

import { Container} from"./style";
import { Loading } from "@/src/components/Loading";

export function Groups() {

    const [carregando, setCarregando] = useState(true)

    const [grupos, setGrupos] = useState<string[]>([]);

    const navigation = useNavigation();

    async function listaGrupos(){
        try {
            carregando

            const data = await groupsGetAll()

            setGrupos(data)
            
            setCarregando(false)


        } catch (error) {
            console.log(error)
        }
    }
    function handlerAbrirGrupo(nameGrupo: string){
        navigation.navigate("players", {group:nameGrupo})
    }

    function handleNewGroup() {
        navigation.navigate('new');
      }

    useFocusEffect(
        useCallback(() => {
            listaGrupos()
        },
        []
        )
    )


    return (

        <Container>

            <Header showBackButton = {false} />

            <Highlight 
                titulo="Turmas" 
                subtitulo="jogue com a sua turma"
            />

            {
                carregando ? <Loading/> :

                <FlatList 
                data={grupos}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                        onPress={() => (
                            handlerAbrirGrupo(item)
                        )}
                    />
                )}
                ListEmptyComponent={()=> (
                    <ListEmpty message="Sem turmas cadastradas"/>
                )}
                contentContainerStyle={grupos.length === 0 && {flex: 1}}

            />
            }

            <Button 
                onPress={handleNewGroup}
                title="Criar Turma" 
                type="PRIMARY"
        
            />
            
        </Container>

    );
    
}