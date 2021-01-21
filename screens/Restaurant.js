import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

import {isIphoneX } from 'react-native-iphone-x-helper';

import { icons, COLORS, SIZES, FONTS } from '../constants';

const Restaurant = ({ route, navigation }) => {

    const [restaurant, setRestaurant] = React.useState(null);
    const [currentLocation, setCurrentLocation] = React.useState(null);
    const [serviceIcons, setServiceIcons] = React.useState(null);

    React.useEffect(()=>{
        let {item, currentLocation, services } = route.params;

        setRestaurant(item);
        setCurrentLocation(currentLocation);
        setServiceIcons(services);
    })

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', alignContent:'space-between', justifyContent:'space-between' }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25
                        }}
                    />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: SIZES.padding * 2, }}>
                    <View
                        style={{
                            height: 50,
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            justifyContent: 'center',
                            width: 250
                            
                        }}
                    >
                        <Text style={{ ...FONTS.h3, padding:SIZES.padding }}>{restaurant?.name.slice(0,25)}</Text>
                    </View>
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: 50,
                            paddingLeft: SIZES.padding * 2,
                            justifyContent: 'center'
                        }}
                        // onPress={() => navigation.navigate("Filter", {
                        //     restaurants
                        // })}
                    >
                        <Image
                            source={icons.like}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 50,
                            // paddingRight: SIZES.padding * 2,
                            justifyContent: 'center'
                        }}
                        // onPress={() => navigation.navigate("Filter", {
                        //     restaurants
                        // })}
                    >
                        <Image
                            source={icons.like}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderRestaurantInfo() {
        return (
            <TouchableOpacity
                style={{
                    marginBottom: SIZES.padding * 2,
                    marginTop: SIZES.padding * 2
                }}
            >
                <View style={{ 
                    marginBottom: SIZES.padding
                }}>
                    <Image
                        source={{ uri: restaurant?.image }}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 250,
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderRadius: SIZES.radius,
                            margin: SIZES.padding,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{restaurant?.eta}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.h2, marginLeft: SIZES.padding }}>{restaurant?.name}</Text>
                <View
                    style={{
                        flexDirection: 'column'
                    }}
                >
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
                                marginRight: 10,
                                marginLeft: SIZES.padding
                            }}
                        />
                        <Text style={{ ...FONTS.body3 }}>{restaurant?.rating}</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginLeft: 10
                            }}
                        >
                            {
                                restaurant?.tags.map((tag)=>{
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
                        </View>
                    </View>
                    <View
                        style={{
                            marginTop: SIZES.padding,
                            marginLeft: SIZES.padding
                        }}
                    >
                        {   
                            <Text style={{ ...FONTS.body3 }}>{restaurant?.distance}</Text>
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    function renderServices() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        marginBottom: SIZES.padding * 2
                    }}
                    // onPress={() => navigation.navigate("Restaurant", {
                    //     item,
                    //     currentLocation
                    // })}
                >
                    <View style={{ 
                        marginBottom: SIZES.padding
                    }}>
                        {
                            serviceIcons?.map((service)=>{
                                return (
                                    service.name == item.service ?
                                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                            <View
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    backgroundColor: COLORS.lightGray3,
                                                    alignItems: 'center',
                                                    borderRadius: SIZES.radius  * 0.2,
                                                    justifyContent: 'space-between',
                                                    padding: SIZES.padding,
                                                    flexDirection: 'row'
                                                }}
                                            >
                                                <Image
                                                    source={service.icon}
                                                    resizeMode="contain"
                                                    style={{
                                                        width: 50,
                                                        height: 50,
                                                        marginRight: 10,
                                                        marginLeft: SIZES.padding,
                                                        margin: SIZES.padding
                                                    }}
                                                />
                                                <View
                                                    style={{
                                                        width: '40%',
                                                        height: '70%',
                                                        backgroundColor: COLORS.white,
                                                        alignItems: 'center',
                                                        borderRadius: SIZES.radius,
                                                        justifyContent: 'center',
                                                        padding: SIZES.padding
                                                    }}
                                                >
                                                    <Text style={{ ...FONTS.body3 }}>{item.eta}</Text>
                                                </View>
                                                <View
                                                    style={{
                                                        width: '15%',
                                                        height: '70%',
                                                        backgroundColor: COLORS.white,
                                                        alignItems: 'center',
                                                        borderRadius: SIZES.radius,
                                                        justifyContent: 'center',
                                                        padding: SIZES.padding
                                                    }}
                                                >
                                                    <Image
                                                        source={icons.go}
                                                        resizeMode="contain"
                                                        style={{
                                                            width: 25,
                                                            height: 25,
                                                            marginRight: 10,
                                                            marginLeft: SIZES.padding,
                                                            margin: SIZES.padding
                                                        }}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        
                                    : null
                                )
                            })
                        }
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <FlatList
                data={restaurant?.availableOn}
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
            {renderRestaurantInfo()}
            {renderServices()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

export default Restaurant;