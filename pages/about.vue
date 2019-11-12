<template>
<div class="con">
    <p>product1 購買{{ product1 }} 個 ， 共{{ total1 }}元</p>
    <p>product2 購買{{ product2 }} 個 ， 共{{ total2 }}元</p>
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
        },
        total1(){
            return (this.product1)*100
        },
        total2(){
            return (this.product2)*150
        }
    },
    
}
</script>