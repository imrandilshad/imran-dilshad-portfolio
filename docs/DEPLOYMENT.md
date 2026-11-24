# Deployment

## Vercel (recommended)

1. Push the repository to GitHub.
2. In Vercel, select **Add New → Project** and import the repository. The framework preset is detected as Next.js.
3. Add an environment variable for **Production**:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com` (no trailing slash)
4. Deploy.
5. To add a custom domain (for example `imrandilshad.com`, if available), go to **Project → Settings → Domains**, add the domain, and follow the DNS instructions. Make the apex or `www` domain primary and redirect the other.
6. Update `NEXT_PUBLIC_SITE_URL` to the final domain and redeploy.

Without `NEXT_PUBLIC_SITE_URL`, the site falls back to Vercel's production URL (`VERCEL_PROJECT_PRODUCTION_URL`), which works but isn't your custom domain.

## Post-deployment checklist

- [ ] `https://<domain>/robots.txt` and `/sitemap.xml` show the correct domain
- [ ] Page source has the correct `<link rel="canonical">` and `og:url`
- [ ] The OG preview renders in the LinkedIn Post Inspector
- [ ] The resume download works
- [ ] GitHub, LinkedIn, and email links open correctly
- [ ] Lighthouse (mobile and desktop) is reviewed
- [ ] The sitemap is submitted in Google Search Console

## Other hosts

The app runs anywhere Node.js 20.9+ is available:

```bash
npm ci
npm run build
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run start
```

Set `NEXT_PUBLIC_SITE_URL` at **build time**, because metadata and the sitemap are prerendered.
