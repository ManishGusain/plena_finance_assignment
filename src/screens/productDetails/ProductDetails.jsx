import { ScrollView, StatusBar, Text, View, StyleSheet } from "react-native";
import Header from "../../components/molecules/Header";
import Typography from "../../components/atoms/Typography";
import CustomButton from "../../components/molecules/CustomBtn";
import ProductCarousel from "../../components/molecules/ProductCarousel";
import { useEffect, useState } from "react";
import { product_api } from "../../api";
import BasicLayout from "../../layouts/Basic";
import { add_to_cart, total_cart_amount } from "../../store/reducers/GlobalReducer";
import { Screens } from "../../constants/Screens";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import Loader from "../../components/atoms/Loader";


export default function ProductDetails({ route }) {
    const { itemId } = route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const [isAddedToCart, setAddedToCart] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getProduct = async () => {
        setIsLoading(true);
        try {
            let { data } = await product_api(itemId);
            setProduct(data);
        }
        catch (err) {
            console.log(err)
        }
        setIsLoading(false);
    }

    const handleBuyNow = () => {
        dispatch(add_to_cart(product));
        dispatch(total_cart_amount());
        navigation.navigate(Screens.CART_SCREEN);
    }

    const handleAddToCart = () => {
        dispatch(add_to_cart(product));
        dispatch(total_cart_amount());
        setAddedToCart(prev => !prev);
    }

    useEffect(() => {
        getProduct();
    }, []);


    return (
        <BasicLayout>

            {isLoading ? <Loader /> : null}

            <ScrollView>
                <Header type="type1" showbackBtn={true} bagIconColor={'#000'} />

                <View>
                    <Typography variant="h3" color="#1E222B">{product?.title}</Typography>
                    <Typography variant="h3" color="#1E222B" style={{ fontWeight: 'bold' }}>{product?.brand}</Typography>
                </View>

                <Typography variant="body2" color="#A1A1AB" style={{ marginVertical: 10 }}>{`⭐ ${product?.rating}`}</Typography>


                <ProductCarousel {...product} />

                <View style={styles.priceWrapper}>
                    <Typography variant="body2" color="#1E222B" style={styles.price}>${product?.price}</Typography>
                    <Typography variant="body1" color="#fff" style={styles.discount}>${product?.discountPercentage} OFF</Typography>
                </View>

                <View style={styles.btnContainer}>
                    {
                        isAddedToCart ?
                            <View style={styles.addToCartButtonText}>
                                <Text>✅</Text>
                            </View>
                            :
                            <CustomButton title="Add to Cart" titleColor="#2A4BA0" style={[styles.addBtn, styles.btn]} onPress={handleAddToCart} />
                    }
                    <CustomButton title="Buy Now" style={[styles.buyBtn, styles.btn]} onPress={handleBuyNow} />
                </View>

                <View style={styles.productDesc}>
                    <Typography variant="body3" color="#1E222B">Details</Typography>
                    <Typography variant="body3" color="#8891A5">
                        {product?.description}
                    </Typography>
                </View>
            </ScrollView>
        </BasicLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 10,
    },
    addBtn: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderWidthColor: '#007bff',
        borderRadius: 20,
    },
    buyBtn: {
        backgroundColor: '#2A4BA0',
        borderRadius: 20,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    btn: {
        width: '45%'
    },
    priceWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    price: {

    },
    discount: {
        backgroundColor: '#2A4BA0',
        borderRadius: 25,
        padding: 5,
        marginLeft: 5,
    },
    addToCartButtonText: {
        borderWidth: 1,
        borderColor: '#007bff',
        width: '45%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});