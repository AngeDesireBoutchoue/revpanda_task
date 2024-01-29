import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import uuid from 'react-native-uuid';
import { addItem } from "../../actions/home/home";

const HomeDetail = (props) => {

    const Dispatch = useDispatch();

    const addstatus = useSelector((state) => state.home.addstatus);

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [error, setError] = useState(false)

    const handleGoBack = () => {
        props.navigation.goBack();
    }

    const handleName = (e) => {
        setName(e)
        setError(false)
    }

    const handleAge = (e) => {
        setAge(e)
        setError(false)
    }

    const handleAdd = () => {

        if (name !== "" && name.trim() !== "" && age !== "" && age.trim() !== "" && age !== 0) {
            let data = {
                "id": uuid.v4(),
                "Name": name,
                "Age": age
            }
            Dispatch(addItem(data))
        }
        else {
            setError(true)
        }

    }

    let redirect = null;
    if (addstatus) {
        redirect = props.navigation.goBack();
    }

    return (
        <SafeAreaView style={{}}>
            {redirect}
            <View style={{ margin: 15 }}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Image style={{ width: 30, height: 30, }} source={require('../../assets/images/Arrow.png')} />
                </TouchableOpacity>

                <View style={{ marginTop: 30 }}>
                    <TextInput placeholder='Name & Surname' value={name} onChangeText={handleName} style={{ borderColor: '#ccc', borderWidth: 1, padding: 10, borderRadius: 12 }} />
                    <TextInput placeholder='Age' keyboardType='numeric' value={age} onChangeText={handleAge} style={{ borderColor: '#ccc', borderWidth: 1, padding: 10, borderRadius: 12, marginTop: 15 }} />
                </View>
                {
                    error ? <View>
                        <Text style={{ color: 'red' }}> Check your Infos</Text>
                    </View> : null
                }
                <TouchableOpacity onPress={handleAdd} style={{ backgroundColor: '#14CDC8', borderRadius: 12, marginTop: 20 }}>
                    <Text style={{ color: 'white', textAlign: 'center', padding: 10, fontWeight: 'bold' }}>Add</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};
export default HomeDetail