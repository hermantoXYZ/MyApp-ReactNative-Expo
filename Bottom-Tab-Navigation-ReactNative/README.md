# Component BOTTOM TAB NAVIGATION 

![gambar](https://github.com/hermantoXYZ/MyApp-ReactNative-Expo/blob/main/Bottom-Tab-Navigation-ReactNative/assets/pic1.png)

File App.js 
[FileApp.js](https://github.com/hermantoXYZ/MyApp-ReactNative-Expo/blob/main/Bottom-Tab-Navigation-ReactNative/App.js)

```
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
```