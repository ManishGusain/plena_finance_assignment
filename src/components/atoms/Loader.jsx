import { ActivityIndicator, StyleSheet, View } from "react-native";
import { deviceHeight, deviceWidth } from "../../utils/Dimensions";

export default function Loader() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#fff" />
        </View>
    );
}

const styles=StyleSheet.create({
    loadingContainer: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0,.8)',
        width: deviceWidth,
        height: deviceHeight,
        position: 'absolute',
        zIndex: 5,
    }
});