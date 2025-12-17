# Save the Aravalis

Single-page campaign site for the Rajasthan movement.

## Local development

1. Install dependencies
2. Start dev server

## Deploy to Netlify (GitHub)

1. Push this repo to GitHub.
2. In Netlify, click "Add new site" -> "Import an existing project" and select your GitHub repo.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.

## Form backend (Netlify Forms)

The registration form uses Netlify Forms (no custom server needed). After deployment:

- Submissions appear in Netlify Dashboard -> Site -> "Forms".
- The form posts to `/thanks/` after submission.
- Required fields: `fullName`, `mobile` (10 digits). Optional: `email`.
# aravali
