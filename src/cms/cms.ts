import CMS from 'netlify-cms-app'

type Config = {
    backend?: any,
    display_url?: string,
    publish_mode?: string
};

const config : Config = {};

if (process.env.NODE_ENV === 'development') {
    const FileSystemBackend = require('netlify-cms-backend-fs');
    config.backend = {
        "name": "file-system",
        "api_root": "/api"
    };
    config.display_url = "http://localhost:8000";
    CMS.registerBackend('file-system', FileSystemBackend)
} else {
    config.backend = {
        "backend": {
            "name": "git-gateway"
        }
    };
    config.publish_mode = "editorial_workflow";
}
CMS.init({config});
