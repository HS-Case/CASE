[MITM]
hostname = game.xiaojukeji.com

[rewrite_local]
^https?:\/\/game\.xiaojukeji\.com\/api\/game\/plant\/watering url script-request-body https://raw.githubusercontent.com/passerby-b/didi_fruit/main/dd_getToken.js
