# Proposed data model (not implemented)

learner_profiles(id,native_language,target_language,level,goal,settings_json)

learning_sessions(id,learner_id,scenario,status,started_at,ended_at)

conversation_messages(id,session_id,role,content,input_mode,created_at)

session_feedback(id,session_id,summary,corrections_json,weaknesses_json)

learning_progress(id,learner_id,skill,metric_json,updated_at)

ai_provider_connections(id,provider,model,credential_reference,status)

Never export actual OAuth tokens. Learning score is not a certified language proficiency score.
