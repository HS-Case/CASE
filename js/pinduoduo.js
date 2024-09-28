// 获取响应体内容
let body = $response.body;
let url = $request.url;

try {
  // 将响应体解析为 JSON 对象
  let jsonData = JSON.parse(body);

  // 判断 URL 并根据规则删除相应字段

  // 1. https://api.pinduoduo.com/api/oak/integration/render
  if (/^https:\/\/api\.pinduoduo\.com\/api\/oak\/integration\/render/.test(url)) {
    if (jsonData.bottom_section_list) {
      delete jsonData.bottom_section_list;
    }
    if (jsonData.ui) {
      if (jsonData.ui.bottom_section) {
        delete jsonData.ui.bottom_section;
      }
      if (jsonData.ui.live_section && jsonData.ui.live_section.float_info) {
        delete jsonData.ui.live_section.float_info;
      }
    }
  }

  // 2. https://api.pinduoduo.com/api/philo/personal/hub?
  else if (/^https:\/\/api\.pinduoduo\.com\/api\/philo\/personal\/hub\?/.test(url)) {
    if (jsonData.monthly_card_entrance) {
      delete jsonData.monthly_card_entrance;
    }
    if (jsonData.personal_center_style_v2_vo) {
      delete jsonData.personal_center_style_v2_vo;
    }
    if (jsonData.icon_set) {
      if (jsonData.icon_set.icons) {
        delete jsonData.icon_set.icons;
      }
      if (jsonData.icon_set.top_personal_icons) {
        delete jsonData.icon_set.top_personal_icons;
      }
    }
    if (jsonData.title_bar_items) {
      delete jsonData.title_bar_items;
    }
  }

  // 3. https://api.pinduoduo.com/search
  else if (/^https:\/\/api\.pinduoduo\.com\/search/.test(url)) {
    if (jsonData.expansion) {
      delete jsonData.expansion;
    }
  }

  // 将修改后的 JSON 对象重新转换为字符串
  body = JSON.stringify(jsonData);

} catch (error) {
  console.error("Failed to process JSON response:", error);
}

// 返回修改后的响应体
$done({ body });
