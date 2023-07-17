import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon, StarIcon } from 'react-native-heroicons/outline'
import { styles } from '../styles/styles';
import MovieCard from '../components/MovieCard';
import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList';



export default function HomeScreen() {

    const [trendingMovies, setTrendingMovies] = useState([1, 2, 3])
    const [upcomingMovies, setUpcomingMovies] = useState([1, 2, 3])
    const [topRatedMovies, setTopRatedMovies] = useState([1, 2, 3])



    return (
        <SafeAreaView style={styles.container}>

            <SafeAreaView style={styles.headerContainer}>
                <StatusBar style='light' />
                <View style={styles.header}>
                    <StarIcon size={28} strokeWidth={2} color="white" marginLeft={12} />
                    <Text style={styles.headerText}>Cinemania</Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size={28} strokeWidth={2} color="white" marginRight={12} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>


            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 }}>
                <TrendingMovies data={trendingMovies} />

                <MovieList title="Upcoming" data={upcomingMovies}/>
                
                <MovieList title="Top-rated movies" data={topRatedMovies}/>

            </ScrollView>


        </SafeAreaView>
    );
}
