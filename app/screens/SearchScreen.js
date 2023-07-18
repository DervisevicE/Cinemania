import React, { useState } from "react";
import { View, Text, Image, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, ScrollView, FlatList, Dimensions } from "react-native";
import { styles } from "../styles/styles";
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { fetchSearchMovies } from "../api/moviedb";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window")
const numColumns = 2;

export default function SearchScreen() {

    const navigation = useNavigation()

    const [searchText, setSearchText] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearchPress = async () => {
        const data = await fetchSearchMovies(searchText)
        if (data && data.results) setSearchResults(data.results)
    }

    const handleMoviePress = (movieId) => {
        navigation.navigate('MovieDetails', { movieId });
    }

    const renderItem = ({ item }) => (

        <TouchableWithoutFeedback onPress={() => handleMoviePress(item.id)}>
            <View style={{ marginHorizontal: 4, padding: 8, backgroundColor: "#6b6a66" }}>
                <Image
                    source={{ uri: "https://image.tmdb.org/t/p/w500" + item.poster_path }}
                    style={{
                        width: width * 0.4,
                        height: height * 0.3,
                        resizeMode: "stretch"
                    }}
                />
                <Text style={styles.movieTitle} numberOfLines={1} ellipsizeMode='tail'>
                    {item.title.length > 12 ? item.title.slice(0, 12) + "..." : item.title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );

    return (
        <SafeAreaView style={styles.container}>

            <TextInput
                style={styles.searchInput}
                placeholder="Search movies..."
                placeholderTextColor={"white"}
                value={searchText}
                onChangeText={setSearchText}
                onSubmitEditing={handleSearchPress}
            />

            <TouchableOpacity style={{ position: "absolute", top: 15, right: 8 }} onPress={handleSearchPress}>
                <MagnifyingGlassIcon size={28} strokeWidth={2} color="white" marginRight={12} />
            </TouchableOpacity>


            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 }}>

                <FlatList
                    data={searchResults}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={numColumns}
                    columnWrapperStyle={styles.columnWrapper}
                />

            </ScrollView>





        </SafeAreaView>
    )
}