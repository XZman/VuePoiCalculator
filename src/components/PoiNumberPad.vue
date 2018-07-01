<template>
<div class="numberPad">
    <div v-for="n in 10">
        <PoiButton poi-button-type="number" poi-button-text="{{n - 1}}"/>
    </div>
</div>
</template>

<script>
import PoiButton from './PoiButton.vue'

export default {
    name: 'PoiNumberPad',
    components: {
        PoiButton
    }
}
</script>

<style>
.numberPad {

}
</style>
