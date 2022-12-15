<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Health Kit Dashboard" />

      <!-- <ion-button @onclick="available">check health kit availability</ion-button>
      <ion-button @onclick="requestAuthorization">request permission</ion-button> -->

      <ion-card>
        <ion-card-header>
          <ion-card-title>Health info</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <!-- <ion-card-subtitle>bpm: {{ healthData.bpm }}</ion-card-subtitle> -->
          <ion-card-subtitle>steps: {{ data.steps }}</ion-card-subtitle>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { HealthKit } from "@awesome-cordova-plugins/health-kit";
import { defineComponent, onMounted, computed, reactive } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
// import { store } from "../helper.js";

export default defineComponent({
  name: "Tab1Page",
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCard,
  },
   setup() {
    const options = {
      readTypes: ["HKQuantityTypeIdentifierHeight"],
      writeTypes: [],
    };

      var data = reactive({})

     async function loadHealthData() {

      const step = await HealthKit.sumQuantityType({
        startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000), // three days ago
        endDate: new Date(), // now
        sampleType: "HKQuantityTypeIdentifierStepCount", // any HKQuantityType
        unit: "count", // make sure this is compatible with the sampleType
      }).then((val) => {
        return val;
      });

      return { step};
    }

    (async () => {
      await HealthKit.available().then(async(available) => {
        if (available) {
         await HealthKit.requestAuthorization(options).then(async(_) => {
           console.log(await loadHealthData(), "final")            

            console.log("successfully requested authorization");
          });
        } else {
          console.log("Apple Health Kit not available on this device");
        }
      });
    })();

console.log(data, "final??????");

    return {data};
  },
});
</script>
