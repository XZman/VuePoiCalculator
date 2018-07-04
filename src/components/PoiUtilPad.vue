<template>
    <div class="utilPad">
        <PoiButton poi-button-type="util" poi-button-text="(" style="grid-area:lbracket;" />
        <PoiButton poi-button-type="util" poi-button-text=")" style="grid-area:rbracket;" />
        <PoiButton poi-button-type="util" poi-button-text="Ans" style="grid-area:ans;" />
        <PoiButton poi-button-type="util" poi-button-text="C" style="grid-area:C;" id="clear" />
        <PoiButton poi-button-type="util" poi-button-text="delete" style="grid-area:delete;" />
        <PoiButton poi-button-type="util" poi-button-text="copy" style="grid-area:copy;" />
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
    //grid-gap: 20px;
    grid-template-areas:
        'lbracket rbracket C' 
        'ans copy delete';
}

#clear {
    background-color: rgba(255, 0, 0, 0.7);
}

#clear:active {
    background-color: rgba(255, 0, 0, 0.9);
    transition: background-color 0.3s;
}

.utilPad > .poiButton {
    background-color: rgba(153, 51, 102, 0.7);
}

.utilPad > .poiButton:active {
    background-color: rgba(153, 51, 102, 0.9);
    transition: background-color 0.3s;
}
</style>
