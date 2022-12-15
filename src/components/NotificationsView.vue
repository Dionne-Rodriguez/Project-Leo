<template>
  <div id="container">
      <ion-toolbar>
        <ion-text>
            <h2 style='border-bottom: 1px solid grey; color: #114A21; padding-left: 10px; padding-bottom: 5px'> Notifications </h2>
            </ion-text>
        <ion-card>
          <ion-card-content>
            <ion-grid>
              <ion-row class="ion-align-items-top padding-top:10px;">
                <ion-col size="auto">
                  <img name="heart" src="./../assets/notification.png" />
                </ion-col>
                <ion-col>
                  <ion-card-title style="color: black; font-size: 24px"
                    >Let's get you motivated</ion-card-title
                  >
                  <ion-row>
                    <ion-text style="font-size: 16px; padding-top:17px; padding-bottom: 15px;">
                      Tell us more about your motivation and goals and earn more
                      for monitoring your health
                    </ion-text>
                  </ion-row>
                    <ion-button style="color:white; font-size:19px;" expand="block"> Set a goal</ion-button>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>
      </ion-toolbar>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonCard,
  IonCol,
  IonGrid,
  IonRow,
  IonButton,
  IonToolbar,
  IonText,
} from "@ionic/vue";

export default defineComponent({
  name: "NotificationsView",
  components: {
    IonCard,
    IonCol,
    IonGrid,
    IonRow,
    IonButton,
    IonToolbar,
    IonText,
  },
});
</script>

<style></style>
