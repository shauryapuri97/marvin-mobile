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
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
            name: "Salads",
            icon: icons.salad,
        },
        {
            id: 2,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 3,
            name: "Alcohol",
            icon: icons.drink,
        },
        {
            id: 4,
            name: "American",
            icon: icons.fries,
        },
    ]

    //Price Rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    //Restaurant Data
    const restaurantData = [
        {
            name: "Five Guys - Burger and Fries",
            href: "https://deliveroo.co.uk/menu/london/clapham/five-guys-clapham?day=today&postcode=SW82FS&time=ASAP",
            image: "https://f.roocdn.com/images/menus/29475/header-image.jpg?width={w}&height={h}&auto=webp&format=jpg&fit=crop&v=1552385695{&quality}",
            rating: 4.5,
            distance: "1.3 miles away",
            tags: [
                "American",
                "Burgers",
                "Milkshakes"
            ],
            deliveryFee: "Free delivery",
            promotion: null,
            isOpen: true,
            closedMessage: "",
            eta: "20 – 35 MINS"
        },
        {
            name: "Nando's",
            href: "https://deliveroo.co.uk/menu/london/vauxhall/nandos-vauxhall-arches?day=today&postcode=SW82FS&time=ASAP",
            image: "https://f.roocdn.com/images/menus/408/header-image.jpg?width={w}&height={h}&auto=webp&format=jpg&fit=crop&v=1610375170{&quality}",
            rating: 4.6,
            distance: "0.5 miles away",
            tags: [
                "Chicken Burgers"
            ],
            deliveryFee: "Free delivery",
            promotion: null,
            isOpen: true,
            closedMessage: "",
            eta: "10 – 20 MINS"
        },
        {
            name: "KFC",
            href: "https://deliveroo.co.uk/menu/london/clapham/10561-kfc-clapham?day=today&postcode=SW82FS&time=ASAP",
            image: "https://rs-menus-api.roocdn.com/images/dec96b5a-51d1-4c4b-b95c-6cd91de7c14d/image.jpeg?width={w}&height={h}&auto=webp&format=jpg&fit=crop&v={&quality}",
            rating: 4.2,
            distance: "1.2 miles away",
            tags: [
                "Chicken",
                "Fried chicken",
                "Wings",
                "American"
            ],
            deliveryFee: "Free delivery",
            promotion: null,
            isOpen: true,
            closedMessage: "",
            eta: "15 – 30 MINS"
        },
        {
            name: "Charco Charco 炭牛の屋 Express",
            href: "https://deliveroo.co.uk/menu/london/bloomsbury/charco-charco-express?day=today&postcode=SW82FS&time=ASAP",
            image: "https://rs-menus-api.roocdn.com/images/27e05b7f-3f11-428a-9d77-743eae66d6db/image.jpeg?width={w}&height={h}&auto=webp&format=jpg&fit=crop&v={&quality}",
            rating: 4.7,
            distance: "2.8 miles away",
            tags: [
                "Sushi",
                "Japanese",
                "BBQ",
                "Seafood"
            ],
            deliveryFee: "Free delivery",
            promotion: null,
            isOpen: true,
            closedMessage: "",
            eta: "45 MINS"
        },
        {
            name: "Waitrose & Partners",
            href: "https://deliveroo.co.uk/menu/london/vauxhall/waitrose-vauxhall?day=today&postcode=SW82FS&time=ASAP",
            image: "https://rs-menus-api.roocdn.com/images/632c42ed-67db-468e-b593-5bd7c4378e97/image.jpeg?width={w}&height={h}&auto=webp&format=jpg&fit=crop&v={&quality}",
            rating: 4.7,
            distance: "0.4 miles away",
            tags: [
                "Alcohol",
                "Grocery",
                "British",
                "Breakfast"
            ],
            deliveryFee: "Free delivery",
            promotion: null,
            isOpen: true,
            closedMessage: "",
            eta: "15 – 30 MINS"
        },
        {
            name: "Bleecker Burger",
            href: "https://deliveroo.co.uk/menu/london/queenstown-road/bleecker-editions-bqr?day=today&postcode=SW82FS&time=ASAP",
            image: "https://rs-menus-api.roocdn.com/images/d641e948-d695-474d-80be-a51607ca6609/image.jpeg?width={w}&height={h}&auto=webp&format=jpg&fit=crop&v={&quality}",
            rating: 4.6,
            distance: "0.8 miles away",
            tags: [
                "Burgers",
                "American",
                "Milkshakes"
            ],
            deliveryFee: "Free delivery",
            promotion: null,
            isOpen: true,
            closedMessage: "",
            eta: "15 – 25 MINS"
        },
        {
            name: "Pasta Evangelists",
            href: "https://deliveroo.co.uk/menu/london/lavender-hill/pasta-evangelists-clapham?day=today&postcode=SW82FS&time=ASAP",
            image: "https://rs-menus-api.roocdn.com/images/6a9bcc74-e895-4ed6-a22d-52b53fb03820/image.jpeg?width={w}&height={h}&auto=webp&format=jpg&fit=crop&v={&quality}",
            rating: 4.8,
            distance: "1.5 miles away",
            tags: [
                "Italian",
                "Pasta",
                "Healthy",
                "Seafood"
            ],
            deliveryFee: "Free delivery",
            promotion: "Meal Deals",
            isOpen: true,
            closedMessage: "",
            eta: "15 – 30 MINS"
        },
        {
            name: "Chipotle Mexican Grill",
            href: "https://deliveroo.co.uk/menu/london/culvert-place-editions/chipotle-editions-bat?day=today&postcode=SW82FS&time=ASAP",
            image: "https://rs-menus-api.roocdn.com/images/7348f14d-295a-4c60-aa83-b320b0db99e0/image.jpeg?width={w}&height={h}&auto=webp&format=jpg&fit=crop&v={&quality}",
            rating: 4.6,
            distance: "1.3 miles away",
            tags: [
                "Mexican",
                "Burritos",
                "Salads",
                "Wraps"
            ],
            deliveryFee: "Free delivery",
            promotion: null,
            isOpen: true,
            closedMessage: "",
            eta: "15 – 30 MINS"
        },
    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(null)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.tags.includes(category.name))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }
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

    function renderMainCategories() {

        const renderItem = ({item}) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.name == item.name) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.name == item.name) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.name == item.name) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{...FONTS.h1}}>Main</Text>
                <Text style={{...FONTS.h1}}>Categories</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item=>`${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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