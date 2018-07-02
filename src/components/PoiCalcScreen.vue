<template>
<div class="expression">
    {{ screenContent }}
</div>
</template>

<script>
export default {
    name: 'PoiCalcScreen',
    computed: {
        screenContent() {
            return this.$store.state.poiScreenContent
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
    padding: 10px;
    text-align: right;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-size: 35pt;
}
</style>
