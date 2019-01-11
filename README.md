# Headless Wordpress Starter

This is a gatsby starter with some basic components for connecting Gatsby's data layer to a Wordpress REST API

## Notes on setting up

Fork the repo and add in a process.env file with the variables WORDPRESS_USER and WORDPRESS_PASSWORD filled in with the info for the Wordpress backend you are trying to connect to.

Adjust the baseUrl and other relevant info in gatsby-config.

Finally, be sure to have a page defined in Wordpress with the slug and title "Home", this page will be pulled in and used to fill the content of index.js

### Configuration with Netlify

To configure with netlify:

1.  Connect your repository with netlify
2.  Under the Build & Deploy settings:
    - Add the environment variables into your netlify project
    - Add a build hook and save the URL
3.  In your WordPress Backend, add webhooks into `functions.php` in your theme. Note that it would be best to do this in a custom or child theme to avoid accidentally overwriting the webhooks if your theme gets updated.
    - Here is an example of the code you could add, this will trigger a build on a page or post being published:
    ```
        function deploy_gatsby_build() {
            wp_remote_post( 'https://api.netlify.com/build_hooks/your_unique_webhook_url', '' );
        }
        add_action( 'publish_post', 'deploy_on_publish' );
        add_action( 'publish_page', 'deploy_on_publish' );
    ```
