<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header>
        <ion-toolbar>
          <ion-title
            style="font-size: 34px; color: #5c9a1b; padding-bottom: 16px;"
            >Home</ion-title
          >
          
        </ion-toolbar>
      </ion-header>
      <NotificationsView />

      <ion-text>
        <h2
          style="
            border-bottom: 1px solid grey;
            color: #114a21;
            padding-left: 10px;
            padding-bottom: 5px;
          "
        >
          My Priorities
        </h2>
      </ion-text>
      <ion-card>
        <ion-card-content>
          <ion-grid>
            <ion-row class="ion-align-items-center">
              <ion-col size="auto">
                <img name="heart" src="./../assets/heart.png" />
              </ion-col>
              <ion-col>
                <ion-card-title style="color: black; font-size: 24px"
                  >Active Heart Rate</ion-card-title
                >
                <ion-row> {{ bpm }} bpm </ion-row>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-grid>
            <ion-row class="ion-align-items-center">
              <ion-col size="auto">
                <img name="lung" src="./../assets/lung.png" />
              </ion-col>

              <ion-col>
                <ion-card-title style="color: black; font-size: 24px"
                  >Oxygen Saturation</ion-card-title
                >
                <ion-row>{{ oxygenSaturation }} sat</ion-row>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-grid>
            <ion-row class="ion-align-items-center">
              <ion-col size="auto">
                <img name="jog" src="./../assets/jog.png" />
              </ion-col>

              <ion-col>
                <ion-card-title style="color: black; font-size: 24px"
                  >Daily Steps</ion-card-title
                >
                <ion-row>{{ steps }} steps</ion-row>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import NotificationsView from "@/components/NotificationsView.vue";
import { HealthKit } from "@awesome-cordova-plugins/health-kit";
import { defineComponent, ref, onMounted } from "vue";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCol,
  IonGrid,
  IonRow,
  IonToolbar,
  IonText,
  IonHeader,
  IonTitle,
} from "@ionic/vue";

export default defineComponent({
  name: "Tab1Page",
  components: {
    NotificationsView,
    IonContent,
    IonPage,
    IonCard,
    IonCol,
    IonGrid,
    IonRow,
    IonToolbar,
    IonText,
    IonHeader,
    IonTitle,
  },
  setup() {
    const bpm = ref(0);
    const steps = ref(0);
    const oxygenSaturation = ref("");
    const healthKit = HealthKit;
    const options = {
      readTypes: [
        "HKQuantityTypeIdentifierStepCount",
        "HKQuantityTypeIdentifierHeartRate",
        "HKQuantityTypeIdentifierOxygenSaturation",
      ],
      writeTypes: [],
    };

    const checkHealthKit = async () => {
      if (healthKit) {
        const isAvailable = await healthKit.available();
        if (isAvailable) {
          console.log("available");
          const isAuthorized = await healthKit.checkAuthStatus({
            type: "HKQuantityTypeIdentifierHeartRate",
          });

          if (isAuthorized == "denied") {
            healthKit.requestAuthorization(options);
          }
          console.log("authorized", await isAuthorized);
          return true;
        }
      }
    };

    const getSteps = async () => {
      const isReady = await checkHealthKit();
      if (isReady) {
        healthKit
          .sumQuantityType({
            startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000), // three days ago
            endDate: new Date(), // now
            sampleType: "HKQuantityTypeIdentifierStepCount", // any HKQuantityType
            unit: "count", // make sure this is compatible with the sampleType
          })
          .then((data) => {
            steps.value = data;
          });
      }
    };

    const getOxygenSaturation = async () => {
      const isReady = await checkHealthKit();
      if (isReady) {
        healthKit
          .querySampleType({
            startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000), // three days ago
            endDate: new Date(), // now
            sampleType: "HKQuantityTypeIdentifierOxygenSaturation", // any HKQuantityType
            unit: "percent", // make sure this is compatible with the sampleType
          })
          .then((data) => {
            console.log(data, "response");

            oxygenSaturation.value = formatAsPercent(data[0].quantity);
          });
      }
    };

    const getBPM = async () => {
      const isReady = await checkHealthKit();
      if (isReady) {
        healthKit
          .querySampleTypeAggregated({
            startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000), // three days ago
            endDate: new Date(), // now
            aggregation: "day",
            sampleType: "HKQuantityTypeIdentifierHeartRate", // any HKQuantityType
            unit: "count/min", // make sure this is compatible with the sampleType
          })
          .then((data) => {
            console.log(data, "response");

            bpm.value = Math.trunc(data[0].quantity);
          });
      }
    };

    function formatAsPercent(num: number) {
      return num * 100 + "%";
    }

    onMounted(() => {
      console.log("mounted");
      getSteps();
      getBPM();
      getOxygenSaturation();
    });

    console.log(bpm, "final??????");

    return {
      bpm,
      getBPM,
      steps,
      getSteps,
      oxygenSaturation,
      getOxygenSaturation,
    };
  },
});
</script>
