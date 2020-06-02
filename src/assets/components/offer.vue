<template>
  <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
    <div class="icon mx-auto">
      <i class="fas" :class="offer.icon"></i>
      <h4>{{ offer.title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'offer',
  props: ['offer']
}
</script>

<style lang="scss">

</style>