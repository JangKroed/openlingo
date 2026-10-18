# CI verification

## 2026-10-18 repair

The initial run [39043945227](https://github.com/JangKroed/openlingo/actions/runs/39043945227) at `32e0ef4` failed in `pnpm/action-setup@v4` with `Multiple versions of pnpm specified`. The action compared workflow `version: 12` with `packageManager: pnpm@12.11.2` and stopped before Node setup, dependency installation, checks or tests.

Removed the action's `version` input. The exact pnpm version now comes only from the root `package.json` `packageManager` field, as supported by the [action documentation](https://github.com/pnpm/action-setup/tree/v4#version). Node remains on major 24; the exact patch may change with the hosted runner. Package-manager and dependency pins were not changed by this repair.

## Observed GitHub Actions result

Fix commit: `6eb58e5760852526150dc78559aaefd62489764c`.

Verified run: [39133456582](https://github.com/JangKroed/openlingo/actions/runs/39133456582), job `117693133487`, conclusion **success**.

| Check | Observed result |
| --- | --- |
| pnpm setup | 12.11.2 installed successfully |
| Node setup | v24.21.0 on Ubuntu 24.04.5 |
| `pnpm install --frozen-lockfile` | PASS, all 3 workspace projects |
| `pnpm check` | PASS, API and web JavaScript syntax checks |
| `pnpm test` | PASS, 1 scaffold test, 0 failures |

The committed lockfile is format 9.0. Successful frozen installation with pinned pnpm 12.11.2 verifies compatibility for this scaffold without regenerating the lockfile. This remote commit has no application dependencies; this result does not validate installation of later uncommitted dependencies.

The runner also reports Node 20 action-runtime deprecation warnings for the v4 actions and forces those actions to run on Node 24. These warnings did not fail the job. They concern the actions' runtime separately from the application's `setup-node` version; action-major upgrades remain future maintenance.

## Separate local working-copy checks

The repair session started with existing uncommitted M0 code, manifests, documentation and lockfile changes. They were preserved and excluded from the remote CI repair.

- Local Node: v24.13.0.
- `npm run check`: PASS.
- `npm test`: 47 passed, 0 failed; synthetic/local tests only.
- `git diff --check`: PASS.
- Bootstrapping pinned pnpm 12.11.2 locally could not finish; `registry.npmjs.org` DNS resolution was unavailable. No successful local pinned-pnpm dependency installation is claimed. Local tests used the existing installed dependencies.
- The local working copy's modified lockfile/dependencies have not been validated by the remote run above. Validate them with pinned pnpm and `pnpm install --frozen-lockfile` when they are submitted.

## Reproduction and scope

Use Node 24 and the pnpm version pinned in `packageManager`, then run `pnpm install --frozen-lockfile`, `pnpm check`, and `pnpm test`. In GitHub Actions, install pnpm before `actions/setup-node` enables its pnpm cache. Do not add a second pnpm version input.

CI success establishes scaffold setup and the checks listed above only. M0 authenticated weekly-meter attribution remains **NOT VERIFIED**; this repair did not change M0 evidence or status, execute OAuth/inference, or publish the existing M0 work.
