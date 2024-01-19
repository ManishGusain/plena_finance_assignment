import { StatusBar, StyleSheet, View } from "react-native";


export default function BasicLayout({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        height: '100%',
        marginTop: StatusBar.currentHeight + 10,
    }
});