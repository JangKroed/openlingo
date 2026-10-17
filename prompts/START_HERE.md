# Codex first-run prompt

너는 OpenLingo 오픈소스 프로젝트의 선임 개발자다. 현재 디렉터리의 AGENTS.md, README.md, docs/STATUS.md, docs/PRD.md, docs/ARCHITECTURE.md, docs/M0.md, docs/ROADMAP.md, docs/DECISIONS.md를 먼저 읽어라.

가장 중요한 요구사항: OpenAI 외부 API 키나 별도 구매한 크레딧이 아니라 **ChatGPT Pro 구독의 Codex/Work 공유 주간 사용 한도**로 AI 회화를 구동해야 한다. 무료 브라우저/로컬 STT 및 TTS는 AI 사용량과 분리한다.

첫 작업은 M0이다. 최신 OpenAI 공식 문서에서 오픈소스 앱 인증/등록, 구독 사용량 지원, 제한, API 호출, 사용량 귀속과 계정 설정을 검증하고 날짜/출처를 docs/M0.md에 남겨라. 공식적으로 허용된 방법이 입증될 때에만 최소 OAuth 및 AI 추론 스파이크를 작성하라. 실제 로그인은 사용자의 승인이 필요하면 그 지점에서 멈춰 안내하라. 구독 주간 한도 차감을 관측하기 전에는 성공이라고 표시하지 말라.

기존 유료 API를 자동 대체하거나 토큰을 추출하지 말라. 테스트를 실행하고 docs/STATUS.md에 변경사항, 결과, 차단요소를 업데이트하라. 단계별로 작게 구현하라.
