import "../styles/globals.css";
import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOnsicGhvbmVOdW1iZXJXaXRob3V0UGx1cyI6IjkyMzEwNzgwODgzMyJ9LCJpYXQiOjE2NDk5NDc1OTB9.DprOv7_IQfWDN-kfaeURfjvSOuHqQhfBCPwkvRXG_lE";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
