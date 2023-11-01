export const triggerConfetti = async (canvasID:string)=>{
    const { default:ConfettiGenerator } = await import('confetti-js')
    
    const confettiSettings = { target: canvasID, respawn:false, start_from_edge:true };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}