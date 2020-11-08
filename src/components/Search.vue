<template>
    <div>
        <form @submit.prevent="cari" >
            <input v-model="searchKey" type="text" placeholder="Cari Pokemon ... " />
        </form>
    </div>    
</template>
<script>
import { ref } from 'vue'
import usePokemons from "@/modules/pokemons"

export default {
    setup()
    {
        const searchKey = ref(null);
        const { search } = usePokemons();

        function cari()
        {
            search(searchKey.value);
        }

        return{
            searchKey,
            cari
        }
    }
}
</script>
<style scoped>
    input{
        width: 80%;
        padding: 12px 20px;
        margin: 30px;
        box-sizing: border-box;
    }
</style>