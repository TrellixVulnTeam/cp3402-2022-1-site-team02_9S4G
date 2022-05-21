# Site Development Overview

## Site Overview 

To allow for ease of future modification of this wordpress site, the following overview will attempt to outline the site's layout,
logic, widgets, and other features. The site itself is comprised of pages and posts, each allowing for different kinds of customisation.
The following main sections (PAGES) and their subsequent posts and features are listed here:

### Pages

1. **HOME**: The home page is the landing page of your website. It is where new viewers will come by default. The current home page 
contains a welcome message and image (added as a BLOCK text/image combination), and the button isnide this BLOCK is linked to your
SIGN-UP page, and can be relinked as needed via the wordpress editor. The image is pulled from the NexGen gallery plugin and can be changed from there.
The home page, as with most other PAGES, contain the various sidebar PLUGINS that provide some custom features to the site.
2. **EVENTS**: The events page comes from a specific plugin, "The Events Calendar", and shows a full-sized monthly calendar listing whatever
events you have currently created with a clilckable link should users require more information. The actual events can be added and editing inside the plugin itself.
If you would rather EVENTS to be a seperate page and the calendar to be added as a POST, you can edit the events page "slug" to be something other than "events".
3. **MEMBERSHIP**: The membership page is relatively basic, containing a text BLOCK containing your membership information and a call to action button that links
to your sign-up PAGE. The sign up PAGE is hidden from the main menu otherwise.
4. **ABOUT**: The about PAGE is your content-heavy page, containing a large BLOCK that contains a number of POSTS. These POSTS contain image galleries, jazz information,
and band information. Clicking on any of these linked icons will take you to the corresponding POST.
5. **CONTACT**: Your contact page contains a block of text and various images and icons situated in a BLOCK. These can be edited
directly from Wordpress. The displays your location, members, and contact details. The map image links to Google Maps.
6. **Sign-Up**: Your sign-up page is hidden by default, but can be added to the main menu if desired. It contains a post that is a registration
form created via the "User Registration" plugin.

### Posts

For this site, your posts make up the majority of your "About" page content. Each band, article, and photo gallery is a separate post, each of which can be modified and added to the page using the BLOCK editor or various plugins.