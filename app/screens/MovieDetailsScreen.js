import React from "react";
import { View, Text, SafeAreaView, Image, FlatList, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "../styles/styles";



export default function MovieDetailsScreen({ route }) {
    var { width, height } = Dimensions.get("window")

    const movieId = route.params

    const names = [
        { id: "1", firstName: "John", lastName: "Doe" },
        { id: "2", firstName: "Jane", lastName: "Smith" },
        { id: "3", firstName: "Mike", lastName: "Johnson" },
        { id: "4", firstName: "Sarah", lastName: "Williams" },
    ];

    const onPressLearnMore = () => {

    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View>
                    <Image
                        source={{ uri: "https://www.themoviedb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg" }}
                        style={styles.moviePoster}
                    />

                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={{ uri: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg" }}
                            style={styles.mainPoster}
                        />
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18, marginTop: 18, width: width * 0.5 }} numberOfLines={3}>Avengers: Age of Ultron Ultron Ultron Ultron</Text>
                    </View>

                    <TouchableOpacity
                        onPress={onPressLearnMore}
                        title="Favorites"
                        style={styles.favoritesBtn}>
                        <Text style={{ color: "white" }}>DELETE FROM FAVORITES</Text>
                    </TouchableOpacity>

                    <View style={{ marginHorizontal: 16, marginTop:-34 }}>
                        <Text style={{ color: "white", }}>
                            Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.
                            Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.
                            Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.
                        </Text>


                        <FlatList
                            data={names}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                        />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const renderItem = ({ item }) => (
    <View style={styles.castContainer}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>{`${item.firstName} ${item.lastName}`}</Text>
    </View>
);
