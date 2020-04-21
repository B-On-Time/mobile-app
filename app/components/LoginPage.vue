<template>
    <Page actionBarHidden="true" >
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Label class="header" text="Welcome to B-On-Time" />

                <StackLayout class="input-field" marginBottom="25">
                    <TextField class="input" hint="Username"
                        autocorrect="false" autocapitalizationType="none"
                        v-model="user.username" returnKeyType="next"
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

  export default {
    props: ["currrentUser"],

    data() {
      return {
        user: {
          username: "",
          password: ""
        }
      };
    },

    methods: {

      submit() {

        if (!this.user.username || !this.user.password) 
        {
          this.alert("Please provide both an username and password.");
          return;
        } 
        else 
        {
          this.login();
        }

      },

      login() {
        
        var instance = axios.create({
          timeout: 10000,
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        });

        var reqObj = {
          username: "Administrator", 
          password: "123"
        };

        instance.post('https://api.crabrr.com/auth/apikey', reqObj)
            .then( (response) => {
                console.log(response.data)

                var apikey = response.data.result.apikey
                var isAdmin = false   // TODO: Check if admin using API call
                var firstName = 'Abdool'
                var lastName = 'Shakur'
                var username = this.user.username
                var auth = (apikey != null) ? true : false

                // TODO: For testing
                if(this.user.username == 'admin')
                {
                  isAdmin = true
                  firstName = 'Admin'
                }
                else
                {
                  isAdmin = false
                }

                if(auth)
                {
                  this.$navigateTo(Punch, {
                    props: {
                      currentUser: {
                        apikey: apikey,
                        firstName: firstName,
                        lastName: lastName,
                        isAdmin: isAdmin,
                        username: username
                      }
                    }
                  })
                }
                else 
                {
                  this.alert("Unfortunately we could not find your account.");
                }

            })
            .catch( (error) => {
              console.log(error)
            })
      },

      forgotPassword() {
        prompt({
          title: "Forgot Password",
          message:
            "Enter the username you used to register for B-On-Time to reset your password.",
          inputType: "username",
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