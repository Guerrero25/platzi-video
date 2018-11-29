import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/containers/Home";

const AppNavigator = createStackNavigator({ Home: Home });

export default createAppContainer(AppNavigator);
