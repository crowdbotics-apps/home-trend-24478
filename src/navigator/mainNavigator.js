import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen46207290Navigator from '../features/BlankScreen46207290/navigator';
import CopyOfBlankScreen71207289Navigator from '../features/CopyOfBlankScreen71207289/navigator';
import CopyOfBlankScreen61207288Navigator from '../features/CopyOfBlankScreen61207288/navigator';
import BlankScreen80207287Navigator from '../features/BlankScreen80207287/navigator';
import BlankScreen79207286Navigator from '../features/BlankScreen79207286/navigator';
import BlankScreen78207285Navigator from '../features/BlankScreen78207285/navigator';
import BlankScreen77207284Navigator from '../features/BlankScreen77207284/navigator';
import BlankScreen72207283Navigator from '../features/BlankScreen72207283/navigator';
import BlankScreen78207031Navigator from '../features/BlankScreen78207031/navigator';
import BlankScreen77207030Navigator from '../features/BlankScreen77207030/navigator';
import BlankScreen76207001Navigator from '../features/BlankScreen76207001/navigator';
import BlankScreen75206907Navigator from '../features/BlankScreen75206907/navigator';
import BlankScreen74206906Navigator from '../features/BlankScreen74206906/navigator';
import BlankScreen73206905Navigator from '../features/BlankScreen73206905/navigator';
import BlankScreen71206903Navigator from '../features/BlankScreen71206903/navigator';
import BlankScreen70206902Navigator from '../features/BlankScreen70206902/navigator';
import BlankScreen69206901Navigator from '../features/BlankScreen69206901/navigator';
import BlankScreen68206900Navigator from '../features/BlankScreen68206900/navigator';
import BlankScreen67206530Navigator from '../features/BlankScreen67206530/navigator';
import BlankScreen65206528Navigator from '../features/BlankScreen65206528/navigator';
import BlankScreen64206527Navigator from '../features/BlankScreen64206527/navigator';
import BlankScreen63206526Navigator from '../features/BlankScreen63206526/navigator';
import BlankScreen62206525Navigator from '../features/BlankScreen62206525/navigator';
import BlankScreen61206524Navigator from '../features/BlankScreen61206524/navigator';
import BlankScreen60206523Navigator from '../features/BlankScreen60206523/navigator';
import BlankScreen59206522Navigator from '../features/BlankScreen59206522/navigator';
import BlankScreen58206521Navigator from '../features/BlankScreen58206521/navigator';
import BlankScreen57206520Navigator from '../features/BlankScreen57206520/navigator';
import BlankScreen56206519Navigator from '../features/BlankScreen56206519/navigator';
import BlankScreen55206518Navigator from '../features/BlankScreen55206518/navigator';
import BlankScreen54206517Navigator from '../features/BlankScreen54206517/navigator';
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
import UserProfile75206323Navigator from '../features/UserProfile75206323/navigator';
import UserProfile204398Navigator from '../features/UserProfile204398/navigator';
import Settings204368Navigator from '../features/Settings204368/navigator';
import UserProfile204358Navigator from '../features/UserProfile204358/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen46207290: { screen: BlankScreen46207290Navigator },
CopyOfBlankScreen71207289: { screen: CopyOfBlankScreen71207289Navigator },
CopyOfBlankScreen61207288: { screen: CopyOfBlankScreen61207288Navigator },
BlankScreen80207287: { screen: BlankScreen80207287Navigator },
BlankScreen79207286: { screen: BlankScreen79207286Navigator },
BlankScreen78207285: { screen: BlankScreen78207285Navigator },
BlankScreen77207284: { screen: BlankScreen77207284Navigator },
BlankScreen72207283: { screen: BlankScreen72207283Navigator },
BlankScreen78207031: { screen: BlankScreen78207031Navigator },
BlankScreen77207030: { screen: BlankScreen77207030Navigator },
BlankScreen76207001: { screen: BlankScreen76207001Navigator },
BlankScreen75206907: { screen: BlankScreen75206907Navigator },
BlankScreen74206906: { screen: BlankScreen74206906Navigator },
BlankScreen73206905: { screen: BlankScreen73206905Navigator },
BlankScreen71206903: { screen: BlankScreen71206903Navigator },
BlankScreen70206902: { screen: BlankScreen70206902Navigator },
BlankScreen69206901: { screen: BlankScreen69206901Navigator },
BlankScreen68206900: { screen: BlankScreen68206900Navigator },
BlankScreen67206530: { screen: BlankScreen67206530Navigator },
BlankScreen65206528: { screen: BlankScreen65206528Navigator },
BlankScreen64206527: { screen: BlankScreen64206527Navigator },
BlankScreen63206526: { screen: BlankScreen63206526Navigator },
BlankScreen62206525: { screen: BlankScreen62206525Navigator },
BlankScreen61206524: { screen: BlankScreen61206524Navigator },
BlankScreen60206523: { screen: BlankScreen60206523Navigator },
BlankScreen59206522: { screen: BlankScreen59206522Navigator },
BlankScreen58206521: { screen: BlankScreen58206521Navigator },
BlankScreen57206520: { screen: BlankScreen57206520Navigator },
BlankScreen56206519: { screen: BlankScreen56206519Navigator },
BlankScreen55206518: { screen: BlankScreen55206518Navigator },
BlankScreen54206517: { screen: BlankScreen54206517Navigator },
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
UserProfile75206323: { screen: UserProfile75206323Navigator },
UserProfile204398: { screen: UserProfile204398Navigator },
Settings204368: { screen: Settings204368Navigator },
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
