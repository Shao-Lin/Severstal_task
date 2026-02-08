export const normalizeHtml = (html: string) => {
  const trimmed = html.trim();
  return trimmed === "<p></p>" ? "" : trimmed;
};
