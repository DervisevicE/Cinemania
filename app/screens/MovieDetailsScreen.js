import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, FlatList, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "../styles/styles";
import { fetchCastMembers, fetchMovieDetails } from "../api/moviedb";


export default function MovieDetailsScreen({ route }) {
    var { width, height } = Dimensions.get("window")
    const { movieId } = route.params
    const [movieDetails, setMovieDetails] = useState(null)
    const [castMembers, setCastMembers] = useState()
    console.log(movieId)

    useEffect(() => {
        getMovieDetails(movieId)
        getCastMembers(movieId)
    }, [])

    const getMovieDetails = async (movieId) => {
        const data = await fetchMovieDetails(movieId)
        if (data) setMovieDetails(data)
    }

    const getCastMembers = async (movieId) => {
        const data = await fetchCastMembers(movieId)
        if (data && data.cast) {
            const actors = data.cast.filter((member) => member.known_for_department === "Acting");
            setCastMembers(actors);
          }
    }

    const onPressLearnMore = () => {

    }

    if (movieDetails === null) {
        return <Text>Loading...</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    {movieDetails.backdrop_path && (
                        <Image
                            source={{ uri: "https://image.tmdb.org/t/p/w500" + movieDetails.backdrop_path }}
                            style={styles.moviePoster}
                        />
                    )}

                    <View style={{ flexDirection: 'row' }}>
                        {movieDetails.poster_path && (
                            <Image
                                source={{ uri: "https://image.tmdb.org/t/p/w500" + movieDetails.poster_path }}
                                style={styles.mainPoster}
                            />
                        )}
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18, marginTop: 18, width: width * 0.5 }} numberOfLines={3}>
                            {movieDetails.original_title}
                        </Text>
                    </View>

                    <TouchableOpacity onPress={onPressLearnMore} title="Favorites" style={styles.favoritesBtn}>
                        <Text style={{ color: "white" }}>DELETE FROM FAVORITES</Text>
                    </TouchableOpacity>

                    <View style={{ marginHorizontal: 16, marginTop: -40 }}>
                        <Text style={{ color: "white" }}>
                            {movieDetails.overview}
                        </Text>
                        <FlatList
                            data={castMembers}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const renderItem = ({ item }) => (
    <View style={styles.castContainer}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>{item.original_name}</Text>
    </View>
);

