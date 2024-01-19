import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackScreens } from '../../constants/NavScreensList';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {HomeStackScreens.map((edx, index) => {
        return <Stack.Screen name={edx.name} component={edx.component} key={index} />;
      })}
    </Stack.Navigator>
  );
}
