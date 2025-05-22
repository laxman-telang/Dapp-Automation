export type NetworkName = "testnet";
export type ChainId = number;
export type NetworkConfig = {
  network: NetworkName,
  jsonRpcUrl: string,
  mirrorNodeUrl: string,
  chainId: ChainId,
}

// purpose of this file is to define the type of the config object
export type NetworkConfigs = {
  [key in NetworkName]: {
    network: NetworkName,
    jsonRpcUrl: string,
    mirrorNodeUrl: string,
    chainId: ChainId,
  }
};

export type AppConfig = {
  networks: NetworkConfigs,
}
