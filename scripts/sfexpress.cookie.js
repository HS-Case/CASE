# mitm
hostname = ccsp-egmas.sf-express.com
# 顺丰速运获取cookie 
^https:\/\/ccsp-egmas.sf-express.com\/cx-app-member\/member\/app\/user\/universalSign url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js
