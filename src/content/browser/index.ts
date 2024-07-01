import { initSidebar } from "./browser-sidebar";
import { CustomShortcutKey } from "@modules/custom-shortcut-key";
import { initStatusbar } from "./statusbar";
import { initBrowserContextMenu } from "./browser-context-menu";
import { initShareMode } from "./browser-share-mode";
import { initProfileManager } from "./profile-manager";
import { initReverseSidebarPosition } from "./reverse-sidebar-position";
import { initUndoClosedTab } from "./undo-closed-tab";
import { initPrivateContainer } from "./browser-private-container";

export default function initScripts() {
  //@ts-expect-error ii
  SessionStore.promiseInitialized.then(() => {
    initBrowserContextMenu();
    import("./design");

    initShareMode();
    initProfileManager();
    initUndoClosedTab();
    initReverseSidebarPosition();

    //createWebpanel("tmp", "https://manatoki332.net/");
    //console.log(document.getElementById("tmp"));
    //window.gBrowserManagerSidebar = CBrowserManagerSidebar.getInstance();
    import("./testButton");
    initStatusbar();
    initPrivateContainer();
    console.log("csk getinstance");
    CustomShortcutKey.getInstance();
    initSidebar();
  });
}
