<template>
<div class="numberPad">
    <PoiButton poi-button-type="number" poi-button-text="7" style="grid-area:seven;" />
    <PoiButton poi-button-type="number" poi-button-text="8" style="grid-area:eight;" />
    <PoiButton poi-button-type="number" poi-button-text="9" style="grid-area:nine;" />
    <PoiButton poi-button-type="number" poi-button-text="4" style="grid-area:four;" />
    <PoiButton poi-button-type="number" poi-button-text="5" style="grid-area:five;" />
    <PoiButton poi-button-type="number" poi-button-text="6" style="grid-area:six;" />
    <PoiButton poi-button-type="number" poi-button-text="1" style="grid-area:one;" />
    <PoiButton poi-button-type="number" poi-button-text="2" style="grid-area:two;" />
    <PoiButton poi-button-type="number" poi-button-text="3" style="grid-area:three;" />
    <PoiButton poi-button-type="number" poi-button-text="0" style="grid-area:zero;" />
    <PoiButton poi-button-type="number" poi-button-text="." style="grid-area:dot;" />
</div>
</template>

<script>
import PoiButton from './PoiButton.vue'

export default {
    name: 'PoiNumberPad',
    components: {
        PoiButton
    }
}
</script>

<style>
.numberPad {
    width: 100%;
    height: 100%;
    margin: auto;

    display: grid;
    grid-gap: 20px;
    grid-template-areas: 
        'seven eight nine' 
        'four five six' 
        'one two three'
        'zero zero dot';
}

.numberPad > .poiButton {
    background-color: rgba(155, 0, 0, 0.7);
}

.numberPad > .poiButton:active {
    background-color: rgba(155, 0, 0, 0.9);
    transition: background-color 0.3s;
}
</style>
