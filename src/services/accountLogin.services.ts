// const API_KEY = "AIzaSyA1Pl93no9tetztQNauyxqLBd_iFJmi6ug"
// const CLIENT_ID =
//     "619642775883-84t3mugadee3acqhhrh8i4agsdkgelf1.apps.googleusercontent.com";
// const SCOPE = "https://www.googleapis.com/auth/userinfo.profile";
// let GoogleAuth: any = undefined;
// let gapi: any = undefined;
// class accountLogin {

//     async handleClientLoad() {
//         // Load the API's client and auth2 modules.
//         // Call the initClient function after the modules load.
//         gapi.load('client:auth2', this.initClient);
//     }

//     async initClient() {
//         // In practice, your app can retrieve one or more discovery documents.
//         var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

//         // Initialize the gapi.client object, which app uses to make API requests.
//         // Get API key and client ID from API Console.
//         // 'scope' field specifies space-delimited list of access scopes.
//         gapi.client.init({
//             'apiKey': 'YOUR_API_KEY',
//             'clientId': 'YOUR_CLIENT_ID',
//             'discoveryDocs': [discoveryUrl],
//             'scope': SCOPE
//         }).then(function () {
//             GoogleAuth = gapi.auth2.getAuthInstance();

//             // Listen for sign-in state changes.
//             GoogleAuth.isSignedIn.listen(updateSigninStatus());

//             // Handle initial sign-in state. (Determine if user is already signed in.)
//             var user = GoogleAuth.currentUser.get();
//             user.setSigninStatus();

//             // Call handleAuthClick function when user clicks on
//             //      "Sign In/Authorize" button.
//             $('#sign-in-or-out-button').click(function ())
//             $('#revoke-access-button').click(function () {
//                 revokeAccess();
//             });
//         });
//     }

//     async handleAuthClick() {
//         if (GoogleAuth.isSignedIn.get()) {
//           // User is authorized and has clicked "Sign out" button.
//           GoogleAuth.signOut();
//         } else {
//           // User is not signed in. Start Google auth flow.
//           GoogleAuth.signIn();
//         }
//       }
    
//       revokeAccess() {
//         GoogleAuth.disconnect();
//       }

//       async setSigninStatus() {
//         var user = GoogleAuth.currentUser.get();
//         var isAuthorized = user.hasGrantedScopes(SCOPE);
//         // if (isAuthorized) {
//         //   $('#sign-in-or-out-button').html('Sign out');
//         //   $('#revoke-access-button').css('display', 'inline-block');
//         //   $('#auth-status').html('You are currently signed in and have granted ' +
//         //       'access to this app.');
//         // } else {
//         //   $('#sign-in-or-out-button').html('Sign In/Authorize');
//         //   $('#revoke-access-button').css('display', 'none');
//         //   $('#auth-status').html('You have not authorized this app or you are ' +
//         //       'signed out.');
//         // }
//       }

//       async updateSigninStatus() {
//         this.setSigninStatus();
//       }
// }