import { TouchableOpacity, StyleSheet } from 'react-native';
import Typography from '../atoms/Typography';

const CustomButton = ({ title,titleColor='#fff', onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Typography variant="h2" color={titleColor}>{title}</Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomButton;
