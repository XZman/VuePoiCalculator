<template>
    <div class="utilPad">
        <PoiButton poi-button-type="util" poi-button-text="(" style="grid-area:lbracket;" />
        <PoiButton poi-button-type="util" poi-button-text=")" style="grid-area:rbracket;" />
        <PoiButton poi-button-type="util" poi-button-text="Ans" style="grid-area:ans;" />
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
        'lbracket rbracket C delete' 
        'ans ans C delete';
}
</style>
