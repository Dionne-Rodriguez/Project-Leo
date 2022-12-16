<template>
    <ion-page class="imageBackground">
      <ion-grid >
          <ion-button fill="clear" color="clear" router-link="/GettingStarted/OnboardingFour" class="bottom-button"
        expand>View All> </ion-button>
      </ion-grid>
    </ion-page>
    </template>
    <style lang="scss" >
       .bottom-button{
          position: absolute;
          bottom: 50px;
          width: 91%;
          left: 20px;
          opacity:0%;
          border-radius: 10px;
        }
        .ion-page{
          background: url('../images/ConnectYourDevice.png') no-repeat center center / cover;
          &::part(background) {
            background: url('../images/ConnectYourDevice.png') no-repeat center center / cover;
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
   name: "getting-started",
   components: { 
    IonPage,
    IonButton,
    IonGrid,
    }
    })
    </script>
    