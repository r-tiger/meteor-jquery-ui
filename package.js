Package.describe({
  name: 'tiger:jquery-ui',
  version: '1.11.4',  
  summary: 'jquery-ui 1.11.4 without tooltip for use Bootstrap Tooltip',
  
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use("jquery", "client");

  api.add_files("jquery-ui-1.11.4/images/ui-bg_glass_55_fbf9ee_1x400.png", "client");
  api.add_files("jquery-ui-1.11.4/images/ui-bg_glass_65_ffffff_1x400.png", "client");
  api.add_files("jquery-ui-1.11.4/images/ui-bg_glass_75_dadada_1x400.png", "client");
  api.add_files("jquery-ui-1.11.4/images/ui-bg_glass_75_e6e6e6_1x400.png", "client");
  api.add_files("jquery-ui-1.11.4/images/ui-bg_glass_95_fef1ec_1x400.png", "client");
  api.add_files("jquery-ui-1.11.4/images/ui-bg_highlight-soft_75_cccccc_1x100.png", "client");
  api.add_files("jquery-ui-1.11.4/images/ui-icons_2e83ff_256x240.png", "client");
  api.add_files("jquery-ui-1.11.4/images/ui-icons_222222_256x240.png", "client");
  api.add_files("jquery-ui-1.11.4/images/ui-icons_454545_256x240.png", "client");
  api.add_files("jquery-ui-1.11.4/images/ui-icons_888888_256x240.png", "client");
  api.add_files("jquery-ui-1.11.4/images/ui-icons_cd0a0a_256x240.png", "client");

  api.add_files("jquery-ui-1.11.4/jquery-ui.css", "client");
  api.add_files("jquery-ui-1.11.4/jquery-ui.js", "client"); 
});

