# Headless Wordpress Starter

Starter with some basic components for connecting Gatsby's data layer to a Wordpress REST API

## Instructions

Fork the repo and add in a process.env file with the variables WORDPRESS_USER and WORDPRESS_PASSWORD filled in with the info for the Wordpress backend you are trying to connect to.

Adjust the baseUrl and other relevant info in gatsby-config.

Finally, be sure to have a page defined in Wordpress with the slug and title "Home", this page will be pulled in and used to fill the content of index.js
