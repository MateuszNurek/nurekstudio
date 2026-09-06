import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Server-only helper: returns true when a file exists under /public.
 * Lets server components render intentional placeholders instead of broken
 * image icons when an asset has not been supplied yet.
 */
export function publicAssetExists(publicPath: string): boolean {
  const clean = publicPath.replace(/^\/+/, "");
  return existsSync(join(process.cwd(), "public", clean));
}
