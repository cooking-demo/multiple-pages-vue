<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <% for (var i in htmlWebpackPlugin.options.cdn.css) { %>
    <link rel="stylesheet" href="<%= htmlWebpackPlugin.options.cdn.css[i] %>"><% } %>
  </head>
  <body>
    <div id="app"></div>
    <% for (var i in htmlWebpackPlugin.options.cdn.js) { %>
    <script src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script><% } %>
  </body>
</html>
