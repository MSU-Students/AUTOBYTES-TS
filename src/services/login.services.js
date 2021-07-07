const API_KEY = "AIzaSyA1Pl93no9tetztQNauyxqLBd_iFJmi6ug";
const CLIENT_ID =
  "619642775883-84t3mugadee3acqhhrh8i4agsdkgelf1.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/userinfo.profile";

class LoginService {
  constructor() {}

  onLoad() {
    let googleApi = document.createElement("script");
    googleApi.setAttribute("type", "text/javascript");
    googleApi.setAttribute("src", "https://apis.google.com/js/api.js");
    document.head.appendChild(googleApi);
    googleApi.onload = () => {
      gapi.load("client:auth2", this.initClient);
    };
    googleApi.onerror = () => {
      console.log("failed to load google API");
    };
  }

  initClient() {
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES
      })
      .then(
        function() {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus());

          // Handle the initial sign-in state.
          this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          authorizeButton.onclick = handleAuthClick;
          signoutButton.onclick = handleSignoutClick;
        },
        function(error) {
          console.log(JSON.stringify(error, null, 2));
        }
      );
  }


  async updateSigninStatus(isSignedIn) {
    console.log(await isSignedIn.get());
    if (isSignedIn) {
      authorizeButton.style.display = "none";
      signoutButton.style.display = "block";
    } else {
      authorizeButton.style.display = "block";
      signoutButton.style.display = "none";
    }
  }

  async signIn() {
    return new Promise(async (resolve, reject) => {
      try {
        const authInfo = await gapi.auth2.getAuthInstance().signIn();
        console.log(authInfo.get());
        resolve(authInfo);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  async singOut() {
    return new Promise((resolve, reject) => {
      try {
        const authInfo = gapi.auth2.getAuthInstance().singOut();
        resolve(authInfo);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

let loginService = new LoginService();
export default loginService;
