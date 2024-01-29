import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { useDispatch, useSelector } from "react-redux";
import { resetItem, removeItem } from "../../actions/home/home";

const actions = [

    {
        text: "Add Item",
        name: "bt_language",
        position: 1
    },
];

const Home = (props) => {

    const Dispatch = useDispatch();

    const data = useSelector((state) => state.home.data);

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            Dispatch(resetItem())
        });
        return unsubscribe

    }, [props.navigation])

    const goToPageDetail = () => {
        props.navigation.navigate('homedetail');
    }

    const handleDelete = (item) => {
        Dispatch(removeItem(item.id))
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, margin: 15 }}>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text>List</Text>
                </View>

                <FlatList
                    data={data}
                    ListEmptyComponent={
                        <View style={{ alignItems: 'center' }} >
                            <Text>No data</Text>
                        </View>
                    }
                    renderItem={({ item }) => (

                        <View style={{ marginTop: 25 }}>
                            <View style={{
                                backgroundColor: 'white',
                                shadowColor: '#171717',
                                shadowOffset: { width: -2, height: 4 },
                                shadowOpacity: 0.2,
                                shadowRadius: 3,
                                padding: 8,
                                borderRadius: 7,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }} >
                                <View>
                                    <Image style={{ width: 30, height: 30, borderRadius: 50 }} source={require('../../assets/images/user.png')} />
                                </View>
                                <View style={{ flex: 2, marginLeft: 15 }}>
                                    <Text>{item.Name}</Text>
                                    <Text>{item.Age} ans</Text>
                                </View>
                                <TouchableOpacity onPress={() => handleDelete(item)}>
                                    <Image style={{ width: 30, height: 30, borderRadius: 50 }} source={require('../../assets/images/delete.png')} />
                                </TouchableOpacity>

                            </View>
                        </View>
                    )}
                />
                <View style={{bottom:40, position:'relative'}}>
                    <FloatingAction
                        onPressItem={goToPageDetail}
                        actions={actions}
                        color="#14CDC8"
                    />
                </View>

            </View>



        </SafeAreaView>
    )
};

export default Home;
