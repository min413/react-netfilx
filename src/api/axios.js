import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "27f6e4c7430164358c68866ff73149ae",
    language: "ko-KR",
  },
});

export default instance;