import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Screens } from '../../constants/Screens';
import Typography from '../atoms/Typography';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, add_to_favourites, total_cart_items, total_cart_amount } from '../../store/reducers/GlobalReducer';

const ProductCard = (props) => {
  const navigation = useNavigation();
  const [isFavorite, setFavorite] = useState(false);
  const [isAddedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const { cart, favourites } = useSelector((state) => state.global_values);

  const toggleFavorite = () => {
    setFavorite(prev => !prev);
    dispatch(add_to_favourites(props))
  };

  const handleAddToCart = () => {
    setAddedToCart(prev => !prev);
    dispatch(add_to_cart(props));
    dispatch(total_cart_items(props));
    dispatch(total_cart_amount());
  }

  const handleCardPress = () => {
    navigation.navigate(Screens.PRODUCT_DETAILS_SCREEN, { itemId: props?.id });
  }

  useEffect(() => {
    if (!(props?.id in cart)) {
      setAddedToCart(false);
    }
    if (props?.id in favourites) {
      setFavorite(true);
    }
  }, []);

  return (
    <TouchableOpacity style={styles.productCard} onPress={handleCardPress}>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={toggleFavorite}
      >
        <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={24} color={isFavorite ? 'red' : '#000'} />
      </TouchableOpacity>

      <Image
        source={{
          uri: props?.thumbnail,
        }}
        style={styles.productImage}
      />

      <View style={styles.productInfoWrapper}>
        <View style={styles.productInfo}>
          <View style={styles.labelWrapper}>
            <Typography variant="body2" color="#1E222B">${props?.price}</Typography>
            <Typography variant="body1" color="#616A7D" style={styles.titleStyle}>{props?.title}</Typography>
          </View>

          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            {
              isAddedToCart ?
                <Text style={styles.addToCartButtonText}>✅</Text>
                :
                <Text style={styles.addToCartButtonText}>+</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: 160,
    height: 210,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 1,
  },
  favoriteButtonText: {
    fontSize: 16,
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  productInfoWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  productInfo: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelWrapper: {
    width: '80%'
  },
  productLabel: {
    fontSize: 12,
    color: '#007bff',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  addToCartButton: {
    backgroundColor: '#2A4BA0',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#fff',
  },
  titleStyle: {
    flexWrap: 'wrap'
  }
});

export default ProductCard;
