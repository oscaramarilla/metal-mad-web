import { permanentRedirect } from "next/navigation";

/**
 * This route used to expose an internal quotation workspace publicly.
 *
 * It is intentionally retired until an authenticated internal sales tool is
 * available. Existing shared links continue at the public quotation flow.
 */
export default function RetiredQuoteWorkspacePage() {
  permanentRedirect("/MoviAula");
}
