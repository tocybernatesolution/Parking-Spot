import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
    Splash:any;
    Signup:any;
    Login:any;
    Forget:any;
    CreatePassword:any;
  };
  
  export type ScreenNavigationProp=NativeStackNavigationProp<RootStackParamList>