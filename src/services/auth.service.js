import axios from 'axios';
import { ACCESS_TOKEN } from '../helpers/LocalStorageTypes'

// const createSetAuthInterceptor = () => config => {

//   if (AuthService.accessToken) {
//     config.headers.Authorization = `Bearer ${AuthService.accessToken}`
//   }

//   return config;
// };


// const setAuthCb = createSetAuthInterceptor();
// axios.interceptors.request.use(setAuthCb);



export default class AuthService {

  static BASE_URL = 'http://ideadeploy.space/test'
  static _accessToken = localStorage.getItem(ACCESS_TOKEN)
  static customAxiosInstance = axios.create()


  static set accessToken(value) {
    localStorage.setItem(ACCESS_TOKEN, value)
    AuthService._accessToken = value
  }


  static get accessToken() {
    return AuthService._accessToken
  }

  /*
    Метод для логина пользвателя
    Возвращает юзернейм в случае успеха
    Либо же выбрасывает ошибку
  */

  static async signin(username, password) {

    const userCredentials = {
      username,
      password
    }

    const result = await axios.post(`${this.BASE_URL}/login.json`, userCredentials)
    const accessToken = result.data.token

    AuthService.saveToken(accessToken)
    return result.data.login
  }

  static saveToken(accesToken) {
    AuthService.accessToken = accesToken
  }

  static isLoggedIn() {
    return AuthService.accessToken ? true : false
  }

}
