import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile75206323Navigator from '../features/UserProfile75206323/navigator';
import UserProfile204398Navigator from '../features/UserProfile204398/navigator';
import Tutorial204397Navigator from '../features/Tutorial204397/navigator';
import NotificationList204369Navigator from '../features/NotificationList204369/navigator';
import Settings204368Navigator from '../features/Settings204368/navigator';
import Settings204360Navigator from '../features/Settings204360/navigator';
import UserProfile204358Navigator from '../features/UserProfile204358/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile75206323: { screen: UserProfile75206323Navigator },
UserProfile204398: { screen: UserProfile204398Navigator },
Tutorial204397: { screen: Tutorial204397Navigator },
NotificationList204369: { screen: NotificationList204369Navigator },
Settings204368: { screen: Settings204368Navigator },
Settings204360: { screen: Settings204360Navigator },
UserProfile204358: { screen: UserProfile204358Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
