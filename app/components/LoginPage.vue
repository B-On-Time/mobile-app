<template>
    <Page>
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
                    class="login-label" @tap="forgotPassword" />
            </StackLayout>

            <Label class="login-label sign-up-label" fontSize="11" 
                text="Don't have an account? Please contact your administrator" @tap="toggleForm" />
            </FlexboxLayout>
    </Page>
</template>

<script>
    import Punch from './Punch'

    // A stub for a service that authenticates users.
    const userService = {
        login(user) {
            return Promise.resolve(user);
        },
        resetPassword(email) {
            return Promise.resolve(email);
        }
    };

    export default {
        data() {
            return {
                user: {
                    email: "",
                    password: ""
                }
            };
        },
        methods: {
            submit() {
                if (!this.user.email || !this.user.password) {
                    this.alert(
                        "Please provide both an email address and password."
                    );
                    return;
                }
                else {
                    this.login();
                }
            },

            login() {
                userService
                    .login(this.user)
                    .then(() => {
                        this.$navigateTo(Punch);
                    })
                    .catch(() => {
                        this.alert(
                            "Unfortunately we could not find your account."
                            );
                    });
            },

            forgotPassword() {
                prompt({
                    title: "Forgot Password",
                    message: "Enter the email address you used to register for B-On-Time to reset your password.",
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
</style>