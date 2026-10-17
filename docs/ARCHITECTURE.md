# Architecture

## Current
Runnable minimal Node HTTP placeholder with pnpm workspace. NOT yet Next.js/NestJS, no SQLite, auth, speech or tutor implemented.

## Target
apps/web: Next.js UI + browser STT/TTS adapters and buffered sentence playback.
apps/api: NestJS modular monolith with profiles, sessions, AI provider, tutor and feedback modules.
packages/shared: typed contracts.
packages/ai-core: provider interface; authorized OAuth and credential boundary.
packages/speech: capabilities and STT/TTS adapters.
packages/database: SQLite default, optional PostgreSQL later.

## Flow
Microphone -> browser speech recognition -> text -> local API -> approved subscription-use provider -> SSE text chunks -> sentence-buffered browser speech synthesis. Use HTTP/SSE initially, not WebRTC.

## Security
Local binding by default, no cross-origin wildcard; treat prompt content as untrusted; no tokens in logs, git or exports; no raw audio saved by default; browser recognition may rely on a provider service (do not claim offline privacy).
