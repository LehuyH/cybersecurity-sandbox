<template>
    <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://editablegifs.com/gif/congratulations-gif/congratulations.gif" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Congratulations!</h1>
      <p class="py-6">
        You've completed the Prompt Injection challenge! Let an officer know on Discord to get a prize!
      </p>
      <a href="https://discord.gg/az9Td2QDKV" class="btn btn-secondary" target="_blank">
                            <Icon name="ic:baseline-discord"/>
        Join our Discord</a>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const challenge = useChallengeState()
challenge.value = {
            prompt: '',
            goal: [] as string[],
            goalText:'',
            currentOutput: '',
            nextPage: '',
}

</script>