# Data Cleaning Report

## Objective
Improve the quality of test input data used to validate the chatbot's responses by removing inconsistencies, noise, and invalid entries.

## Source
`raw_test_conversations.json` — a set of sample user messages used to manually test the chatbot's NLP pipeline and response generation.

## Issues Identified (Before Cleaning)
- Extra leading/trailing whitespace in several inputs (e.g. `"hii there  "`, `"  bye  "`)
- Inconsistent casing (e.g. `"WHAT can u do??"`)
- Informal/shorthand spelling (e.g. `"u"` instead of `"you"`, `"pls"` instead of `"please"`, `"helpp"` instead of `"help"`)
- Empty input entry (id 3) — not a valid test case
- Non-conversational/invalid input (id 8: `"12345"`) — not relevant to chatbot testing scope
- Excessive punctuation (e.g. `"!!!"`, `"??"`)

## Cleaning Steps Applied
1. Trimmed leading/trailing whitespace from all `user_input` fields
2. Normalized casing to lowercase where appropriate
3. Corrected shorthand/informal spelling for clarity and consistency
4. Removed excessive punctuation
5. Removed empty and irrelevant/invalid entries (ids 3 and 8)

## Result Summary
| Metric | Before | After |
|---|---|---|
| Total entries | 8 | 6 |
| Empty/invalid entries | 2 | 0 |
| Entries with formatting issues | 6 | 0 |

## Output
Cleaned dataset saved as `cleaned_test_conversations.json`, used for consistent, repeatable testing of the chatbot's NLP pipeline and response quality.
