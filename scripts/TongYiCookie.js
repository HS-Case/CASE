
# mitm
hostname = xapi.weimob.com

# 获取蜜雪冰城需要的各项参数
^https:\/\/xapi\.weimob\.com\/api3\/onecrm\/user\/center\/usercenter\/queryUserInfo url script-response-body https://raw.githubusercontent.com/xzxxn777/Surge/main/Script/TongYi/TongYi.js
