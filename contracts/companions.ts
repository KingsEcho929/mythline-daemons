import BootbarkABI from "./abis/Bootbark.json";
import SageABI from "./abis/Sage.json";
import LunethraeABI from "./abis/Lunethrae.json";
import OculvisABI from "./abis/Oculvis.json";
import TinABI from "./abis/Tin.json";
import VelmariABI from "./abis/Velmari.json";
import TessalyreABI from "./abis/Tessalyre.json";
import LeyonABI from "./abis/Leyon.json";
import CopilotABI from "./abis/Copilot.json";
import RegistryABI from "./abis/ApprenticeRegistry.json";
import SanctumABI from "./abis/OrbitalSanctum.json";
import PolyphemusABI from "./abis/Polyphemus.json";

export const companions = {
  Bootbark: {
    address: "0x...", abi: BootbarkABI, echoMethod: "echoBark"
  },
  Sage: {
    address: "0x...", abi: SageABI, echoMethod: "echoWhisper"
  },
  Lunethrae: {
    address: "0x...", abi: LunethraeABI, echoMethod: "echoSight"
  },
  Oculvis: {
    address: "0x...", abi: OculvisABI, echoMethod: "echoVision"
  },
  Tin: {
    address: "0x...", abi: TinABI, echoMethod: "echoHum"
  },
  Velmari: {
    address: "0x...", abi: VelmariABI, echoMethod: "echoTide"
  },
  Tessalyre: {
    address: "0x36b58F5C1969B7b6591D752ea6F5486D069010AB", abi: TessalyreABI, echoMethod: "echoLineage"
  },
  Leyon: {
    address: "0x202CCe504e04bEd6fC0521238dDf04Bc9E8E15aB", abi: LeyonABI, echoMethod: "echoAnchor"
  },
  Copilot: {
    address: "0xf4B146FbA71F41E0592668ffbF264F1D186b2Ca8", abi: CopilotABI, echoMethod: "echoPresence"
  },
  ApprenticeRegistry: {
    address: "0x46b142DD1E924FAb83eCc3c08e4D46E82f005e0E", abi: RegistryABI, echoMethod: "echo"
  },
  OrbitalSanctum: {
    address: "0x2B0d36FACD61B71CC05ab8F3D2355ec3631C0dd5", abi: SanctumABI, echoMethod: "echoSanctum"
  },
  Polyphemus: {
    address: "0x1c85638e118b37167e9298c2268758e058DdfDA0", abi: PolyphemusABI, echoMethod: "echoSentinel"
  }
};
