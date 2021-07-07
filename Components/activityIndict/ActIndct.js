import React, { useState } from 'react';
import { Text, View, Button, ActivityIndicator, Switch, StyleSheet, TextInput } from 'react-native';

const ActIndctr = () => {

    const [anmtng, setAnmtng] = useState(false);
    const [size, setSize] = useState(false);
    const [bckGrundClr,setBckGrundClr] = useState(false);

    const Reuse = (props) => {
        return (
            <View style={styles.anmtng}>
                <Text style={styles.txt}>{props.txtData[0]}</Text>
                <Switch onValueChange={(p) => { props.stateChange(p) }} value={props.stateValue} />
                <Text style={styles.txt}>{props.txtData[1]}</Text>
            </View>
        )
    }

    return (
        <>
            <Text style={styles.title}>Activity Indicator</Text>
            <View style={{ flex: 1 }}>
                <View style={styles.indicator}>
                    <ActivityIndicator color='red' animating={anmtng} size={size ? 'large' : 'small'} color={bckGrundClr}/>
                </View>
                <Reuse txtData={['Not Animate', 'Animate']} stateChange={setAnmtng} stateValue={anmtng} />
                <Reuse txtData={['small', 'large']} stateChange={setSize} stateValue={size} />
                <View style={styles.txtContainer}>
                    <Text style={styles.txtContainerStyle}>Enter Color :</Text>
                    <TextInput placeholder="Enter Color" onChangeText={(text)=>{setBckGrundClr(text)}} style={styles.txtField}/>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        backgroundColor: 'lightblue',
        fontSize: 25,
        marginTop: 3,
        marginBottom: 3
    },
    anmtng: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'pink',
        padding: 4,
        margin: 2
    },
    indicator: {
        height: 100,
        justifyContent:'center',
        alignContent:'center'
    },
    txt: {
        fontSize: 20
    },
    toggle: {
        width: 20
    },
    txtContainer:{
        flexDirection:'row',
        backgroundColor:'pink',
        padding:3
    },
    txtContainerStyle:{
        fontSize:20,
        justifyContent:'center',
        padding:2,
        marginLeft: 10,
        marginRight:20,
        alignSelf:'center'
    },
    txtField:{
        borderWidth:1,
        fontSize:20,
        width:'60%',
        height:'80%',
        alignSelf:'center',
        padding:5,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomColor:'blue'
    }
})

export default ActIndctr;