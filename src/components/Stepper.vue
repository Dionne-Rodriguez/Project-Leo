<template id="vue-stepper">
    <div>
      <div class="flex-container container">
        <div class="progress" :style="pBarSize">
          <div class="progress-bar"
               role="progressbar"
               aria-valuenow="60"
               aria-valuemin="0"
               aria-valuemax="100"
               :style="progress">
          </div>
        </div>
        <div class="step"
             v-for="(step, i) in steps"
             :key="i"
             :class="{ done: step.number < currentStep, current: step.number === currentStep }">
          <div class="step-number"
               :id="'step-'+step.number"
               v-on:click="moveStep(step.number)">
            <i v-if="step.number < currentStep" class="fa fa-check"></i>
            <span v-else>{{step.number}}</span>
          </div>
          <div class="step-label">{{step.label}}</div>
        </div>
      </div>
      <div class="container">
        <slot name="test"></slot>
        <div class="col-sm-12" v-if="currentStep > 0 && currentStep <= steps.length">
          <button v-if="currentStep > 1"
                  v-on:click="moveStep(currentStep-1)"
                  class="btn btn-default"
                  role="button"><i class="fa fa-chevron-left" aria-hidden="true"></i> Back</button>
          <button v-if="currentStep < steps.length"
                  v-on:click="moveStep(currentStep+1)"
                  class="btn btn-default pull-right"
                  role="button">Next <i class="fa fa-chevron-right" aria-hidden="true"></i></button>
          <button v-else-if="currentStep == steps.length"
                  v-on:click="finalize"
                  class="btn btn-default pull-right"
                  role="button">Submit</button>
        </div>
        <div v-else>
          <button v-on:click="moveStep(1)"
                  class="btn btn-default btn-block"
                  role="button">Reset <i class="fa fa-refresh" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
  </template>



<style lang="scss" >
/* vue-stepper styling */
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
  
  .progress {
    position: absolute;
    top: 2em;
    height: 5px;
    margin: 0;
    box-shadow: none;
    background-color: #cdcdcd;
    
    .progress-bar {
      background-color: #46c0bd;
    }
  }
  
  .step {
    text-align: center;
    z-index: 2;

    .step-number {
      background-color: #cdcdcd;
      padding: 0.5em;
      color: white;
      border-radius: 2em;
      
      background-size: 0% 0%;
      background-position: center;
      background-image: radial-gradient(circle at center , #b384c7 50%, transparent 50%);
      background-repeat: no-repeat;
    }
    
    &.current {
      .step-number {
        background-size: 200% 200%;
        transition: all .4s .5s;
      }
    }
    
    &.done {
      .step-number { background-color: #46c0bd; }
    }
    .step-label {
      padding-top: 5px;
    }
  }
}
</style>
<script lang="js">
import { defineComponent, onMounted, computed,beforeUnmount,defineProps } from 'vue';
export default defineComponent({
  name:'vue-stepper',
  props:["value"],
  setup(props){
   var steps = []
   var pBarSize = ''
   var currentStep = 1 

  onMounted(()=>{
    if (!props.value || props.value.length == 0) {
      return;
    }
    
    steps = props.value
      .map((s, i) => ({ number: i+1, selected: false, ...s}) );
    
    steps[0].selected = true;
    
    this.$nextTick(() => {
      calculateBarPosition();
    });
    window.addEventListener('resize', calculateBarPosition);
  }) 

  // beforeUnmount(()=>{
  //   window.removeEventListener('resize', this.calculateBarPosition);
  // }) 

  // defineProps({
  //   value: Array,
  // })

  const progress = computed(()=>{
      if (currentStep > steps.length) {
      return `width: 100%`;
      }
      const first = document.getElementById('step-1');
      const current = document.getElementById(`step-${currentStep}`);
      if (first && current) {
        const delta = current.getBoundingClientRect().right -first.getBoundingClientRect().right;
        return `width: ${delta}px;`;
      }
      return `width: 100%`;
    })
    function moveStep(stepNumber) {
      currentStep = stepNumber;
    }
    function calculateBarPosition() {
      let docEl = document.documentElement;
      const first = document.getElementById('step-1');
      let rect = first.getBoundingClientRect();
      const offset = rect.left + (window.pageXOffset || docEl.scrollLeft || 0);
      const top = rect.top + rect.height/2 - 2;
      pBarSize = `left: ${offset}px; right: ${offset}px; top: ${top}px`;
    }
    function finalize() {
      currentStep += 1;
    }
    return{ steps ,pBarSize, currentStep,moveStep,calculateBarPosition,finalize,progress}
}
  });
</script>