<template>
    <div class="utilPad">
        <PoiButton poi-button-type="util" poi-button-text="CE" style="grid-area:CE;" />
        <PoiButton poi-button-type="util" poi-button-text="C" style="grid-area:C;" />
        <PoiButton poi-button-type="util" poi-button-text="delete" style="grid-area:delete;" />
    </div>
</template>

<script>
import PoiButton from './PoiButton.vue'

export default {
    name: 'PoiUtilPad',
    components: {
        PoiButton
    }
}
</script>

<style>
.utilPad {
    width: 100%;
    height: 100%;
    margin: auto;

    display: grid;
    grid-gap: 20px;
    grid-template-areas:
        'CE C delete';
}
</style>
