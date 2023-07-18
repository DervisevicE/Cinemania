import React from "react";
import { View, Text, SafeAreaView, TouchableWithoutFeedback, ScrollView, FlatList, Dimensions, Image } from "react-native";
import { styles } from "../styles/styles";
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import favoriteMoviesJson from '../api/favoriteMovies.json'

var { width, height } = Dimensions.get("window")
const numColumns = 2;
export default function FavoriteMoviesScreen() {
    const navigation = useNavigation()

    // const data = [
    //     { imgSrc: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg", title: "Avengers" },
    //     { imgSrc: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg", title: "Avengers" },
    //     { imgSrc: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg", title: "Avengers" },
    //     { imgSrc: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg", title: "Avengers" },
    //     { imgSrc: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg", title: "Avengers" },
    //     { imgSrc: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg", title: "Avengers" },
    //     { imgSrc: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg", title: "Avengers" },
    //     { imgSrc: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg", title: "Avengers" },
    // ]

    let movieId = 1

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

    const handleTitlePress = () => {

    }


    return (
        <SafeAreaView style={styles.container}>


            <Header />



            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 }}>

                <FlatList
                    data={favoriteMoviesJson}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={numColumns}
                    columnWrapperStyle={styles.columnWrapper}
                />

            </ScrollView>
        </SafeAreaView>
    )

}
