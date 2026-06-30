# SEO Launch Go/No-Go Checklist

## Pre-Launch

- Confirm canonical blog hub is /new-articles/.
- Confirm /category/blog/ 301 redirects to /new-articles/.
- Confirm merged pages 301 to canonical targets.
- Confirm template and template_tag paths return 410.
- Confirm tag archives are noindex, follow.
- Confirm uncategorized and thin category archives are noindex, follow.
- Confirm sitemap includes only canonical 200 indexable URLs.
- Confirm redirected URLs are not listed in sitemap.
- Confirm robots.txt does not block important service/location pages.
- Confirm all important pages use self-referencing canonical.

## Day 0 Validation

- Test 10 highest-priority redirects with curl or browser.
- Validate status codes:
  - Canonical pages: 200
  - Redirected pages: 301
  - Removed pages: 410
- Submit final sitemap in Google Search Console.
- Request indexing for homepage, contact page, and top 5 money pages.

## Day 1 to Day 14 Monitoring

- Check GSC coverage daily for new 404 spikes.
- Check GSC for Soft 404, redirect error, and canonical mismatch issues.
- Check top pages in GSC Performance for traffic loss.
- Fix any redirect chains discovered in crawl.

## Pass Criteria

- No critical money page returns 404.
- No canonical money page is noindex.
- No template/tag junk URLs are indexable.
- Sitemap is accepted and valid in GSC.
