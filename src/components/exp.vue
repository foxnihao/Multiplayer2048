<template>
  <div id="app">
    <div class="main">
      <div style="padding: 40px">
        <button class="play-button" @click="togglePlaying">
          {{ isPlaying ? "Stop" : "Play" }}
        </button>
      </div>
      <div style="padding: 40px">
        <kinesis-container :audio="audioFile" :playAudio="isPlaying">
          <kinesis-audio :audioIndex="80" type="scale">
            <kinesis-element :strength="1" type="depth">
              <div class="circle"></div>
            </kinesis-element>
          </kinesis-audio>
        </kinesis-container>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { KinesisContainer, KinesisElement, KinesisAudio } from "vue-kinesis";
import bgm from "../music/happy_adveture.mp3"

const audioFile = bgm
const isPlaying = ref(false);

function togglePlaying() {
  isPlaying.value = !isPlaying.value;
}
</script>

<style scoped>
.circle {
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
}
</style>