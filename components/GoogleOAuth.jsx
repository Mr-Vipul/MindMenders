import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
// import { useJwt } from "react-jwt";
import jwt_decode from "jwt-decode";

function GoogleOAuth (){
  return(
    <GoogleOAuthProvider clientId="408993120695-sbhls95d5moo4mrlsthetak8vcmtd51h.apps.googleusercontent.com">
            <GoogleLogin
            onSuccess={credentialResponse => {
              const decoded = jwt_decode(credentialResponse.credential);
              console.log(decoded);
            }}
            onError={() => {
           console.log('Login Failed');
            }}
            />;
    </GoogleOAuthProvider>
  )
}
export default GoogleOAuth ;