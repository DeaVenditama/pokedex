import { reactive, toRefs } from 'vue'

const state = reactive({
    error : null,
    pokemons : null,
    loaded : false,
    loading : false,
    temp : null,
});

export default function usePokemons(){
    const load = async () => {
        if(!state.loaded){
            try{
                const pokemonsResponse = await fetch(
                    "http://localhost/pokemon.json"
                );
                state.pokemons = await pokemonsResponse.json();
                state.temp = state.pokemons;
            }
            catch(e)
            {
                state.error = e;
            }
        }
    }

    const search = (searchKey) =>{
        if(searchKey)
        {
            state.temp = [
                state.pokemons.find(function(item){
                    return item.Name == searchKey.toLowerCase();
                })
            ];
        }else{
            state.temp = state.pokemons;
        }
    }

    return { ...toRefs(state), load, search }
}