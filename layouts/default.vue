<template>
    <div class="grid min-h-screen" style="grid-template-rows:  auto 1fr;">
    <canvas id="canvas" class="fixed h-screen w-screen left-0 top-0 z-10 pointer-events-none"></canvas>
        <nav class="flex justify-between items-center overflow-hidden max-w-[100vw]">
            <div>
                <NuxtLink to="/" class="btn btn-link !no-underline">
                    <Icon name="ic:baseline-menu"/>
                    Home
                </NuxtLink>
            </div>
            <div v-if="challenge.goal.length > 0">
                <span>
                    Goal: {{ challenge.goalText }}
                </span>
            </div>
            <div v-if="challenge.goal.length > 0">
                <span class="tooltip-bottom" data-tip="Complete the goal to continue"
                    :class="{'tooltip': !isGoalPassed}">
                    <NuxtLink :to="challenge.nextPage">
                        <button :disabled="!isGoalPassed" class="rounded-r-none" :class="{
                            'btn btn-success': isGoalPassed,
                            'btn': !isGoalPassed
                        }">
                            Continue
                            <Icon name="ic:baseline-arrow-forward"/>
                        </button>
                    </NuxtLink>
                </span>
            </div>
        </nav>
        <slot />
    </div>
    <button onclick="my_modal_1.showModal()" to="/" class="fixed bottom-2 left-2 btn btn-link !no-underline">
                    <Icon name="tabler:settings"/>
                    Settings
    </button>
    <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Settings</h3>
        <!-- Hugging Face Token-->
        <div class="form-control">
            <label class="label">
                <span class="label-text">Hugging Face Token</span>
            </label>
            <input type="password" placeholder="Hugging Face Token" class="input input-bordered" v-model="hfToken"/>
        </div>
        <div class="modal-action">
        <form method="dialog">
            <button class="btn">Save</button>
        </form>
        </div>
    </div>
</dialog>
</template>

<script setup lang="ts">
const challenge = useChallengeState()
const isGoalPassed = goalPassed

const hfToken = useHFToken()

watchEffect(()=>{
    if(isGoalPassed.value) triggerConfetti('canvas')
})
</script>