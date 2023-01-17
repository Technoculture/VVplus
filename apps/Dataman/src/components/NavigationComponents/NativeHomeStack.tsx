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
        name="Material Request Entry"
        component={MaterialRequest}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Material Approval"
        component={MaterialApproval}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Place Order"
        component={PlaceOrder}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Goods Receipt"
        component={Receipt}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Store"
        component={StoreScreen}
        options={{ title: "Back" }}
      />

      <HomeStack.Screen
        name="Stock Receive Entry"
        component={StockReceive}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Stock Issue Entry"
        component={StockIssue}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Phase To Phase Transfer"
        component={PhasetoPhase}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Branch To Branch Send"
        component={BranchSend}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Branch To Branch Receive"
        component={BranchReceive}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Sales"
        component={SalesScreens}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Extra Work Entry"
        component={WorkEntry}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Unit Cancellation"
        component={UnitCancellation}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Cheque Entry/Update"
        component={Cheque}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Contractor"
        component={ContractorScreen}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Daily Manpower"
        component={DailyManpower}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Approval Requests"
        component={ContractorApprovalScreen}
        options={{ title: "Back" }}
      />
      <HomeStack.Screen
        name="Daily Manpowers"
        component={DailyManPowerScreen}
        options={{ title: "Back" }}
      />
    </HomeStack.Navigator>
  );
};

export default NativeHomeStack;
