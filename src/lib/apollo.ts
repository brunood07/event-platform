import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o2pkwt092s01xih38x0adm/master",
  cache: new InMemoryCache(),
});
