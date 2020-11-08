<template>
    <div class="card">
        <div class="container">
            <img :src="imageLink" class="pokeImage" />
            <h4>{{ pokemon.Name }}</h4>
            <p v-bind:style="{'color':color}">
                <strong>{{ pokemon.Type1 }} - {{ pokemon.Type2 }}</strong>
            </p>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue'

export default {
    props: {
        pokemon : Object
    },
    setup(props){
        const imageLink = computed(()=>`http://localhost/pokemon-images/images/${props.pokemon.Name}.png`);
        const color = computed(()=>{
            if(props.pokemon.Type1=="Grass")
            {
                return "green";
            }
            else if(props.pokemon.Type1=="Fire")
            {
                return "red";
            }
            else if(props.pokemon.Type1=="Water")
            {
                return "aqua";
            }
            else if(props.pokemon.Type1=="Bug")
            {
                return "darkgreen";
            }
        });
        return{
            imageLink,
            color
        }
    }
}
</script>
<style scoped>
    .card{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition : 0.3s;
        margin : 2px;
        max-width:200px;
        cursor:pointer;
    }
    .card:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .container{
        padding: 2px 16px;
    }
    .pokeImage{
        max-width: 200px;
    }
</style>