# DigitalOcean Deploy Checklist

## 1) Connect Repo
- In DigitalOcean App Platform, create a new app from GitHub.
- Select the same repository and branch used for production.

## 2) Use App Spec
- Import spec from .do/app.yaml.
- Replace YOUR_GITHUB_OWNER and YOUR_GITHUB_REPO.
- Confirm region and branch.

## 3) Verify Build Settings
- Build command: npm run launch:check
- Output directory: dist
- Static catch-all document: index.html

## 4) Verify SEO Artifacts
- Confirm public/sitemap.xml exists in build output.
- Confirm public/robots.txt exists in build output.

## 5) Verify Redirects
- Confirm all merge redirects are present as 301 rules in app spec ingress rules.
- Spot-check URLs after first deployment.

## 6) Domain and TLS
- Add pathfinderpestcontrol.com and www.pathfinderpestcontrol.com.
- Set primary domain to pathfinderpestcontrol.com.
- Enable automatic HTTPS certificates.

## 7) Smoke Test After Deploy
- Open canonical routes from src/lib/seo-route-map.ts.
- Test a few merge-source routes and confirm 301 to canonical targets.
- Validate sitemap at /sitemap.xml and robots at /robots.txt.
- Check browser deep-link refresh on a service route to ensure SPA fallback works.

## 8) Launch Gate
- Run npm run launch:check locally before each production push.
