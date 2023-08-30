import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/aceTestTab/index.html")
@PreventIframe("/aceTestTab/config.html")
@PreventIframe("/aceTestTab/remove.html")
export class AceTestTab {
}
