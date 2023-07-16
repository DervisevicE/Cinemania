import React from "react";
import { View, Text, Dimensions } from "react-native";
import { styles } from "../styles/styles";
import Carousel from "react-native-snap-carousel";
import MovieCard from "./MovieCard";
import { useNavigation } from "@react-navigation/native";

var {width, height} = Dimensions.get("window")

export default function TrendingMovies({ data }) {
    const navigation = useNavigation()
    const handleClick = () => {
        navigation.navigate('Movie', item)
    }


    return (
        <View style={styles.innerContainer}>
            <Text style={styles.subheaderText}>Trending</Text>

            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCard movie={item} handleClick={handleClick} />}
                firstItem={1}
                inactiveSlideOpacity={0.6}
                sliderWidth={width}
                itemWidth={width*0.625}
                slideStyle={{ display: 'flex', alignItems: 'center' }}
            />
        </View>
    )
}
