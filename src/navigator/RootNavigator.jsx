import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './mainContainer/MainContainer';

const MyTheme = {
  dark: false,
  colors: {
    primary: '#fff',
    card: 'green',
    text: '#fff',
    border: '#fff',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function RootNavigator() {
  return (
    <NavigationContainer theme={MyTheme}>
      <MainContainer />
    </NavigationContainer>
  );
}