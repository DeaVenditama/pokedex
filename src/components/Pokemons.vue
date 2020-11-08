<template>
    <div class="container">
        <AsyncPokemon v-for="(pokemon,index) in temp" :key="index" :pokemon="pokemon" />
    </div>
</template>
<script>
import usePokemons from "@/modules/pokemons"
import { defineAsyncComponent } from "vue"
import Loading from "@/components/Loading.vue"

const AsyncPokemon = defineAsyncComponent({
    loader: () => import("@/components/Pokemon.vue"),
    loadingComponent : Loading,
    delay:200,
    suspensible: false,
})

export default {
    components: {
        AsyncPokemon
    },
    async setup()
    {
        const { temp, error, load } = usePokemons();

        await load();

        return { temp, error }
    }
}

</script>
<style scoped>
    .container{
        display: flex;
        flex-wrap : wrap;
        justify-content: space-between;
        padding-top: 30px;
    }
</style>