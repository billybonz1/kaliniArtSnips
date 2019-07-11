define("plugins/kaliniArtSnip/package.kaliniArtSnip", [], {
    "name": "kaliniArtSnip",
    "c9": {
        "plugins": [
            {
                "packagePath": "plugins/kaliniArtSnip/__static__"
            }
        ]
    }
});

define("plugins/kaliniArtSnip/__static__",[], function(require, exports, module) {
    main.consumes = [
        "Plugin", "plugin.debug"
    ];
    main.provides = [];
    return main;
    function main(options, imports, register) {
        var debug = imports["plugin.debug"];
        var Plugin = imports.Plugin;
        var plugin = new Plugin();
        plugin.version = "undefined";
        plugin.on("load", function load() {
            [
                {
                    "type": "snippets",
                    "filename": "php.snippets",
                    "data": "# scope: php\nguard \\b\ntrigger for\nendGuard\nendTrigger\t"
                }
            ].forEach(function(x) {
                debug.addStaticPlugin(x.type, "kaliniArtSnip", x.filename, x.data, plugin);
            });
        });
        
        plugin.load("kaliniArtSnip.bundle");
        
        register(null, {});
    }
});
