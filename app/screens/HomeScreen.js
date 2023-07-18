import React, { useState, useEffect } from 'react';
import {SafeAreaView, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList';
import Header from '../components/Header';
import { fetchTopratedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviedb';



export default function HomeScreen() {

    const [trendingMovies, setTrendingMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])

    useEffect(()=>{
        getTrendingMovies()
        getUpcomingMovies()
        getTopRatedMovies()
    }, [])

    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies()
        if(data && data.results) setTrendingMovies(data.results)
    }

    const getUpcomingMovies = async () => {
        const data = await fetchUpcomingMovies()
        if(data && data.results) setUpcomingMovies(data.results)
    }

    const getTopRatedMovies = async () => {
        const data = await fetchTopratedMovies()
        if(data && data.results) setTopRatedMovies(data.results)
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
