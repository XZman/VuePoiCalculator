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
    <div class="yuudachiPoi" :style="yuudachiPoiStyle" />
</div>
</template>

<script>
import PoiCalcScreen from './PoiCalcScreen.vue'
import PoiNumberPad from './PoiNumberPad.vue'
import PoiBasicOperatorPad from './PoiBasicOperatorPad.vue'
import PoiUtilPad from './PoiUtilPad.vue'
import PoiMathFunctionPad from './PoiMathFunctionPad.vue'
import PoiMathConstantPad from './PoiMathConstantPad.vue'

// eslint-disable-next-line
const YuudachiList = {
        poi1: {
            Number: 1,
            left: '40%',
            top: '-15%'
        },
        poi2: {
            Number: 2,
            left: '30%',
            top: '-5%'
        },
        poi3: {
            Number: 3,
            left: '0',
            top: '0'
        },
        poi4: {
            Number: 4,
            left: '40%',
            top: '2%'
        },
        poi5: {
            Number: 5,
            left: '35%',
            top: '-3%'
        },
        poi6: {
            Number: 6,
            left: '10%',
            top: '2%'
        }
}

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
            Yuudachi: {
                Number: 1,
                left: '40%',
                top: '-15%'
            }
        }
    },
    computed: {
        yuudachiURL() {
            return require('../../assets/yuudachiPoi/poi' + this.Yuudachi.Number + '.png')
        },
        yuudachiPoiStyle() {
            return {
                backgroundImage: 'url(' + this.yuudachiURL + ')',
                left: this.Yuudachi.left,
                top: this.Yuudachi.top
            }
        }
    },
    methods: {
        poi() {
            // alert('poipoipoi!')

            let poiRand = Math.floor(Math.random() * 6) + 1
            while (poiRand === this.Yuudachi.Number) {
                poiRand = Math.floor(Math.random() * 6) + 1
            }
            this.Yuudachi = eval('YuudachiList.poi' + poiRand) 
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    grid-gap: 1em;
}
.yuudachiPoi {
    display: block;
    width: 90%;
    height: 90%;
    position: absolute;
    background-image: url("../../assets/yuudachiPoi/poi1.png");
    transition: background-image 1.5s, left 1.5s, top 1.5s;
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
    max-width: 95%;
    min-width: 50%;
    height: auto;
    max-height: 95%;
    min-height: 50%;
    position: absolute;
    left: 2%;
    top: 2%;
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
    //grid-gap: 20px; 
}
</style>
