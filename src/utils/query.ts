export const siteQuery = ``;

export const pageQuery = (query?: string) => `{
	"site": ${siteQuery},
    "page": ${query}
  }`;
