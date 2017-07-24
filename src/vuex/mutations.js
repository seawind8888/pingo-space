export function FETCH_LEARNEX_FINISH(state, learnex) {
  state.learnex = learnex
}

export function FETCH_SCHOOLEX_FINISH(state, [schoolex]) {
  schoolex.forEach((e) => {
    let classItem = {
      begin: '',
      class: []
    }
    classItem.begin = e.teaching_begin.slice(0, 10)
    classItem.class.push(e)
    state.schoolexBox.push(classItem)
    // let dateEnd = dateBegin + 86400000 - 1000

  })
  state.schoolex = schoolex
  state.isReady = true
}

export function FETCH_SCHOOLEX_SELECT(state) {
//   state.schoolexSelect.push(state.schoolexBox[0])
  state.schoolexSelectBox = [...state.schoolexBox]
  for (let i = 0; i < state.schoolexBox.length; i++) {
    for (let j = 0; j < state.schoolexSelectBox.length; j++) {
      if (state.schoolexSelectBox[j].begin === state.schoolexBox[i].begin) {
        state.schoolexSelectBox[j].class.concat(state.schoolexBox.shift(state.schoolexBox[i].class))
      } else {
          state.schoolexSelectBox.push(state.schoolexBox[i])
      }
    }
  }
}

export function FETCH_SCHOOLEX_CELL_FINISH(state, schoolexCell) {
  state.schoolexCell = schoolexCell
  state.isReady = true
}


export function FETCH_ENROLLMENTS_FINISH(state, [enrollments]) {
  state.enrollments = enrollments
}
export function FETCH_USER_FINISH(state, [user]) {
  state.user = user
}
