import { equal } from "node:assert/strict";
import { isValidPlugin } from "../../../src/report/plugins.mjs";

describe("[U] report/plugins - isValidPlugin", () => {
  it("returns false when the plugin's function doesn't return an exit code attribute", async () => {
    const lCandidatePlugin = await import(
      "./__fixtures__/invalid-no-exit-code-plugin.cjs"
    );
    equal(isValidPlugin(lCandidatePlugin.default), false);
  });

  it("returns false when the plugin's function doesn't return an output attribute", async () => {
    const lCandidatePlugin = await import(
      "./__fixtures__/invalid-no-output-plugin.cjs"
    );
    equal(isValidPlugin(lCandidatePlugin.default), false);
  });

  it("returns false when the plugin's function doesn't return an exit code that is not a number", async () => {
    const lCandidatePlugin = await import(
      "./__fixtures__/invalid-non-number-exit-code-plugin.cjs"
    );
    equal(isValidPlugin(lCandidatePlugin.default), false);
  });

  it("returns false when the plugin doesn't return a function", async () => {
    const lCandidatePlugin = await import(
      "./__fixtures__/invalid-not-a-function-plugin.cjs"
    );
    equal(isValidPlugin(lCandidatePlugin.default), false);
  });

  it("returns true when the plugin doesn't returns a function that takes a minimal cruise result and returns an output attribute + an numerical exitCode attribute", async () => {
    const lCandidatePlugin = await import("./__fixtures__/valid-plugin.cjs");
    equal(isValidPlugin(lCandidatePlugin.default), true);
  });
});
