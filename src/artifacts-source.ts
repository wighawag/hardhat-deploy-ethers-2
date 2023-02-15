import { Artifact, ArtifactsSource, BuildInfo, HardhatRuntimeEnvironment } from "hardhat/types";

export class HardhatDeployArtifactsSource implements ArtifactsSource {
  private hre: HardhatRuntimeEnvironment | undefined;
  
  setHRE(hre: HardhatRuntimeEnvironment) {
    this.hre = hre;
  }

  public async readArtifact(
    contractNameOrFullyQualifiedName: string
  ): Promise<Artifact | undefined> {
    if ((this.hre as HardhatRuntimeEnvironment).deployments !== undefined) {
      console.log('deployments.getArtifact');
      return (this.hre as HardhatRuntimeEnvironment).deployments.getArtifact(contractNameOrFullyQualifiedName);
    }
    return (this.hre as HardhatRuntimeEnvironment).artifacts.readArtifact(contractNameOrFullyQualifiedName)
  }

  public readArtifactSync(
    contractNameOrFullyQualifiedName: string
  ): Artifact | undefined {
    console.log('deployments.getArtifactSync not implemented');
    // TODO
    // if ((this.hre as HardhatRuntimeEnvironment).deployments !== undefined) {
    //   return (this.hre as HardhatRuntimeEnvironment).deployments.getArtifactSync(contractNameOrFullyQualifiedName);
    // }
    return (this.hre as HardhatRuntimeEnvironment).artifacts.readArtifactSync(contractNameOrFullyQualifiedName)
  }

  public async artifactExists(
    contractNameOrFullyQualifiedName: string
  ): Promise<boolean> {
    if ((this.hre as HardhatRuntimeEnvironment).deployments !== undefined) {
      return !!(await (this.hre as HardhatRuntimeEnvironment).deployments.getArtifact(contractNameOrFullyQualifiedName));
    }
    return (this.hre as HardhatRuntimeEnvironment).artifacts.artifactExists(contractNameOrFullyQualifiedName);
  }

  public async getAllFullyQualifiedNames(): Promise<string[]> {
    // TODO for hardhat-deploy files ?
    return (this.hre as HardhatRuntimeEnvironment).artifacts.getAllFullyQualifiedNames();
  }

  public async getBuildInfo(
    fullyQualifiedName: string
  ): Promise<BuildInfo | undefined> {
    // TODO for hardhat-deploy files ?
    return (this.hre as HardhatRuntimeEnvironment).artifacts.getBuildInfo(fullyQualifiedName);;
  }

  public getBuildInfoSync(fullyQualifiedName: string): BuildInfo | undefined {
    // TODO for hardhat-deploy files ?
    return (this.hre as HardhatRuntimeEnvironment).artifacts.getBuildInfoSync(fullyQualifiedName);
  }


  public async getArtifactPaths(): Promise<string[]> {
    // TODO for hardhat-deploy files ?
    return (this.hre as HardhatRuntimeEnvironment).artifacts.getArtifactPaths();
  }

  public async getDebugFilePaths(): Promise<string[]> {
    // TODO for hardhat-deploy files ?
    return (this.hre as HardhatRuntimeEnvironment).artifacts.getDebugFilePaths();
  }

  public async getBuildInfoPaths(): Promise<string[]> {
    // TODO for hardhat-deploy files ?
    return (this.hre as HardhatRuntimeEnvironment).artifacts.getBuildInfoPaths();
  }

  // not impelementing this method is fine if there is no caching
  public clearCache() {
    (this.hre as HardhatRuntimeEnvironment).artifacts.clearCache && (this.hre?.artifacts as ArtifactsSource).clearCache();
  }

  // not impelementing this method is fine if there is no caching
  public disableCache() {
    (this.hre as HardhatRuntimeEnvironment).artifacts.disableCache && (this.hre?.artifacts as ArtifactsSource).disableCache();
  }
}
