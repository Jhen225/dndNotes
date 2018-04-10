import { AsyncStorage } from 'react-native';
import axios from 'axios';

export const TOKEN = "sometokenfromserver";

export const onSignIn = AsyncStorage.setItem(TOKEN, TOKEN);
// export const onSignIn = function () {
//   return new Promise((resolve, reject) => {
//     axios.get()
//       .then(res => res.json())
//       .then(data => {
//         if (!data.success || !data.token) {
//           resolve(false);
//         } else {
//           AsyncStorage.setItem(TOKEN, TOKEN)
//             .then(() => resolve(true))
//             .catch(err => reject(err));
//         }
//       });
//   });
//   AsyncStorage.setItem(TOKEN, TOKEN)
//   console.log("signing in")
// }

export const onSignOut = AsyncStorage.removeItem(TOKEN);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(TOKEN)
      .then(res => res !== null ? resolve(true) : resolve(false))
      .catch(err => reject(err));
  });
}

