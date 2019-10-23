import * as types from "./mutation_type.js"

export const mutations = {
    [types.SOME_MUTATION] (state, payload) {
        state.count += payload.amount
    }
}