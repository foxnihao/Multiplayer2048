
<template>
    <div ref='vantaRef'>
      Foreground content here
    </div>
  </template>
   
  <script>
  import * as THREE from 'three'
  import BIRDS from 'vanta/src/vanta.birds'
  export default {
    mounted() {
      this.vantaEffect = BIRDS({
        el: this.$refs.vantaRef,
        THREE: THREE
      })
    },
    beforeDestroy() {
      if (this.vantaEffect) {
        this.vantaEffect.destroy()
      }
    }
  }
  
</script>