import { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Typography from '../atoms/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, remove_from_cart, total_cart_items, total_cart_amount } from '../../store/reducers/GlobalReducer';


const CartItem = (props) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.global_values);
  const [quantity, setQuantity] = useState(cart[props?.id]?.quantity);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    dispatch(add_to_cart(props));
    dispatch(total_cart_items());
    dispatch(total_cart_amount());
  };

  const handleDecrease = () => {
    setQuantity(quantity - 1);
    dispatch(remove_from_cart(props));
    dispatch(total_cart_items());
    dispatch(total_cart_amount());
  };

  if (cart[props?.id]?.quantity === 0) {
    return null;
  }

  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: props?.thumbnail }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Typography variant="body2" color="#1E222B">{props?.p_name}</Typography>
        <Typography variant="body2" color="#1E222B">${props?.price}</Typography>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={handleDecrease} style={styles.quantityButton}>
          <Typography variant="body2" color="#1E222B" style={styles.quantityText}>-</Typography>
        </TouchableOpacity>
        <Typography variant="body2" color="#1E222B" style={styles.quantityText}>{quantity}</Typography>
        <TouchableOpacity onPress={handleIncrease} style={styles.quantityButton}>
          <Typography variant="body2" color="#1E222B" style={styles.quantityText}>+</Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    marginRight: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 10,
  },
});

export default CartItem;
