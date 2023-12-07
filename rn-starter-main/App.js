import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from './src/screens/SearchScreen';
import MoreDetail from './src/screens/MoreDetail';



const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    MoreDetail: MoreDetail

  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
