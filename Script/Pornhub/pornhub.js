var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/Toovooo/Rules/master/Script/Pornhub/pornhub.css" type="text/css">');
$done({ body });
