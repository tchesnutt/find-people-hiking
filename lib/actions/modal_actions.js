export const OPEN_UPLOAD_MODAL = "OPEN_UPLOAD_MODAL";
export const CLOSE_UPLOAD_MODAL = "CLOSE_UPLOAD_MODAL";
export const START_TOUR = "START_TOUR";
export const END_TOUR = "END_TOUR";


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
