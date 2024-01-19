import BottomNavigator from "../navigator/bottom/BottomNavigator";
import { Screens } from "./Screens";
import { Cart, FavScreen, HomeScreen,ProductDetails } from "../screens";

export const MainContainerStackScreens = [
    { name: Screens.BOTTOM_NAV, component: BottomNavigator },
    { name: Screens.PRODUCT_DETAILS_SCREEN, component: ProductDetails },
    { name: Screens.CART_SCREEN, component: Cart },
];

export const HomeStackScreens = [
    { name: Screens.HOME_SCREEN, component: HomeScreen },
];

export const FavStackScreens = [
    { name: Screens.FAV_SCREEN, component: FavScreen },
];