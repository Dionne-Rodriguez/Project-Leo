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
        <ion-card-subtitle>height: {{height}}</ion-card-subtitle>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { HealthKit } from '@awesome-cordova-plugins/health-kit'
import { defineComponent, onMounted, computed } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard },
  setup() {
const healthKit = HealthKit
var height = "no data"
// const isAuthorized


// function available () {
//  return healthKit.available()
// }

// function requestAuthorization () {
//   const returnedValue = healthKit.requestAuthorization({requestReadPermission: true});
//   console.log(returnedValue)
//  return returnedValue
// }

const options = {
  readTypes:['HKQuantityTypeIdentifierHeight', 'HKQuantityTypeIdentifierWeight'],
  writeTypes:['HKQuantityTypeIdentifierHeight', 'HKQuantityTypeIdentifierWeight']
}

  function loadHealthData() {
   healthKit.readHeight({unit: "ft"}).then(val => {
     height = val.value
   })
  }
onMounted(() => {
return healthKit.available().then(available => {
if(available){
  healthKit.requestAuthorization(options).then(_ => {
    loadHealthData()
  })
}else{
  console.log("Apple Health Kit not available on this device")
}
})
});
return {height}
  },
});
</script>
