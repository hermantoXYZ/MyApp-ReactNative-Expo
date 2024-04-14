import { Text, Platform, View} from 'react-native';
import { Home, Detail, List, Setting, Search } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    buttom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>Home</Text>
            </View>
              )
            }
          }}
          />
         <Tab.Screen 
          name="Detail" 
          component={Detail} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 {/* <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} /> */}
                 <MaterialIcons name="details" size={24}  color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>Detail</Text>
            </View>
              )
            }
          }}
          />
         <Tab.Screen 
          name="Search" 
          component={Search} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
            <View
            style={{
             alignItems: "center",
             justifyContent: "center",
             backgroundColor: "#16247d",
             width: Platform.OS == "ios" ? 50 : 60,
             height: Platform.OS == "ios" ? 50 : 60,
             top: Platform.OS == "ios" ? -10 : -20,
             borderRadius: Platform.OS == "ios" ? 25 : 30
            }}
           >
        
             <Foundation name="page-search" size={30} color="white" />
           </View>

              )
            }
          }}
          />
        <Tab.Screen 
          name="List" 
          component={List} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 {/* <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} /> */}
                 <MaterialIcons name="list" size={24}  color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>List</Text>
            </View>
              )
            }
          }}
          />
        <Tab.Screen name='Settings' 
        component={Setting}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{ alignItems: "center", justifyContent: "center"}}>
              
              <Feather name="settings" size={24} color={focused ? "#16247d": "#111"} />
              <Text style={{fontSize: 12, color: '#16247d'}}>Settings</Text>
              </View>
            )
          }
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
