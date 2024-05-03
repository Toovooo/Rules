var body = $response.body;

body = body.replace(/"premium":false/g, '"premium":true');
body = body.replace(/"hasInAppPurchases":false/g,'"hasInAppPurchases":true');
body = body.replace(/"youOwn":false/g,
'"youOwn":false');
body = body.replace(/"arcade":false/g,
'"arcade":false');

body = body.replace(/"preorder":false/g,
'"preorder":false');

$done({ body });
