import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Groups } from '../screens/Groups';
import { NewGroup } from '../screens/NewGroup';
import { Players } from '../screens/Players/Index';  

const Stack = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Stack.Navigator 
          initialRouteName="groups"
          screenOptions={{ headerShown: false }}
        >

          <Stack.Screen name="groups" component={Groups} />
          <Stack.Screen name="new" component={NewGroup} />
          <Stack.Screen name="players" component={Players} />

        </Stack.Navigator>

    );
  }
