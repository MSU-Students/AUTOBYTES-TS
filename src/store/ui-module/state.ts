export interface UiStateInterface {
  leftDrawerState: boolean;
}

function state(): UiStateInterface {
  return {
    leftDrawerState: false
  }
};

export default state;
