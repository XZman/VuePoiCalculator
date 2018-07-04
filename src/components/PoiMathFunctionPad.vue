<template>
<div class="mathFuncPad">
    <PoiButton poi-button-type="mathFunction" poi-button-text="ln" style="grid-area:ln;" />
    <PoiButton poi-button-type="mathFunction" poi-button-text="sin" style="grid-area:sin;" />
    <PoiButton poi-button-type="mathFunction" poi-button-text="cos" style="grid-area:cos;" />
    <PoiButton poi-button-type="mathFunction" poi-button-text="tan" style="grid-area:tan;" />
    <PoiButton poi-button-type="mathFunction" poi-button-text="asin" style="grid-area:asin;" />
    <PoiButton poi-button-type="mathFunction" poi-button-text="acos" style="grid-area:acos;" />
    <PoiButton poi-button-type="mathFunction" poi-button-text="atan" style="grid-area:atan;" />
    <PoiButton poi-button-type="mathFunction" poi-button-text="exp" style="grid-area:exp;" />
</div>
</template>

<script>
import PoiButton from './PoiButton.vue'

export default {
    name: 'PoiMathFunctionPad',
    components: {
        PoiButton
    }
}
</script>

<style>
.mathFuncPad {
    width: 100%;
    height: 100%;
    margin: auto;

    display: grid;
    //grid-gap: 20px;
    grid-template-areas: 
        'exp ln' 
        'asin sin' 
        'acos cos' 
        'atan tan';
}

.mathFuncPad > .poiButton {
    background-color: rgba(153, 0, 0, 0.2);
}

.mathFuncPad > .poiButton:active {
    background-color: rgba(102, 153, 0, 0.9);
    transition: background-color 0.3s;
}
</style>
