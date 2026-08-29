# Data


This folder contains sample test data used to validate the chatbot's NLP pipeline and response quality.

## Contents
- `raw_test_conversations.json` — original, unprocessed sample user inputs
- `cleaned_test_conversations.json` — cleaned and validated version of the above
- `data_cleaning_report.md` — documents cleaning steps and before/after comparison
- `data_storage_documentation.md` — documents the storage method and data schema used

## Note
This project does not use a large external dataset since it is an AI chatbot powered by the Gemini API (which handles NLP and response generation directly). The data here represents test cases used to manually validate chatbot behavior across different types of user inputs (greetings, questions, edge cases, etc.).
