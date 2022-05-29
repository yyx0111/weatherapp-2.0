import axios from "axios";
//得到七天天气
export function getNow_Weather(locations){
    return axios.get("https://yiketianqi.com/api?unescape=1&version=v1&appid=85841439&appsecret=EKCDLT4I&city="+locations+"")
}
//得到某城市天气
export function getCity(locations){
    return axios.get("https://www.tianqiapi.com/free/day?appid=56761788&appsecret=ti3hP8y9&city="+locations+"")
}