import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavStackScreens } from '../../constants/NavScreensList';

const Stack = createNativeStackNavigator();

export default function FavStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {FavStackScreens.map((edx, index) => {
        return <Stack.Screen name={edx.name} component={edx.component} key={index} />;
      })}
    </Stack.Navigator>
  );
}
