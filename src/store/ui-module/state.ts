export interface UiStateInterface {
  leftDrawerState: boolean;
  showBulletin: boolean;
  showClearance: boolean;
  showSendMessageDialog: boolean;
  showAttendance: boolean;
  showRecords: boolean;
  showUser: boolean;
  showArchived: boolean;
}

function state(): UiStateInterface {
  return {
    leftDrawerState: false,
    showBulletin: false,
    showClearance: false,
    showSendMessageDialog: false,
    showAttendance: false,
    showRecords: false,
    showUser: false,
    showArchived: false
  }
}
export default state;
