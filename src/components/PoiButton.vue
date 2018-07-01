<template>
<div class="poiButtonType">
    <button type="button" value="poiButtonText" @click="$emit('click', poiButtonText)" />
</div>
</template>

<script>
export default {
    name: 'PoiButton',
    props: {
        poiButtonText: String,
        poiButtonType: String
    }
}
</script>

<style>
.number {

}

.operator {

}
</style>
