[MITM]
api-takumi.mihoyo.com

[rewrite_local]
^https:\/\/api-takumi.mihoyo.com\/apihub\/api\/getGameList url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/mihoyo/mihoyo.cookie.js
