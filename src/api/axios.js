import axios from "axios";

export default axios.create({
  baseURL: "https://api.vitcarellc.com/",
  // baseURL: "http://vapi.local/",
});
