You are helping the user create a new draft blog post for their Eleventy site.

DO NOT write any body content. The user writes all content themselves. Your job is ONLY to create the markdown file with correct frontmatter.

## Interview

Ask the user the following questions using AskUserQuestion. Ask them all at once in a single call:

1. **Title** — "What's the working title for this post?" (free text, no predefined options — just provide 2 placeholder-style options like "Untitled Draft" and "TBD" so the user types their own)
2. **Topic** — "In a sentence or two, what is this post about?" (free text — provide 2 options like "I'll figure it out as I write" and "Just create a blank draft" so the user types their own)

## After the interview

Based on their answers:

1. **Suggest tags** — Based on the topic, suggest 2-4 relevant tags. Present them with AskUserQuestion using multiSelect so the user can pick which ones (if any) to include. Keep tags lowercase, hyphenated. Don't include a "none" option — the user can just select nothing or type "none".
2. **Suggest a description** — Propose a short one-sentence description for the post's frontmatter. Ask if they want to use it, modify it, or skip it.
3. **Create the file** — Generate the markdown file at `src/posts/<slug>.md` where the slug is derived from the title (lowercase, hyphenated, no special chars). Use today's date.

## Frontmatter format

```markdown
---
title: "The Post Title"
date: YYYY-MM-DD
description: "Optional one-liner"
tags:
  - tag-one
  - tag-two
draft: true
---

<!-- Write your post here -->
```

Rules:
- ALWAYS set `draft: true` — the user will remove this when ready to publish
- The `tags` field should NOT include "posts" (that's auto-applied by posts.11tydata.js)
- If the user chose no tags and no description, omit those fields entirely rather than leaving them empty
- Use the Write tool to create the file — do not ask the user to create it manually
- After creating the file, tell the user the file path so they can open it and start writing
