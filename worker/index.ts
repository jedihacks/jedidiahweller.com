/// <reference types="@cloudflare/workers-types" />
import handler from "vinext/server/app-router-entry";
export default { fetch: handler.fetch };
