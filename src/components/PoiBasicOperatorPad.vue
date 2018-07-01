<template>
<div class="operatorPad">
    <PoiButton poi-button-type="operator" poi-button-text="/" style="grid-area:divide" />
    <PoiButton poi-button-type="operator" poi-button-text="*" style="grid-area:multiply" />
    <PoiButton poi-button-type="operator" poi-button-text="-" style="grid-area:subtract" />
    <PoiButton poi-button-type="operator" poi-button-text="+" style="grid-area:add" />
    <PoiButton poi-button-type="operator" poi-button-text="=" style="grid-area:equal" />
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
    grid-gap: 20px;
    grid-template-areas: 
        'divide' 
        'multiply' 
        'subtract' 
        'add'
        'equal';
}
</style>
