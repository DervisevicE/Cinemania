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

                <TouchableWithoutFeedback onPress={() => handleMoviePress(movieId)}>
                    <View style={{ flexDirection: "row", paddingHorizontal: 2 }}>

                        <View style={{ marginHorizontal: 4 }}>
                            <Image
                                source={{ uri: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg" }}
                                style={{
                                    width: width * 0.4,
                                    height: height * 0.3,
                                    resizeMode: "stretch"
                                }}
                            />
                            <Text style={styles.movieTitle} numberOfLines={1} ellipsizeMode='tail'>
                                {movietitle.length > 12 ? movietitle.slice(0, 12) + "..." : movietitle}
                            </Text>
                        </View>

                        <View style={{ marginHorizontal: 4 }}>
                            <Image
                                source={{ uri: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg" }}
                                style={{
                                    width: width * 0.4,
                                    height: height * 0.3,
                                    resizeMode: "stretch"
                                }}
                            />
                            <Text style={styles.movieTitle} numberOfLines={1} ellipsizeMode='tail'>
                                {movietitle.length > 12 ? movietitle.slice(0, 12) + "..." : movietitle}
                            </Text>
                        </View>

                        <View style={{ marginHorizontal: 4 }}>
                            <Image
                                source={{ uri: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg" }}
                                style={{
                                    width: width * 0.4,
                                    height: height * 0.3,
                                    resizeMode: "stretch"
                                }}
                            />
                            <Text style={styles.movieTitle} numberOfLines={1} ellipsizeMode='tail'>
                                {movietitle.length > 12 ? movietitle.slice(0, 12) + "..." : movietitle}
                            </Text>
                        </View>

                    </View>

                </TouchableWithoutFeedback>



            </ScrollView>

        </View>
    )
}