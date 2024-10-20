import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@/src/components/Header";
import { Highlight } from "@/src/components/Highlight";
import { Button } from "@/src/components/Button";
import { Input } from "@/src/components/Input";

import { groupCreate } from "@/src/storage/grupos/groupCreate";

import { Container, Content, Icon } from "./styles";


export function NewGroup(){
    
    const [turmaDigitada, setTurmaDigitada] = useState('')

    const navegation = useNavigation();


    async function handlerCriarTurma(){
        try {
            if (turmaDigitada.trim().length === 0) {
              return console.log("Degite o nome do grupo")
            }
            
            await groupCreate(turmaDigitada)
            navegation.navigate("players", {group:turmaDigitada})

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Container >
            <Header showBackButton={true} />
            <Content>

                <Icon/>

                <Highlight 
                    titulo="Nova turma"
                    subtitulo="Crie uma turma para adcionar pessoas"
                />

                <Input
                    placeholder="Nome do Time"
                    onChangeText={nomeGroup => setTurmaDigitada(nomeGroup)}
                />

                <Button
                    title="Criar"
                    onPress={handlerCriarTurma}
                />
            </Content>
        </Container>
    )
}