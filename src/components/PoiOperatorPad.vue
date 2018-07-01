<template>
<div class="operatorPad">
    <PoiButton poi-button-type="operator"/>
</div>
</template>

<script>
import PoiButton from './PoiButton.vue'

export default {
    name: 'PoiOperatorPad',
    components: {
        PoiButton
    }
}
</script>

<style>
.operatorPad {

}
</style>
