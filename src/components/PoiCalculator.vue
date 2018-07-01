<template>
<div class="calculator">
    <PoiCalcScreen />
    <PoiNumberPad />
    <PoiOperatorPad />
</div>
</template>

<script>
import PoiCalcScreen from './PoiCalcScreen.vue'
import PoiNumberPad from './PoiNumberPad.vue'
import PoiOperatorPad from './PoiOperatorPad.vue'

export default {
    name: 'PoiCalculator',
    components: {
        PoiCalcScreen,
        PoiNumberPad,
        PoiOperatorPad
    }
}
</script>

<style>
.calculator {
    width: 20em;
    height: 20em;
    position: static;
    margin: auto;
    padding: 0.5em;

    background-color: PowderBlue;

    border-radius: 1em;
}
</style>
