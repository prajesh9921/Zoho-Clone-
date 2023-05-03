import CheckBox from "expo-checkbox";
import React, { useState } from "react";
import {
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import logo from "../assets/zoho.png";
import google from "../assets/google.png";
import fb from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import microsoft from "../assets/microsoft.png";
import styles from "./Signup_styles";
import {
    FontAwesome5,
    MaterialCommunityIcons,
    Feather,
    FontAwesome,
    AntDesign,
} from "@expo/vector-icons";
import { Dropdown } from 'react-native-element-dropdown';
import { countries, state } from "./data";

const SignUp = () => {

    const ICONSIZE = 18;
    const ICONCOLOR = "#ababab";

    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [ActiveInput, setActiveInput] = useState("");
    const [Statevalue, setStateValue] = useState("");
    const [Countryvalue, setCountryValue] = useState("");

    const HandlePress = (val) => {
        setActiveInput(val);
    }

    return (
        <ScrollView>
            <StatusBar />

            {/* APPBAR */}
            <View style={styles.appbar}>
                <Image source={logo} style={styles.image} />
                <Text style={styles.appTitle}>Books</Text>
            </View>

            <View style={styles.haveAccountBox}>
                <Text style={styles.part1}>
                    Already have a Zoho account? <Text style={styles.part2}>Sign in</Text>
                </Text>
            </View>

            <Text style={styles.ad}>Experience PREMIUM plan for 14 days.</Text>

            {/* FORM */}
            <View style={styles.form}>
                <TouchableOpacity onPress={() => HandlePress('company')}>
                    <View style={ActiveInput === 'company' ? styles.inputBoxTapped : styles.inputBox}>
                        <FontAwesome5
                            name="building"
                            size={ICONSIZE}
                            color={ICONCOLOR}
                            style={styles.icon}
                        />
                        <TextInput placeholder="Company Name" onFocus={() => HandlePress('company')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => HandlePress('email')}>
                    <View style={ActiveInput === "email" ? styles.inputBoxTapped : styles.inputBox}>
                        <MaterialCommunityIcons
                            name="email-open-outline"
                            size={ICONSIZE}
                            color={ICONCOLOR}
                            style={styles.icon}
                        />
                        <TextInput placeholder="Email Address" onFocus={() => HandlePress('email')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => HandlePress('mobile')}>
                    <View style={ActiveInput === 'mobile' ? styles.inputBoxTapped : styles.inputBox}>
                        <Feather
                            name="phone-call"
                            size={ICONSIZE}
                            color={ICONCOLOR}
                            style={styles.icon}
                        />
                        <Text style={{ marginHorizontal: 5, fontSize: 15 }}>+91</Text>
                        <TextInput placeholder="Mobile Number" onFocus={() => HandlePress('mobile')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => HandlePress('password')}>
                    <View style={ActiveInput === "password" ? styles.inputBoxTapped : styles.inputBox}>
                        <AntDesign
                            name="lock"
                            size={ICONSIZE}
                            color={ICONCOLOR}
                            style={styles.icon}
                        />
                        <TextInput placeholder="Password" onFocus={() => HandlePress('password')} />
                    </View>
                </TouchableOpacity>

                <Dropdown
                    style={ActiveInput === 'country' ? styles.dropDownSelected : styles.dropDown}
                    placeholderStyle={styles.placeholderStyle}
                    iconStyle={styles.iconStyle}
                    data={countries}
                    value={Countryvalue}
                    onFocus={() => HandlePress('country')}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="India"
                    onChange={item => {
                        setCountryValue(item.value);
                    }}
                    renderLeftIcon={() => (
                        <FontAwesome
                            name="globe"
                            size={ICONSIZE}
                            color={ICONCOLOR}
                            style={styles.icon}
                        />
                    )}
                />

                <Dropdown
                    style={ActiveInput === 'state' ? styles.dropDownSelected : styles.dropDown}
                    placeholderStyle={styles.placeholderStyle}
                    iconStyle={styles.iconStyle}
                    data={state}
                    value={Statevalue}
                    onFocus={() => HandlePress('state')}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Maharashtra"
                    onChange={item => {
                        setStateValue(item.value);
                    }}
                    renderLeftIcon={() => (
                        <FontAwesome
                            name="map-marker"
                            size={ICONSIZE}
                            color={ICONCOLOR}
                            style={styles.icon}
                        />
                    )}
                />

                <Text style={styles.yourData}>
                    Your data will be in INDIA data center.
                </Text>

                {/* TERMS AND CONDITION */}
                <View style={styles.checkboxBox}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={styles.tandc}>
                        I agree to the{" "}
                        <Text style={styles.clickable}>Terms of Service</Text> and{" "}
                        <Text style={styles.clickable}>Privacy Policy.</Text>
                    </Text>
                </View>

                {/* BUTTON */}
                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Text style={styles.btnTitle}>CREATE ACCOUNT</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* SIGNIN  */}
            <Text style={styles.orsignin}>or sign in using</Text>

            {/* SOCIALS */}
            <View style={styles.socialBox}>
                <View style={styles.google}>
                    <Image source={google} style={styles.SocialImg} />
                    <Text style={styles.googleText}>Google</Text>
                </View>

                <Image source={fb} style={styles.SocialImg} />
                <Image source={linkedin} style={styles.SocialImg} />
                <Image source={twitter} style={styles.SocialImg} />
                <Image source={microsoft} style={styles.SocialImg} />
            </View>
        </ScrollView>
    );
};

export default SignUp;
