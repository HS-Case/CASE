[MITM]
api-takumi.mihoyo.com

[rewrite_local]
^https:\/\/api-takumi.mihoyo.com\/apihub\/api\/getGameList url script-request-header mihoyo.cookie.js
