<template>
<div class="poiButton" @click="poiOnClick">
    <p>{{ poiButtonText }}</p>
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

    font-size: 20pt;
    text-align: center;
    color: White;
}
</style>
