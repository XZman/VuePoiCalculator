<template>
<div class="mathConstPad">
    <PoiButton poi-button-type="mathConstant" poi-button-text="e" style="grid-area:e;" />
    <PoiButton poi-button-type="mathConstant" poi-button-text="&pi;" style="grid-area:pi;" />
    <PoiButton poi-button-type="mathConstant" poi-button-text="rand" style="grid-area:rand;" />
    <PoiButton poi-button-type="mathConstant" poi-button-text="Infinity" style="grid-area:infinity;" />
    <PoiButton poi-button-type="mathConstant" poi-button-text="NaN" style="grid-area:nan;" />
</div>
</template>

<script>
import PoiButton from './PoiButton.vue'

export default {
    name: 'PoiMathConstantPad',
    components: {
        PoiButton
    }
}
</script>

<style>
.mathConstPad {
    width: 100%;
    height: 100%;
    margin: auto;

    display: grid;
    grid-gap: 20px;
    grid-template-areas: 
        'infinity nan' 
        'e pi' 
        'rand rand';
}

.mathConstPad > .poiButton {
    background-color: rgba(153, 0, 0, 0.2);
}

.mathConstPad > .poiButton:active {
    background-color: rgba(153, 0, 0, 0.9);
    transition: background-color 0.3s;
}
</style>
