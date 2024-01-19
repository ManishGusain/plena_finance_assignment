import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainContainerStackScreens } from '../../constants/NavScreensList';

const Stack = createNativeStackNavigator();

export default function MainContainer() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {MainContainerStackScreens.map((screen, index) => (
          <Stack.Screen name={screen.name} component={screen.component} key={index} />
        ))}
      </Stack.Navigator>
    </>
  );
}
