export function FETCH_LEARNEX_FINISH(state, learnex) {
    state.learnex = learnex
}

export function FETCH_SCHOOLEX_FINISH(state, [schoolex]) {
    state.schoolex = schoolex
    state.isReady = true
}

export function FETCH_ENROLLMENTS_FINISH(state, [enrollments]) {
    state.enrollments = enrollments
}
export function FETCH_USER_FINISH(state, [user]) {
    state.user = user
}