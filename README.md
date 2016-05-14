# vue-config
An easy way to get App config

## Usage

``` bash
npm install vue-config
```

``` javascript
const vueConfig = require('vue-config')
const configs = {
  API: 'http://localhost:6003' // It's better to require a config file
}

Vue.use(vueConfig, configs)

// A param named `$config` will be injected in to every component, so in your component, you can get config easily
const API = this.$config.API
```