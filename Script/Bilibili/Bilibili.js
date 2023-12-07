const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

  if (obj?.data?.vip) {
    if (obj?.data?.vip?.status === 0) {
      obj.data.vip_type = 2;
      obj.data.vip.type = 2;
      obj.data.vip.status = 1;
      obj.data.vip.due_date = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
      obj.data.vip.label = {
        path: "",
        text: "年度大会员",
        label_theme: "annual_vip",
        text_color: "#FFFFFF",
        bg_style: 1,
        bg_color: "#FB7299",
        border_color: "",
        image: "https://i0.hdslb.com/bfs/vip/8d4f8bfc713826a5412a0a27eaaac4d6b9ede1d9.png"
      };
      obj.data.vip.nickname_color = "#FB7299";
      obj.data.vip.role = 3;
    }
  }
  if (obj?.data?.vip) {
    if (obj?.data?.vip?.status === 0) {
      obj.data.vip.type = 2;
      obj.data.vip.status = 1;
      obj.data.vip.due_date = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
      obj.data.vip.role = 3;
    }
  }
} else if (url.includes("/x/v2/feed/index?")) {
  // 首页推荐信息流
  if (obj?.data?.items?.length > 0) {
    obj.data.items = obj.data.items.filter(
      (i) =>
        !(i?.hasOwnProperty("ad_info") || ["ad_", "bangumi", "banner", "game", "ketang", "live", "pgc"]?.includes(i?.card_goto))
    );
  }
} else if (url.includes("/x/v2/feed/index/story")) {
  // 竖屏模式信息流
  if (obj?.data?.items?.length > 0) {
    // vertical_live 直播内容
    // vertical_pgc 大会员专享
    obj.data.items = obj.data.items.filter(
      (i) =>
        !(
          i?.hasOwnProperty("ad_info") ||
          i?.hasOwnProperty("story_cart_icon") ||
          ["ad", "vertical_live", "vertical_pgc"]?.includes(i?.card_goto)
        )
    );
  }
} else if (url.includes("/x/v2/search/square")) {
  // 搜索框
  if (obj?.data) {
    obj.data = { type: "history", title: "搜索历史", search_hotword_revision: 2 };
  }
} else if (url.includes("/x/v2/splash")) {
  // 开屏广告
  if (obj?.data) {
    const item = ["account", "event_list", "preload", "show"];
    item.forEach((i) => {
      delete obj.data[i];
    });
    if (obj?.data?.max_time) {
      obj.data.max_time = 0;
    }
    if (obj?.data?.min_interval) {
      obj.data.min_interval = 31536000;
    }
    if (obj?.data?.pull_interval) {
      obj.data.pull_interval = 31536000;
    }
    if (obj?.data?.list?.length > 0) {
      for (let i of obj.data.list) {
        i.duration = 0;
        i.enable_pre_download = false;
        i.begin_time = 3818332800; // Unix 时间戳 2090-12-31 00:00:00
        i.end_time = 3818419199; // Unix 时间戳 2090-12-31 23:59:59
      }
    }
  }
} else if (url.includes("/pgc/page/bangumi") || url.includes("/pgc/page/cinema/tab")) {
  // 观影页
  if (obj.result?.modules?.length > 0) {
    obj.result.modules.forEach((i) => {
      if (i?.style?.startsWith("banner")) {
        if (i?.items?.length > 0) {
          i.items = i.items.filter((ii) => ii?.link?.includes("play"));
        }
      } else if (i?.style?.startsWith("function")) {
        if (i?.items?.length > 0) {
          i.items = i.items.filter((ii) => ii?.blink?.startsWith("bilibili"));
        }
      } else if ([241, 1283, 1284, 1441]?.includes(i?.module_id)) {
        if (i?.items?.length > 0) {
          i.items = [];
        }
      } else if (i?.style?.startsWith("tip")) {
        if (i?.items?.length > 0) {
          i.items = [];
        }
      }
    });
  }
} else if (url.includes("/xlive/app-room/v1/index/getInfoByRoom")) {
  // 直播
  if (obj?.data?.activity_banner_info) {
    delete obj.data.activity_banner_info;
  }
  if (obj?.data?.shopping_info) {
    obj.data.shopping_info = { is_show: 0 };
  }
  if (obj?.data?.new_tab_info?.outer_list?.length > 0) {
    obj.data.new_tab_info.outer_list = obj.data.new_tab_info.outer_list.filter((i) => i?.biz_id !== 33);
  }
}

$done({ body: JSON.stringify(obj) });
