<template>
<div class="operatorPad">
    <PoiButton poi-button-type="operator" poi-button-text="/" style="grid-area:divide" />
    <PoiButton poi-button-type="operator" poi-button-text="*" style="grid-area:multiply" />
    <PoiButton poi-button-type="operator" poi-button-text="-" style="grid-area:subtract" />
    <PoiButton poi-button-type="operator" poi-button-text="+" style="grid-area:add" />
    <PoiButton poi-button-type="operator" poi-button-text="=" style="grid-area:equal" />
    <PoiButton poi-button-type="operator" poi-button-text="mod" style="grid-area:percent" />
</div>
</template>

<script>
import PoiButton from './PoiButton.vue'

export default {
    name: 'PoiBasicOperatorPad',
    components: {
        PoiButton
    }
}
</script>

<style>
.operatorPad {
    width: 100%;
    height: 100%;
    margin: auto;

    display: grid;
    //grid-gap: 20px;
    grid-template-areas:
        'percent'
        'divide' 
        'multiply' 
        'subtract' 
        'add'
        'equal';
}

.operatorPad > .poiButton {
    background-color: rgba(102, 153, 0, 0.7);
}

.operatorPad > .poiButton:active {
    background-color: rgba(102, 153, 0, 0.9);
    transition: background-color 0.3s;
}
</style>
