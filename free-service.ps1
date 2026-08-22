# dpaste.com, free text storage service
$a = ( curl -s -F "content=Shine Upon the World" https://dpaste.com/api/v2/  ) + '.txt'
$a = (iwr -Uri "https://dpaste.com/api/v2/" -Method Post -Form @{ content = "ihseatsihetas" } -UseBasicParsing | % Content) -replace "`n", '.txt'
iwr $a | % Content



