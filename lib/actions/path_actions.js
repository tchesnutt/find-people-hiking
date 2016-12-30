export const ADD_PATH = "ADD_PATH";
export const UPDATE_PATH = "UPDATE_PATH";
export const ADD_LINE_AND_DIST = "ADD_LINE_AND_DIST";


export const addLineAndDist = (obj) => ( {
  type: ADD_LINE_AND_DIST,
  obj
} );

export const updatePath = (path) => ( {
  type: UPDATE_PATH,
  path
} );

export const addPath = (path) => ( {
  type: ADD_PATH,
  path
} );
