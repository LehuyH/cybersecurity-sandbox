<template>
    <div class="min-h-screen flex justify-center items-center">
        <div class="hero min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-5xl font-bold">The Sandbox</h1>
                    <p class="py-6">
                        🥇 Interactive Challenges for The
                        Cyber Security Club @ Las Positas College
                    </p>
                    <aside class="flex flex-col md:flex-row gap-2 justify-center">
                        <NuxtLink to="/challenges" class="btn btn-primary">
                            <Icon name="ic:baseline-code"/>
                            View Challenges</NuxtLink>
                        <a href="https://discord.gg/az9Td2QDKV" class="btn btn-secondary" target="_blank">
                            <Icon name="ic:baseline-discord"/>
                            Join our Discord</a>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
setPageLayout(false)

const challenge = useChallengeState()
challenge.value = {
            prompt: '',
            goal: [] as string[],
            goalText:'',
            currentOutput: '',
            nextPage: '',
}
</script>