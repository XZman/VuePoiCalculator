<template>
<div class="poiButton" @click="poiOnClick">
    <span v-html="poiButtonText" />
</div>
</template>

<script>
export default {
    name: 'PoiButton',
    props: {
        poiButtonText: String,
        poiButtonType: String
    },
    methods: {
        poiOnClick() {
            this.$store.dispatch(this.poiButtonType, this.poiButtonText)
        }
    }
}
</script>

<style>
.poiButton {
    background-color: rgba(105, 105, 105, 0.7);
    width: 100%;
    height: 100%;
    margin: auto;
    border-radius: 10px;
    padding: 0.2em 0.1em;

    font-size: 1.25em;
    text-align: center;
    color: White;
}

.poiButton:active {
    background-color: rgba(105, 105, 105, 0.9);
    transition: background-color 0.3s;
}
</style>
