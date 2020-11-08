<template>
  <img alt="logo" src="./assets/pokemonlogo.png" class="logo">
  <Search />
  <Suspense>
    <template #default>
      <Pokemons />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>

<script>
import Pokemons from "@/components/Pokemons"
import Loading from "@/components/Loading"
import Search from "@/components/Search"

export default {
  name: 'App',
  components: {
    Pokemons,
    Loading,
    Search
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
  height: 100px;
}
</style>
