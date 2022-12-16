<template>
    <ion-page class="imageBackground">
       <ion-grid > 
        <ion-row class="ion-justify-content-center">
          <ion-button class="join-an-event" router-link="/Rewards/Events">Continue -> </ion-button>
        </ion-row>
        <!-- <ion-row class="ion-justify-content-center"> 
          <ion-button>Walk more </ion-button>
        </ion-row>

        fill="clear" color="clear" 
        <ion-row class="ion-justify-content-center">
          <ion-button>Attend a fitness class </ion-button>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-button>Manage diabetes</ion-button>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-button>Quit smoking </ion-button>
         </ion-row>
         <ion-row class="ion-justify-content-center">
          <ion-button>View All</ion-button>
         </ion-row> -->
      </ion-grid> 
    </ion-page>
    </template>
    <style lang="scss" >
      .ion-page{
          background: url('../images/Rewards.png') no-repeat center center / cover;
          &::part(background) {
            background: url('../images/Rewards.png') no-repeat center center / cover;
        }
      }
      .join-an-event{
       position: absolute;
       bottom: 180px;
       width: 91%;
       left: 20px;
       height: 90px;
       opacity:0%;
       border-radius: 10px;
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
    