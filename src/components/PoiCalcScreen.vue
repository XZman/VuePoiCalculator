<template>
<div class="expression">
    {{ poiScreenContent }}
</div>
</template>

<script>
export default {
    name: 'PoiCalcScreen',
    data: function() {
        return {
            poiScreenContent: '1*(5+3)/2=233'
        }
    },
    methods: {
        evaluate: function() {
            this.poiScreenContent = eval(this.poiScreenContent)
        },
        push(str) {
            this.poiScreenContent += str
        },
        pop() {
            var poiLastChar = this.poiScreenContent.slice(-1)
            this.poiScreenContent = this.poiScreenContent.slice(0, -1)
            return poiLastChar
        },
        clear() {
            this.poiScreenContent = ''
        }
    }
}
</script>

<style>
.expression {
    background-color: rgba(207, 226, 226, 0.4);
    width: 95%;
    height: 75%;
    margin: auto;
    border-radius: 10px;
    color: Ivory;
    margin: auto;
    padding: 0.3em;
    text-align: right;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-size: 35pt;
}
</style>
