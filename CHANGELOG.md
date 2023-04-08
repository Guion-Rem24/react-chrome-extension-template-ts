# 変更記録

## webpack.config.js

### `Invalid options object. Copy Plugin has been initialized using an options object that does not match the API schema. options[0] has an unknown property 'to'`

4 -> 5 でschema が変わったらしい（[参考](https://tadtadya.com/webpack4-error-of-version-up-of-copywebpackplugin/#:~:text=%E3%82%84%E3%81%A3%E3%81%B1%E3%82%8A%E5%A4%89%E3%82%8F%E3%81%A3%E3%81%A6%E3%81%BE%E3%81%99%E3%81%AD%E3%80%82from%2C%20to%E3%81%AFpatterns%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%81%AB%E5%85%A5%E3%82%8C%E3%82%8B%E3%82%89%E3%81%97%E3%81%84%E3%80%82%E5%A4%89%E6%9B%B4%E5%BE%8C%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%81%A7%E3%81%99%E3%80%82)）

## manifest.json

### `Invalid value for content_security_policy` 
[参考](https://stackoverflow.com/questions/67130826/why-am-i-getting-failed-to-load-extension-invalid-value-for-content-security)

### `The "background.scripts" key cannot be used with manifest_version 3. Use the "background.service_worker" key instead.` 
[参考](https://qiita.com/TiggeZaki/items/bb35afe43c347d38dc4e#:~:text=%E6%8C%87%E7%A4%BA%E9%80%9A%E3%82%8Abackground%E3%81%AEscripts%E3%82%92service_worker%E3%82%92%E3%81%AB%E5%A4%89%E6%9B%B4%E3%81%97%E3%81%A6%E3%81%BF%E3%81%BE%E3%81%97%E3%81%9F%E3%80%82)

### `'browser_action' requires manifest version of 2 or lower.` 
[参考](https://qiita.com/TiggeZaki/items/bb35afe43c347d38dc4e#:~:text=%E3%81%93%E3%81%A3%E3%81%A1%E3%81%AE%E8%A7%A3%E6%B1%BA%E6%96%B9%E6%B3%95%E3%81%AF%E5%8D%98%E7%B4%94%E3%81%A7browser_action%E3%82%92action%E3%81%AB%E5%A4%89%E3%81%88%E3%82%8C%E3%81%B0%E3%81%84%E3%81%84%E3%81%A0%E3%81%91%E3%81%A7%E3%81%97%E3%81%9F%E3%80%82)

## Hot Reload
[参考](https://github.com/sidehustlelab/chrome-manifest-v3-webpack-hotreload-template)

```bash
$ yarn add -D clean-webpack-plugin html-webpack-plugin write-file-webpack-plugin webpack-dev-server
```