import steam from "./../../assets/menus/steam.png";
import xbox from "./../../assets/menus/xbox.png";
import switchLogo from "./../../assets/menus/switch.png";
import ios from "./../../assets/menus/ios.png";
import epic from "./../../assets/menus/epic.png";
import ps4 from "./../../assets/menus/ps4.png";
import android from "./../../assets/menus/android.png";

export default {
  KINDE_ISSUER_URL: "https://scanner.kinde.com",
  KINDE_POST_CALLBACK_URL: "exp://192.168.1.36:8081",
  KINDE_POST_LOGOUT_REDIRECT_URL: "exp://192.168.1.36:8081",
  KINDE_CLIENT_ID: "6bef99a481094d708bd4f7c2dc34781e",
};

export const platforms = [
  { title: "Epic Games", src: epic },
  { title: "steam", src: steam },
  { title: "ps4", src: ps4 },
  { title: "xbox-one", src: xbox },
  { title: "switch", src: switchLogo },
  { title: "android", src: android },
  { title: "ios", src: ios },
];
