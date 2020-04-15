<template>
    <Page>
        <ActionBar title="Dashboard" />
        <ScrollView>
            <StackLayout class="dash-panel">
                <Label text="Welcome" class="welcome" />
                <Button text="Punch In!" @tap="onPunchIn"
                    class="-primary -rounded-lg" :isEnabled="punchToggle"/>
                <Button text="Punch Out!" @tap="onPunchOut"
                    class="-primary -rounded-lg" :isEnabled="!punchToggle" />
                <Label text="My Schedule" class="schedule" />
                <ListView class="list-group" for="schedule in schedules" style="height:1000px">
                    <v-template>
                        <FlexboxLayout flexDirection="row" class="list-group-item">
                            <Label text="schedule examples..." style="width: 60%" />
                        </FlexboxLayout>
                    </v-template>
                </ListView>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    export default {
        methods: {
            onPunchIn() {
                this.punchToggle = !this.punchToggle
                console.log("You have punched in");
            },

            onPunchOut() {
                this.punchToggle = !this.punchToggle
                console.log("You have punched out");
            }
        },
        
        data() {
            return {
                punchToggle: true,
                schedules: [1,2,3,4,5,6,7,8,9,10]
            };
        }
    };
</script>

<style scoped>
    .dash-panel {
        /* vertical-align: center; */
        font-size: 20;
        margin: 35;
    }
    .welcome {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 45;
        text-align: center;
        color: white;
    }
    .schedule {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-top: 45;
        margin-bottom: 45;
        text-align: center;
        color: white;
    }
</style>