/**
 * @deprecated This class is deprecated and will be removed in future versions.
 */
export function sanitizeElementId(id: string): string {
  if (!id.match(/^[a-zA-Z_]/)) {
    id = '_' + id;
  }
  return id.replace(/[^a-zA-Z0-9_\-:.]/g, '_');
}
