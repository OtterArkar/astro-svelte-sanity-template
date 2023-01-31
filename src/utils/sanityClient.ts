import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID as string,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET as string,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION as string, // use current UTC date - see "specifying API version"!
  token: import.meta.env.SANITY_TOKEN as string, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

export default client;
