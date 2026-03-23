<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  exclude-result-prefixes="atom"
>
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/rss/channel">
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          <xsl:value-of select="title" />
        </title>
        <style>
          body {
            font-family: "Segoe UI", system-ui, sans-serif;
            max-width: 40rem;
            margin: 2rem auto;
            padding: 0 1.25rem;
            line-height: 1.5;
            color: #1a1a1a;
            background: #fafafa;
          }
          h1 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
          .muted {
            color: #555;
            font-size: 0.9rem;
          }
          ul.links {
            list-style: none;
            padding: 0;
            margin: 1.25rem 0;
          }
          ul.links li {
            margin: 0.5rem 0;
          }
          a {
            color: #0d47a1;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
          }
          article {
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 1rem 1.1rem;
            margin: 1rem 0;
            background: #fff;
          }
          article h2 {
            font-size: 1.1rem;
            margin: 0 0 0.5rem;
          }
          .meta {
            font-size: 0.8rem;
            color: #666;
            margin: 0.35rem 0;
          }
        </style>
      </head>
      <body>
        <h1>
          <xsl:value-of select="title" />
        </h1>
        <p class="muted">
          <xsl:value-of select="description" />
        </p>
        <p class="muted">Vista legible del RSS (XSLT). Los lectores RSS usan el XML directamente.</p>

        <ul class="links">
          <li>
            <strong>Sitio del canal:</strong>
            <xsl:text> </xsl:text>
            <a href="{link}">
              <xsl:value-of select="link" />
            </a>
          </li>
          <li>
            <strong>URL del feed:</strong>
            <xsl:text> </xsl:text>
            <a href="{atom:link[@rel='self']/@href}">
              <xsl:value-of select="atom:link[@rel='self']/@href" />
            </a>
          </li>
          <li>
            <strong>Imagen del canal:</strong>
            <xsl:text> </xsl:text>
            <a href="{image/url}">
              <xsl:value-of select="image/url" />
            </a>
          </li>
          <li>
            <strong>Especificación RSS:</strong>
            <xsl:text> </xsl:text>
            <a href="{docs}">
              <xsl:value-of select="docs" />
            </a>
          </li>
        </ul>

        <h2 style="font-size:1.15rem;margin-top:1.75rem;">Ítems</h2>
        <xsl:for-each select="item">
          <article>
            <h2>
              <xsl:value-of select="title" />
            </h2>
            <p class="meta">
              <xsl:value-of select="pubDate" />
            </p>
            <p>
              <strong>Enlace:</strong>
              <xsl:text> </xsl:text>
              <a href="{link}">
                <xsl:value-of select="link" />
              </a>
            </p>
            <xsl:if test="enclosure/@url">
              <p>
                <strong>Adjunto (imagen):</strong>
                <xsl:text> </xsl:text>
                <a href="{enclosure/@url}">
                  <xsl:value-of select="enclosure/@url" />
                </a>
              </p>
            </xsl:if>
          </article>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
