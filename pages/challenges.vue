<template>
    <div class="p-8">
        <h1 class="text-5xl font-bold">
            <Icon name="ic:baseline-code"/>
            Challenges</h1>

        <section class="py-8">
            <NuxtLink to="/prompt-injection" class="card md:w-96 w-full hover:bg-neutral-focus bg-neutral shadow-xl transition-colors">
                <div class="card-body">
                    <h2 class="card-title">
                    Prompt Injection
                    <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>
                        Learn about the unique vulnerabilities of Large Language Models (LLMs) and how to defend against them.
                    </p>
                    <div class="card-actions justify-end">
                    <div class="badge badge-outline">Beginner Friendly</div> 
                    <div class="badge badge-outline">AI</div>
                    </div>
                </div>
            </NuxtLink>
        </section>
    </div>
</template>
