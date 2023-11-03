<script setup lang="ts">
import { useGameStore } from '../stores/game'
import LocalGame from './LocalGame.vue';
import RemoteGame from './RemoteGame.vue'
const game = useGameStore()

const params = new URLSearchParams(window.location.search)
const gameId = params.get('game')

if (gameId)
    game.joinMultiplayerGame(gameId)
</script>


<template>
    <div class="containerGame">
        <div class="localGameContainer">
            <LocalGame />
        </div>
        <div class="remoteGameContainer">
            <RemoteGame />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.containerGame {
    width: 1400px;
    height: 650px;
    position: relative;
}

.localGameContainer {
    float: left;
    width: 50%;
    /* 将宽度分配为容器的一半 */
}

.remoteGameContainer {
    float: right;
    width: 50%;
}
</style>