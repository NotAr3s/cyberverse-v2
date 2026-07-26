export const challenges = [

{
id:"sql-1",
category:"web-security",
title:"SQL Injection Basics",
difficulty:"Easy",
xp:100,

type:"input",

description:
"Bypass the vulnerable SecureBank login system.",

question:
"Find the SQL payload to login as admin.",

hint:
"Try modifying the SQL query logic.",

answer:
"' OR '1'='1"

},


{
id:"xss-1",
category:"web-security",
title:"Reflected XSS",
difficulty:"Medium",
xp:200,

type:"input",

description:
"Execute JavaScript through the search box.",

question:
"Enter an XSS payload.",

hint:
"Use script tags.",

answer:
"<script>alert(1)</script>"

},


{
id:"crypto-1",
category:"cryptography",
title:"Base64 Decoder",
difficulty:"Easy",
xp:100,

type:"input",

description:
"Decode the hidden message.",

question:
"Decode: SGVsbG8gQ3liZXJWZXJzZQ==",

hint:
"Base64 uses A-Z a-z 0-9 characters.",

answer:
"Hello CyberVerse"

},


{
id:"network-1",
category:"network-security",
title:"HTTPS Port",
difficulty:"Easy",
xp:100,

type:"choice",

description:
"Identify the secure web port.",

question:
"Which port is HTTPS?",

options:[
"21",
"22",
"443",
"8080"
],

answer:
"443"

}

];