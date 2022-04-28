import { SET_CHARACTERS } from "./actions"


const initState = {
    characters:JSON.parse(localStorage.getItem('characters'))||[]
}

export const charactersReducer = (state = initState,action)=>{
    switch(action.type){
        case SET_CHARACTERS:
            return{...state,characters:action.characters}
             default:return state
    }

}