export default {
  modules: [
    {
      source: "src/report/metrics.js",
      dependencies: [
        {
          dynamic: false,
          module: "chalk",
          moduleSystem: "cjs",
          exoticallyRequired: false,
          resolved: "node_modules/chalk/source/index.js",
          coreModule: false,
          followable: false,
          couldNotResolve: false,
          license: "MIT",
          dependencyTypes: ["npm"],
          matchesDoNotFollow: true,
          circular: false,
          instability: 0,
          valid: true,
        },
        {
          dynamic: false,
          module: "os",
          moduleSystem: "cjs",
          exoticallyRequired: false,
          resolved: "os",
          coreModule: true,
          followable: false,
          couldNotResolve: false,
          dependencyTypes: ["core"],
          matchesDoNotFollow: false,
          circular: false,
          instability: 0,
          valid: true,
        },
      ],
      dependents: [],
      orphan: false,
      instability: 1,
      valid: true,
    },
    {
      source: "node_modules/chalk/source/index.js",
      followable: false,
      coreModule: false,
      couldNotResolve: false,
      matchesDoNotFollow: true,
      dependencyTypes: ["npm"],
      dependencies: [],
      dependents: ["src/report/metrics.js"],
      orphan: false,
      valid: true,
    },
    {
      source: "os",
      followable: false,
      coreModule: true,
      couldNotResolve: false,
      matchesDoNotFollow: false,
      dependencyTypes: ["core"],
      dependencies: [],
      dependents: ["src/report/metrics.js"],
      orphan: false,
      valid: true,
    },
  ],
  folders: [
    {
      name: "src",
      dependencies: [
        {
          name: "node_modules/chalk/source",
          instability: 0,
          circular: false,
          valid: true,
        },
        {
          name: "os",
          instability: 0,
          circular: false,
          valid: true,
        },
      ],
      dependents: [],
      moduleCount: 1,
      afferentCouplings: 0,
      efferentCouplings: 2,
      instability: 1,
    },
    {
      name: "src/report",
      dependencies: [
        {
          name: "node_modules/chalk/source",
          instability: 0,
          circular: false,
          valid: true,
        },
        {
          name: "os",
          instability: 0,
          circular: false,
          valid: true,
        },
      ],
      dependents: [],
      moduleCount: 1,
      afferentCouplings: 0,
      efferentCouplings: 2,
      instability: 1,
    },
    {
      name: "node_modules/chalk/source",
      moduleCount: -1,
      dependencies: [],
      dependents: [],
    },
    {
      name: "os",
      moduleCount: -1,
      dependencies: [],
      dependents: [],
    },
  ],
  summary: {
    violations: [],
    error: 0,
    warn: 0,
    info: 0,
    ignore: 0,
    totalCruised: 3,
    totalDependenciesCruised: 2,
    optionsUsed: {
      combinedDependencies: false,
      doNotFollow: {
        path: "node_modules",
        dependencyTypes: [
          "npm",
          "npm-dev",
          "npm-optional",
          "npm-peer",
          "npm-bundled",
          "npm-no-pkg",
        ],
      },
      exclude: {
        path: "mocks|fixtures|test/integration|src/cli/tools/svg-in-html-snippets/script.snippet.js",
      },
      externalModuleResolutionStrategy: "node_modules",
      moduleSystems: ["cjs", "es6"],
      outputTo: "tmp_graph_deps.json",
      outputType: "json",
      prefix: "https://github.com/sverweij/dependency-cruiser/blob/main/",
      preserveSymlinks: false,
      rulesFile: ".dependency-cruiser.json",
      tsPreCompilationDeps: true,
      exoticRequireStrings: ["tryRequire", "requireJSON"],
      reporterOptions: {
        metrics: {
          orderBy: "name",
          hideModules: true,
          hideFolders: false,
        },
      },
      enhancedResolveOptions: {
        exportsFields: ["exports"],
        conditionNames: ["require"],
        extensions: [".js", ".d.ts"],
      },
      args: "src/report/metrics.js",
    },
    ruleSetUsed: {},
  },
};
