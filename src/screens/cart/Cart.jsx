import { StyleSheet, View } from "react-native";
import CartItem from '../../components/molecules/CartItem';
import CustomButton from "../../components/molecules/CustomBtn";
import Header from "../../components/molecules/Header";
import Typography from "../../components/atoms/Typography";
import { useSelector } from "react-redux";
import BasicLayout from "../../layouts/Basic";


export default function Cart() {
    const { cart, cartTotalAmount } = useSelector((state) => state.global_values)

    return (
        <BasicLayout>

            <Header type="type3" title="Shopping Cart" cartCount={true} />

            {
                Object.keys(cart)?.length > 0 ?
                    <View style={styles.cartItemsWrapper}>
                        {
                            Object.keys(cart)?.map((edx, index) => {
                                return (
                                    <CartItem {...cart[edx]} />
                                );
                            })
                        }
                    </View>
                    :
                    <Typography variant="body2" color="#616A7D">No Data</Typography>
            }
            
            <View style={styles.itemsTotal}>
                <View style={styles.item}>
                    <Typography variant="body2" color="#616A7D">SubTotal</Typography>
                    <Typography variant="body2" color="#1E222B">${cartTotalAmount}</Typography>
                </View>

                <View style={styles.item}>
                    <Typography variant="body2" color="#616A7D">Delivery</Typography>
                    <Typography variant="body2" color="#1E222B">${cartTotalAmount !== 0 ? 2 : 0}</Typography>
                </View>

                <View style={styles.item}>
                    <Typography variant="body2" color="#616A7D">Total</Typography>
                    <Typography variant="body2" color="#1E222B">{cartTotalAmount > 0 ? `$${cartTotalAmount} + ${2}` : 0}</Typography>
                </View>

                <View style={{ paddingVertical: 15 }}>
                    {
                        cartTotalAmount > 0 ?
                            <CustomButton title="Proceed to checkout" style={styles.checkoutBtn} />
                            :
                            null
                    }
                </View>
            </View>

        </BasicLayout>
    );
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 10
    },
    cartItemsWrapper: {
        flex: 0.6,
    },
    itemsTotal: {
        flex: 0.4,
        backgroundColor: '#F8F9FB',
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    checkoutBtn: {
        backgroundColor: '#2A4BA0',
        borderRadius: 25
    }
});
