<template>
    <Page>
        <ActionBar title="Kiosk Mode" />
        <ScrollView>
            <StackLayout class="form">
            <Label class="header" text="Please enter your employee PIN number:" />
             <StackLayout class="input-field" marginBottom="25">
                    <TextField class="input" hint="PIN" v-model="user.pin"
                        autocorrect="false" autocapitalizationType="none" fontSize="18" />
                    <StackLayout class="hr-light" />
                </StackLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    export default {
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