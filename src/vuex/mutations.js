export function FETCH_LEARNEX_FINISH(state, learnex) {
    state.learnex = learnex
}

export function FETCH_SCHOOLEX_FINISH(state, [schoolex]) {
    state.schoolex = schoolex
    state.isReady = true
}