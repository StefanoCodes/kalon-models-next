// import { InfisicalSDK } from "@infisical/sdk";

// (async () => {
//   try {
//     // Initialize the Infisical SDK client
//     const client = new InfisicalSDK();

//     // Authenticate with Infisical
//     await client.auth().universalAuth.login({
//       clientId: "c6c00cd8-ecce-49b6-a036-494060b1d39f",
//       clientSecret: "ab9fb78c-1f01-4d03-aa89-a831ab943543",
//     });

//     console.log("Authentication successful");

//     // Fetch all secrets
//     const allSecrets = await client.secrets().listSecrets({
//       environment: "dev",
//       projectId: "d12eea98-8258-4e66-b5db-f2e82e948988",
//     });

//     console.log("Fetched secrets", allSecrets);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// })();
