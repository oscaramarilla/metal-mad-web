import { permanentRedirect } from "next/navigation";

/**
 * Legacy pricing and payment flow.
 *
 * The public site now has one quotation experience. Keeping this redirect
 * preserves links that may already have been shared without exposing an
 * unaudited checkout flow.
 */
export default function LegacyCalculatorPage() {
  permanentRedirect("/MoviAula");
}
