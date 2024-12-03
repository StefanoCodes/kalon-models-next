import { InfisicalSDK } from "@infisical/sdk";

const client = new InfisicalSDK();
const projectId =
  // Authenticate with Infisical
  await client.auth().universalAuth.login({
    clientId: "<machine-identity-client-id>",
    clientSecret: "<machine-identity-client-secret>",
  });

const allSecrets = await client.secrets().listSecrets({
  environment: "dev", // stg, dev, prod, or custom environment slugs
  projectId: "<your-project-id>",
});

console.log("Fetched secrets", allSecrets);

export default client;
