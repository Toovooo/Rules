function main(config) {
  config["proxy-groups"] = [
    {
      icon: "https://cdn.jsdelivr.net/gh/Toovooo/Rules@master/Icon/Color/Auto.png",
      name: "PROXY",
      type: "select",
      proxies: ["美国", "香港", "新加坡", "日本"],
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/Toovooo/Rules@master/Icon/Color/Game.png",
      name: "Epic",
      type: "select",
      proxies: ["DIRECT", "美国", "香港", "新加坡", "日本"],
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/Toovooo/Rules@master/Icon/Color/Steam.png",
      name: "Steam",
      type: "select",
      proxies: ["DIRECT", "美国", "香港", "新加坡", "日本"],
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/Toovooo/Rules@master/Icon/Color/Spotify.png",
      name: "Spotify",
      type: "select",
      proxies: ["美国", "香港", "新加坡", "日本"],
    },	
    {
      icon: "https://cdn.jsdelivr.net/gh/Toovooo/Rules@master/Icon/Color/HongKong.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)香港|Hong Kong|HK|🇭🇰",
      name: "香港",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/Toovooo/Rules@master/Icon/Color/Singapore.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)新加坡|Singapore|🇸🇬",
      name: "新加坡",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/Toovooo/Rules@master/Icon/Color/Japan.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)日本|Japan|🇯🇵",
      name: "日本",
      type: "url-test",
      interval: 300,
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/Toovooo/Rules@master/Icon/Color/UnitedStates.png",
      "include-all": true,
      "exclude-filter": "(?i)GB|Traffic|Expire|Premium|频道|订阅|ISP|流量|到期|重置",
      filter: "(?i)美国|USA|🇺🇸",
      name: "美国",
      type: "url-test",
      interval: 300,
    }
  ];
  if (!config['rule-providers']) {
    config['rule-providers'] = {};
  }
  config["rule-providers"] = Object.assign(config["rule-providers"], {
    Epic: {
      url: "https://cdn.jsdelivr.net/gh/Toovooo/Rules@master/Clash/yaml/Epic.yaml",
      path: "./ruleset/Epic.yaml",
      behavior: "classical",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    Steam: {
      url: "https://cdn.jsdelivr.net/gh/Toovooo/Rules@master/Clash/yaml/Steam.yaml",
      path: "./ruleset/Steam.yaml",
      behavior: "classical",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    Spotify: {
      url: "https://cdn.jsdelivr.net/gh/Toovooo/Rules@master/Clash/yaml/Spotify.yaml",
      path: "./ruleset/Spotify.yaml",
      behavior: "classical",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    cn_domain: {
      url: "https://cdn.jsdelivr.net/gh/Toovooo/Rules@master/Clash/yaml/cndomain.yaml",
      path: "./ruleset/cndomain.yaml",
      behavior: "domain",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
    cn_ip: {
      url: "https://cdn.jsdelivr.net/gh/Toovooo/Rules@master/Clash/yaml/cnip.yaml",
      path: "./ruleset/cnip.yaml",
      behavior: "ipcidr",
      interval: 86400,
      format: "yaml",
      type: "http",
    },
  });

  config["rules"] = [
    "RULE-SET,Epic,Epic",
    "RULE-SET,Steam,Steam",
    "RULE-SET,Spotify,Spotify",
    "RULE-SET,cn_domain,DIRECT",
    "RULE-SET,cn_ip,DIRECT",
    "MATCH,PROXY",
  ];
  return config;
}
