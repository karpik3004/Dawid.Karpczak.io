<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/">
        
			<html>
				<body>
					<h2>Auta</h2>
					
					<table border="1">
						<tr bgcolor="#a0a0ff">
							<th>TYTUŁ</th>
							<th>AUTOR</th>
							<th>OPRAWA</th>
							<th>STRONY</th>
							<th>CENA</th>						
						</tr>
						    <xsl:for-each select="SPIS/KSIAZKA">	
							<xsl:sort select="AUTOR"/>
							<tr>
								<td><xsl:value-of select="TYTUL"/></td>
								<td><xsl:value-of select="AUTOR"/></td>
								<td><xsl:value-of select="OPRAWA"/></td>
								<td><xsl:value-of select="STRONY"/></td>
								<td><xsl:value-of select="CENA"/></td>
							</tr>
						</xsl:for-each>
					</table>
				</body>
			</html>
      
    </xsl:template>
</xsl:stylesheet>
