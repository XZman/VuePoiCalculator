<template>
<div class="expression">
    <p>{{ poiExpression }}</p>
</div>
</template>

<script>
export default {
    name: 'PoiCalcScreen',
    data: function() {
        return {
            poiExpression: '1*(5+3)/2=233'
        }
    }
}
</script>

<style>
.expression {
    background-color: SlateBlue;
    opacity: 0.6;
    width: auto;
    height: auto;
    margin: 20px 10px 20px 10px;
    border-radius: 10px;
}

p {
    color: Ivory;
    opacity: 1;
    margin: auto;
    padding: 0.3em;
    vertical-align: center;
    text-align: right;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-size: 20pt;
}
</style>
