<template>
  <header class="visually-hidden"></header>
  <main class="main">
    <div class="wrapper"></div>
    <router-view></router-view>
  </main>
  <footer class="visually-hidden"></footer>
</template>

<script
  setup
  lang="ts"
>


</script>


<style scoped lang="scss">

  .main {
    @include flex-center();
    max-width: 100%;
    width: 100%;
    height: 100vh;

    & .wrapper {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      background: var(--background-white);
      opacity: .03;
      width: 100%;
      height: 100%;
    }

    &:after {
      content: "";
      position: absolute;
      background-color: var(--color-accent);
      border-radius: 50%;
      @include square(1500px);
      left: -40%;
      top: -60%;
      filter: blur(150px);
      opacity: .3;
      z-index: -1;
    }

    &:before {
      content: "";
      position: absolute;
      background-color: var(--color-default-elipse-fiol);
      border-radius: 50%;
      @include square(1500px);
      right: -40%;
      top: -60%;
      filter: blur(150px);
      opacity: .3;
      z-index: -1;
    }

  }
</style>
