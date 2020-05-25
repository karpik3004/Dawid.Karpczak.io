<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl"
>
    <xsl:output method="xml" indent="yes"/>

    <xsl:template match="@* | node()">
        <xsl:copy>
            <xsl:apply-templates select="@* | node()"/>
			<html>
				<body>
					<h2>Auta</h2>
					<table border="1">
						<tr bgcolor="#9acd32">
							<th>Title</th>
							<th>Artist</th>
						</tr>
						<xsl:for-each select="SPIS/KSIAZKA">
							<xsl:sort select="AUTOR"/>
							<tr>
								<td>
									<xsl:value-of select="TYTUL"/>
								</td>
								<td>
									<xsl:value-of select="AUTOR"/>
								</td>
							</tr>
						</xsl:for-each>
					</table>
				</body>
			</html>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>
