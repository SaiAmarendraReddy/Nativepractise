import React, { useState } from 'react';
import { StatusBar, View, Text, StyleSheet, Button, TextInput, ScrollView } from 'react-native';
/* index value */
let indx = 0;
const Sttsbr = () => {

    /* changing the status bar state to hide or show, and changing the button value */
    const [hide, sethide] = useState(false);
    const [txt, setTxt] = useState('Hide');

    /* changing the bar style */
    const barStyles = ['default', 'light-content', 'dark-content']
    const [bartype, setBarType] = useState(barStyles[0]);

    const [trnslt, setTrnslt] = useState(false);
    const [vsble, setVsble] = useState(styles.hideCertainTime);

    const [bckGrndClr, setbckGrndClr] = useState('black');
    const [txtField, setTextField] = useState(null);

    /* to hide or show the status bar and chnage the text inside the button*/
    const hideShwSttsBr = () => {
        sethide(!hide)
        setTxt(hide ? 'Hide' : 'Show')
    }

    /* reusing the component */
    const Reuse = (props) => {
        return (
            <View style={styles.sttsHide}>
                <Text style={styles.sttsData}>{props.data}</Text>
                <Button title={props.bttnTitle} onPress={props.bttnEvent} />
            </View>
        )
    }
    /* when user click barstyle button it will change the style, just by changing the index values */
    const barStyleEvnt = () => {
        if (indx < 2)
            indx++;
        else
            indx = 0;
        setBarType(barStyles[indx])
    }

    /* to change the state of translucent */
    const translucentEvent = () => {
        /* change the state */
        setTrnslt(!trnslt);
        /* show the indication "click the Hide statusButton" */
        if (!trnslt && hide == false) {
            setVsble(styles.visible)
            setTimeout(() => {
                setVsble(styles.hideCertainTime);
            }, 9000)
        }
    }

    /* change status Bar color */
    const changeStatusBarColor = (data) => {
        setbckGrndClr(data);
        /* set textField to normal */
        setTextField('');
    }

    /* render the component */
    return (
        <>
            {/* title */}
            <Text style={styles.sttsTitle}>Status Bar</Text>
            <View style={styles.sttsHead}>
                <StatusBar hidden={hide} barStyle={bartype} translucent={trnslt} backgroundColor={bckGrndClr} />
                {/* show or hide option */}
                <ScrollView>
                    <Reuse data={`Status Bar : ${hide ? 'Hidden' : 'Visible'}`} bttnEvent={hideShwSttsBr}
                        bttnTitle={txt + ' Status Bar'} />
                    {/* barStyle */}
                    <Reuse bttnEvent={barStyleEvnt} bttnTitle={`BarStyle`} data={`Bar Style : ${bartype}`} />
                    {/* Translucent */}
                    <Reuse data={`Tranlucent : ${trnslt ? 'Title Hidden' : 'Title Visibled'}`} bttnTitle={`Tranlucent`}
                        bttnEvent={translucentEvent} />
                    <Text style={vsble}>Click the Hide StatusBar Button</Text>
                    {/* background color */}
                    <View style={styles.sttsHide}>
                        <TextInput onChangeText={(text) => { setTextField(text) }} value={txtField}
                            placeholder='Enter color' style={styles.inputField} 
                            onSubmitEditing={({nativeEvent: {text, eventCount, target}})=>{changeStatusBarColor(text)}}/>
                        <Button title='Change Status Color' onPress={() => { changeStatusBarColor(txtField) }} />
                    </View>
                </ScrollView>
            </View>
        </>
    );
}
/* styles */
const styles = StyleSheet.create({
    sttsHead: {
        flex: 2,
        backgroundColor: 'lightblue',
        padding: 3,
        justifyContent: 'center',
        alignContent: 'center'
    },
    sttsTitle:
    {
        textAlign: 'center',
        backgroundColor: 'red',
        height: 30,
        fontSize: 25,
        margin: 3,
    },
    sttsHide: {
        padding: 3,
        textAlign: "center",
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignContent: 'center',
        height: 120,
        margin: 3
    },
    sttsData:
    {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 2
    },
    hideCertainTime: {
        display: 'none'
    },
    visible: {
        display: 'flex',
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'gray'
    },
    inputField: {
        fontSize: 20,
        borderBottomWidth:1,
        borderBottomColor:'blue',
        marginBottom:6
    }
})
export default Sttsbr;