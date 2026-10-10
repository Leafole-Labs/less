# AGENTS.md — LESS

## Project Overview

LESS is an independent WordPress fork developed by Leafole Labs.

The project maintains compatibility with the existing WordPress 
architecture while introducing its own defaults, interface improvements, 
and carefully scoped modifications.

When working on LESS, prioritize stability, security, compatibility, 
maintainability, and consistency with the existing codebase.

## 1. Mandatory Workflow

Before making any changes:

1. Inspect the repository structure and current Git status.
2. Read the relevant source files and understand the existing 
implementation.
3. Identify the actual version of WordPress, PHP requirements, 
dependencies, and APIs in use.
4. Determine which files must change to accomplish the task.
5. Provide a brief implementation plan for substantial changes.

After planning, implement the requested changes. Do not stop after 
describing a solution.

Never assume a file, function, class, component, dependency, or API exists 
without checking the repository.

## 2. Scope Control

- Implement only the requested features and the changes strictly necessary 
to support them.
- Do not perform unrelated refactoring.
- Do not restructure directories or rename files without a concrete 
technical requirement.
- Do not reformat unrelated files.
- Do not replace existing implementations merely because another approach 
is more familiar.
- Preserve existing functionality unless the task explicitly requires 
changing it.
- Prefer minimal, targeted patches over large rewrites.
- Do not add features that were not requested.

If an architectural limitation prevents the requested implementation, 
explain the limitation and choose the smallest compatible alternative.

## 3. WordPress Compatibility

LESS is a WordPress fork, not a completely independent CMS.

- Preserve WordPress APIs, hooks, filters, capabilities, routes, and 
conventions wherever applicable.
- Follow the existing implementation and version of WordPress as the 
source of truth.
- Verify compatibility before using APIs introduced in newer WordPress 
releases.
- Avoid breaking compatibility with existing plugins, themes, the editor, 
authentication, media handling, and administrative workflows.
- Keep changes to upstream WordPress code minimal and clearly scoped.
- Do not remove existing functionality simply to make a new feature easier 
to implement.
- Preserve existing database schemas and data formats unless a migration 
is explicitly necessary.
- Do not introduce a new framework or dependency without a clear 
justification.

## 4. Security

Security is a priority.

- Preserve existing security patches and hardening measures.
- Never intentionally reintroduce known vulnerabilities fixed in LESS.
- Follow WordPress security practices for sanitization, validation, 
escaping, nonces, capabilities, and authorization.
- Validate untrusted input on the server side.
- Escape output in the appropriate context.
- Use prepared statements or established database APIs for database 
queries.
- Never expose secrets, credentials, private keys, tokens, or sensitive 
configuration values.
- Do not bypass authentication or permission checks to make a feature 
work.
- Ensure administrative actions are authorized on the server, not merely 
hidden in the interface.
- Avoid disabling security mechanisms to resolve unrelated errors.

Do not claim that a security issue is fixed without identifying the 
relevant code change and performing appropriate verification.

## 5. PHP and SQLite

LESS uses SQLite as its database backend.

- Preserve the existing SQLite integration and database behavior.
- Follow the database abstraction and query conventions already present in 
the repository.
- Do not assume MySQL-specific behavior is available.
- Avoid introducing MySQL-only SQL syntax or functions without verifying 
compatibility.
- Preserve existing data and database integrity.
- Avoid unnecessary schema changes and migrations.
- Test database-related changes against SQLite whenever the environment 
permits.
- Keep PHP syntax compatible with the project's actual supported PHP 
versions.
- Do not introduce dependencies on extensions that the project does not 
already require unless justified and documented.

## 6. Frontend and Administrative Interface

- Follow the existing LESS interface, styles, and component conventions.
- Prefer native browser capabilities and existing project utilities when 
sufficient.
- Keep interfaces responsive, accessible, and usable with a keyboard.
- Provide visible focus states and appropriate contrast.
- Respect the active color scheme when implementing themed interfaces.
- Avoid unnecessary animations, visual clutter, and excessive decoration.
- Prevent keyboard shortcuts from interfering with text inputs, editable 
regions, or existing application shortcuts.
- Avoid unnecessary JavaScript dependencies.
- Ensure that interactive controls perform real actions and handle 
loading, empty, and error states appropriately.

Do not implement a visual mockup in place of working functionality.

## 7. Dependencies and Architecture

- Inspect existing dependencies before adding new ones.
- Avoid adding packages for functionality that can be implemented cleanly 
with existing tools.
- Do not introduce build systems, frameworks, or services that the project 
does not already use without explicit justification.
- Preserve the repository's current architecture and conventions.
- Keep modifications understandable and easy to review.
- Avoid duplicate implementations of existing utilities or components.

## 8. Git and File Safety

- Inspect `git status` before editing files.
- Never discard, overwrite, reset, or revert unrelated user changes.
- Do not run destructive Git commands unless explicitly authorized.
- Do not commit, push, publish, or create releases unless requested.
- Do not generate large numbers of unrelated file changes.
- Review the final diff and verify that every modified file is relevant to 
the task.
- Never report changes as complete unless they have actually been applied.

## 9. Testing and Verification

After implementing changes:

1. Run the relevant tests, syntax checks, and build commands available in 
the repository.
2. Check for regressions in affected functionality.
3. Test database interactions against SQLite when applicable.
4. Verify permissions and security-sensitive behavior.
5. Review the final Git diff.
6. Clearly distinguish tests that passed from tests that were not run.

Do not invent test results. A successful build does not prove that the 
application works correctly at runtime.

If a test cannot be executed because of missing tooling or environmental 
limitations, state that explicitly.

## 10. Documentation

- Update documentation and changelogs when the requested work warrants it.
- Document new configuration options and meaningful compatibility 
requirements.
- Describe only functionality that has actually been implemented.
- Avoid duplicating documentation unnecessarily.
- Keep descriptions concise, accurate, and consistent with the code.

## 11. Final Response

At the end of each substantial task, provide:

- A concise summary of what was implemented.
- A list of files created or modified.
- Relevant implementation details.
- Tests performed and their actual results.
- Known limitations or outstanding issues.

Be precise and transparent. Do not claim success for functionality that 
has not been verified.

