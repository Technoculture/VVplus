import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../../screens/home";
import Purchase from "../../screens/Purchase";
import { StoreScreen } from "../../screens/store";
import SalesScreens from "../../screens/SalesScreen";
import ContractorApprovalScreen from "../../screens/ContractorApproval";
import { ContractorScreen } from "../../screens/contractors";
import MaterialRequest from "../../screens/MaterialRequest";
import MaterialApproval from "../../screens/MaterialApproval";
import PlaceOrder from "../../screens/PlaceOrder";
import Receipt from "../../screens/Receipt";
import StockReceive from "../../screens/stockRecieve";
import StockIssue from "../../screens/stockIssue";
import PhasetoPhase from "../../screens/phaseToPhase";
import BranchSend from "../../screens/branchSend";
import BranchReceive from "../../screens/branchReceive";
import WorkEntry from "../../screens/WorkEntry";
import UnitCancellation from "../../screens/UnitCancellation";
import Cheque from "../../screens/Cheque";
import DailyManpower from "../../screens/manpower";
import DailyManPowerScreen from "../../screens/DailyManPower";

const NativeHomeStack = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />

      <HomeStack.Screen
        name="Purchase"
        component={Purchase}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="MaterialRequest"
        component={MaterialRequest}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="MaterialApproval"
        component={MaterialApproval}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="PlaceOrder"
        component={PlaceOrder}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Receipt"
        component={Receipt}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="StoreScreen"
        component={StoreScreen}
        options={{ title: "Back" }}
      />

      <HomeStack.Screen
        name="StockReceive"
        component={StockReceive}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="StockIssue"
        component={StockIssue}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="PhaseToPhase"
        component={PhasetoPhase}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="BranchSend"
        component={BranchSend}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="BranchReceive"
        component={BranchReceive}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="SalesScreens"
        component={SalesScreens}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="WorkEntry"
        component={WorkEntry}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="UnitCancellation"
        component={UnitCancellation}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Cheque"
        component={Cheque}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="ContractorScreen"
        component={ContractorScreen}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="DailyManpower"
        component={DailyManpower}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="ContractorApprovalScreen"
        component={ContractorApprovalScreen}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="DailyManPowerScreen"
        component={DailyManPowerScreen}
        options={{ title: "Back" }}
      />
    </HomeStack.Navigator>
  );
};

export default NativeHomeStack;
