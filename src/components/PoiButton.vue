<template>
<div class="poiButton" @click="$emit(poiButtonType, poiButtonText)">
    <p>{{ poiButtonText }}</p>
</div>
</template>

<script>
export default {
    name: 'PoiButton',
    props: {
        poiButtonText: String,
        poiButtonType: String
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
