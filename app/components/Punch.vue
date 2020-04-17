<template>
    <Page>
        <ActionBar title="Dashboard" />
        <ScrollView>
            <StackLayout class="dash-panel">
                <Label text="Welcome" class="welcome" />
                <Button text="Punch In" @tap="onPunchIn"
                    class="-primary -rounded-lg" :isEnabled="punchToggle"/>
                <Button text="Punch Out" @tap="onPunchOut"
                    class="-primary -rounded-lg" :isEnabled="!punchToggle" />
                <Button text="Kiosk Mode" v-if="kioskUser" @tap="onKioskMode"
                    class="-primary -rounded-lg" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Kiosk from './Kiosk'

    export default {
        methods: {
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
                schedules: [1,2,3,4,5,6,7,8,9,10],
                kioskUser: true
            };
        }
    };
</script>

<style scoped>
    .dash-panel {
        font-size: 20;
        margin: 35;
    }
    .welcome {
        font-size: 25;
        font-weight: 600;
        margin-bottom: 45;
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
</style>