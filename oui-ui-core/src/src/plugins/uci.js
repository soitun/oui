'use strict'

import {ubus} from './ubus'

const uci = {
  state: {
    values: {},
    changes: {}
  }
}

uci.load = function(config) {
  return new Promise(resolve => {
    if (this.state[config]) {
      resolve();
      return;
    }

    ubus.call('uci', 'get', {config}).then(r => {
      this.state.values[config] = r.values;
      resolve();
    });
  });
}

uci.get = function(config, sid, opt) {
  const values = this.state.values[config];

  if (!values || !sid)
    return values;

  const s = values[sid];

  if (!s || !opt)
    return s;

  return s[opt];
}

uci.set = function(config, sid, opt, val) {
  const v = this.state.values;
  const c = this.state.changes;

  if (!v[config] || !v[config][sid])
    return;

  if (!c[config])
    c[config] = {};

  if (!c[config][sid])
    c[config][sid] = {};

  c[config][sid][opt] = val;
}

uci.save = function() {
  const c = this.state.changes;

  return new Promise(resolve => {
    for (const config in c) {
      for (const sid in c[config]) {
        ubus.call('uci', 'set', {config: config, section: sid, values: c[config][sid]}).then(() => {
          delete c[config];
          resolve();
        });
      }
    }
  });
}

uci.apply = function() {
  return new Promise(resolve => {
    ubus.call('uci', 'apply').then(() => {
      resolve();
    });
  });
}

export default {
  install(Vue) {
    Vue.prototype.$uci = uci;
  }
}
