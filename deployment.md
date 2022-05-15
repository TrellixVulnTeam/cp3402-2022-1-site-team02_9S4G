#Deployment Overview
##Applications and Processes

Our site deployment for this project takes advantage of a number of programs, applications, and working environments to facilitate
the creation and editing of the site theme and to push those changes to the development (test) site and finally to the live site. The applications
used, a brief description on how (and why) they are used in this particular project, and a link to acquire them can be found below:

###Theme Development
**PhpStorm**: PhpStorm is a cross-platform IDE created by JetBrains used to edit various types of code (PHP, HTML, Javascript, etc). In this project it is the primary means of editing the theme and was chosen due to its popularity and its various "Wordpress Aware" features. PhpStorm can be downloaded here: https://www.jetbrains.com/phpstorm/

**_S (underscores):** Underscores is a starter theme and designed to be edited to create new CMS themes. It is lauded as a "1000-hour head start" with inbuilt css and php code; everything you need to get started. We chose underscores as it provided base structure for our code. Underscores can be found and installed here: https://underscores.me/

**Sass**: Sass (Syntactically Awesome Style Sheets) is an extension of the CSS language. It is a CSS preprocessor that extends CSS by allowing
our developers to write code that gets compiled into CSS. We use this application and process to edit our theme and add new features and coding
practices/workflows to our development. You can find Sass here, but it can be set up using _s (underscores) by default: https://sass-lang.com/

**Grunt.js**: Grunt is a JavaScript task runner used to automate tasks such as minification, compilation, unit testing, and processing within and between various files and
platforms. In this project, Grunt is used to assist in the processing of our Sass (scss) files and css files. It was chosen due to its
popular use with Wordpress sites and after testing with similar applications. Grunt can be downloaded here: https://gruntjs.com/

###Hosting and Deployment
**Bitnami**: Bitnami is a library of installers and software packages used to run certain applications or provide features and support to application environments. In this project Bitnami is
used to locally host our Wordpress site and contains an Apache web server and hosting for our site's database. We chose Bitnami as it already had inbuilt functionality with Wordpress and was a simple "one-click" installation and 
setup. You can find Bitnami with Wordpress here: https://bitnami.com/stack/wordpress

**AWS**: AWS (Amazon Web Services) is a widely adopted cloud platform created by Amazon. It offers a large number of different hosting instances for different environments and hosting needs. In this project we used AWS to host our Dev and Prod wordpress sites using EC2 instances. We chose AWS because it is the world's most
"comprehensive and broadly adopted cloud platform" and is a relatively inexpensive option for what we needed for this project. You can find information on AWS here: https://aws.amazon.com/
###Project Management
**Github**: Github is a wildly used platform for developers to build, share and maintain software, code, applications, and more. In this project, we used Github to host a repository for all of our code and resources and to maintain detailed version control of the changes we have made throughout
the project. Information on github can be found here: https://github.com/

**Slack**

**Discord**

**Trello**
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
