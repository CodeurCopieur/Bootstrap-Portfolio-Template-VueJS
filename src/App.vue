<template>

  <div id="app">

    <div class="container-fluid px-0">
      <div class="main-image">
        <section>
          <h1>Portfolio</h1>
          <span>A free bootstrap Template with Vue JS</span>
          <button class="btn btn-xl btn-light">Find More</button>
        </section>
      </div>

      <div id="find-more" class="white-section">
        <section>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum illum quisquam, sapiente delectus laboriosam vero?</span>
          <button class="btn btn-xl btn-dark">What We offer</button>
        </section>
      </div>


      <div id="offer" class="blue-section">
        <div class="container">
          <h2>What We Skills</h2>
          
          <div class="row">
            <offer v-for="(offer, index) in offers" :key="index" :offer="offer"></offer>
          </div>
        </div>
      </div>

      <div class="second-image">
        <section>
          <h2>Welcome to <i>your </i> <br> next Website !</h2>
          <button class="btn btn-xl btn-dark">Find More</button>
        </section>
      </div>

      <div id="recent-projects" class="white-section">
        <div class="container">
          <h3>Recent Projects</h3>
          <div class="row no-gutters">
              <iframe :src="project.link" class="col-lg-6" v-for="(project, index) in projects" :key="index"></iframe>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import offer from './assets/components/offer'

export default {
  name: 'app',
  components: { offer },
  data () {
    return {
      offers : [
        {
          icon: 'mobile',
          title: 'Responsive',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
          icon: 'pencil-alt',
          title: 'Redesigned',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
          icon: 'thumbs-up',
          title: 'Favorited',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
          icon: 'question-circle',
          title: 'Question ?',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        }
      ],
      projects: [
        {
          link: 'https://pmqvl.csb.app/',
          title: 'Responsive Website | HTML5 CSS3 JS',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, beatae.'
        },
        {
          link: 'https://codwerk.github.io/',
          title: 'Landing Page Animate | HTML5 CSS3 GSAP',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, beatae.'
        },
        {
          link: 'https://x8sbx.csb.app/',
          title: 'Landing Page joker | HTML5 CSS3 JS',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, beatae.'
        },
        {
          link: 'https://i5l24.csb.app/',
          title: 'Fixed Menu With Smooth Animation | CSS JS',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, beatae.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

@import url('./assets/scss/index.scss');
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  /* Mixins */
  @mixin goFlex($display, $justifyC, $alignItems){
    display: $display;
    justify-content: $justifyC;
    align-items: $alignItems;
  }

  @mixin detailsBack($bck, $bckS, $bckA, $bckP){
    background: url($bck);
    background-size: $bckS;
    background-attachment: $bckA;
    background-position: $bckP;
  }

  @mixin btn($padding, $fontF){
    padding: $padding;
    font-family: $fontF;
  }

  @mixin styleTitle($fontS, $fontW, $marginB){
    font-size: $fontS;
    font-weight: $fontW;
    margin-bottom: $marginB;
  }

  @mixin styleSpan($display, $padding-bottom, $font-size, $font-weight){
    display: $display;
    padding-bottom: $padding-bottom;
    font-size: $font-size;
    font-weight: $font-weight;
  }

  /* Extends */
  %details {
    text-align: center;
    width: 100%;
    padding: 0 10px;
    min-height: 100vh;
  }

  .container-fluid {
    .main-image {
      @include goFlex(flex, center, center);
      @include detailsBack('https://i.picsum.photos/id/1032/2880/1800.jpg', cover, fixed,left bottom);
      color: #fff;
      /*background: url('https://i.picsum.photos/id/1032/2880/1800.jpg');
      background-size: cover;
      background-attachment: fixed;
      background-position: left bottom;*/

      @extend %details;

      section {
        h1 {
          @include styleTitle(5em, bold, 30px);
        }
        span {
          @include styleSpan(block, 30px, 1.6rem, 500);
        }

        .btn-xl {
          @include btn(10px 17px, serif);
        }
      }
    }

    .white-section {
      padding: 120px 10px;
      text-align: center;

      h3{
          @include styleTitle( 2rem, bold, 30px);
        }

      span {
         @include styleSpan(block, 30px, 1.25rem, null);
      }

      iframe {
        min-height: 80vh;
      }

      .btn-xl {
        @include btn(10px 17px, serif);
      }
    }

    .blue-section {
      padding: 120px 10px;
      background: #1d809f;
      color: #fff;
      text-align: center;

      h2 {
        @include styleTitle(3rem, bold, 50px);
      }

    }

    .second-image {
      @include goFlex(flex, center, center);
      @include detailsBack('https://i.picsum.photos/id/1032/2880/1800.jpg', cover, fixed,left bottom);
      @extend %details;
      color: #fff;

      h2 {
        @include styleTitle(3em, bold, 30px);
      }

      .btn-xl {
          @include btn(10px 17px, serif);
      }
    }

  }
  
}
</style>
