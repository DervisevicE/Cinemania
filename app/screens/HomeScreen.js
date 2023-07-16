import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Bars3BottomLeftIcon, Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>

            <SafeAreaView style={styles.headerContainer}>
                <StatusBar style='light' />
                <View style={styles.header}>
                    <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" marginLeft={12} />
                    <Text style={styles.text}>Cinemania</Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size={28} strokeWidth={2} color="white" marginRight={12} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>


            <ScrollView showsVerticalScrollIndicator={false}>
                {/* trending movies */}
            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    text: {
        color: "white",
        fontSize: 24,
        fontWeight: 'bold'
    },
    headerContainer: {
        marginTop: 80
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
