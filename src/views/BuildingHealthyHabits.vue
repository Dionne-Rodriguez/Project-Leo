<template>
  <ion-page >
    <ion-grid >
       <ion-row class="ion-justify-content-center">
        <ion-button>View All</ion-button>
       </ion-row>
    </ion-grid>
  </ion-page>
  </template>
  <style lang="scss" >
      .ion-page{
        background: url('../images/image1.png') no-repeat center center / cover;
        &::part(background) {
          background: url('../images/image1.png') no-repeat center center / cover;
      }
    }
      
</style> 
  <script lang="js">
import 
{ IonPage, 
  IonButton,
  IonGrid,
   IonRow 
 } 
     from '@ionic/vue';
import { defineComponent, onMounted, computed} from 'vue';

export default  defineComponent({
 name: "getting-started",
 components: { 
  IonPage,
  IonButton,
  // IonContent,
  IonGrid, IonRow 
  // ,IonImg
  //  VueStepper
  },
 setup(){

  var steps = [
    { label: 'step1' },
    { label: 'step2' },
    { label: 'step3' },
    { label: 'step4' },
    { label: 'step5' }]

  onMounted(() => {
    console.log("hi")
  });

  return {steps}
  
 },
  
 
  })
  </script>
  