<template>
    <ion-page class="imageBackground">
      <ion-grid >
        <!-- <ion-row class="ion-justify-content-center">
          <ion-button fill="clear" color="clear" router-link="/GettingStarted/OnboardingFive" class="select-all">Select all</ion-button>
        </ion-row> -->
  
        <ion-row class="ion-justify-content-center">
          <ion-button  fill="clear" color="clear" router-link="/Goals/WhatMotivatesYou" class="bottom-button">Continue -> </ion-button>
        </ion-row>
        <!-- <ion-row class="ion-justify-content-center"> 
          <ion-button>Walk more </ion-button>
        </ion-row>
  
        <ion-row class="ion-justify-content-center">
          <ion-button>Manage diabetes</ion-button>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-button>Quit smoking </ion-button>
         </ion-row>
         <ion-row class="ion-justify-content-center">
          <ion-button>View All</ion-button> -->
         <!-- </ion-row> -->
      </ion-grid>
    </ion-page>
    </template>
    <style lang="scss" >
    .select-all{
      position: absolute;
       top: 330px;
       width: 91%;
       left: 20px;
       opacity:0%;
    }
  
    .bottom-button{
       position: absolute;
       bottom: 50px;
       width: 91%;
       left: 20px;
       opacity:0%;
       border-radius: 10px;
     }
     .ion-page{
       background: url('../images/HowMuchDoYouWalk.png') no-repeat center center / cover;
       &::part(background) {
         background: url('../images/HowMuchDoYouWalk.png') no-repeat center center / cover;
     }
   }
     
  </style> 
  <script lang="js">
  import 
  { IonPage, 
  IonButton,
  IonGrid,
  } 
    from '@ionic/vue';
  import { defineComponent, onMounted, computed} from 'vue';
  
  export default  defineComponent({
  name: "home-page",
  components: { 
  IonPage,
  IonButton,
  IonGrid,
  }
  })
  </script>
  