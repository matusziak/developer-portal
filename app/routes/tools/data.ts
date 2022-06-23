import { ToolsPageProps } from "../../ui/design-system/src/lib/Pages/ToolsPage"

import {
  flowserTool,
  overflowTool,
  dotNetSDK,
  swiftSDK,
  rustSDK,
  httpSDK,
  jvmSDK,
  goSDK,
  fclSDK,
  cliTool,
  emulatorTool,
  jsTestingLibTool,
  cadutTool,
  faucetTool,
  rubySDK,
  elixirSDK,
  pythonSDK,
  dartSDK,
  phpSDK,
  flowScanTool,
  flowViewSourceTool,
  bigDipperTool,
  walletApiTool,
  eventIndexingTool,
  accountApiTool,
  flowMarketplaceMonitorTool,
  alchemyAccessTool,
  alchemyNFTTool,
  intellijTool,
  vsCodeTool,
  graffleTool,
  commandLineLinter,
  cdcWebpackPlugin,
} from "../../component-data/Tools"

export const data: ToolsPageProps = {
  tools: [
    cliTool,
    emulatorTool,
    jsTestingLibTool,
    overflowTool,
    flowserTool,
    cadutTool,
    faucetTool,
    intellijTool,
    vsCodeTool,
    commandLineLinter,
    cdcWebpackPlugin,
    graffleTool,
  ],
  sdks: [
    httpSDK,
    fclSDK,
    goSDK,
    pythonSDK,
    jvmSDK,
    rubySDK,
    dartSDK,
    dotNetSDK,
    phpSDK,
    swiftSDK,
    rustSDK,
    elixirSDK,
  ],
  apisAndServices: [
    walletApiTool,
    eventIndexingTool,
    accountApiTool,
    flowMarketplaceMonitorTool,
    alchemyAccessTool,
    alchemyNFTTool,
    graffleTool,
  ],
  explorers: [flowScanTool, flowViewSourceTool, bigDipperTool],
  contentNavigationListItems: {
    contentNavigationItems: [
      {
        title: "Learn",
        text: "All the resources you need to learn and build.",
        link: "/learn",
        icon: "learn",
      },
      {
        title: "Tools",
        text: "Curated list of developer tools, services, SDKs.",
        link: "/tools",
        icon: "tools",
      },
      {
        title: "Community",
        text: "Learn more about Flow's ecosystem and get involved.",
        link: "/community",
        icon: "community",
      },
    ],
    header: "Explore More Content",
  },
}
