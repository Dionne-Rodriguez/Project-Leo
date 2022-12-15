const store = {
    bpm:"",
    steps: {},
}
function setData(data){store.steps = data} 


    //  async function getHealthData() {

    //     const steps = await Preferences.get({ key: 'steps'})
    //     const bpm = await Preferences.get({ key: 'bpm'})
    //      return {
    //          steps,
    //          bpm
    //      }
    //  }

export  {store, setData}