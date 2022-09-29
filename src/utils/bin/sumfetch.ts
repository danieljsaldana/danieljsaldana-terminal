import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (navigator.userAgent.indexOf('Mac') != -1) {
    return `                                                  
                    'c.     
                 ,xNMM.                      CV
               .OMMMMo                      -----------
               OMMM0,                        Sobre mi
     .;loddo:' loolloddol;.                  ${config.name}
   cKMMMMMMMMMMNWMMMMMMMMMM0:                <u><a href="${config.resume_url}" target="_blank">resume</a></u>
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.               爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
 XMMMMMMMMMMMMMMMMMMMMMMMX.                 -----------
;MMMMMMMMMMMMMMMMMMMMMMMM:                   Contacto 
:MMMMMMMMMMMMMMMMMMMMMMMM:                   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
.MMMMMMMMMMMMMMMMMMMMMMMMX.                  <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.                <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk               <u><a href="https://twitter.com/${config.social.twitter}" target="_blank">twitter.com/${config.social.twitter}</a></u>
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.               <u><a href="https://instagram.com/${config.social.instagram}" target="_blank">instagram.com/${config.social.instagram}</a></u>
    kMMMMMMMMMMMMMMMMMMMMMMd                -----------
     ;KMMMMMMMWXXWMMMMMMMk.              
       .cooc,.    .,coo:.        
`;
  } 
  if (navigator.userAgent.indexOf('Win') != -1) {
    return `                                                  
                                ..,
                    ....,,:;+ccllll           CV
      ...,,+:;  cllllllllllllllllll          -----------
,cclllllllllll  lllllllllllllllllll           Sobre mi
llllllllllllll  lllllllllllllllllll           ${config.name}
llllllllllllll  lllllllllllllllllll           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
llllllllllllll  lllllllllllllllllll          爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
llllllllllllll  lllllllllllllllllll          -----------
llllllllllllll  lllllllllllllllllll           Contacto 
                                              <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
llllllllllllll  lllllllllllllllllll           <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
llllllllllllll  lllllllllllllllllll           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
llllllllllllll  lllllllllllllllllll           <u><a href="https://twitter.com/${config.social.twitter}" target="_blank">twitter.com/${config.social.twitter}</a></u>
llllllllllllll  lllllllllllllllllll           <u><a href="https://instagram.com/${config.social.instagram}" target="_blank">instagram.com/${config.social.instagram}</a></u>
llllllllllllll  lllllllllllllllllll          -----------
\`'ccllllllllll  lllllllllllllllllll
       \`' \*::  :ccllllllllllllllll
                       \`\`\`\`''*::cll
`;
  }
  if (navigator.userAgent.indexOf('Linux') != -1) {
    return `                                                  
            .-/+oossssoo+/-.               
        \`:+ssssssssssssssssss+:\`             CV
      -+ssssssssssssssssssyyssss+-            -----------
    .ossssssssssssssssssdMMMNysssso.           Sobre mi
   /ssssssssssshdmmNNmmyNMMMMhssssss/          ${config.name}
  +ssssssssshmydMMMMMMMNddddyssssssss+         <u><a href="${config.resume_url}" target="_blank">resume</a></u>
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
.ssssssssdMMMNhsssssssssshNMMMdssssssss.      -----------
+sssshhhyNMMNyssssssssssssyNMMMysssssss+       Contacto 
ossyNMMMNyMMhsssssssssssssshmmmhssssssso       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
ossyNMMMNyMMhsssssssssssssshmmmhssssssso       <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
+sssshhhyNMMNyssssssssssssyNMMMysssssss+       <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
.ssssssssdMMMNhsssssssssshNMMMdssssssss.       <u><a href="https://twitter.com/${config.social.twitter}" target="_blank">twitter.com/${config.social.twitter}</a></u>
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/        <u><a href="https://instagram.com/${config.social.instagram}" target="_blank">instagram.com/${config.social.instagram}</a></u>
  +sssssssssdmydMMMMMMMMddddyssssssss+        -----------
   /ssssssssssshdmNNNNmyNMMMMhssssss/      
    .ossssssssssssssssssdMMMNysssso.
      -+sssssssssssssssssyyyssss+-
        \`:+ssssssssssssssssss+:\`
            .-/+oossssoo+/-.
`;
  }    
    else {
    return `               
                    'c.     
                 ,xNMM.                      CV
               .OMMMMo                      -----------
               OMMM0,                        Sobre mi
     .;loddo:' loolloddol;.                  ${config.name}
   cKMMMMMMMMMMNWMMMMMMMMMM0:                <u><a href="${config.resume_url}" target="_blank">resume</a></u>
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.               爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
 XMMMMMMMMMMMMMMMMMMMMMMMX.                 -----------
;MMMMMMMMMMMMMMMMMMMMMMMM:                   Contacto 
:MMMMMMMMMMMMMMMMMMMMMMMM:                   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
.MMMMMMMMMMMMMMMMMMMMMMMMX.                  <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.                <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk               <u><a href="https://twitter.com/${config.social.twitter}" target="_blank">twitter.com/${config.social.twitter}</a></u>
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.               <u><a href="https://instagram.com/${config.social.instagram}" target="_blank">instagram.com/${config.social.instagram}</a></u>
    kMMMMMMMMMMMMMMMMMMMMMMd                -----------
     ;KMMMMMMMWXXWMMMMMMMk.              
       .cooc,.    .,coo:.        
`;
  }
};

export default sumfetch;