# Going back to the old website

The new site went live with the tag **`v2.0.0`** (branch `feature/calm-redesign`).
The old site was the tag **`v1.1.5`** (commit `a1bf70e`, the `main` branch).

## How deploys work

Pushing any tag that starts with `v` runs `.github/workflows/cd.yml` from the
commit the tag points to, and copies that commit's site to the S3 bucket,
deleting anything else in the bucket.

- On `v1.1.5` and `main`, the workflow uploads the old HTML files from the repo root.
- On `v2.0.0`, the workflow builds the new site in `web/` and uploads `web/dist`.

So to restore a version, you push a new tag pointing at the commit you want.

## Roll back to the old site

From the repository folder, run:

```bash
git fetch --tags
git tag v1.1.6 a1bf70e
git push origin v1.1.6
```

That creates a tag `v1.1.6` on the old site's commit. GitHub Actions runs the
old workflow and puts the old site back in the bucket, replacing the new one.

Watch it on GitHub: the repository's **Actions** tab, run "Upload Website to S3"
for `v1.1.6`. When it shows a green check, the old site is live.

## Go forward to the new site again

Push a new tag on the latest commit of the new site:

```bash
git fetch
git tag v2.0.1 origin/feature/calm-redesign
git push origin v2.0.1
```

Use a new number each time (`v2.0.2`, `v2.0.3`, ...). A tag that already exists
can't be pushed again.

## If the page still looks the same after a deploy

- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac), or open a private window.
- The domain is served through CloudFront, whose cache can show the previous
  version for a while. Deploys of the new site clear it automatically once the
  setup below is done. A rollback to `v1.1.5`'s commit uses the old workflow,
  which doesn't, so clear it by hand: in the AWS console, open CloudFront, select
  the distribution, go to **Invalidations** and create one for `/*`.

## One-time setup: automatic cache clearing

The deploy workflow clears CloudFront's cache after each upload, but only once
these two things exist. Until then that step is skipped and the deploy still works.

1. **Give the deploy key permission.** In the AWS console, open **IAM** and find
   the user whose access key is in the GitHub secret `AWS_ACCESS_KEY_ID`. Under
   **Add permissions**, choose **Create inline policy**, switch to **JSON** and paste
   this, replacing the account number and distribution ID with yours:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": "cloudfront:CreateInvalidation",
         "Resource": "arn:aws:cloudfront::123456789012:distribution/E1ABCDEF2GHIJK"
       }
     ]
   }
   ```

   The account number is in the top-right menu of the AWS console. The
   distribution ID is the **ID** column on the CloudFront page (it starts with `E`).

2. **Tell GitHub the distribution.** In the repository on GitHub, open
   **Settings > Secrets and variables > Actions > New repository secret**. Name it
   `CLOUDFRONT_DISTRIBUTION_ID` and paste the distribution ID as the value.

The next tag you push runs the new step. In the run's log on GitHub, the
"Invalidate CloudFront cache" step should show a green check.

## Nothing else changes

Rolling back only changes the files in the S3 bucket. DNS, the domain, the
bucket and the GitHub secrets stay as they are, and nothing in the repository
is deleted: the new site stays on `feature/calm-redesign` and the old one on `main`.
