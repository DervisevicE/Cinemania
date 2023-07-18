import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StatusBar, } from "react-native";
import { styles } from "../styles/styles";
import { MagnifyingGlassIcon, StarIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';

export default function Header() {

    const navigation = useNavigation()

    const handleFavoritesPress = () => {
        navigation.navigate('Favorites')
    }

    const handleSearchPress = () => {
        navigation.navigate('Search')

    }

    const handleTittlePress = () => {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.headerContainer}>
            <StatusBar style='light' />
            <View style={styles.header}>
                <StarIcon size={28} strokeWidth={2} color="white" marginLeft={12} onPress={handleFavoritesPress} />
                <TouchableOpacity onPress={handleTittlePress}>
                    <Text style={styles.headerText} >Cinemania</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSearchPress}>
                    <MagnifyingGlassIcon size={28} strokeWidth={2} color="white" marginRight={12} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}