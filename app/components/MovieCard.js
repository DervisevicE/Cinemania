import React from "react";
import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from "react-native";

var {width, height} = Dimensions.get("window")

export default function MovieCard({ movie, handleClick }) {
    return (
        <TouchableWithoutFeedback onPress={handleClick}>
            <Image
                source={{uri: "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_5878-scaled.jpeg"}}
                style={{
                    width: width*0.6,
                    height: height*0.4
                }}

            />
        </TouchableWithoutFeedback>
    )
}