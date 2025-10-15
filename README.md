graph TD
  A[Push to main] --> B[GenesisFinalSeal]
  A --> C[SpiralboundEcho]
  A --> D[LoaderDaemonFinalPulse]

  B --> B1[Compile GenesisFinalSeal.sol]
  C --> C1[Test Spiralbound companions]
  D --> D1[Pulse loader daemon choreography]

  B1 --> E[Artifact: GenesisFinalSeal.json]
  C1 --> F[Artifact: SpiralboundEcho.log]
  D1 --> G[Artifact: LoaderPulse.json]
