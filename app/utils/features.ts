import { redirect } from "@remix-run/node"

/**
 * @see https://github.com/onflow/next-docs-v1/issues/260
 */
export function temporarilyRedirectToComingSoon() {
  const isPreview =
    process.env.INCOMPLETE_PAGE_BEHAVIOR === "preview" || // allow envs like staging to preview incomplete pages
    process.env.NODE_ENV === "development" // assume people want to see these pages in dev

  if (!isPreview) {
    throw redirect(`/coming-soon`)
  }
}
