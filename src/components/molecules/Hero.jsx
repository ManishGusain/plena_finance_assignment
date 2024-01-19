import { TextInput, View, StyleSheet, StatusBar } from "react-native";
import Header from "./Header";
import Typography from "../atoms/Typography";
import { SearchIcon } from "../../svg";

export default function Hero() {
    return (
        <View style={styles.container}>
            <Header type="type1" title="Manish" />

            <View style={styles.searchContainer}>
                <SearchIcon />
                <TextInput style={styles.search} placeholder="Search Products or store" placeholderTextColor={'#8891A5'} />
            </View>


            <View style={styles.delivery}>
                <View>
                    <Typography variant="body1" color="#F8F9FB">DELIVERY TO</Typography>
                    <Typography variant="body2" color="#F8F9FB">Green Way 3000, Sylhet</Typography>
                </View>

                <View>
                    <Typography variant="body1" color="#F8F9FB">WITHIN</Typography>
                    <Typography variant="body2" color="#F8F9FB">1 Hour</Typography>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#2A4BA0',
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
    delivery: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    search: {
        backgroundColor: '#153075',
        color: '#fff',
        fontSize: 12,
        paddingLeft: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#153075',
        borderRadius: 20,
        marginVertical: 30,
        padding: 10,
    },
});