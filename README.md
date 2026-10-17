# OpenLingo

Local-first open-source AI language tutor supporting Korean, English, Japanese, Mandarin and French.

**Status: scaffold only.** ChatGPT plan-usage integration is NOT implemented or verified.

## Critical requirement
Use the user's ChatGPT **Codex/Work shared weekly plan allowance**, not OpenAI Platform API keys, not purchased credits. No automatic paid fallbacks. The current official authorization and usage-attribution path must be validated in M0 before any implementation claim.

## Start with Codex
Open this repository in Codex and paste the contents of prompts/START_HERE.md. Read AGENTS.md and docs/STATUS.md first.

## Dev
Requirements: Node 22+, pnpm. Run pnpm install then pnpm dev; health http://127.0.0.1:3001/health; placeholder web http://127.0.0.1:3000. The scaffold is a minimal runnable Node workspace, not yet NestJS/Next.js.
