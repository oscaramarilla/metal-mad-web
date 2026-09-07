import { permanentRedirect } from "next/navigation";

/**
 * Kept for backwards compatibility with campaign, search, and shared links.
 * MoviAula is the single public quotation experience.
 */
export default function LegacyVolumeQuotePage() {
  permanentRedirect("/MoviAula");
}
