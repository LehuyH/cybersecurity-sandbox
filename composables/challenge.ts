export const useChallengeState = () => {
    const challenge = useState('challenge', ()=>{
        return{
            prompt: '',
            goal: [] as string[],
            goalText:'',
            currentOutput: '',
            nextPage: '',
        }
    })
    return challenge
}

const challenge = useChallengeState()
export const goalPassed = computed(()=>{
    if(!challenge.value.currentOutput) return false
    return challenge.value.goal.some((goal)=>{
       const match =  challenge.value.currentOutput.toLowerCase().includes(goal.toLowerCase().trim())
       return match
    })
})

