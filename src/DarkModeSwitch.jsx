// noinspection ES6UnusedImports
import React, {h} from 'preact'

export const DarkModeSwitch = () =>
  <fieldset class="form-group" style="position: absolute; right: 0; top: 10px;">
    <label class="paper-switch-2">
      <input id="darkswitch" type="checkbox"/>
      <span class="paper-switch-slider round"/>
    </label>
    <label for="darkswitch" class="paper-switch-2-label">
      🦇
    </label>
  </fieldset>