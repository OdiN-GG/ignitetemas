import { NavigationContainer } from '@react-navigation/native';
import {AppRoutes} from"./app_route"

export function Routes() {
    return(
        
        <NavigationContainer 
            independent={true}
        >
            <AppRoutes/>
        </NavigationContainer>
    )
}