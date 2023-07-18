import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, FlatList, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "../styles/styles";
import { fetchCastMembers, fetchMovieDetails, fetchSimilarMovies } from "../api/moviedb";
import favoriteMoviesJson from '../api/favoriteMovies.json'
import MovieList from "../components/MovieList";


export default function MovieDetailsScreen({ route }) {
    var { width, height } = Dimensions.get("window")
    const { movieId } = route.params
    const [movieDetails, setMovieDetails] = useState(null)
    const [castMembers, setCastMembers] = useState()
    const [favoriteMovies, setFavoriteMovies] = useState(favoriteMoviesJson)
    const [similarMovies, setSimilarMovies] = useState([])
    console.log(movieId)

    console.log(favoriteMovies)

    const isFavoriteMovie = favoriteMoviesJson.find((movie) => movie.id === movieId)

    useEffect(() => {
        getMovieDetails(movieId)
        getCastMembers(movieId)
        getSimilarMovies(movieId)
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


    const getSimilarMovies = async (movieId) => {
        const data = await fetchSimilarMovies(movieId)
        if (data && data.results) {
            setSimilarMovies(data.results)
        }
    }

    const handleFavoriteMovies = (movieId) => {
        if (isFavoriteMovie) {
            const updatedFavorites = favoriteMovies.filter((movie) => movie.id !== movieId);
            setFavoriteMovies(updatedFavorites);
        } else {
            setFavoriteMovies([...favoriteMovies, movieDetails]);
        }
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

                    <TouchableOpacity onPress={() => handleFavoriteMovies(movieId)} title="Favorites" style={styles.favoritesBtn}>
                        <Text style={{ color: "white" }}>{isFavoriteMovie ? "DELETE FROM FAVORITES" : "ADD TO FAVORITES"}</Text>
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


                    <MovieList title="Similar movies" data={similarMovies} />
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

