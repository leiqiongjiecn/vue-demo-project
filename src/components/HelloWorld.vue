<template>
  <div>111</div>
  <div v-for="(item, index) in arr" :key="index">
    <h5>{{item}}</h5>
  </div>
  <button @click="newFun">点击</button>
</template>

<script>
export default {
  setup() {
    console.log("123");
    const arr = ["A", "B", "C"];
    const newFun = ()=> {
      console.log("####");
    }
    return {arr, newFun}
  }
}
</script>

<style scoped>

</style>
