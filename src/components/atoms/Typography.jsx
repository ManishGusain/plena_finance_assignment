import React, { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';


export default function Typography({ variant = 'defaultText', color, children, style }) {
    const textStyle = styles[variant] || styles.defaultText;
    return <Text style={[textStyle, { color: color }, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
    defaultText: {
        fontSize: 16,
    },

    body1: {
        fontSize: 10,
    },
    body2: {
        fontSize: 13,
    },


    h1: {
        fontSize: 24
    },
    h2: {
        fontSize: 16,
    },
    h3: {
        fontSize: 36,
    },
});