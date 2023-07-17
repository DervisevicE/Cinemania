import React from "react";
import { ScrollView, Text, View, Dimensions, Image, TouchableWithoutFeedback } from "react-native";
import { styles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window")

export default function MovieList({ title, data }) {

    let movietitle = "testtesttesttest"
    let movieId = 1

    const navigation = useNavigation()

    const handleMoviePress = (movieId) => {
        navigation.navigate('MovieDetails', { movieId });
    }


    return (
        <View style={styles.innerContainer}>
            <Text style={styles.subheaderText}>{title}</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >

                {data.map((movie, index) => {
                    return (
                        <TouchableWithoutFeedback key={index} onPress={() => handleMoviePress(movie.id)}>
                            <View style={{ flexDirection: "row", paddingHorizontal: 2 }}>

                                <View style={{ marginHorizontal: 4 }}>
                                    <Image
                                        source={{ uri: "https://image.tmdb.org/t/p/w500" + movie.poster_path }}
                                        style={{
                                            width: width * 0.4,
                                            height: height * 0.3,
                                            resizeMode: "stretch"
                                        }}
                                    />
                                    <Text style={styles.movieTitle} numberOfLines={1} ellipsizeMode='tail'>
                                        {movie.original_title.length > 12 ? movie.original_title.slice(0, 12) + "..." : movie.original_title}
                                    </Text>
                                </View>
                            </View>

                        </TouchableWithoutFeedback>
                    )
                })}



            </ScrollView>

        </View>
    )
}