import client from "./infisical";
const singleSecret = await client.secrets().getSecret({
  environment: "dev",
  projectId: "d12eea98-8258-4e66-b5db-f2e82e948988",
  secretName: "KALON_FORM_ID",
  // expandSecretReferences: true, // Optional
  // includeImports: true,         // Optional
  // secretPath: "/foo/bar",       // Optional
  // type: "shared",               // Optional
  // version: 1                    // Optional
});
