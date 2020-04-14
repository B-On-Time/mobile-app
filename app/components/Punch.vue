<template>
    <Page>
        <ActionBar title="Dashboard" />
        <ScrollView>
            <StackLayout class="dash-panel">
                <Label text="Welcome" class="m-b-20" />
                <Button text="Punch In!" @tap="onButtonTap"
                    class="-primary -rounded-lg" />
                <Button text="Punch Out!" @tap="onButtonTap"
                    class="-primary -rounded-lg" isEnabled="false" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    export default {
        methods: {
            onButtonTap() {
                console.log("Button was pressed");
            }
        },
        
        data() {
            return {};
        }
    };
</script>

<style scoped>
    .dash-panel {
        /* vertical-align: center; */
        font-size: 20;
        margin: 35;
    }
</style>