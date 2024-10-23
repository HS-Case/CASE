
var url = $request.url,
  updatedUrl = url;
if (url.includes("video/getSource")) updatedUrl = url.replace(/([?&]ticket=)\w{32}/, "$12F393DE6A7D230B9987EAB1A16ADE6FD");else url.includes("video/source") && (updatedUrl = url.replace(/([?&]ticket=)\w{32}/, "$12F393DE6A7D230B9987EAB1A16ADE6FD"));
$done({
  "url": updatedUrl
});
