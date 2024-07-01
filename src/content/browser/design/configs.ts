/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*-
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { createSignal } from "solid-js";
import { z } from "zod";

const getOldConfigs = JSON.stringify({
  globalConfigs: {
    verticalTabEnabled: false,
    multiRowTabEnabled: false,
    userInterface: "lepton",
    appliedUserJs: "",
  },
  fluerial: {
    roundVerticalTabs: false,
  },
});

export const zFloorpDesignConfigs = z.object({
  globalConfigs: z.object({
    verticalTabEnabled: z.boolean(),
    multiRowTabEnabled: z.boolean(),
    userInterface: z.string(),
    appliedUserJs: z.string(),
  }),
  fluerial: z.object({
    roundVerticalTabs: z.boolean(),
  }),
});

export const [config, setConfig] = createSignal(
  zFloorpDesignConfigs.parse(
    JSON.parse(
      Services.prefs.getStringPref("floorp.design.configs", getOldConfigs),
    ),
  ),
);

Services.prefs.addObserver("floorp.design.configs", () =>
  setConfig(
    zFloorpDesignConfigs.parse(
      JSON.parse(Services.prefs.getStringPref("floorp.design.configs")),
    ),
  ),
);
