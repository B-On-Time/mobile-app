<template>
    <Page @loaded="onLoaded" @navigatedFrom="onNavigate">
        <ActionBar class="action-bar">
	   <Label class="action-bar" text="Kiosk Mode" />
	</ActionBar>
        <ScrollView>
            <StackLayout class="form">
            <Label class="header" text="Please enter your PIN number:" />
             <StackLayout class="input-field" marginBottom="25">
                    <TextField class="input" hint="PIN" v-model="user.pin" maxLength="4"
		    	       :text="user.pin" @returnPress="login" secure="true"
			       autocorrect="false" autocapitalizationType="none"
			       keyboardType="number" />
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
	        this.prevent = true;
                android.on(AndroidApplication.activityBackPressedEvent, this.backButton);
            },

            onNavigate() {
	        this.prevent = false;
                android.off(AndroidApplication.activityBackPressedEvent, this.backButton);
            },

	    backButton(args) {
	       if(this.prevent)
	          args.cancel = true;

	       console.log("Back button pressed.");
	    },

            login() {
                console.log('logging in...')
                userService
                    .login(this.user)
                    .then(() => {
		    	this.user.pin = "";
                        this.$navigateTo(Punch, {
			      props: {
			         currentUser: {
				   name: "Ernesto Perez Pozo",
				   kiosk: true
				 }
			      }
			   });
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
	        prevent: true,
                user: {
                    pin: ""
                }
            };
        }
    };
</script>

<style scoped>
    .header {
        font-size: 20;
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

    .action-bar {
        background-color: #4f39dd;
	font-size: 25;
	font-weight: 400;
    }

    .input-field {
        margin-bottom: 25;
    }
    .input {
        font-size: 40;
	text-align: center;
    }
    .input-field .input {
        font-size: 54;
    }

    Page {
    	background: rgb(2,0,36);
	background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(22,14,75,1) 0%, rgba(0,204,255,1) 100%);
    }

</style>