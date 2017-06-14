export const OPEN_UPLOAD_MODAL = "OPEN_UPLOAD_MODAL";
export const CLOSE_UPLOAD_MODAL = "CLOSE_UPLOAD_MODAL";
export const START_TOUR = "START_TOUR";
export const END_TOUR = "END_TOUR";
export const KILL_WELCOME = "KILL_WELCOME";
export const SHOW_ERROR = "SHOW_ERROR";
export const KILL_ERROR = "KILL_ERROR";


export const openUploadModal = () => ( {
  type: OPEN_UPLOAD_MODAL
} );

export const closeUploadModal = () => ( {
  type: CLOSE_UPLOAD_MODAL
} );

export const startTour = () => ( {
  type: START_TOUR
} );

export const endTour = () => ( {
  type: END_TOUR
} );

export const killWelcome = () => ( {
  type: KILL_WELCOME
} );

export const showError = (message) => ( {
  type: SHOW_ERROR,
  message
} );

export const killError = () => ( {
  type: KILL_ERROR
} );
