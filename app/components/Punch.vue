<template>
    <Page @loaded="onLoaded" actionBarHidden="true" >
        <ScrollView>
            <StackLayout class="dash-panel">
                <Label text="Welcome!" class="welcome" />
		<Label :text="currentUser.name" class="welcome" />
                <Button text="Punch In" @tap="onPunchIn"
                    class="-primary -rounded-lg" :isEnabled="punchToggle"/>
                <Button text="Punch Out" @tap="onPunchOut"
                    class="-primary -rounded-lg" :isEnabled="!punchToggle" />
                <Button text="Kiosk Mode" v-if="currentUser.kiosk" @tap="onKioskMode"
                    class="-primary -rounded-lg" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Kiosk from './Kiosk'

    export default {
    	props: ['currentUser'],
        methods: {
	    onLoaded() {
	       console.log(this.currentUser);
	    },

            onPunchIn() {
                this.punchToggle = !this.punchToggle
                console.log("You have punched in");
            },

            onPunchOut() {
                this.punchToggle = !this.punchToggle
                console.log("You have punched out");
            },

            onKioskMode() {
                console.log("Entering Kiosk mode...");
                this.$navigateTo(Kiosk);
            }
        },
        
        data() {
            return {
                punchToggle: true,
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

    Page {
    	background: rgb(2,0,36);
	background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(22,14,75,1) 0%, rgba(0,204,255,1) 100%);
    }
</style>