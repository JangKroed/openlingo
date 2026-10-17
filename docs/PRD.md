# Product requirements v0.1

## Goal
BYOAI local-first tutor for ko/en/ja/zh/fr, with the target and explanation languages selected independently. Primary product distinction is reuse of eligible ChatGPT weekly subscription usage rather than mandatory metered API tokens.

## MVP
- AI provider account connection and transparent quota/error state AFTER M0 is proven.
- Learner level, goal and conversation scenario selection.
- Streamed text conversation with transcript and scenario-aware tutor prompts.
- Browser STT and TTS where available, with explicit permission and text fallback.
- Transcript-based grammar/vocabulary feedback, saved sessions and data export/delete.
- Quota errors fail closed with no surprise billing.

## Non-goals
Real acoustic pronunciation scores, certified CEFR levels, duplex audio/WebRTC, cloud sync, paid subscription billing.

## Acceptance
End-to-end authenticated conversation genuinely draws from the weekly subscription meter (verified separately), with local stored transcript and feedback. No implicit cost or private API.
