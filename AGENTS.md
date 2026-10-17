# Agent instructions for Codex

Read README.md, docs/STATUS.md, docs/PRD.md, docs/ARCHITECTURE.md, docs/M0.md, docs/ROADMAP.md before acting.

## Non-negotiable
- The intended meter is the ChatGPT subscription's Codex/Work **weekly plan usage**, NOT paid Platform API tokens or purchased credits.
- Validate current official OpenAI integration documentation and eligibility before coding. Do not invent endpoints or claim integration works without real authenticated usage and an observed weekly-meter change.
- Never extract browser cookies, borrow Codex CLI tokens, reverse-engineer private APIs, circumvent rate limits, or log credentials.
- Never auto-fallback to paid APIs or credit spending, even if the weekly quota is exhausted. Stop and report blockers.
- User-managed account settings might allow extra credit charges; app-level safety alone cannot guarantee billing is disabled.
- Browser STT transcription is not acoustic pronunciation assessment. No invented pronunciation scores.
- Default to local data, no microphone audio retention by default; OS secure store/encrypted storage for secrets; no secrets in Git.
- Make incremental changes with tests and docs. Do not mark placeholders as production features.
- First task: M0 proof, then M1 scaffold migration to Next.js/NestJS/SQLite.
- Reply to user in Korean with changed files, checks, limitations and next actions.
