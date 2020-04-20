<template>
    <Page actionBarHidden="true" >
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Label class="header" text="Welcome to B-On-Time" />

                <StackLayout class="input-field" marginBottom="25">
                    <TextField class="input" hint="Email" keyboardType="email"
                        autocorrect="false" autocapitalizationType="none"
                        v-model="user.email" returnKeyType="next"
                        @returnPress="focusPassword" fontSize="18" />
                    <StackLayout class="hr-light" />
                </StackLayout>

                <StackLayout class="input-field" marginBottom="25">
                    <TextField ref="password" class="input" hint="Password"
                        secure="true" v-model="user.password"
                        fontSize="18" />
                    <StackLayout class="hr-light" />
                </StackLayout>

                <Button text="Log In"
                    @tap="submit" class="btn btn-primary m-t-20" />
                <Label text="Forgot your password?"
                    class="login-label password" @tap="forgotPassword" />
            </StackLayout>

            <Label class="login-label sign-up-label" fontSize="11" 
                text="Don't have an account? Please contact your administrator" @tap="toggleForm" />
            </FlexboxLayout>
    </Page>
</template>

<script>
  import Punch from "./Punch";
  const axios = require("axios");

  const instance = axios.create({
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  });

  export default {
    props: ["currrentUser"],

    data() {
      return {
        user: {
          email: "",
          password: "",
          id: "",
          firstName: "",
          lastName: "",
          isAdmin: false
        }
      };
    },
    methods: {
      submit() {
        if (!this.user.email || !this.user.password) {
          this.alert("Please provide both an email address and password.");
          return;
        } else {
          this.login();
        }
      },

      login() {

        // =======================================TESTING CODE BLOCK============================================================

        // NOTE: test JSON Request to be sent to some API Endpoint
        // var jsonTmp = {
        //     "username": "Administrator",
        //     "password": "123"
        // }
        // const obj = instance.post('localhost:3030/auth/login/apikey.json', jsonTmp)
        // console.log(obj)
        
        // NOTE: test JSON Response to be received from some API Endpoint
        var res = {
          cookies: {
            jwt: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzBjNTA1ZWItNjY3MS00N2U2LWE4YTctOWQ3ZDdmY2NmMmI2IiwiZmlyc3RfbmFtZSI6IkRlZmF1bHQgQWRtaW4iLCJsYXN0X25hbWUiOiJVc2VyIiwiaWF0IjoxNTg3NDA5NTEwLCJleHAiOjE1ODc0OTU5MTAsImF1ZCI6WyJsb2NhbGhvc3QiXSwiaXNzIjoiQ09QNDMzMUFQSSJ9.X2OtVSkBCINyT8PTLGVQWMRgiaP4TlK5tochK-5Mh59WVQn7IunLoShFVR8tPYWazfB_igT4Mo8vKcWsIXBOMK2DK7wyYaITQckiTK4i35dTlswV_0hzISWUQ7iM1lJecEX8hDz4NOYI3cSiOkGkL2Yhc6jFhZNqYeyH-iu5hXIX0ughPaolt9DXVjDwOdPcAXwJgNIxLZZVqI9dcXqsdTAtFeC9jSyY1rrx5PbAobmqnleaUTRpyOHXH7YiUdHF8HCU_pNYi3VD7PNBA0CcNXA8Z6WoJD3OOo-E3uSyoA0EPP5sF8JdD1bOJ2QnfaHxE3I15H-Invix0WqErPqfLAUV2nSZlClGwaTPMF3IIt_J0qg75X6wZx66-bP1oCOJMtTbZxJld-NXcobp0W3rUeoJzZI50BS6LJ9rLc1AD1v4V_NHv-o2mxOQlWhKCUk21WT9UBiN06qxCvnj849xxjay00kcwU4Ql6Gpzm9F_5-_kLYhztay3zVG5Hd3hjQqrnF-Efu_KsK7oFvGq8ZgovRHyBseoFGHM-_0FXwULzICU4Ai5mYMt_kVaUqZhOL1fjnKOLcncF-KMvEK-QLQR92089lDv_HpUUoFP6HpQnDcdsDMYQbKsdobc_V-g0i9Afc7tXOmgmx3Q9j1zu4iaQ_1HA8fqxmnPEg6SIAYm68',
            userinfo: {
                "user_id":"70c505eb-6671-47e6-a8a7-9d7d7fccf2b6",
                "first_name":"Default Admin",
                "last_name":"User"
              }
          }
        }

        var jwt = res.cookies['jwt']
        var id = res.cookies['userinfo'].user_id
        var firstName = res.cookies['userinfo'].first_name
        var lastName = res.cookies['userinfo'].last_name

        console.log('jwt - ' + jwt)
        console.log('id - ' + id)
        console.log('first name - ' + firstName)
        console.log('last name - ' + lastName)

        var auth = true;
        this.firstName = firstName
        this.lastName  = lastName
        this.id = id

        // ========================================END TESTING CODE BLOCK=========================================================

        if (auth) {
          this.$navigateTo(Punch, {
            props: {
              currentUser: {
                name: this.firstName,
                id: this.id
              }
            }
          });
        } else {
          this.alert("Unfortunately we could not find your account.");
        }
      },

      forgotPassword() {
        prompt({
          title: "Forgot Password",
          message:
            "Enter the email address you used to register for B-On-Time to reset your password.",
          inputType: "email",
          defaultText: "",
          okButtonText: "Ok",
          cancelButtonText: "Cancel"
        }).then(data => {
          if (data.result) {
            userService
              .resetPassword(data.text.trim())
              .then(() => {
                this.alert(
                  "Your password was successfully reset. Please check your email for instructions on choosing a new password."
                );
              })
              .catch(() => {
                this.alert(
                  "Unfortunately, an error occurred resetting your password."
                );
              });
          }
        });
      },

      focusPassword() {
        this.$refs.password.nativeView.focus();
      },

      alert(message) {
        return alert({
          title: "B-On-Time",
          okButtonText: "OK",
          message: message
        });
      }
    }
  };
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .header {
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
    }
    .input-field {
        margin-bottom: 25;
    }
    .input {
        font-size: 18;
    }
    
    .input-field .input {
        font-size: 54;
    }

    .btn-primary {
        height: 50;
        margin: 30 5 15 5;
        color: white    ;
        background-color: green;
        border-radius: 5;
        font-size: 20;
        font-weight: 600;
    }

    .login-label {
        font-size: 16;
    }
    .sign-up-label {
        margin-bottom: 20;
    }

    .page {
    	background: rgb(2,0,36);
	    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(22,14,75,1) 0%, rgba(0,204,255,1) 100%);    
    }

    .password {
       horizontal-align: center;
    }

</style>