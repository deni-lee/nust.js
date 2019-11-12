<template>
  <div class="con">
    <p> 
      product1 單價:100
      <button @click="increment1">購買</button>
    </p>
    <p> 
      product2 單價:150
      <button @click="increment2">購買</button>
    </p>
  </div>
</template>

<script>


export default {
  computed:{
    product1(){
      return this.$store.state.product1
    },
    product2(){
      return this.$store.state.product2
    }
  },
  methods:{
    increment1(){
      this.$store.commit('increment1')
    },
    increment2(){
      this.$store.commit('increment2')
    }
  }
  
}
</script>

