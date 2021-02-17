import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen53206516Navigator from '../features/BlankScreen53206516/navigator';
import BlankScreen52206515Navigator from '../features/BlankScreen52206515/navigator';
import BlankScreen51206514Navigator from '../features/BlankScreen51206514/navigator';
import BlankScreen39206513Navigator from '../features/BlankScreen39206513/navigator';
import BlankScreen38206512Navigator from '../features/BlankScreen38206512/navigator';
import BlankScreen50206511Navigator from '../features/BlankScreen50206511/navigator';
import BlankScreen49206510Navigator from '../features/BlankScreen49206510/navigator';
import BlankScreen48206509Navigator from '../features/BlankScreen48206509/navigator';
import BlankScreen47206508Navigator from '../features/BlankScreen47206508/navigator';
import BlankScreen46206507Navigator from '../features/BlankScreen46206507/navigator';
import BlankScreen45206506Navigator from '../features/BlankScreen45206506/navigator';
import BlankScreen44206505Navigator from '../features/BlankScreen44206505/navigator';
import BlankScreen43206504Navigator from '../features/BlankScreen43206504/navigator';
import BlankScreen42206503Navigator from '../features/BlankScreen42206503/navigator';
import BlankScreen41206502Navigator from '../features/BlankScreen41206502/navigator';
import BlankScreen40206496Navigator from '../features/BlankScreen40206496/navigator';
import UserProfile75206323Navigator from '../features/UserProfile75206323/navigator';
import UserProfile204398Navigator from '../features/UserProfile204398/navigator';
import Settings204368Navigator from '../features/Settings204368/navigator';
import Settings204360Navigator from '../features/Settings204360/navigator';
import UserProfile204358Navigator from '../features/UserProfile204358/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen53206516: { screen: BlankScreen53206516Navigator },
BlankScreen52206515: { screen: BlankScreen52206515Navigator },
BlankScreen51206514: { screen: BlankScreen51206514Navigator },
BlankScreen39206513: { screen: BlankScreen39206513Navigator },
BlankScreen38206512: { screen: BlankScreen38206512Navigator },
BlankScreen50206511: { screen: BlankScreen50206511Navigator },
BlankScreen49206510: { screen: BlankScreen49206510Navigator },
BlankScreen48206509: { screen: BlankScreen48206509Navigator },
BlankScreen47206508: { screen: BlankScreen47206508Navigator },
BlankScreen46206507: { screen: BlankScreen46206507Navigator },
BlankScreen45206506: { screen: BlankScreen45206506Navigator },
BlankScreen44206505: { screen: BlankScreen44206505Navigator },
BlankScreen43206504: { screen: BlankScreen43206504Navigator },
BlankScreen42206503: { screen: BlankScreen42206503Navigator },
BlankScreen41206502: { screen: BlankScreen41206502Navigator },
BlankScreen40206496: { screen: BlankScreen40206496Navigator },
UserProfile75206323: { screen: UserProfile75206323Navigator },
UserProfile204398: { screen: UserProfile204398Navigator },
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
