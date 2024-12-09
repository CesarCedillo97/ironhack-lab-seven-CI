import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined; // Ruta "Login" sin parámetros
  Profile: undefined; // Ruta "Profile" sin parámetros
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
