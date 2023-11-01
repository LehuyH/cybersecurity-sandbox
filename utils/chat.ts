import { HfInference } from '@huggingface/inference'

export const useHFToken = () => useState('hf-token', ()=>'')

export async function chat(prompt:string,stopTokens:string[]){
      const hfToken = useHFToken()
      const hf = new HfInference((hfToken.value) ? hfToken.value : undefined)
      const res = await hf.textGeneration({
        model:'HuggingFaceH4/zephyr-7b-beta',
        inputs:prompt,
        parameters:{
          max_new_tokens:250,
          //@ts-ignore
          stop:stopTokens,
          return_full_text:false
        }
      },{
        wait_for_model:true,
      })
      

      return res.generated_text
}