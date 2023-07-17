import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { MagnifyingGlassIcon, StarIcon } from 'react-native-heroicons/outline'
import { styles } from '../styles/styles';
import MovieCard from '../components/MovieCard';
import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';



export default function HomeScreen() {

    const [trendingMovies, setTrendingMovies] = useState([1, 2, 3])
    const [upcomingMovies, setUpcomingMovies] = useState([1, 2, 3])
    const [topRatedMovies, setTopRatedMovies] = useState([1, 2, 3])

    const navigation = useNavigation()

    const handleFavoritesPress = () => {
        navigation.navigate('Favorites')
    }


    return (
        <SafeAreaView style={styles.container}>

            <Header />


            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 }}>
                <TrendingMovies data={trendingMovies} />

                <MovieList title="Upcoming" data={upcomingMovies} />

                <MovieList title="Top-rated movies" data={topRatedMovies} />

            </ScrollView>


        </SafeAreaView>
    );
}
