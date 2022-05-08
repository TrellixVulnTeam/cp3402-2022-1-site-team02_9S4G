## Environment Overview

Staging and Production environments are hosted using separate AWS Lightsail instances with Bitnami's Wordpress installer. This provides a base Wordpress installation to start from and is easy for new developers to create new instances or clone existing instances should they need to.

Production: moxh.au

Staging: dev.moxh.au

Local: Up to the user on their preferred local environment. E.g. Flywheel Local, Bitnami, VVV, etc.

DNS: DNS is managed through Cloudflare (free tier) which provides a degree of separation between registrar, DNS and hosting (AWS). Cloudflare also provides some caching capabilities in the event the site goes offline.

## Development Workflows

### Theme Development

1. From Production, export database from Production to your local environment and create a new branch from the 'release' branch
  
2. Make changes as required and push your updates to the 'development' branch
  
3. When ready to stage changes, push/import content to the Staging environment.
  
4. Test core functionality and changes using test plan
  
5. After successful tests, push/import content from Staging environment to Production environment
  
6. Push content to 'release' Github branch
  

### Content Development

Updates to Wordpress content should first be completed in the Local or Staging environments so there is no impact to end users and any content issues are identified and resolved.

## Database Considerations

During development, ensure you always have an updated copy of the production database, especially when pushing your changes to Staging, and then Production. Pushing to Staging first ensures that both live environments have identical content.
