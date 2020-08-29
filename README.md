# BoldR Lite

**Contributors:** iceable  
**Requires at least:** WordPress 4.7  
**Tested up to:** WordPress 5.1.0  
**Stable tag:** 1.2.17  
**Version:** 1.2.17  
**Tested up to:** 5.5  
**Requires PHP:** 5.6  
**License:** GPLv2 or later  
**License URI:** http://www.gnu.org/licenses/gpl-2.0.html  
**Tags:** one-column, two-columns, right-sidebar, custom-header, custom-background, custom-menu, featured-images, footer-widgets, full-width-template, sticky-post, theme-options, threaded-comments, translation-ready, blog, entertainment, news

A bold, magazine style, responsive WordPress Theme by Iceable Themes.


## Description

BoldR Lite is a Bold, Responsive, Magazine-style theme for WordPress. Suitable for any website and perfect for tech or design oriented blogs and creative business websites.

It features two widgetizable areas (Sidebar and optional Footer), two menu locations (Navbar and Footer), optional Tagline display, custom Logo and Favicon, Custom Header Image and Custom Background.

BoldR Lite is the lite version of [BoldR Pro](https://www.iceablethemes.com/shop/boldr-pro), which comes with many additional features and access to premium class pro support forum.

### Installation

#### From your WordPress dashboard

1. Visit "Appearance > Themes > Add New"
2. Search for "BoldR Lite"
3. Click "Install" and then "Activate".

#### From WordPress.org

1. Download [BoldR Lite](https://wordpress.org/themes/boldr-lite/).
2. Upload the "boldr-lite" directory to your "/wp-content/themes/" directory, using your favorite method (ftp, FileManager, etc...)
3. Activate BoldR Lite from the Appearance > Themes page in wp-admin.

#### From GitHub

1. Clone or Download this repo.
2. Upload the "boldr-lite" directory to your "/wp-content/themes/" directory, using your favorite method (ftp, FileManager, etc...)
3. Activate BoldR Lite from the Appearance > Themes page in wp-admin.

### Getting started with BoldR Lite
* Once you activate the theme from your WordPress admin panel, you can visit the customizer (Appearance > Customize) to set your own logo, header image, background, menus etc.
* If you will be using a custom header image, you will find options to enable or disable it on your homepage, blog index pages, single post pages and individual pages.
* It is highly recommended to set a menu yourself, instead of relying on the default menu. Doing so will automatically activate the dropdown version of your menu in responsive mode.
* You can also set a custom menu to appear at the bottom right of your site. Note this footer menu doesn't support sub-menus, only top-level menu items will be displayed.
* Footer widgets: The widgetizable footer is disabled by default. To activate it, simply go to Appearance > Widgets and drop some widgets in the "Footer" area, just like you would do for the sidebar. It is recommended to use 4 widgets in the footer, or no widgets at all to disable it.
* Additional documentation and free support forums can be found at https://www.iceablethemes.com under "support".

### Translation

Bundled translations (GPL Licensed):
* French (fr_FR) translation: Copyright 2013-2020, Iceable Themes - https://www.iceablethemes.com
* Russian (ru_RU) translation: Copyright Dmitriy Skalubo - http://wordpress.crimea.ua/
* German (de_DE) translation: Adapted from BoldR Pro translation, Copyright FromBeyond - info@frombeyond.de
* Spanish (es_ES) translation: Copyright Chema Masip Diaz – http://www.pedaleapormadrid.es/ – chmadi@gmail.com
* Brazilian Portuguese (pt_BR) translation: Copyright Rafael de Oliveira Stephano - http://rstephano.com.br - rafael@rstephano.com.br
* Polish (pl_PL) translation: Copyright nitr0 - dreambyte.pl
* Italian (it_IT) translation: Copyright Manuel Valentino - brisma@gmail.com - http://www.brisma.it/

Translating this theme into your own language is quick and easy, you will find a .POT file in the /languages folder to get you started. It contains about 80 strings only.

If you don't have a .po file editor yet, you can download Poedit from https://www.poedit.net/download.php - Poedit is free and available for Windows, Mac OS and Linux.

If you have translated this theme into your own language and are willing to share your translation with the community, please feel free to do so on the forums at https://www.iceablethemes.com
Your translation files will be added to the next update. Don't forget to leave your name, email address and/or website link so credits can be given to you!


## Copyright

BoldR Lite WordPress Theme, Copyright 2013-2020 Iceable Themes - https://www.iceablethemes.com  
BoldR Lite is distributed under the terms of the GNU GPL

BoldR Lite bundles the following third-party resources:

superfish, Copyright 2013 Joel Birch.  
**License:** MIT and GPL  
Source: http://users.tpg.com.au/j_birch/plugins/superfish/

HTML5 Shiv v3.6, Copyright @afarkas @jdalton @jon_neal @rem  
**License:** MIT/GPL2  
Source: https://github.com/aFarkas/html5shiv


## Changelog

### 1.2.17
February 28th, 2019
* Updated copyright

### 1.2.16
January 31th, 2018
* Merged Google fonts requests into one
* Updated copyright

### 1.2.15
November 18th, 2017
* Updated Readme.txt file to the new format for WordPress.org
* Updated Tags list
* Tested with WordPress 4.9
* Removed support for WordPress lesser than 4.7

### 1.2.14
October 10th, 2017
* Refactored all PHP code to conform to the WordPress coding standards

### 1.2.13
August 25th, 2017
* Added internationalization support to 3-letters months in post dates
* Fixed: Removed metadata for pages in search results
* Fixed: Prefixed theme constants names
* Fixed: Removed additional support for child themes for WP<4.7 (was relying on file_exists() which emits a PHP E_WARNING upon failure)
* Fixed: Singular placeholder in gettext function in comments.php
* Enhanced: Wrapped pingback url in appropriate conditionals in header.php
* Enhanced: HTML5Shiv is now properly enqueued
* Enhanced: Using get_the_archive_title() for archive page titles
* Enhanced: Ordered placeholders for printf() in footer.php
* Enhanced: Prefixed Google fonts handles

### 1.2.12
June 21th, 2017
* Removed function_exists('wp_site_icon') checks and related functions (deprecated since WP 4.3)

### 1.2.11
May 8th, 2017
* Added theme constants
* Load CSS and JS file with theme version to prevent potential issue after updates

### 1.2.10
March 8th, 2017
* Fixed boldr_remove_rel_cat() to only remove "category" (but not "tag") value from the rel attribute
* Added php tags in footer.php, making it less confusing for users who want to modify the footer note

### 1.2.9
January 9th, 2017
* Updated copyright to 2017

### 1.2.8
December 12th, 2016
* Now using get_theme_file_uri() to register stylesheets and javascripts for WordPress 4.7
* Tested with WordPress 4.7

### 1.2.7
November 14th, 2016
* Updated searchforms to HTML5 markup

### 1.2.6
August 29th, 2016
* Removed function boldr_render_title() used as a fallback for title tag support
* Dropped support for WordPress lesser than 4.1
* Tested with WordPress 4.6

### 1.2.5
June 16th, 2016
* Tested with WordPress 4.5.2
* Updated external links to wordpress.org and iceablethemes.com to https
* Removed php closing tags from end of files to prevent potential issues
* Updated theme tags for WordPress.org

### 1.2.4
January 13th, 2016
* Enhanced support for <!--more--> quicktag
* Updated copyright to 2016
* Tested with WordPress 4.4.1

### 1.2.3
November 23rd, 2015
* Fixed issue with sidebar in WordPress 4.4
* Tested with WordPress 4.4 (beta 4)

### 1.2.2
November 4th, 2015
* Disabled the "favicon" theme setting for WordPress 4.3+ (no longer useful since WP 4.3+ includes wp_site_icon)
* Added screen-reader-text CSS support
* Changed textdomain to theme slug: 'boldr-lite'
* Tested with WordPress 4.3

### 1.2.1
July 22th, 2015
* Fixed: minor error in fr_FR translation file
* Fixed: re-added recommended height for header image (removing it causes an issue with the "crop" function when picking a new image)

### 1.2.0
July 10th, 2015
* Replaced theme options panel with Customizer implementation
* Added "title-tag" support
* Custom Header image: removed recommended height
* Updated fr_FR translation file
* Tested with WordPress 4.2.2

### 1.1.47
February 2nd, 2015
* Enhanced menu items: the whole area (box) around menu item is now clickable, not only the text
* Updated copyright date to 2015
* Updated description

### 1.1.46
December 18th, 2014
* Fixed: Typo in comments.php in version 1.1.45 breaking all pages with comments

### 1.1.45
December 16th, 2014
* Fixed: made all text strings translatable in front-end and back-end.
* Updated POT file
* Updated french (fr_FR) bundled translation

### 1.1.44
December 15th, 2014
* Tested with WordPress 4.1 (RC1)
* Fixed Blogpost title font size in index
* Profixed 'boldr-style' handle when registering style.css
* Moved admin notice to theme options page only and removed boldr_notice_ignore()
* Now using core bundled version of hoverIntent
* Removed content filters
* Renamed and moved /page-full-width.php to /page-templates/full-width.php
* Reviewed and enhanced validation, sanitation and escaping in theme options
* Added an extra user permission check before saving theme options setting in the database
* Appropriately use the_title_attribute() to escape title attributes in index.php and single.php

### 1.1.43
October 27th, 2014
* Added it_IT translation files
* Updated de_DE translation files

### 1.1.42
September 24th, 2014
* Fixed hAtom structured data (Errors like Missing required field "entry-title" / "updated" / hCard "author" in Google Webmaster tools)
* Removed hentry class from pages (hentry is irrelevant for static content)

### 1.1.41
September 8th, 2014
* Tested with WordPress 4.0
* Updated Polish (pl_PL) translation (Update by nitr0 - dreambyte.pl)
* Updated Theme Options page and upgrade description

### 1.1.40
September 1st, 2014
* Fixed further glitch in Firefox with large post thumbnails

### 1.1.39
August 25th, 2014
* Fixed CSS glitch in Firefox: oversized logo image were overflowing header area

### 1.1.38
August 4th, 2014
* Fixed an odd glitch with footer widgets columns

### 1.1.37
July 14th, 2014
* Added polish translation files (kindly provided by nitr0 - dreambyte.pl)

### 1.1.36
July 7th, 2014
* Optimized all png images (62% size reduction)
* Replaced (has_post_thumbnail()) with ('' != get_the_post_thumbnail()) in single.php (as per codex recommendation - fixes an occasional issue)

### 1.1.35
June 10th, 2014
* Fixed W3C validator error caused by the "X-UA-Compatible" meta tag. The theme now fully validates as HTML5.

### 1.1.34
May 26th, 2014
* Added ellipsis (...) to the end of truncated excerpts when displaying the "read more" button (based on user feedback).

### 1.1.33
May 19th, 2014
* Removed unnecessary function that updated boldr_settings in the database upon activation. Now saving/updating only upon user action (when user clicks "save changes" in Theme options)

### 1.1.32
May 12th, 2014
* Moved $content_width definition into a callback function (hooked to after_setup_theme)
* Tested with WP 3.9.1

### 1.1.31
May 5th, 2014
* Fixed missing spaces in all translation files

### 1.1.30
April 28th, 2014
* Overall code review and optimization
* Tested with WordPress 3.9

### 1.1.29
April 14th, 2014
* Fixed: Using sane defaults (No setting is saved in the database without explicit user action)
* Removed unused function boldr_get_settings()
* Tested with WordPress 3.9-RC1: no issue found

### 1.1.28
April 7th, 2014
* Fixed german translation: "Kein Kommentar" instead of "Nein Kommentar" based on user feedback
* Fixed typo in french translation "Votre recherche" instead of "Votre recherché"
* Updated .pot file
* Updated copyright note in all files (2013-2016)

### 1.1.27
March 31th, 2014
* Fixed missing strings from translation
* Webfonts loading (SSL/Non-SSL): removed is_ssl() check and let browsers determine which protocol to use
* Added paginated page support to page-full-width template

### 1.1.26
March 10th, 2014
* Loading webfonts with latin + latin extended subset to improve support for some foreign languages

### 1.1.25
February 26th, 2014
* Fixed minor issue in the code added to 1.1.24
* Updated fr_FR translation based on french speaking users feedback

### 1.1.24
February 17th, 2014
* Added paginated pages support

### 1.1.23
February 4th, 2014
* Added "Support and Feedback" in theme options
* Tested with WordPress 3.8.1

### 1.1.22
January 16th, 2014
* Added pt_BR translation files (kindly provided by Rafael de Oliveira Stephano)

### 1.1.21
January 2nd, 2014
* Updated tags for WordPress 3.8: fixed-layout and responsive-layout
* Updated screenshot to 880x660px for WordPress 3.8

### 1.1.20
December 13th, 2013
* Added spanish (es_ES) translation files.

### 1.1.19
November 25th, 2013
* Fixed select dropdown styling in Firefox (removes default FF arrow overlapping the custom styled arrow)

### 1.1.18
November 18th, 2013
* Bugfix: Appropriately use 'wp_enqueue_scripts' to enqueue CSS stylesheet
* Changed comment about removing credit link in footer.php (compliance)

### 1.1.17
November 8th, 2013
* Changed title attribute in footer credit link (WPTRT compliance)
* Removed logo from default settings: default now falls back to site title (WPTRT compliance)

### 1.1.16
November 5th, 2013
* Tested with WordPress 3.7.1
* Merged and minified CSS files into one for increased performances (uncompressed .dev.css version available for developpers under /css )
* Merged and minified JS files into one for increased performances (uncompressed .dev.js version available for developpers under /js )

### 1.1.15
October 21st, 2013
* Added editor style

### 1.1.14
October 2nd, 2013
* Enhanced empty search results page
* Updated .POT file
* Updated fr_FR translation

### 1.1.13
September 17th, 2013
* Merged header image code conditionals and moved to header.php
* Tested with WP 3.6.1.

### 1.1.12
September 10th, 2013
* Added: Option to disable responsive mode in Theme Options.

### 1.1.11
September 2nd, 2013
* Added: Dismissable admin notice warning users who have not set a primary menu (fallback menu is not responsive).

### 1.1.10
August 23th, 2013
* Fixed: Thumbnail display for single post causing occasional issue if not sized properly (happened when the image were uploaded while using another theme with different thumbnail size)
* Added: de_DE translation files.

### 1.1.9
August 5th, 2013
* Added: Option to choose whether blog index should display excerpt or full content for standard posts (other post formats always show full content).
* Fixed: Title for archive pages
* Updated: .POT file and fr_FR translation file.
* Tested with WP 3.6

### 1.1.8
July 25th, 2013
* CSS tidying up: moved all media queries (responsive mode) to a separate file for easier responsive mode disabling.

### 1.1.7
July 19th, 2013
* Fixed: Minor display issue in sub-footer in responsive mode
* Added: Option to display tagline on the top right
* Added: Tracking on link to BoldR Pro for statistics

### 1.1.6
July 9th, 2013
* Added: fr_FR translation files
* Added: ru_RU translation files (thanks to Dmitriy Skalubo - http://wordpress.crimea.ua/)

### 1.1.5
June 28th, 2013
* Tested with WordPress 3.5.2
* Further enhanced child-theme support (Stylesheets in /css folder can override the parent's versions)

### 1.1.4
June 19th, 2013
* Fixed: PT Sans webfont (used for content) were not enqueued properly
* Fixed: Webfonts enqueuing now supports SSL (https)

### 1.1.3
June 19th, 2013
* Enhanced child theme support by enqueueing style.css last, with get_stylesheet_directory_uri()
* Added: Option to use a text-based site title instead of an uploaded logo

### 1.1.2
June 3rd, 2013
* Added navigation links on attachment pages
* All navigation links texts are now translatable

### 1.1.1
May 31th, 2013
* Patched a little glitch in option framework (causing minor issues on new installations)
* Patched an issue with custom header display setting on new installations and homepage

### 1.1
May 28th, 2013
* Revision, enhancement and clean up of the whole code, in accordance with WP best practices
* Removed the slider which was using CPT (considered plugin territory by the WPTRT)
* Replaced the slider with WP custom header implementation
* Replaced background setting in custom option framework with WP built-in custom background
* Ability to show/hide custom header on front page, blog index, single posts and individual pages

### 1.0.2
May 2nd, 2013
* Fixed: Changed license to GPLv2 for improved compatibility
* Fixed: Escaping user-entered data before printing
* Fixed: Appropriately prefixed all custom functions
* Fixed: Proper enqueuing of google webfonts
* Fixed: "Previous" and "Next" posts links were mixed up on single post view
* Removed: Unnecessary enqueuing of jQuery
* Removed: Unnecessary use of function_exist() conditional
* Removed: Unused images files from the option framework
* Updated: Author URI

### 1.0.1
April 18th, 2013
* Fixed: Icefit Improved Excerpt enhanced to preserve some styling tags without breaking the markup
* Fixed: Option to enable/disable slider on blog index pages
* Added: Option to choose what content to display on blog index pages (Full content, WP default excerpt or Icefit improved excerpt)
* Added: /languages folder with default po and mo files and POT file for localization
* Changed: Updated Theme URI to BoldR Lite demo site

### 1.0
April 1st, 2013
* Initial release
