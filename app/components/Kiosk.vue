<template>
    <Page @loaded="onLoaded" @navigatingFrom="onNavigate">
        <ActionBar title="Kiosk Mode" />
        <ScrollView>
            <StackLayout class="form">
            <Label class="header" text="Please enter your employee PIN number:" />
             <StackLayout class="input-field" marginBottom="25">
                    <TextField class="input" hint="PIN" v-model="user.pin" @returnPress="login"
                        secure="true" autocorrect="false" autocapitalizationType="none" fontSize="18" />
                    <StackLayout class="hr-light" />
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import { android, AndroidApplication } from 'tns-core-modules/application'
    import { isAndroid } from 'tns-core-modules/platform'

    import Punch from './Punch'

    // A stub for a service that authenticates users.
    const userService = {
        login(user) {
            return Promise.resolve(user);
        }
    };

    export default {
        methods: {
            onLoaded() {
                android.on(AndroidApplication.activityBackPressedEvent,
                    function(args) {
                        args.cancel = true;
                        console.log("Back button pressed");
                });
            },

            onNavigate() {
                android.off(AndroidApplication.activityBackPressedEvent,
                    function(args) {
                        console.log("Back button pressed");
                });
            },

            login() {
                console.log('logging in...')
                userService
                    .login(this.user)
                    .then(() => {
                        this.$navigateTo(Punch);
                    })
                    .catch(() => {
                        this.alert(
                            "PIN does not exist. Please try again."
                            );
                    });
            }
	},

        data() {
            return {
                user: {
                    pin: ""
                }
            };
        }
    };
</script>

<style scoped>
    .header {
        font-size: 17;
        font-weight: 300;
        margin-bottom: 70;
        text-align: center;
    }
    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: top;
        margin-top: 150;
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
</style>