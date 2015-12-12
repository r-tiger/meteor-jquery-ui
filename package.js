Package.describe({
    name: 'ruslan:jquery-ui',
    version: '0.0.2',
    summary: 'jquery-ui 1.11.4 without tooltip for use Bootstrap Tooltip',
    git: 'https://github.com/r-tiger/meteor-jquery-ui',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');

    api.use(["jquery"], "client");
    api.addFiles(["jquery-ui.css","jquery-ui.js"],
        "client");

    api.addAssets(["images/ui-bg_glass_55_fbf9ee_1x400.png",
        "images/ui-bg_glass_65_ffffff_1x400.png",
        "images/ui-bg_glass_75_dadada_1x400.png",
        "images/ui-bg_glass_75_e6e6e6_1x400.png",
        "images/ui-bg_glass_95_fef1ec_1x400.png",
        "images/ui-bg_highlight-soft_75_cccccc_1x100.png",
        "images/ui-icons_2e83ff_256x240.png",
        "images/ui-icons_222222_256x240.png",
        "images/ui-icons_454545_256x240.png",
        "images/ui-icons_888888_256x240.png",
        "images/ui-icons_cd0a0a_256x240.png"], "client");

});

