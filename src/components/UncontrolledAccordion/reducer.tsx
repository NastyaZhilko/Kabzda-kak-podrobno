type ActionType = {
    type: string
}
export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED" //использование константы не дает возможности опечататься

export type StateType={
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error("Bad action type")//генерируем новую ошибку, если задиспачили что-то не то
    }

    return state
}