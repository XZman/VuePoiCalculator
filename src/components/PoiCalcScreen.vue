<template>
<div class="expression">
    <span v-html="screenContent" />
</div>
</template>

<script>
export default {
    name: 'PoiCalcScreen',
    computed: {
        screenContent() {
            let poiTemp = this.$store.state.poiScreenContent
            poiTemp = poiTemp === '' ? '0' : poiTemp
            poiTemp = poiTemp.replace(/Math./gi, '')
            poiTemp = poiTemp.replace(/log/gi, 'ln')
            poiTemp = poiTemp.replace(/E/gi, 'e')
            poiTemp = poiTemp.replace(/PI/gi, '&pi;')
            poiTemp = poiTemp.replace(/\*\*/gi, '^')
            return poiTemp
        }
    }
}
</script>

<style>
.expression {
    background-color: rgba(207, 226, 226, 0.5);
    width: 100%;
    overflow: auto;
    height: auto;
    margin: auto;
    border-radius: 10px;
    color: Ivory;
    margin: auto;
    padding: 10px;
    text-align: right;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-size: 1.25em;
}
</style>
