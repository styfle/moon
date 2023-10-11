// Automatically generated by schematic. DO NOT MODIFY!

/* eslint-disable */

export interface PartialBinConfig {
	bin?: string | null;
	force?: boolean | null;
	local?: boolean | null;
	name?: string | null;
}

export type PartialBinEntry = string | PartialBinConfig;

export interface PartialDenoConfig {
	bins?: PartialBinEntry[] | null;
	/** @default 'deps.ts' */
	depsFile?: string | null;
	lockfile?: boolean | null;
	plugin?: string | null;
}

export type NodeProjectAliasFormat = 'name-and-scope' | 'name-only';

export type NodeVersionFormat =
	| 'file'
	| 'link'
	| 'star'
	| 'version'
	| 'version-caret'
	| 'version-tilde'
	| 'workspace'
	| 'workspace-caret'
	| 'workspace-tilde';

export interface PartialNpmConfig {
	plugin?: string | null;
	version?: string | null;
}

export type NodePackageManager = 'npm' | 'pnpm' | 'yarn';

export interface PartialPnpmConfig {
	plugin?: string | null;
	version?: string | null;
}

export type NodeVersionManager = 'nodenv' | 'nvm';

export interface PartialYarnConfig {
	plugin?: string | null;
	plugins?: string[] | null;
	version?: string | null;
}

export interface PartialNodeConfig {
	/** @default true */
	addEnginesConstraint?: boolean | null;
	aliasPackageNames?: NodeProjectAliasFormat | null;
	binExecArgs?: string[] | null;
	/** @default true */
	dedupeOnLockfileChange?: boolean | null;
	dependencyVersionFormat?: NodeVersionFormat | null;
	inferTasksFromScripts?: boolean | null;
	npm?: PartialNpmConfig | null;
	packageManager?: NodePackageManager | null;
	plugin?: string | null;
	pnpm?: PartialPnpmConfig | null;
	/** @default true */
	syncProjectWorkspaceDependencies?: boolean | null;
	syncVersionManagerConfig?: NodeVersionManager | null;
	version?: string | null;
	yarn?: PartialYarnConfig | null;
}

export interface PartialRustConfig {
	bins?: PartialBinEntry[] | null;
	plugin?: string | null;
	syncToolchainConfig?: boolean | null;
	version?: string | null;
}

export type SystemArch =
	| 'x86'
	| 'x64'
	| 'arm'
	| 'arm64'
	| 'longarm64'
	| 'm68k'
	| 'mips'
	| 'mips64'
	| 'powerpc'
	| 'powerpc64'
	| 'riscv64'
	| 's390x'
	| 'sparc64';

export type DependencyName = string | Record<string, string> | string[];

export type SystemPackageManager =
	| 'pkg'
	| 'pkgin'
	| 'apk'
	| 'apt'
	| 'dnf'
	| 'pacman'
	| 'yum'
	| 'brew'
	| 'choco'
	| 'scoop';

export type SystemOS =
	| 'android'
	| 'dragonfly'
	| 'freebsd'
	| 'ios'
	| 'linux'
	| 'macos'
	| 'netbsd'
	| 'openbsd'
	| 'solaris'
	| 'windows';

export interface DependencyConfig {
	arch: SystemArch | null;
	dep: DependencyName;
	manager: SystemPackageManager | null;
	os: SystemOS | null;
	sudo: boolean;
	version: string | null;
}

export type SystemDependency = string | string[] | DependencyConfig | Record<string, string>;

export interface PartialSystemConfig {
	requirements?: SystemDependency[] | null;
}

export interface PartialTypeScriptConfig {
	/** @default true */
	createMissingConfig?: boolean | null;
	/** @default 'tsconfig.json' */
	projectConfigFileName?: string | null;
	/** @default 'tsconfig.json' */
	rootConfigFileName?: string | null;
	/** @default 'tsconfig.options.json' */
	rootOptionsConfigFileName?: string | null;
	routeOutDirToCache?: boolean | null;
	/** @default true */
	syncProjectReferences?: boolean | null;
	syncProjectReferencesToPaths?: boolean | null;
}

export interface PartialToolchainConfig {
	/** @default 'https://moonrepo.dev/schemas/toolchain.json' */
	$schema?: string | null;
	deno?: PartialDenoConfig | null;
	extends?: string | null;
	node?: PartialNodeConfig | null;
	rust?: PartialRustConfig | null;
	system?: PartialSystemConfig | null;
	typescript?: PartialTypeScriptConfig | null;
}

export interface BinConfig {
	bin: string;
	force: boolean;
	local: boolean;
	name: string | null;
}

export type BinEntry = string | BinConfig;

export interface DenoConfig {
	bins: BinEntry[];
	/** @default 'deps.ts' */
	depsFile: string;
	lockfile: boolean;
	plugin: string | null;
}

export interface NpmConfig {
	plugin: string | null;
	version: string | null;
}

export interface PnpmConfig {
	plugin: string | null;
	version: string | null;
}

export interface YarnConfig {
	plugin: string | null;
	plugins: string[];
	version: string | null;
}

export interface NodeConfig {
	/** @default true */
	addEnginesConstraint: boolean;
	aliasPackageNames: NodeProjectAliasFormat;
	binExecArgs: string[];
	/** @default true */
	dedupeOnLockfileChange: boolean;
	dependencyVersionFormat: NodeVersionFormat;
	inferTasksFromScripts: boolean;
	npm: NpmConfig;
	packageManager: NodePackageManager;
	plugin: string | null;
	pnpm: PnpmConfig | null;
	/** @default true */
	syncProjectWorkspaceDependencies: boolean;
	syncVersionManagerConfig: NodeVersionManager | null;
	version: string | null;
	yarn: YarnConfig | null;
}

export interface RustConfig {
	bins: BinEntry[];
	plugin: string | null;
	syncToolchainConfig: boolean;
	version: string | null;
}

export interface SystemConfig {
	requirements: SystemDependency[];
}

export interface TypeScriptConfig {
	/** @default true */
	createMissingConfig: boolean;
	/** @default 'tsconfig.json' */
	projectConfigFileName: string;
	/** @default 'tsconfig.json' */
	rootConfigFileName: string;
	/** @default 'tsconfig.options.json' */
	rootOptionsConfigFileName: string;
	routeOutDirToCache: boolean;
	/** @default true */
	syncProjectReferences: boolean;
	syncProjectReferencesToPaths: boolean;
}

export interface ToolchainConfig {
	/** @default 'https://moonrepo.dev/schemas/toolchain.json' */
	$schema: string;
	deno: DenoConfig | null;
	extends: string | null;
	node: NodeConfig | null;
	rust: RustConfig | null;
	system: SystemConfig;
	typescript: TypeScriptConfig | null;
}
