import React, { useCallback, useEffect, useState } from "react";
import { View, Text, FlatList, Button, TextInput } from "react-native";

import styles from "../styles/styles";

import { getPeople, deletePerson } from "../servers/peopleCrud";

export default function HomeScreen({ navigation }) {

    //estado da lista
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState([]);
    const [all, setAll] = useState([]);

    //função para carregar dados
    async function loadPeople(){

        const data = await getPeople();

        setPeople(data);
        setAll(data);
    }

    const searching = (text) => {
        setSearch(text);

        if (text.trim() === "") {
        setPeople(all);
        return;
        }

        const filter = all.filter((item) => {
        const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
        return fullName.includes(text.toLowerCase());
        });

        setPeople(filter);
    };

    //executa ao abrir tela
    useEffect(()=>{
        setSearch("");
        loadPeople();
    },[]);

    return(
        <View style={styles.container}>

            <Text style={styles.title}>Pessoas</Text>

            <TextInput
                placeholder="Search"
                style={styles.search}
                value={search}
                onChangeText={searching}
            />

            <FlatList
                data={people}
                keyExtractor={(item)=>item.id.toString()}

                renderItem={({item})=>(
                    <CardPersonal
                        item={item}
                        navigation={navigation}
                        refresh={loadPeople}
                    />
                )}
            />

            <Button
                title="Adicionar Pessoa"
                onPress={()=> navigation.navigate("AddEdit")}
            />

        </View>
    );
}

function CardPersonal({item, navigation, refresh}) {

    return(

        <View style={styles.card}>

            <View>

                <Text style={styles.name}>
                    {item.firstName} {item.lastName}
                </Text>

                <Text style={styles.email}>
                    {item.email}
                </Text>

                <Text style={styles.phone}>
                    {item.phone}
                </Text>

            </View>

            <View>

                <Button
                    title="Editar"
                    onPress={()=> navigation.navigate("AddEdit",{person:item})}
                />

                <Button
                    title="Deletar"
                    onPress={async ()=>{
                        await deletePerson(item.id);
                        refresh();
                    }}
                />

            </View>

        </View>
    );
}