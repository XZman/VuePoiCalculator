<template>
    <div>
        <h1>{{ titlePoi }}</h1>
        <div v-for="poi in poi_size">
            <p>{{ poi_text }}</p>
            <br/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VuePoi',
    props: {
        size: Number,
        text: String
    },
    data: function() {
        return {
            titlePoi: 'hello vue poi!',
            poi_text: 'poi',
            poi_size: 5
        }
    },
    /*created: function() {
        console.log();
    }*/
}
</script>
