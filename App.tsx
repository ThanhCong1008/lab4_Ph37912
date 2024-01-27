/* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {
//   FlatList,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
// } from 'react-native';

// type Contact = {
//   name: string;
//   email: string;
//   position: string;
//   photo: number; // Using number type for the photo
// };

// const contacts: Contact[] = [
//   {
//     name: 'Nguyen Van A',
//     email: 'john.doe@gmail.com',
//     position: 'Software Engineer',
//     photo: require('./assets/img/user.png'),
//   },
//   {
//     name: 'Nguyen Van B',
//     email: 'jane.smith@gmail.com',
//     position: 'UX Designer',
//     photo: require('./assets/img/user.png'),
//   },
//   {
//     name: 'Nguyen Van C',
//     email: 'bob.johnson@gmail.com',
//     position: 'Product Manager',
//     photo: require('./assets/img/user.png'),
//   },
//   {
//     name: 'Nguyen Van D',
//     email: 'bob.johnson@gmail.com',
//     position: 'Product Manager',
//     photo: require('./assets/img/user.png'),
//   },
//   {
//     name: 'Nguyen Van D',
//     email: 'bob.johnson@gmail.com',
//     position: 'Product Manager',
//     photo: require('./assets/img/user.png'),
//   },
// ];

// const ContactItem = ({contact}: {contact: Contact}) => (
//   <View style={styles.itemContainer}>
//     <Image source={contact.photo} style={styles.itemImage} />
//     <View style={styles.itemDetails}>
//       <Text style={styles.itemName}>{contact.name}</Text>
//       <Text style={styles.itemEmail}>{contact.email}</Text>
//       <Text style={styles.itemPosition}>{contact.position}</Text>
//     </View>
//   </View>
// );

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={contacts}
//         renderItem={({item}) => <ContactItem contact={item} />}
//         keyExtractor={item => item.email}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   itemImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 16,
//   },
//   itemDetails: {
//     flex: 1,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   itemEmail: {
//     fontSize: 14,
//     color: '#666',
//   },
//   itemPosition: {
//     fontSize: 14,
//     color: '#666',
//   },
// });

// export default App;

//bai 2

import React, {useState} from 'react';
import {
  ScrollView,
  RefreshControl,
  StatusBar,
  StatusBarStyle,
  Text,
} from 'react-native';

const App = () => {
  const [barStyle, setBarStyle] = useState<StatusBarStyle>('light-content');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Thay đổi màu status bar ở đây
    if (barStyle === 'light-content') {
      setBarStyle('dark-content');
    } else {
      setBarStyle('light-content');
    }

    // Kết thúc quá trình làm mới
    setRefreshing(false);
  };

  return (
    <ScrollView
      style={{backgroundColor: 'pink', paddingTop: '40%'}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <StatusBar
        barStyle={barStyle}
        translucent
        backgroundColor={'transparent'}
      />
      <Text style={{textAlign: 'center'}}>Kéo xuống để đổi màu status bar</Text>
    </ScrollView>
  );
};

export default App;

//bai 3

/* eslint-disable react-native/no-inline-styles */
// import React, {useState} from 'react';
// import {
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   View,
//   Platform,
// } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import LinearGradient from 'react-native-linear-gradient';

// const iconFacebook = require('./assets/img/ic_fb.png');
// const iconGoogle = require('./assets/img/ic_gg.png');
// const iconTwitter = require('./assets/img/ic_twitter.png');
// const iconUser = require('./assets/img/ic_user.png');
// const iconPassword = require('./assets/img/ic_lock.png');
// const iconEye = require('./assets/img/ic_eye.png');
// const iconEyeOff = require('./assets/img/ic_eye_off.png');

// const Login = () => {
//   const [checked, setChecked] = useState(false);
//   const [isPasswordShown, setIsPasswordShown] = useState(false);
//   return (
//     <View
//       style={{
//         backgroundColor: '#3498DB',
//         flex: 1,
//       }}>
//       <View
//         style={{
//           backgroundColor: 'white',
//           margin: 12,
//           flex: 1,
//           borderRadius: 17,
//           marginVertical: 32,
//         }}>
//         <View
//           style={{
//             flex: 1,
//             marginVertical: 20,
//           }}>
//           {/* header */}
//           <View
//             style={{
//               flex: 2,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text
//               style={{
//                 fontSize: 30,
//                 fontWeight: 'bold',
//                 color: 'black',
//               }}>
//               ĐĂNG NHẬP
//             </Text>
//           </View>
//           {/* body */}
//           <View
//             style={{
//               flex: 6,
//             }}>
//             <View
//               style={{
//                 margin: 30,
//               }}>
//               <View
//                 style={{
//                   marginBottom: 30,
//                 }}>
//                 <Text>Tên tài khoản</Text>
//                 <View style={styles.khungInputLogin}>
//                   <View style={styles.inputLogin}>
//                     <Image source={iconUser} />
//                   </View>
//                   <View
//                     style={{
//                       justifyContent: 'center',
//                     }}>
//                     <TextInput style={{}} placeholder="Nhập tên tài khoản" />
//                   </View>
//                 </View>
//               </View>
//               <View>
//                 <Text>Mật khẩu</Text>
//                 <View style={styles.khungInputLogin}>
//                   <View style={styles.inputLogin}>
//                     <Image source={iconPassword} />
//                   </View>
//                   <KeyboardAvoidingView
//                     style={styles.viewInput}
//                     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
//                     <TextInput
//                       secureTextEntry={isPasswordShown}
//                       placeholder="Nhập mật khẩu"
//                     />
//                     <TouchableOpacity
//                       onPress={() => setIsPasswordShown(!isPasswordShown)}
//                       style={{
//                         position: 'absolute',
//                         right: 50,
//                       }}>
//                       {isPasswordShown === true ? (
//                         <Image source={iconEyeOff} />
//                       ) : (
//                         <Image source={iconEye} />
//                       )}
//                     </TouchableOpacity>
//                   </KeyboardAvoidingView>
//                 </View>
//               </View>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   marginVertical: 10,
//                 }}>
//                 <CheckBox
//                   disabled={false}
//                   value={checked}
//                   onValueChange={newValue => setChecked(newValue)}
//                 />
//                 <Text
//                   style={{
//                     color: 'grey',
//                     marginLeft: 5,
//                   }}>
//                   Ghi nhớ mật khẩu
//                 </Text>
//               </View>
//               <TouchableOpacity
//                 style={{
//                   marginTop: 10,
//                   alignItems: 'flex-end',
//                 }}>
//                 <Text>Quên mật khẩu?</Text>
//               </TouchableOpacity>
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   marginVertical: 20,
//                 }}>
//                 <TouchableOpacity style={{width: '100%'}} activeOpacity={0.5}>
//                   <LinearGradient
//                     style={{
//                       padding: 10,
//                       borderRadius: 50,
//                       width: '100%',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                     }}
//                     colors={['#AED6F1', '#3498DB', '#2E86C1']}
//                     useAngle={true}
//                     angle={45}>
//                     <Text
//                       style={{
//                         color: 'white',
//                         fontWeight: 'bold',
//                       }}>
//                       ĐĂNG NHẬP
//                     </Text>
//                   </LinearGradient>
//                 </TouchableOpacity>
//               </View>
//             </View>
//             <View
//               style={{
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               <Text>Hoặc đăng ký bằng cách sử dụng</Text>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                 }}>
//                 <TouchableOpacity style={styles.btnLienHe}>
//                   <Image style={styles.iconLienHe} source={iconFacebook} />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btnLienHe}>
//                   <Image style={styles.iconLienHe} source={iconTwitter} />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btnLienHe}>
//                   <Image style={styles.iconLienHe} source={iconGoogle} />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//           {/* footer */}

//           <View
//             style={{
//               flex: 2,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text
//               style={{
//                 color: 'gray',
//               }}>
//               Bạn chưa có tài khoản?
//             </Text>
//             <TouchableOpacity
//               style={{
//                 padding: 20,
//               }}>
//               <Text
//                 style={{
//                   color: '#036ffc',
//                   fontWeight: 'bold',
//                 }}>
//                 Đăng ký
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   btnLienHe: {
//     width: 50,
//     height: 50,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 5,
//   },
//   iconLienHe: {
//     width: 50,
//     height: 50,
//   },
//   khungInputLogin: {
//     flexDirection: 'row',
//     borderBottomColor: 'grey',
//     borderBottomWidth: 1,
//   },
//   inputLogin: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//   },
//   viewInput: {
//     width: '100%',
//     justifyContent: 'center',
//   },
// });
