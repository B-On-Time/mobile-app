<template>
    <Page @loaded="onLoaded" actionBarHidden="true" >
        <ScrollView>
            <StackLayout class="dash-panel">
		    <Label :text="'Welcome, ' + currentUser.firstName" class="welcome" />
                <Button text="Punch In" @tap="onPunchIn"
                    class="-primary -rounded-lg" :isEnabled="punchToggle"/>
                <Button text="Punch Out" @tap="onPunchOut"
                    class="-primary -rounded-lg" :isEnabled="!punchToggle" />
                <Button text="Kiosk Mode" v-if="currentUser.isAdmin" @tap="onKioskMode"
                    class="-primary -rounded-lg" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Kiosk from './Kiosk'
    var dialogs = require("tns-core-modules/ui/dialogs");
    const axios = require("axios");

    export default {
        props: ['currentUser'],
        
        methods: {

            onLoaded() {
                console.log(this.currentUser);
            },

            getDate() {
                var d = new Date();

                var ymd = d.toISOString().split('T')[0]
                this.eventDate = ymd

                var h = d.getHours();
                var hours = (h+24)%24; 
                var mid='am';
                if(hours==0)
                {
                    hours=12;
                }
                else if(hours>12)
                {
                    hours=hours%12;
                    mid='pm';
                }
                if(hours<10)
                {
                    hours='0'+hours
                }
                var hmid = hours + ':' + d.getMinutes() + " " + mid
                this.entryTime = hmid

                return hmid + ' ' + ymd;
            },

            onPunchIn() {

                console.log('clocking in....')

                this.punchToggle = !this.punchToggle

                var instance = axios.create({
                    timeout: 10000,
                    headers: { "Content-Type": "application/json", 'X-ApiToken': this.currentUser.apikey },
                    withCredentials: true
                });

                var message = this.getDate().toString();

                var reqObj = {
                    eventDate: this.eventDate.toString(),
                    entryTime: this.entryTime.toString(),
                    punchType: "WORK",
                    notes:""
                };

                console.log(reqObj)

                instance.post('https://api.crabrr.com/clock/in', reqObj)
                    .then( (response) => {
                        console.log(response)
                        dialogs.alert({
                            title: "Punched in:",
                            message: message,
                            okButtonText: "OK"
                        }).then(function () {
                            console.log("Dialog closed!");
                        });
                    })
                    .catch( (error) => {
                        console.log(error)
                    })
            },

            onPunchOut() {
                
                console.log('clocking out....')

                this.punchToggle = !this.punchToggle

                var instance = axios.create({
                    timeout: 10000,
                    headers: { "Content-Type": "application/json", 'X-ApiToken': this.currentUser.apikey},
                    withCredentials: true
                });

                var message = this.getDate().toString();

                var reqObj = {
                    eventDate: this.eventDate.toString(),
                    entryTime: this.entryTime.toString(),
                    punchType: "WORK",
                    notes:""
                };

                instance.post('https://api.crabrr.com/clock/out', reqObj)
                    .then( (response) => {
                        console.log(response)
                        dialogs.alert({
                            title: "Punched Out:",
                            message: message,
                            okButtonText: "OK"
                        }).then(function () {
                            console.log("Dialog closed!");
                        });
                    })
                    .catch( (error) => {
                        console.log(error)
                    })
            },

            onKioskMode() {
                console.log("Entering Kiosk mode...");
                this.$navigateTo(Kiosk);
            }
        },
        
        data() {
            return {
                punchToggle: true,
                eventDate: ""
            };
        }
    };
</script>

<style scoped>
    .dash-panel {
        font-size: 20;
        margin: 35;
	    vertical-align: center;
    }

    .welcome {
        font-size: 25;
        font-weight: 600;
        margin-bottom: 15;
        text-align: center;
        color: white;
    }

    .schedule {
        font-size: 25;
        font-weight: 600;
        margin-top: 45;
        margin-bottom: 45;
        text-align: center;
        color: white;
    }

    /* Page {
    	background: rgb(2,0,36);
	    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(22,14,75,1) 0%, rgba(0,204,255,1) 100%);
    } */
</style>