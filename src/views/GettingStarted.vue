<template>
  <ion-page class="imageBackground">
    <ion-grid >
      <!-- <ion-row>1</ion-row>
      <ion-row>2</ion-row>
      <ion-row>3</ion-row>
      <ion-row>4</ion-row>
      <ion-row>5</ion-row>
      <ion-row>6</ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-button expand>Continue -> </ion-button>
      </ion-row>
      <ion-row class="ion-justify-content-center"> 
        <ion-button expand>Walk more </ion-button>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-button expand>Attend a fitness class </ion-button>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-button expand>Manage diabetes</ion-button>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-button expand>Quit smoking </ion-button>
       </ion-row> -->
       <!-- <ion-row class="ion-justify-content-center"> -->
        <ion-button [routerLink]="['/tabs/tab2']" class="bottom-button"
      expand>View All</ion-button>
       <!-- </ion-row> -->
    </ion-grid>
  </ion-page>
  </template>
  <style lang="scss" >
      .bottom-button{
        position: absolute;
        bottom: 50px;
        width: 91%;
        left: 20px;
        // background-color: #5C9A1B;
        color:white;
        border-radius: 10px;
      }
      .ion-page{
        background: url('../images/test.png') no-repeat center center / cover;
        &::part(background) {
          background: url('../images/test.png') no-repeat center center / cover;
      }
    }
      
</style> 
  <script lang="js">
import 
{ IonPage, 
  IonButton,
  IonGrid,
  //  IonRow 
 } 
     from '@ionic/vue';
import { defineComponent, onMounted, computed} from 'vue';

export default  defineComponent({
 name: "getting-started",
 components: { 
  IonPage,
  IonButton,
  // IonContent,
  IonGrid,
  //  IonRow 
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
  