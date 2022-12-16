<template>
  <ion-page class="imageBackground">
    <ion-grid >
      <ion-row class="ion-justify-content-center">
        <ion-button fill="clear" color="clear" router-link="/Goals/HowMuchDoYouWalk" class="select-all">Select all</ion-button>
      </ion-row>

      <ion-row class="ion-justify-content-center">
        <ion-button  fill="clear" color="clear" router-link="/home1" class="bottom-button">Continue -> </ion-button>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-button  fill="clear" color="clear" router-link="/homePage" class="home">Continue -> </ion-button>
        <ion-button  fill="clear" color="clear" router-link="/Rewards/Rewards" class="rewards">Continue -> </ion-button>
        <ion-button  fill="clear" color="clear" router-link="/Goals/ActiveGoals" class="goals">Continue -> </ion-button>
        <ion-button  fill="clear" color="clear" router-link="/home1" class="my-doctors">Continue -> </ion-button>

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
     top: 290px;
     width: 91%;
     left: 20px;
     opacity:0%;
  }
  .home{
       position: absolute;
       width:100px;
       bottom: 30px;
       left: 0px;
       opacity:0%;
       border-radius: 10px;
     }
     .rewards{
       position: absolute;
       width:100px;
       bottom: 30px;
       left: 100px;
       opacity:0%;
       border-radius: 10px;
     }
     .goals{
       position: absolute;
       width:100px;
       bottom: 30px;
       left: 200px;
       opacity:0%;
       border-radius: 10px;
     }
     .my-doctors{
       position: absolute;
       width:100px;
       bottom: 30px;
       left: 300px;
       opacity:0%;
       border-radius: 10px;
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
     background: url('../images/WhatAreYourHealthGoals.png') no-repeat center center / cover;
     &::part(background) {
       background: url('../images/WhatAreYourHealthGoals.png') no-repeat center center / cover;
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
