<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/tabs/tab1">
          <img src="../assets/giving-LG.svg" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="Rewards" href="/tabs/tab2">
          <img src="../assets/medal-LG.png" />
          <ion-label>Rewards</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="Goals" href="/tabs/tab3">
          <img src="../assets/archery-target-LG.png" />
          <ion-label>Goals</ion-label>
        </ion-tab-button>

          <ion-tab-button tab="Doctors" href="/tabs/tab3">
          <img src="../assets/doctor-LG.png" />
          <ion-label>My Doctors</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
});
</script>
