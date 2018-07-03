<template>
<div class="calculator">
    <div class="gridLayout">
        <div class="poiTitleBlock" style="grid-area:title">
            <p class="title">{{ PoiTitle }}</p>
            <p class="subtitle" @click="poi">{{ PoiSubtitle }}</p>
        </div>
        <PoiCalcScreen style="grid-area:screen;"/>
        <PoiNumberPad style="grid-area:numberPad;" />
        <PoiBasicOperatorPad style="grid-area:operatorPad;" />
        <PoiUtilPad style="grid-area:utilPad;" />
        <PoiMathFunctionPad style="grid-area:mathFuncPad;" />
        <PoiMathConstantPad style="grid-area:mathConstPad;" />
    </div>
    <div class="yuudachiPoi" />
</div>
</template>

<script>
import PoiCalcScreen from './PoiCalcScreen.vue'
import PoiNumberPad from './PoiNumberPad.vue'
import PoiBasicOperatorPad from './PoiBasicOperatorPad.vue'
import PoiUtilPad from './PoiUtilPad.vue'
import PoiMathFunctionPad from './PoiMathFunctionPad.vue'
import PoiMathConstantPad from './PoiMathConstantPad.vue'

export default {
    name: 'PoiCalculator',
    components: {
        PoiCalcScreen,
        PoiNumberPad,
        PoiBasicOperatorPad,
        PoiUtilPad,
        PoiMathFunctionPad,
        PoiMathConstantPad
    },
    data: function() {
        return {
            PoiTitle: 'Poi Calculator',
            PoiSubtitle: '- click here to poi -',
            yuudachiNumber: 1
        }
    },
    computed: {
        yuudachiURL() {
            return process.env.BASE_URL + '/public/yuudachiPoi/poi' + this.yuudachiNumber + '.png'
        },
        yuudachiPoiStyle() {
            return {
                backgroundImage: 'url(' + this.yuudachiURL + ')',
                left: '0',
                top: '0'
            }
        }
    },
    methods: {
        poi() {
            alert(process.env.BASE_URL)
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}
.yuudachiPoi {
    display: block;
    width: 90%;
    height: 90%;
    position: absolute;
    background-image: url("../../public/yuudachiPoi/poi1.png");
    left: 50%;
    top: 10%;
    background-size: contain;
    background-repeat: no-repeat;
    object-fit: cover;

    z-index: 1;
    margin: auto;
}

.poiTitleBlock {
    position: relative;
}

.title, .subtitle {
    width: 100%;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    font-size: 18pt;
    color: MintCream;
    text-align: center;
    margin: auto auto 0 auto;
    text-shadow: 2px 2px 3px Grey;
}

.subtitle {
    font-size: 12pt;
    margin: 0;
}

.calculator {
    width: auto;
    max-width: 90%;
    min-width: 600px;
    height: auto;
    max-height: 80%;
    min-height: 600px;
    position: fixed;
    left: 3%;
    top: 5%;
    margin: auto;
    padding: 1% 2% 3% 2%;

    background: linear-gradient(-5deg, #ff9900, #cccc00);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 25px 0 rgba(0, 0, 0, 0.19);

    border-radius: 1em;

    overflow: hidden;
}
.gridLayout {
    width: 100%;
    height: 100%;
    overflow: auto;

    display: grid;
    position: relative;
    z-index: 2;
    grid-template-areas:
        'title title title title title title'
        'screen screen screen screen screen screen'
        'mathConstPad mathConstPad utilPad utilPad utilPad operatorPad'
        'mathFuncPad mathFuncPad numberPad numberPad numberPad operatorPad';
    grid-gap: 20px;
}
</style>
