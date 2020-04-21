<template>
    <Page @loaded="onLoaded" @navigatedFrom="onNavigate">
        <ActionBar class="action-bar">
	   <GridLayout rows="*" columns="2*,*" >
	      <Label row="0" col="0" class="action-bar" text="Kiosk Mode" />
	      <Label row="0" col="1" class="action-bar-logout" text="Log out" @tap="onTap" />
	   </GridLayout>
	</ActionBar>
        <ScrollView>
            <StackLayout class="form">
            <Label class="header" text="Please enter your PIN number:" />
             <StackLayout class="input-field" marginBottom="25">
                    <TextField class="input" hint="PIN"
		               v-model="user.pin" maxLength="4"
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
    // import { android, AndroidApplication } from 'tns-core-modules/application'
    // import { isAndroid } from 'tns-core-modules/platform'
    const Frame = require("tns-core-modules/ui/frame").Frame;

    import Punch from './Punch'
    import Logout from './LoginPage'
    const axios = require("axios")

    export default {
        props: ['currrentUser'],

        data() {
            return {
                user: {
                    pin: ""
                }
            };
        },

        methods: {

	    onTap() {
	        this.$navigateTo(Logout);
	    },
	    
        onLoaded() {
            // console.log('kiosk page currentUser: ' + this.currentUser)
            // this.prevent = true;
            // android.on(AndroidApplication.activityBackPressedEvent, this.backButton);
        },

        onNavigate() {
            // this.prevent = false;
            // android.off(AndroidApplication.activityBackPressedEvent, this.backButton);
        },

	    backButton(args) {
	    //    if(this.prevent)
	    //       args.cancel = true;

	    //    console.log("Back button pressed.");
	    },

        login() {
            console.log('logging in...')
            
            if(user.pin == '')
            {
                this.alert('Please enter a PIN')
            }
            else
            {
                // this.$navigateTo(Punch, {
                //     props: {
                //         currentUser: {
                //             apikey: this.currentUser.apikey,
                //             firstName: this.currentUser.firstName,
                //             lastName: this.currentUser.lastName,
                //             isAdmin: this.currentUser.isAdmin,
                //             username: this.currentUser.username
                //         }
                //     }
                // })

                // this.user.pin = "";
                this.$navigateTo(Punch, {
                    props: {
                        currentUser: {
                            firstName: "Abdool"
                        }
                    }
                });
            }

            // userService
            // .login(this.user)
            // .then(() => {
            //     this.user.pin = "";
            //     this.$navigateTo(Punch, {
            //         props: {
            //             currentUser: {
            //                 name: "Ernesto Perez Pozo",
            //                 kiosk: true
            //             }
            //         }
            //     });
            // })
            // .catch(() => {
            //     this.alert(
            //         "PIN does not exist. Please try again."
            //     );
            // });
        }
	},

};
</script>

<style scoped>
    .header {
        font-size: 20;
        font-weight: 400;
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
        background-color: #2e5cb8;
	font-size: 24;
	font-weight: 400;
	vertical-align: center;
	text-align: right;
    }

    .action-bar-logout {
    	vertical-align: center;
    	font-size: 18;
	font-weight: 350;
	text-align: right;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 35;
	text-align: center;
    }

    Page {
    	background: rgb(2,0,36);
	background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(22,14,75,1) 0%, rgba(0,204,255,1) 100%);
    }

</style>