import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () => {
    //data данные
    const state: StateType = {
        collapsed: false
    }
    //action действие
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expect ожидание
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    //data данные
    const state: StateType = {
        collapsed: true
    }
    //action действие
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expect ожидание
    expect(newState.collapsed).toBe(false)
})

test('Error in type', () => {
    //data данные
    const state: StateType = {
        collapsed: true
    }

    //expect ожидание
    expect(() => {
        reducer(state, {type: "FAKE-TYPE"})
    }).toThrow()
})