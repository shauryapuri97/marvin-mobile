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

const Home = ({ navigation }) => {
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

    const services = [
        {
            id: 1,
            name: "Uber Eats",
            icon: icons.ubereatsLogo
        },
        {
            id: 2,
            name: "Deliveroo",
            icon: icons.deliverooLogo
        },
        {
            id: 3,
            name: "Just Eat",
            icon: icons.justeatLogo
        }
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
            eta: "20 – 35 MINS",
            availableOn: [
                {
                    service: "Deliveroo",
                    eta: "30 – 45 MINS"
                },
                {
                    service: "Uber Eats",
                    eta: "30 – 45 MINS"
                },
                {
                    service: "Just Eat",
                    eta: "20 – 35 MINS"
                }
            ]
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
            eta: "10 – 20 MINS",
            availableOn: [
                {
                    service: "Deliveroo",
                    eta: "10 – 20 MINS"
                },
                {
                    service: "Uber Eats",
                    eta: "15 – 25 MINS"
                }
            ]
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
            eta: "15 – 30 MINS",
            availableOn: [
                {
                    service: "Deliveroo",
                    eta: "15 – 30 MINS"
                }
            ]
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
            eta: "45 MINS",
            availableOn: [
                {
                    service: "Deliveroo",
                    eta: "30 MINS"
                },
                {
                    service: "Just Eat",
                    eta: "45 MINS"
                }
            ]
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
            eta: "15 – 30 MINS",
            availableOn: [
                {
                    service: "Deliveroo",
                    eta: "15 – 30 MINS"
                },
                {
                    service: "Uber Eats",
                    eta: "15 – 25 MINS"
                },
                {
                    service: "Just Eat",
                    eta: "30 – 45 MINS"
                }
            ]
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
            eta: "15 – 25 MINS",
            availableOn: [
                {
                    service: "Just Eat",
                    eta: "15 – 30 MINS"
                }
            ]
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
            eta: "15 – 30 MINS",
            availableOn: [
                {
                    service: "Uber Eats",
                    eta: "15 – 30 MINS"
                }
            ]
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
            eta: "15 – 30 MINS",
            availableOn: [
                {
                    service: "Deliveroo",
                    eta: "15 – 30 MINS"
                }
            ]
        },
    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.tags.includes(category.name))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height:50 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.navigate("Filter", {
                        restaurants
                    })}
                >
                    <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25
                        }}
                    />
                </TouchableOpacity>
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
                <Text style={{...FONTS.h1}}>Main Categories</Text>
                {/* <Text style={{...FONTS.h1}}>Categories</Text> */}

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

    function renderRestaurantList() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        marginBottom: SIZES.padding * 2,
                    }}
                    onPress={() => navigation.navigate("Restaurant", {
                        item,
                        currentLocation,
                        services
                    })}
                >
                    <View style={{ 
                        marginBottom: SIZES.padding
                    }}>
                        <Image
                            source={{ uri: item.image }}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: 200,
                                borderRadius: SIZES.radius
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                height: 50,
                                width: (item.availableOn.length >= 3) ? SIZES.width * 0.4 : (item.availableOn.length == 2) ? SIZES.width * 0.3 : SIZES.width * 0.2,
                                backgroundColor: COLORS.white,
                                borderTopRightRadius: SIZES.radius,
                                borderBottomLeftRadius: SIZES.radius,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                ...styles.shadow
                            }}
                        >
                            {   
                                item.availableOn.map((s)=>{
                                    return(
                                        services.map((service)=>{
                                            return (
                                                service.name == s.service ?
                                                    <View
                                                        style={{
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                        key={service}
                                                    >
                                                        <Image
                                                            source={service.icon}
                                                            resizeMode="contain"
                                                            style={{
                                                                width: 30,
                                                                height: 30,
                                                                marginRight: 10
                                                            }}
                                                        />
                                                    </View>
                                                :
                                                    null
                                            )
                                        })
                                    )
                                })
                            }
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                height: 50,
                                width: SIZES.width * 0.3,
                                backgroundColor: COLORS.white,
                                borderTopRightRadius: SIZES.radius,
                                borderBottomLeftRadius: SIZES.radius,
                                alignItems: 'center',
                                justifyContent: 'center',
                                ...styles.shadow
                            }}
                        >
                            <Text style={{ ...FONTS.h4 }}>{item.eta}</Text>
                        </View>
                    </View>

                    {/* Restaurant Info */}
                    <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                    <View
                        style={{
                            marginTop: SIZES.padding,
                            flexDirection: 'row'
                        }}
                    >
                        <Image
                            source={icons.star}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.primary,
                                marginRight: 10
                            }}
                        />
                        <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginLeft: 10
                            }}
                        >
                            {
                                item.tags.slice(0,2).map((tag)=>{
                                    return (
                                        <View
                                            style={{ flexDirection: 'row' }}
                                            key={tag}
                                        >
                                            <Text style={{ ...FONTS.body3 }}>{tag}</Text>
                                            <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                        </View>
                                    )
                                })
                            }

                            {
                                <Text style={{ ...FONTS.body3 }}>{item.distance}</Text>
                            }
                        </View>
                    </View>
                 
                </TouchableOpacity>
            )
        }

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item=>`${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{ 
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
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