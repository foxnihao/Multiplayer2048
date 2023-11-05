<script setup lang="ts">
import { useGameStore } from '../stores/game'
import LocalGame from './LocalGame.vue';
import RemoteGame from './RemoteGame.vue'
import inbgm from '../music/Inbgm.mp3'
import bgm from '../music/Zander Noriega - School of Quirks.mp3'
import { ref, watch } from 'vue';
const game = useGameStore()

const params = new URLSearchParams(window.location.search)
const gameId = params.get('game')
const play_music=ref(false as any)
if (gameId)
    game.joinMultiplayerGame(gameId)
function playMusic() {
    if(play_music.value) return
  const audio = new Audio(inbgm);
  audio.play();
  play_music.value=true
}
const audio2=new Audio(bgm)
audio2.loop=true
watch(()=>game.isRemotePlayerConnected,()=>{
    if(game.isRemotePlayerConnected){
        
    audio2.play()
    }
    if(!game.isRemotePlayerConnected){
        audio2.pause()
        play_music.value=false
    }
})
</script>


<template>
<div @click="playMusic">
        <button v-if="!game.isRemotePlayerConnected" @click="game.openMultiplayerGame">{{ '开始匹配' }}</button>

        <div class="containerGame">
            <div class="localGameContainer">
                <LocalGame />
            </div>
            <div class="remoteGameContainer">
                <RemoteGame />
            </div>
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