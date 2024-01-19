import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { BackBtnIcon, BagIcon } from '../../svg';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../constants/Screens';
import { useSelector } from 'react-redux';

export default function Header({ type = 'type1', title, showbackBtn = false, bagIconColor = '#fff', cartCount = false }) {
    const navigation = useNavigation();
    const { cartTotalItems } = useSelector((state) => state.global_values);

    const handlePress = () => {
        navigation.goBack();
    }

    const handleBagPress = () => {
        if (cartTotalItems > 0) {
            navigation.navigate(Screens.CART_SCREEN)
        }
    }

    const type1Header = (
        <View style={styles.container}>
            {
                showbackBtn ?
                    <TouchableOpacity style={styles.backIconWrapper} onPress={handlePress}>
                        <BackBtnIcon />
                    </TouchableOpacity>
                    :
                    <Text style={styles.greeting}>{`Hey, ${title}`}</Text>
            }

            <TouchableOpacity style={styles.bagWrapper} onPress={handleBagPress}>
                <BagIcon color={bagIconColor} style={styles.bagImage} />
                {cartTotalItems > 0 && (
                    <View style={styles.quantityBadge}>
                        <Text style={styles.quantityText}>{cartTotalItems}</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );

    const type3Header = (
        <View style={styles.type3Container}>
            <TouchableOpacity style={styles.backIconWrapper} onPress={handlePress}>
                <BackBtnIcon />
            </TouchableOpacity>

            <Text style={styles.greeting3}>{`${title}`} {cartCount === true && cartTotalItems !== 0 ? `(${cartTotalItems})` : null}</Text>
        </View>
    );

    switch (type) {
        case 'type2':
            return type2Header;
        case 'type3':
            return type3Header;
        default:
            return type1Header;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    type3Container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    greeting: {
        color: '#fff',
    },
    greeting3: {
        color: '#000',
        paddingLeft: 5,
    },
    backIconWrapper: {
        height: 34,
    },
    avatarWrapper: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    bagWrapper: {
        position: 'relative',
    },
    quantityBadge: {
        position: 'absolute',
        top: -5,
        right: 1,
        backgroundColor: '#F9B023',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantityText: {
        color: 'white',
        fontSize: 10
    },
});
