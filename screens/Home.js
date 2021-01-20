import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

import { icons, images, SIZES, COLORS, FONTS } from '../constants';

const Home = () => {
    // Dummy Data

    const initialCurrentLocation = {
        streetName: "4 Hebden Place",
        gps: {
            latitude:51.480150,
            longitude:-0.128960,
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Rice",
            icons: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Noodles",
            icons: icons.noodle,
        },
        {
            id: 3,
            name: "Hot Dog",
            icons: icons.hotdog,
        },
        {
            id: 4,
            name: "Drinks",
            icons: icons.drink,
        },
        {
            id: 5,
            name: "Donut",
            icons: icons.donut,
        },
    ]

    //Price Rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    //Restaurant Data
    const restaurantData = [

    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(null)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height:50, justifyContent: 'center' }}>
                <View
                    style={{
                        width: '70%',
                        height: '100%',
                        backgroundColor: COLORS.lightGray3,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={StyleSheet.container}>
            {renderHeader()}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1
    }
})

export default Home;