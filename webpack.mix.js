const mix = require('laravel-mix');

const base_path = './src/scss/';
const public_path = './build/';
const css_path = public_path + 'css/';

mix
    .setPublicPath(public_path)

    .sass(base_path + 'material-design-icons-seo.scss', css_path)
    .sass(base_path + 'test.scss', css_path)

    .disableNotifications()
    .version();
