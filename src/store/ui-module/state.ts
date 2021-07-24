export interface UiStateInterface {
  leftDrawerState: boolean;
  showBulletin: boolean;
  showClearance: boolean;
  showSendMessageDialog: boolean;
  showAttendance: boolean;
  showRecords: boolean;
  showAccount: boolean;
  showArchived: boolean;
  showMedia: boolean;
  showEditStudent: boolean;
}

function state(): UiStateInterface {
  return {
    leftDrawerState: false,
    showBulletin: false,
    showClearance: false,
    showSendMessageDialog: false,
    showAttendance: false,
    showRecords: false,
    showAccount: false,
    showArchived: false,
    showMedia: false,
    showEditStudent: false,
    
  }
}
export default state;
