
var url = $request.url,
  updatedUrl = url;
if (url.includes("video/getSource")) {
  updatedUrl = url.replace(/([?&]ticket=)\w{32}/, "$13B85D0CBD79B324CA10F3E21ECFAC8F1");
} else if (url.includes("video/source")) {
  updatedUrl = url.replace(/([?&]ticket=)\w{32}/, "$13B85D0CBD79B324CA10F3E21ECFAC8F1");
}
$done({
  "url": updatedUrl
});
