<template>
<div class="calculator">
    <p class="title" style="grid-area:title">{{ PoiTitle }}</p>
    <PoiCalcScreen style="margin:auto auto 20px auto;grid-area:screen;"/>
    <PoiNumberPad @number="asdf" style="grid-area:numberPad;" />
    <PoiBasicOperatorPad style="grid-area:operatorPad;" />
    <PoiUtilPad style="grid-area:utilPad;" />
</div>
</template>

<script>
import PoiCalcScreen from './PoiCalcScreen.vue'
import PoiNumberPad from './PoiNumberPad.vue'
import PoiBasicOperatorPad from './PoiBasicOperatorPad.vue'
import PoiUtilPad from './PoiUtilPad.vue'

export default {
    name: 'PoiCalculator',
    components: {
        PoiCalcScreen,
        PoiNumberPad,
        PoiBasicOperatorPad,
        PoiUtilPad
    },
    data: function() {
        return {
            PoiTitle: '- Poi Calculator -'
        }
    },
    methods: {
        asdf() {
            alert("asdf")
        }
    },
    events: function () {
        return {
        number: this.asdf()
        }
    }
}
</script>

<style>
.title {
    width: 100%;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    font-size: 18pt;
    color: MintCream;
    text-align: center;
    margin: auto auto 0.5em auto;
}

.calculator {
    width: 35em;
    height: 50em;
    position: static;
    margin: auto;
    padding: 0.5em 1.5em 1.5em 1.5em;

    background: linear-gradient(-5deg, #ff9900, #cccc00);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 25px 0 rgba(0, 0, 0, 0.19);

    border-radius: 1em;

    display: grid;
    grid-template-areas:
        'title title title title' 
        'screen screen screen screen' 
        'utilPad utilPad utilPad operatorPad'
        'numberPad numberPad numberPad operatorPad';
    grid-gap: 20px;
}
</style>
