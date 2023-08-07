import {surpriseMePrompts} from '../constants'


export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.lenght)
    const randomPrompt = surpriseMePrompts[randomIndex]

    // checking and be sure we are not getting
    // same promt two times in a row 
    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt
}