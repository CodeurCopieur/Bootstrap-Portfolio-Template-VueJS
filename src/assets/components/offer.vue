<template>
  <div id="card-offer" class="col-lg-3 col-md-6 mb-5 mb-lg-0">
    <div class="icon mx-auto">
      <img :src="offer.icon" />
     </div> 
     <h4>{{ offer.title }}</h4>
      <p>{{ offer.description }}</p>
    
  </div>
</template>

<script>
export default {
  name: 'offer',
  props: ['offer']
}
</script>

<style lang="scss">
  #card-offer {
    
    .icon {

      display: flex;
      justify-content: center;
      align-items: center;
      width: 120px;
      height: 120px;
      background-color: #fff;
      border-radius: 50%;

      img {
        width: 30%;
      }
    }
    h4 {
      font-size: 1.6rem;
      padding-top: 20px;
    }
    
  }
</style>