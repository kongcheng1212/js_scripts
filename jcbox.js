/*
shaolin-kongfu
仅适配v2p以及青龙（青龙请自行抓包），不支持圈x
新手写脚本，难免有bug,欢迎反馈！
个人频道:https://t.me/ShaolinTemple1
tom大佬的频道:https://t.me/tom_ww
我都在里面，有问题欢迎反馈
软件名称：晶彩看点
赞赏:邀请码54870223 
万分感谢！！

注意！！！！！重写会与签到脚本的重写冲突，抓取任务宝箱body之前记得把签到脚本的重写关掉
注意！！！！！重写会与签到脚本的重写冲突，抓取任务宝箱body之前记得把签到脚本的重写关掉
注意！！！！！重写会与签到脚本的重写冲突，抓取任务宝箱body之前记得把签到脚本的重写关掉

[rewrite_local]
#获取任务宝箱奖励
https://ant.xunsl.com/v5/CommonReward/toGetReward.json 重写目标 https://raw.githubusercontent.com/shaolin-kongfu/js_scripts/main/jcbox.js
[MITM]
hostname = ant.xunsl.com
*/

const _0x44fe=['AxnozwvKuMv3CML0zq','AMnIB3HIB2r5','WR8WEwScWR4WjL3dLG','Aw5PDeDVDevUDG','WQFcNfT7','W5XfcmoJAeldOtbnBG','ywjZ','W7VcISoZW7JcUhFcH8oXgaL2Dg8','WRZcG3X8WQjLyCkj','W7tcGmoCaCo+W5vvW7hcKCk6CaFdOqnBqSoEnKvRW649WRrKf8kiWQDAsq','WPv9W67cJG','DhjPBq','y2T0B3vNAa','rmkBWRrc','AxnmB29U','pGzfoCo/qSoCWR05W6K','isD8WRdcL8kdlLzqWP4cWRxcQ8oZW6KcWRG9W53cMg/cOmkNWPtcV1WTW67cVLdcNSoEdG','Emk7WOa','rSolWRfT','44kZ5O+g56so44cI6kYE5z+mW5WnWOBKUiBMLA/NGiRLHyVOTkRPKlJLMihMOi/VVyxLNORMRBBMLjZKURVLIi7KU7lNGi7LHApMIQRMNyBLJ4dPOB7LJkhNMRVLPlxLIBVVVlFOJzVLJzlcGqZcUCkD772c5PMz5Aw25yww6lwj5lQb5Q+96iAK5P++','WOVcOg5A','rMmSWPy','W509wti8oCkw','5lIQ5A6D566X6k+35RgcoIdMIjdLIP/WN46j','WOBcNCkz','lcdPLjNOR68H','W5hcJCoc','CCk6WPe','z2v0','WP/cHSkBW7e','j38Joq','WRaRCNCoWQ8mo0O','DYVdTCoZW6WGWQH9bxHWWP1v','zxHPC3rZu3LUyW','zMv0y2G','mSo8WQ8','DgHLBG','dsqXpG','qMmQWOxcOHKcWP3dRIPmdW','mSkTi0NcUxxdNfRcUq','rSofWRbQW7y','AWPG','z2v0vgLTzq','kXfFpG','kmk3nuxcR13dKW','vqxdNJRdVCoNWR/dOHS','mtv2EwTlrhy','W413wvy','y29Uy2f0','WRyND10eWR8','6i635y+w5A6D566XoIdMIjdLIP8SigPJyM94yM9KExm6ia','WORdPSkaWRSyWPznW53dHmkXWPBcIq','zxjYB3jFy29Kzq','WOxdL8knu8k6WPu8W7tcTSkBtdZdLq','W6BcGIVdM8k/BXm','WOhdOmklWR8uWPXRW6JdLCksWOtcPa','AgvHzgvYCW','C2v0q29VA2LLu3LUyW','aqiqzutdJMlcK8k0','mtC1mtnHA25QCu8','yxnZAwDU','tSkDW5RcI8kKt8osW6FcQCkeWQLh','y2f0y2G','AM9PBG','brD4rxJcIg7dJmon','AxnoB2rL','C2v0vMfSDwvgB3jlzxK','laBdP2pdSNS','WO8MAriLkmkK','mteXmJeYAuTuAvnA','wMm+WOBcRLuvWPm','DwmXWPBcR1OvW5/dJsrldsbo','kmkQhu/cUhW','WPn9W7BcK8oiaN0fW695ia','C3rYAw5N','W5ZcHSovbmoTW555','AsRdJCoYW6GiWPK','l8k4peu','DgvZDa','6i2b5y+056+S','WOlcP2Ldg8kc','rW7dJJVdUSo6WRa','lCk2nuhcPhRdQLVcPCku','lCk2nG','Bg9Nu2vWyxjHDg9Y','B2jQzwn0','Bg9N','gsrhWQq','W7/cHCouc8opW5bg','BxnN','ldHRWQ8','C3rHCNruAw1L','CMvZB2X2zq','WPBdHSojWQDR','rgKVWO7cQ1Ce','lGiBB17dG3FcLCkJtG','WQZcH8oAW59gAmkGW4y','W4O5FIK7n8kqDW','bSk9Fmo5ueqpW4u','W5hdRgq','CMvWBgfJzq','W4pcSCogW6a','BmoHxa','jdz4WR0','WR0Y5B+r5AAJW4e','m8oZWQ3dQa','WRRcK8oCWQm','p0tdPCotka','nCk8iLq','WP7dRSkeeCoJEJa','W5BdRxyu','WPVcLCkft8o7W494W7RcJSk2CXRdMvLnuCongvzTW6L2','mG1IjCoVva','WQ3cMCoBWPRdKgaPxG','W5FcV8oCW60','q29VA2LL','z2v0ANnVBG','isiCWP3dG8kKbW','omoIWQ3dUG','E8kKWOj4WRJcMCo9WRa','D3jPDgvgAwXLu3LUyW','C3rHDhvZ','WPJdG+MwREIUJ8kP','CgfYC2u','zw52','C2v0lwnVB2TPzq','lcdNU5pMNz8HipcFLzSG','W7vZWQujWQBdT8o7aa','W7hcJSoz','le7dU8oA','CNvUu2nYAxb0','CSoeW6/dTa','Dg9tDhjPBMC','W4z4qG','zgf0yq','C2nVCMu','kIGp','W5pdRwy','Dg9pyMO','Dw5KzwzPBMvK','imkPiuZcVNhdLeJcQCkpWPZcG8khWOLFpSktpZXIWQOjWRpcRqRcSv7cMe3dN8kaumoz','BSkzW57cNSkZ','W4CtW7frmL5SWOuFiCotjW','WPddGSojWQq1pSkBaG','zSkXWPr5W7NcMSoQ','C8kXWPnfW7BcNSoMWQZdRW','x8oxWPfSW6eGWPW','ChvZAa','5PM25B2P55Yl54k55lU75yQH5A6D566X6Akg5y+w','WQOPzha','lhldOINdM04','5lIQ5A6D566X5Aww5yQXyM9KEq','ioASOEwUNEEUSEwLLUwkSEAjP+IHJos4Rs0Tls0Tls0TcG','W7xdKri1W60XmSotW5bFD8oqW4TO8kAqSoEXNoE6QUMdHoECTpc5Oi5Zlx40et1bySkzW7ZdQmool18','BSokW7ZdMq3cGa','z2v0zgf0yq','BgvUz3rO','Aw5KzxHpzG','W719WRy','z2v0sg91CNm','pNhdVsNdIa','bSk9EG','jqil','zxHWB3j0CW','tq7dNJBdUSoBWQpdQW','CSk9WOL3W7NcGmo2','iZXMWR3cJa','DXb0ra','ugmTWQFcQ1Cj','C3rHy2S','W5JdRxuOD8ky','otyYmZG5tKrRreDS','zCoaW6/dUb7cHSkP','B3b0CW','y2fSBa','W4PLz0BcM8kdW5G','WQKTzg4xWQe','W7VcHCoBcmoEW4O','jZj4WPhcL8kooLzCWOi','WOVdTmkAhCoRyq','WOvhWRqvyGa','gtvBWQLgthGeW5W','ixWzjCongq','CMvKDwnL','W7VcMaRdKCk/Da','W5zKwa','B3bLBLvYBa','FCktW4dcLW','x38tWO3cPvO','Bwf0y2G','oe7dU8ot','WOVcSxTogCkEW5a','WOT7W6XepttcUq','nteXnJK5u3fmrgP5','W7VcHsldM8kOvqe','WPRdPSkDha','yM9KEq','Bg9NCW','W4tdO2aEya','W6hcLCouW77cUa','W5W5ssq','AxnrDwfUwa','WQZcJvTPWPzLy8kl','WQDmW6dcQmkIiW','W77cK8oKgSolW4XT','mCooW70','ue9tva','C3rYAw5NAwz5','Cg9ZDa','ESkHWOT6','DgLTzq','5lIn55+L6ygt6k+05zwL5Aw9','Dg9tDhi','W4HuhCoHFf0','oSoeW64','WPfhWRqhyHHK','pqddP2i','z290','prRdP34','WOLZW70','WOldOSkiemoPFtC','A8owW4RdQr7cNmkq','WQDmW7/cSSk/kSoj','W5RdO38i','iw7dTshdJ0HDW4fzW7G','cmk9ECoK','5QY/5A+J566D6k695Roj5BEd5A+x5z+S772B5P6M5QYZ6lsq6lYM','WQaMW6HBW5lcP8kHaSokih3cM2a','5OkO6ycj5OUP55Qe5PIV55sOiIyI6zQu5BYacG','BMfTzq','WOD7W6fZ','DxjS','dsrDWRzjrW','WOhcJCkCW7bPW6aPWRhcHa','q8owWQ4','D2fPDa','ls0Tls0Tls3NRkWG','WPNdS8kBhCoIAa','dbv2rG','a8kOWOBcIhWx','z2v0rNvSBfLLyxi','z2v0twLSBgLZzwnVBMrZ','C2v0zgf0yq','W4mtW7fvoLvwWR8hdmoQba','yw5KCM9Pza','C2vUza','WQxdKmkmwmkEWPfDaxKCyL8','WRVdRrvgAwBcTc3cKG','CMvHza','EmoHxb/dHSkm','o8o9WR4','W5VcSSkFdCoNrabb','AxnbCNjHEq','W5j9WR4dWONdUW','nYvLWQJcM8kMjK5CWQivW7tcSa','rCorWQbQW6C1','Ahr0CdOVlW','mte0oteXngnmDMzOvG','W5pdP2yBzmkg','keFdQSoC','Cgf0Aa','D3jPDgvKyxrH','qGtdNIy','AsRdKSoOW60d','WPVcJ8kkW7C','lIijWP3dH8kIfq','AxntDxjNzq','AG5ObCoNr8ov','WP5hWQehzH52','W6n3WRamWQBdT8o7amoraexcSa','zgf0yuzPBgu','vaJcRfhcRq','WOTXW6W','iYKE','y2TQyxi','WOT9W7FcGW','WODZW6ldImojjwy','WPNdOSkDemoTEYu','bXf7tMxcMhi','lsrR'];const _0x4a5f24=_0x2684,_0x135cc1=_0x3fa9;(function(_0x50ba0e,_0x1b35ab){const _0x4cdd1d=_0x2684,_0x50de23=_0x3fa9;while(!![]){try{const _0x19238e=-parseInt(_0x50de23(0x2f1))+parseInt(_0x50de23(0x22f))+parseInt(_0x50de23(0x281))*-parseInt(_0x4cdd1d(0x229,'j8QT'))+-parseInt(_0x50de23(0x1ef))+-parseInt(_0x50de23(0x28b))*parseInt(_0x4cdd1d(0x28a,'&(OT'))+-parseInt(_0x4cdd1d(0x27d,'TJPp'))+parseInt(_0x4cdd1d(0x27b,'eixG'));if(_0x19238e===_0x1b35ab)break;else _0x50ba0e['push'](_0x50ba0e['shift']());}catch(_0x535052){_0x50ba0e['push'](_0x50ba0e['shift']());}}}(_0x44fe,0x8ebe0));const $=new Env(_0x135cc1(0x2da));let jcboxbody=$['isNode']()?process[_0x135cc1(0x2c2)][_0x135cc1(0x247)]?process[_0x4a5f24(0x269,'pzBP')]['jcboxbody']:'':$[_0x4a5f24(0x2f2,'J)]i')](_0x4a5f24(0x265,'yhu6'))?$[_0x4a5f24(0x2bb,'XvP6')](_0x135cc1(0x247)):'',jcboxbodyArr=[],jcboxbodys='';typeof $request!==_0x135cc1(0x2d1)&&(getjcboxbody(),$['done']());if(!jcboxbody)$[_0x135cc1(0x29f)]($[_0x135cc1(0x213)],_0x4a5f24(0x259,'5z%N'),_0x135cc1(0x201),{'open-url':'给您劈个叉吧'}),$[_0x4a5f24(0x26b,'W9M6')]();else{if(jcboxbody[_0x135cc1(0x2e3)]('&')==-0x1)jcboxbodyArr[_0x135cc1(0x2d9)](jcboxbody);else{if(jcboxbody[_0x4a5f24(0x272,'fDfQ')]('&')>-0x1)jcboxbodys=jcboxbody['split']('&');else process[_0x4a5f24(0x2cb,'5z%N')]['jcboxbody']&&process[_0x135cc1(0x2c2)]['jcboxbody']['indexOf']('&')>-0x1?(jcboxbodyArr=process[_0x4a5f24(0x23f,'XvP6')][_0x4a5f24(0x217,'Hgl2')]['split']('&'),console[_0x135cc1(0x29c)](_0x135cc1(0x212))):jcboxbodys=[process[_0x4a5f24(0x2a9,'d7E]')][_0x135cc1(0x247)]];}};Object[_0x4a5f24(0x214,'HB$Y')](jcboxbodys)[_0x4a5f24(0x2ee,'NsT2')](_0x1383da=>{const _0x1bdc51=_0x4a5f24;jcboxbodys[_0x1383da]&&jcboxbodyArr[_0x1bdc51(0x206,'b)#)')](jcboxbodys[_0x1383da]);}),!(async()=>{const _0x5c4fed=_0x135cc1,_0x1af8d7=_0x4a5f24;console[_0x1af8d7(0x299,'fDfQ')]('共'+jcboxbodyArr[_0x5c4fed(0x2e2)]+_0x5c4fed(0x2dd));for(let _0x4069b8=0x0;_0x4069b8<jcboxbodyArr[_0x5c4fed(0x2e2)];_0x4069b8++){jcboxbody1=jcboxbodyArr[_0x4069b8],console['log'](''+jcboxbody1),console[_0x5c4fed(0x29c)](_0x5c4fed(0x21a)+(_0x4069b8+0x1)+_0x5c4fed(0x2de));let _0x503949={'device-platform':_0x5c4fed(0x222),'Content-Type':_0x1af8d7(0x256,'w7[S'),'Content-Length':jcboxbody1[_0x5c4fed(0x2e2)][_0x1af8d7(0x2a7,'&(OT')](),'Host':'ant.xunsl.com'};await jcboxreward(_0x503949),console[_0x1af8d7(0x26f,'DU2S')](typeof jcboxbody1),console[_0x5c4fed(0x29c)](jcboxbody1[_0x1af8d7(0x2f7,'ySC4')]['toString']()),await $['wait'](0xfa0),console[_0x5c4fed(0x29c)]('\x0a\x0a');}})()[_0x135cc1(0x284)](_0x1eb041=>$[_0x4a5f24(0x277,'yhu6')](_0x1eb041))[_0x4a5f24(0x2eb,'Soxq')](()=>$[_0x4a5f24(0x2b8,'TJPp')]());function _0x3fa9(_0x27b965,_0xde5c49){return _0x3fa9=function(_0x44fed2,_0x3fa9b4){_0x44fed2=_0x44fed2-0x1ef;let _0x3bde4e=_0x44fe[_0x44fed2];if(_0x3fa9['sZfteL']===undefined){var _0x38193e=function(_0x4320de){const _0x2684a5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2976e7='',_0x473dab='';for(let _0x41abdf=0x0,_0x110383,_0x93d90,_0x134c47=0x0;_0x93d90=_0x4320de['charAt'](_0x134c47++);~_0x93d90&&(_0x110383=_0x41abdf%0x4?_0x110383*0x40+_0x93d90:_0x93d90,_0x41abdf++%0x4)?_0x2976e7+=String['fromCharCode'](0xff&_0x110383>>(-0x2*_0x41abdf&0x6)):0x0){_0x93d90=_0x2684a5['indexOf'](_0x93d90);}for(let _0x1383da=0x0,_0x4069b8=_0x2976e7['length'];_0x1383da<_0x4069b8;_0x1383da++){_0x473dab+='%'+('00'+_0x2976e7['charCodeAt'](_0x1383da)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x473dab);};_0x3fa9['hLXUvr']=_0x38193e,_0x27b965=arguments,_0x3fa9['sZfteL']=!![];}const _0x58f2a6=_0x44fe[0x0],_0x54915e=_0x44fed2+_0x58f2a6,_0x23aa5a=_0x27b965[_0x54915e];return!_0x23aa5a?(_0x3bde4e=_0x3fa9['hLXUvr'](_0x3bde4e),_0x27b965[_0x54915e]=_0x3bde4e):_0x3bde4e=_0x23aa5a,_0x3bde4e;},_0x3fa9(_0x27b965,_0xde5c49);}function _0x2684(_0x27b965,_0xde5c49){return _0x2684=function(_0x44fed2,_0x3fa9b4){_0x44fed2=_0x44fed2-0x1ef;let _0x3bde4e=_0x44fe[_0x44fed2];if(_0x2684['wRtPHv']===undefined){var _0x38193e=function(_0x2684a5){const _0x2976e7='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x473dab='',_0x41abdf='';for(let _0x110383=0x0,_0x93d90,_0x134c47,_0x1383da=0x0;_0x134c47=_0x2684a5['charAt'](_0x1383da++);~_0x134c47&&(_0x93d90=_0x110383%0x4?_0x93d90*0x40+_0x134c47:_0x134c47,_0x110383++%0x4)?_0x473dab+=String['fromCharCode'](0xff&_0x93d90>>(-0x2*_0x110383&0x6)):0x0){_0x134c47=_0x2976e7['indexOf'](_0x134c47);}for(let _0x4069b8=0x0,_0x503949=_0x473dab['length'];_0x4069b8<_0x503949;_0x4069b8++){_0x41abdf+='%'+('00'+_0x473dab['charCodeAt'](_0x4069b8)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x41abdf);};const _0x4320de=function(_0x1eb041,_0x270d36){let _0x15f9cc=[],_0x183d23=0x0,_0x93eba8,_0x313ee0='';_0x1eb041=_0x38193e(_0x1eb041);let _0x3ce7c7;for(_0x3ce7c7=0x0;_0x3ce7c7<0x100;_0x3ce7c7++){_0x15f9cc[_0x3ce7c7]=_0x3ce7c7;}for(_0x3ce7c7=0x0;_0x3ce7c7<0x100;_0x3ce7c7++){_0x183d23=(_0x183d23+_0x15f9cc[_0x3ce7c7]+_0x270d36['charCodeAt'](_0x3ce7c7%_0x270d36['length']))%0x100,_0x93eba8=_0x15f9cc[_0x3ce7c7],_0x15f9cc[_0x3ce7c7]=_0x15f9cc[_0x183d23],_0x15f9cc[_0x183d23]=_0x93eba8;}_0x3ce7c7=0x0,_0x183d23=0x0;for(let _0x3a7c0c=0x0;_0x3a7c0c<_0x1eb041['length'];_0x3a7c0c++){_0x3ce7c7=(_0x3ce7c7+0x1)%0x100,_0x183d23=(_0x183d23+_0x15f9cc[_0x3ce7c7])%0x100,_0x93eba8=_0x15f9cc[_0x3ce7c7],_0x15f9cc[_0x3ce7c7]=_0x15f9cc[_0x183d23],_0x15f9cc[_0x183d23]=_0x93eba8,_0x313ee0+=String['fromCharCode'](_0x1eb041['charCodeAt'](_0x3a7c0c)^_0x15f9cc[(_0x15f9cc[_0x3ce7c7]+_0x15f9cc[_0x183d23])%0x100]);}return _0x313ee0;};_0x2684['JIczYy']=_0x4320de,_0x27b965=arguments,_0x2684['wRtPHv']=!![];}const _0x58f2a6=_0x44fe[0x0],_0x54915e=_0x44fed2+_0x58f2a6,_0x23aa5a=_0x27b965[_0x54915e];return!_0x23aa5a?(_0x2684['rJHILU']===undefined&&(_0x2684['rJHILU']=!![]),_0x3bde4e=_0x2684['JIczYy'](_0x3bde4e,_0x3fa9b4),_0x27b965[_0x54915e]=_0x3bde4e):_0x3bde4e=_0x23aa5a,_0x3bde4e;},_0x2684(_0x27b965,_0xde5c49);}function getjcboxbody(){const _0x356cfb=_0x135cc1,_0x415af4=_0x4a5f24;if($request[_0x415af4(0x218,'MI1U')][_0x356cfb(0x303)](/\/CommonReward\/toGetReward/)){bodyVal=$request[_0x415af4(0x234,'nW*8')];if(jcboxbody){if(jcboxbody['indexOf'](bodyVal)>-0x1)$[_0x356cfb(0x29c)](_0x415af4(0x210,'gcaX'));else jcboxbody[_0x415af4(0x1f0,'kJHj')](bodyVal)==-0x1&&(jcboxbodys=jcboxbody+'&'+bodyVal,$[_0x415af4(0x243,'j8QT')](jcboxbodys,_0x415af4(0x286,'EAa[')),$[_0x356cfb(0x29c)]($['name']+_0x356cfb(0x278)+bodyVal),bodys=jcboxbodys['split']('&'),$[_0x415af4(0x25e,'Hgl2')]($[_0x415af4(0x293,'fDfQ')],_0x415af4(0x295,'EB14')+bodys[_0x415af4(0x21d,'&8o2')]+_0x356cfb(0x25d),''));}else $['setdata'](bodyVal,_0x356cfb(0x247)),$[_0x415af4(0x209,'^)h^')]($[_0x415af4(0x275,'5z%N')]+_0x356cfb(0x278)+bodyVal),$['msg']($[_0x415af4(0x20d,'d7E]')],'获取第一个宝箱请求:\x20成功🎉','');}}function jcboxreward(_0x270d36){return new Promise(_0x15f9cc=>{const _0x4b44f5=_0x2684;let _0x183d23={'url':'https://ant.xunsl.com/v5/CommonReward/toGetReward.json','headers':_0x270d36,'body':jcboxbody1};$[_0x4b44f5(0x258,'MI1U')](_0x183d23,async(_0x93eba8,_0x313ee0,_0x3ce7c7)=>{const _0x557ec4=_0x3fa9,_0x26b70a=_0x4b44f5;try{const _0x3a7c0c=JSON['parse'](_0x3ce7c7);_0x3a7c0c['success']!==![]?console[_0x26b70a(0x204,'7dgw')]('\x0a领取宝箱奖励成功，获得：'+_0x3a7c0c[_0x26b70a(0x2a3,'6aks')][_0x557ec4(0x2cd)]+'金币'):(console[_0x26b70a(0x228,'pzBP')]('\x0a领取宝箱奖励失败，'+_0x3a7c0c[_0x557ec4(0x27a)]),console['log'](_0x3a7c0c));}catch(_0xda661a){}finally{_0x15f9cc();}},timeout);});}function Env(_0x158b09,_0x593ade){const _0x18bc3d=_0x135cc1,_0x12b625=_0x4a5f24;class _0x10a5a6{constructor(_0x107186){const _0x3b62ed=_0x2684;this[_0x3b62ed(0x261,'Soxq')]=_0x107186;}[_0x12b625(0x29d,'^GRy')](_0xb86d42,_0x57e9ba='GET'){const _0x54a068=_0x12b625,_0x357b35=_0x3fa9;_0xb86d42=_0x357b35(0x290)==typeof _0xb86d42?{'url':_0xb86d42}:_0xb86d42;let _0x277e1e=this['get'];return _0x357b35(0x1fc)===_0x57e9ba&&(_0x277e1e=this[_0x54a068(0x271,'gcaX')]),new Promise((_0x26e686,_0x8f2d94)=>{const _0x11f9a7=_0x54a068;_0x277e1e[_0x11f9a7(0x21c,'EAa[')](this,_0xb86d42,(_0x120224,_0x2319ea,_0x2e5b73)=>{_0x120224?_0x8f2d94(_0x120224):_0x26e686(_0x2319ea);});});}[_0x12b625(0x2ac,'d]kc')](_0x50dc29){const _0x4da9be=_0x12b625,_0x16e3e9=_0x3fa9;return this[_0x16e3e9(0x223)][_0x16e3e9(0x2f4)](this[_0x4da9be(0x260,'eixG')],_0x50dc29);}['post'](_0x3a2562){const _0x50cea9=_0x3fa9;return this[_0x50cea9(0x223)]['call'](this['env'],_0x3a2562,_0x50cea9(0x1fc));}}return new class{constructor(_0x4b75c3,_0x612509){const _0xa699cc=_0x12b625,_0x4491a2=_0x3fa9;this[_0x4491a2(0x213)]=_0x4b75c3,this[_0xa699cc(0x25a,'@2tm')]=new _0x10a5a6(this),this['data']=null,this[_0xa699cc(0x1f8,'sMa3')]=_0xa699cc(0x242,'^)h^'),this[_0xa699cc(0x2a0,'w7[S')]=[],this['isMute']=!0x1,this[_0x4491a2(0x246)]=!0x1,this['logSeparator']='\x0a',this['startTime']=new Date()['getTime'](),Object[_0xa699cc(0x289,'b)#)')](this,_0x612509),this[_0xa699cc(0x2ce,'XvP6')]('','🔔'+this[_0xa699cc(0x241,'^)h^')]+_0xa699cc(0x2ae,'!BSF'));}[_0x12b625(0x2fc,'L!1X')](){const _0x36016c=_0x3fa9;return _0x36016c(0x2d1)!=typeof module&&!!module[_0x36016c(0x2e9)];}[_0x18bc3d(0x1f7)](){return'undefined'!=typeof $task;}[_0x12b625(0x20c,'$U#U')](){const _0x420358=_0x18bc3d;return _0x420358(0x2d1)!=typeof $httpClient&&_0x420358(0x2d1)==typeof $loon;}[_0x12b625(0x28e,'fDfQ')](){const _0x5007f5=_0x12b625;return _0x5007f5(0x273,'nW*8')!=typeof $loon;}[_0x18bc3d(0x2d0)](_0x3cde34,_0x5b7d2f=null){const _0x5b1e6f=_0x12b625;try{return JSON[_0x5b1e6f(0x1f4,'d7E]')](_0x3cde34);}catch{return _0x5b7d2f;}}[_0x18bc3d(0x202)](_0x17c449,_0xa3cfce=null){try{return JSON['stringify'](_0x17c449);}catch{return _0xa3cfce;}}[_0x18bc3d(0x2ba)](_0x6d444c,_0x6a660f){const _0x19ddd8=_0x18bc3d,_0x4387f3=_0x12b625;let _0x3bfa31=_0x6a660f;const _0x3b7a15=this[_0x4387f3(0x205,'EB14')](_0x6d444c);if(_0x3b7a15)try{_0x3bfa31=JSON[_0x4387f3(0x23d,'%)se')](this[_0x19ddd8(0x2e1)](_0x6d444c));}catch{}return _0x3bfa31;}['setjson'](_0x44c0ae,_0xb735f){const _0x19f01a=_0x12b625,_0x4125a2=_0x18bc3d;try{return this[_0x4125a2(0x220)](JSON[_0x19f01a(0x2fb,'^GRy')](_0x44c0ae),_0xb735f);}catch{return!0x1;}}[_0x12b625(0x2d7,'Soxq')](_0x4451f9){return new Promise(_0x5a05af=>{const _0x3b9bec=_0x3fa9;this[_0x3b9bec(0x262)]({'url':_0x4451f9},(_0x372a74,_0x48d455,_0x127e3d)=>_0x5a05af(_0x127e3d));});}[_0x18bc3d(0x2c8)](_0xdb7dde,_0x4b05d4){const _0x1862f4=_0x12b625;return new Promise(_0xed2055=>{const _0xbebc3e=_0x2684,_0x19bc4a=_0x3fa9;let _0x206405=this[_0x19bc4a(0x2e1)](_0xbebc3e(0x24f,'eixG'));_0x206405=_0x206405?_0x206405[_0x19bc4a(0x2aa)](/\n/g,'')[_0x19bc4a(0x251)]():_0x206405;let _0x4200f5=this['getdata']('@chavy_boxjs_userCfgs.httpapi_timeout');_0x4200f5=_0x4200f5?0x1*_0x4200f5:0x14,_0x4200f5=_0x4b05d4&&_0x4b05d4[_0xbebc3e(0x2b3,'j8QT')]?_0x4b05d4[_0xbebc3e(0x27c,'kJHj')]:_0x4200f5;const [_0x1345d8,_0x4cf87e]=_0x206405[_0xbebc3e(0x2e6,'g)8t')]('@'),_0x34c90a={'url':_0x19bc4a(0x22e)+_0x4cf87e+_0xbebc3e(0x2b5,'eixG'),'body':{'script_text':_0xdb7dde,'mock_type':'cron','timeout':_0x4200f5},'headers':{'X-Key':_0x1345d8,'Accept':'*/*'}};this[_0x19bc4a(0x1fe)](_0x34c90a,(_0x46a230,_0x2e5504,_0x101833)=>_0xed2055(_0x101833));})['catch'](_0x56832c=>this[_0x1862f4(0x2f0,'d7E]')](_0x56832c));}[_0x12b625(0x2a8,'d#sw')](){const _0x1e6708=_0x18bc3d,_0x4353e9=_0x12b625;if(!this['isNode']())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x4353e9(0x236,'Hgl2')]=this[_0x1e6708(0x232)]?this[_0x4353e9(0x2c7,'9GD#')]:require('path');const _0x6590a6=this[_0x4353e9(0x2c9,'J)]i')][_0x1e6708(0x2a2)](this[_0x1e6708(0x23c)]),_0x3985db=this[_0x4353e9(0x250,'^)h^')][_0x4353e9(0x2d6,'Soxq')](process[_0x4353e9(0x2c6,'9LVK')](),this[_0x1e6708(0x23c)]),_0x1c2ed5=this['fs'][_0x1e6708(0x267)](_0x6590a6),_0x2ffe5c=!_0x1c2ed5&&this['fs'][_0x4353e9(0x255,'gcaX')](_0x3985db);if(!_0x1c2ed5&&!_0x2ffe5c)return{};{const _0x1d8bf3=_0x1c2ed5?_0x6590a6:_0x3985db;try{return JSON[_0x4353e9(0x23d,'%)se')](this['fs'][_0x4353e9(0x23b,'!BSF')](_0x1d8bf3));}catch(_0x3ef771){return{};}}}}[_0x18bc3d(0x233)](){const _0xd93a60=_0x18bc3d,_0xe5be50=_0x12b625;if(this[_0xe5be50(0x235,'l]ZB')]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0xd93a60(0x232)]=this['path']?this[_0xe5be50(0x1f1,'j8QT')]:require(_0xe5be50(0x2db,'yhu6'));const _0x43c70a=this[_0xe5be50(0x301,'^VaK')][_0xd93a60(0x2a2)](this[_0xe5be50(0x2c5,'!BSF')]),_0x46666e=this[_0xe5be50(0x2ab,'TJPp')][_0xd93a60(0x2a2)](process['cwd'](),this[_0xe5be50(0x1f8,'sMa3')]),_0x4dbbdd=this['fs'][_0xd93a60(0x267)](_0x43c70a),_0x41fcc9=!_0x4dbbdd&&this['fs'][_0xe5be50(0x248,'yhu6')](_0x46666e),_0x35beb7=JSON[_0xd93a60(0x1fd)](this['data']);_0x4dbbdd?this['fs'][_0xe5be50(0x22c,'w7[S')](_0x43c70a,_0x35beb7):_0x41fcc9?this['fs'][_0xd93a60(0x2be)](_0x46666e,_0x35beb7):this['fs'][_0xe5be50(0x266,'l]ZB')](_0x43c70a,_0x35beb7);}}[_0x12b625(0x2a5,'oI1^')](_0x2175dd,_0x1f702d,_0x49a3ad){const _0x26ae5a=_0x18bc3d,_0x28e1c9=_0x1f702d[_0x26ae5a(0x2aa)](/\[(\d+)\]/g,'.$1')['split']('.');let _0xe6c455=_0x2175dd;for(const _0x3030e3 of _0x28e1c9)if(_0xe6c455=Object(_0xe6c455)[_0x3030e3],void 0x0===_0xe6c455)return _0x49a3ad;return _0xe6c455;}['lodash_set'](_0x36e14c,_0x1e6751,_0x2fe01d){const _0x4b1154=_0x12b625,_0x47c4b7=_0x18bc3d;return Object(_0x36e14c)!==_0x36e14c?_0x36e14c:(Array[_0x47c4b7(0x22a)](_0x1e6751)||(_0x1e6751=_0x1e6751[_0x47c4b7(0x2ca)]()['match'](/[^.[\]]+/g)||[]),_0x1e6751[_0x4b1154(0x1f5,'9LVK')](0x0,-0x1)[_0x47c4b7(0x2fd)]((_0xb9c78b,_0xd0ad31,_0x2af48d)=>Object(_0xb9c78b[_0xd0ad31])===_0xb9c78b[_0xd0ad31]?_0xb9c78b[_0xd0ad31]:_0xb9c78b[_0xd0ad31]=Math[_0x47c4b7(0x24c)](_0x1e6751[_0x2af48d+0x1])>>0x0==+_0x1e6751[_0x2af48d+0x1]?[]:{},_0x36e14c)[_0x1e6751[_0x1e6751[_0x47c4b7(0x2e2)]-0x1]]=_0x2fe01d,_0x36e14c);}[_0x12b625(0x297,'nW*8')](_0x1fdae1){const _0x3219d1=_0x12b625;let _0x55921e=this[_0x3219d1(0x203,'y3hQ')](_0x1fdae1);if(/^@/[_0x3219d1(0x2b2,'fDfQ')](_0x1fdae1)){const [,_0x112685,_0x2de675]=/^@(.*?)\.(.*?)$/['exec'](_0x1fdae1),_0x470978=_0x112685?this['getval'](_0x112685):'';if(_0x470978)try{const _0x21b500=JSON[_0x3219d1(0x26e,'MI1U')](_0x470978);_0x55921e=_0x21b500?this[_0x3219d1(0x298,'fDfQ')](_0x21b500,_0x2de675,''):_0x55921e;}catch(_0x3e3904){_0x55921e='';}}return _0x55921e;}[_0x18bc3d(0x220)](_0x52e03d,_0x6fc326){const _0x308a53=_0x18bc3d,_0x4b0541=_0x12b625;let _0x4faf48=!0x1;if(/^@/['test'](_0x6fc326)){const [,_0x4dfc48,_0x35386a]=/^@(.*?)\.(.*?)$/['exec'](_0x6fc326),_0x20ccb9=this[_0x4b0541(0x216,'^GRy')](_0x4dfc48),_0x3f075e=_0x4dfc48?_0x4b0541(0x1ff,'Soxq')===_0x20ccb9?null:_0x20ccb9||'{}':'{}';try{const _0x340cd9=JSON[_0x308a53(0x2c1)](_0x3f075e);this['lodash_set'](_0x340cd9,_0x35386a,_0x52e03d),_0x4faf48=this['setval'](JSON[_0x308a53(0x1fd)](_0x340cd9),_0x4dfc48);}catch(_0x2d469b){const _0x465aa8={};this[_0x4b0541(0x20e,'g)8t')](_0x465aa8,_0x35386a,_0x52e03d),_0x4faf48=this[_0x4b0541(0x227,'d]kc')](JSON[_0x4b0541(0x26d,'fDfQ')](_0x465aa8),_0x4dfc48);}}else _0x4faf48=this[_0x4b0541(0x2f6,'yhu6')](_0x52e03d,_0x6fc326);return _0x4faf48;}[_0x12b625(0x230,'d7E]')](_0x23946c){const _0x515c8b=_0x12b625,_0x540a6c=_0x18bc3d;return this['isSurge']()||this['isLoon']()?$persistentStore[_0x540a6c(0x226)](_0x23946c):this['isQuanX']()?$prefs[_0x515c8b(0x28f,'^)h^')](_0x23946c):this[_0x540a6c(0x287)]()?(this[_0x540a6c(0x2cc)]=this[_0x515c8b(0x28c,'NsT2')](),this[_0x515c8b(0x2af,'pzBP')][_0x23946c]):this[_0x515c8b(0x304,'9GD#')]&&this['data'][_0x23946c]||null;}[_0x12b625(0x2fa,'EB14')](_0x3df9dd,_0x4420ca){const _0x4a301c=_0x18bc3d,_0x4b8b12=_0x12b625;return this[_0x4b8b12(0x2f5,'5z%N')]()||this[_0x4a301c(0x254)]()?$persistentStore['write'](_0x3df9dd,_0x4420ca):this['isQuanX']()?$prefs[_0x4a301c(0x288)](_0x3df9dd,_0x4420ca):this['isNode']()?(this['data']=this['loaddata'](),this[_0x4a301c(0x2cc)][_0x4420ca]=_0x3df9dd,this['writedata'](),!0x0):this[_0x4b8b12(0x2ad,'w7[S')]&&this['data'][_0x4420ca]||null;}['initGotEnv'](_0x490dd7){const _0x7980c5=_0x12b625,_0x5b2161=_0x18bc3d;this[_0x5b2161(0x207)]=this[_0x7980c5(0x2e8,'oI1^')]?this[_0x7980c5(0x2cf,'d7E]')]:require('got'),this[_0x5b2161(0x252)]=this['cktough']?this[_0x5b2161(0x252)]:require(_0x7980c5(0x26c,'NsT2')),this[_0x7980c5(0x2ec,'w7[S')]=this[_0x7980c5(0x2b1,'9GD#')]?this[_0x5b2161(0x240)]:new this[(_0x7980c5(0x25c,'&(OT'))][(_0x7980c5(0x280,'oI1^'))](),_0x490dd7&&(_0x490dd7[_0x5b2161(0x27e)]=_0x490dd7[_0x5b2161(0x27e)]?_0x490dd7[_0x5b2161(0x27e)]:{},void 0x0===_0x490dd7[_0x7980c5(0x305,'@2tm')][_0x5b2161(0x2b9)]&&void 0x0===_0x490dd7['cookieJar']&&(_0x490dd7['cookieJar']=this[_0x7980c5(0x2d3,'^VaK')]));}[_0x18bc3d(0x262)](_0x2a9a90,_0x36e2f=()=>{}){const _0x545c0a=_0x18bc3d,_0x5dc4ad=_0x12b625;_0x2a9a90[_0x5dc4ad(0x291,'eixG')]&&(delete _0x2a9a90['headers'][_0x5dc4ad(0x283,'^VaK')],delete _0x2a9a90[_0x545c0a(0x27e)]['Content-Length']),this['isSurge']()||this['isLoon']()?(this[_0x545c0a(0x238)]()&&this[_0x545c0a(0x246)]&&(_0x2a9a90[_0x5dc4ad(0x20a,'j8QT')]=_0x2a9a90['headers']||{},Object[_0x5dc4ad(0x2f9,'j8QT')](_0x2a9a90['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x5dc4ad(0x1fb,'7dgw')](_0x2a9a90,(_0x295fde,_0xf87ca6,_0x47949f)=>{const _0x313fd2=_0x5dc4ad;!_0x295fde&&_0xf87ca6&&(_0xf87ca6[_0x313fd2(0x20f,'d#sw')]=_0x47949f,_0xf87ca6['statusCode']=_0xf87ca6['status']),_0x36e2f(_0x295fde,_0xf87ca6,_0x47949f);})):this[_0x545c0a(0x1f7)]()?(this[_0x545c0a(0x246)]&&(_0x2a9a90[_0x5dc4ad(0x264,'L!1X')]=_0x2a9a90[_0x5dc4ad(0x2bc,'pzBP')]||{},Object[_0x5dc4ad(0x2dc,'g)8t')](_0x2a9a90[_0x545c0a(0x2f3)],{'hints':!0x1})),$task[_0x545c0a(0x268)](_0x2a9a90)[_0x545c0a(0x26a)](_0x2db0f7=>{const {statusCode:_0x1cd562,statusCode:_0x20383f,headers:_0x33e25f,body:_0x580f5a}=_0x2db0f7;_0x36e2f(null,{'status':_0x1cd562,'statusCode':_0x20383f,'headers':_0x33e25f,'body':_0x580f5a},_0x580f5a);},_0x3af94c=>_0x36e2f(_0x3af94c))):this['isNode']()&&(this[_0x545c0a(0x249)](_0x2a9a90),this[_0x5dc4ad(0x23e,'HB$Y')](_0x2a9a90)['on']('redirect',(_0x54d07f,_0x27a6ee)=>{const _0x14af01=_0x545c0a,_0x40a91f=_0x5dc4ad;try{if(_0x54d07f[_0x40a91f(0x29e,'ySC4')]['set-cookie']){const _0xdbc703=_0x54d07f[_0x14af01(0x27e)][_0x14af01(0x2c3)]['map'](this['cktough'][_0x40a91f(0x22b,'!BSF')][_0x14af01(0x2c1)])[_0x40a91f(0x24e,'sMa3')]();this[_0x40a91f(0x2ec,'w7[S')][_0x14af01(0x27f)](_0xdbc703,null),_0x27a6ee[_0x40a91f(0x225,'1&SZ')]=this['ckjar'];}}catch(_0xd38274){this[_0x40a91f(0x2e0,'J)]i')](_0xd38274);}})[_0x5dc4ad(0x263,'Hgl2')](_0x3eb8e3=>{const {statusCode:_0x232442,statusCode:_0x55adfe,headers:_0x3d27fd,body:_0x240e5a}=_0x3eb8e3;_0x36e2f(null,{'status':_0x232442,'statusCode':_0x55adfe,'headers':_0x3d27fd,'body':_0x240e5a},_0x240e5a);},_0x1044e1=>{const _0x4c1d43=_0x5dc4ad,{message:_0x448d2f,response:_0x5206ce}=_0x1044e1;_0x36e2f(_0x448d2f,_0x5206ce,_0x5206ce&&_0x5206ce[_0x4c1d43(0x2b4,'d7E]')]);}));}[_0x12b625(0x2b0,'tXZ1')](_0xced37f,_0x418fa4=()=>{}){const _0xfc7def=_0x12b625,_0x384e6c=_0x18bc3d;if(_0xced37f[_0x384e6c(0x1f2)]&&_0xced37f[_0x384e6c(0x27e)]&&!_0xced37f[_0xfc7def(0x244,'EAa[')]['Content-Type']&&(_0xced37f[_0x384e6c(0x27e)]['Content-Type']=_0xfc7def(0x2d2,'fDfQ')),_0xced37f[_0x384e6c(0x27e)]&&delete _0xced37f[_0x384e6c(0x27e)][_0xfc7def(0x28d,'NsT2')],this['isSurge']()||this['isLoon']())this[_0xfc7def(0x2d8,'MI1U')]()&&this['isNeedRewrite']&&(_0xced37f[_0xfc7def(0x23a,'EB14')]=_0xced37f[_0xfc7def(0x237,'XvP6')]||{},Object[_0xfc7def(0x296,'@2tm')](_0xced37f[_0x384e6c(0x27e)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0xfc7def(0x208,'b)#)')](_0xced37f,(_0x1bf647,_0x34c4b2,_0xb4f525)=>{const _0x35423b=_0xfc7def,_0x3d5258=_0x384e6c;!_0x1bf647&&_0x34c4b2&&(_0x34c4b2[_0x3d5258(0x1f2)]=_0xb4f525,_0x34c4b2[_0x35423b(0x24b,'y3hQ')]=_0x34c4b2[_0x3d5258(0x2bf)]),_0x418fa4(_0x1bf647,_0x34c4b2,_0xb4f525);});else{if(this[_0x384e6c(0x1f7)]())_0xced37f['method']=_0xfc7def(0x253,'Soxq'),this[_0xfc7def(0x24d,'9LVK')]&&(_0xced37f[_0x384e6c(0x2f3)]=_0xced37f['opts']||{},Object[_0x384e6c(0x282)](_0xced37f[_0xfc7def(0x24a,'sMa3')],{'hints':!0x1})),$task[_0x384e6c(0x268)](_0xced37f)[_0xfc7def(0x231,'9GD#')](_0x181952=>{const {statusCode:_0x4bf463,statusCode:_0x1adbfe,headers:_0x5e73bb,body:_0xaad34a}=_0x181952;_0x418fa4(null,{'status':_0x4bf463,'statusCode':_0x1adbfe,'headers':_0x5e73bb,'body':_0xaad34a},_0xaad34a);},_0x405733=>_0x418fa4(_0x405733));else{if(this[_0xfc7def(0x2b6,'gcaX')]()){this[_0x384e6c(0x249)](_0xced37f);const {url:_0x3d2b4b,..._0x308727}=_0xced37f;this[_0x384e6c(0x207)][_0xfc7def(0x25b,'NsT2')](_0x3d2b4b,_0x308727)[_0x384e6c(0x26a)](_0x269dc6=>{const {statusCode:_0x4ddaf3,statusCode:_0x30ae67,headers:_0x144d29,body:_0x3f106c}=_0x269dc6;_0x418fa4(null,{'status':_0x4ddaf3,'statusCode':_0x30ae67,'headers':_0x144d29,'body':_0x3f106c},_0x3f106c);},_0x3e248f=>{const _0x192f0e=_0xfc7def,{message:_0x46b086,response:_0x3560f4}=_0x3e248f;_0x418fa4(_0x46b086,_0x3560f4,_0x3560f4&&_0x3560f4[_0x192f0e(0x1f6,'&(OT')]);});}}}}[_0x18bc3d(0x200)](_0x5e4f87){const _0x4c8b16=_0x18bc3d,_0x539527=_0x12b625;let _0x1208e4={'M+':new Date()[_0x539527(0x2b7,'tXZ1')]()+0x1,'d+':new Date()[_0x539527(0x306,'HB$Y')](),'H+':new Date()[_0x4c8b16(0x2e5)](),'m+':new Date()[_0x539527(0x2f8,'w7[S')](),'s+':new Date()['getSeconds'](),'q+':Math['floor']((new Date()[_0x539527(0x2a6,'G*wl')]()+0x3)/0x3),'S':new Date()[_0x4c8b16(0x21f)]()};/(y+)/[_0x4c8b16(0x294)](_0x5e4f87)&&(_0x5e4f87=_0x5e4f87[_0x539527(0x2a4,'NsT2')](RegExp['$1'],(new Date()[_0x4c8b16(0x21e)]()+'')[_0x539527(0x22d,'MI1U')](0x4-RegExp['$1'][_0x4c8b16(0x2e2)])));for(let _0x3658f1 in _0x1208e4)new RegExp('('+_0x3658f1+')')['test'](_0x5e4f87)&&(_0x5e4f87=_0x5e4f87[_0x4c8b16(0x2aa)](RegExp['$1'],0x1==RegExp['$1'][_0x4c8b16(0x2e2)]?_0x1208e4[_0x3658f1]:('00'+_0x1208e4[_0x3658f1])['substr']((''+_0x1208e4[_0x3658f1])['length'])));return _0x5e4f87;}[_0x12b625(0x245,'w7[S')](_0x20e521=_0x158b09,_0x33dd4d='',_0x24ecce='',_0x730546){const _0x4f146a=_0x12b625,_0x50fb23=_0x18bc3d,_0x2b5894=_0x2dbc44=>{const _0x405565=_0x3fa9,_0x4023db=_0x2684;if(!_0x2dbc44)return _0x2dbc44;if(_0x4023db(0x21b,'j8QT')==typeof _0x2dbc44)return this[_0x405565(0x254)]()?_0x2dbc44:this[_0x405565(0x1f7)]()?{'open-url':_0x2dbc44}:this['isSurge']()?{'url':_0x2dbc44}:void 0x0;if(_0x405565(0x29b)==typeof _0x2dbc44){if(this[_0x4023db(0x2fe,'kJHj')]()){let _0x4ea6f2=_0x2dbc44['openUrl']||_0x2dbc44[_0x4023db(0x2ff,'5z%N')]||_0x2dbc44['open-url'],_0x392ddf=_0x2dbc44[_0x4023db(0x2ea,'nW*8')]||_0x2dbc44['media-url'];return{'openUrl':_0x4ea6f2,'mediaUrl':_0x392ddf};}if(this[_0x4023db(0x292,'l]ZB')]()){let _0x62012a=_0x2dbc44[_0x4023db(0x2d5,'6aks')]||_0x2dbc44[_0x405565(0x215)]||_0x2dbc44[_0x405565(0x300)],_0x5e3688=_0x2dbc44['media-url']||_0x2dbc44[_0x4023db(0x2ea,'nW*8')];return{'open-url':_0x62012a,'media-url':_0x5e3688};}if(this[_0x4023db(0x20c,'$U#U')]()){let _0x20d6d3=_0x2dbc44[_0x405565(0x215)]||_0x2dbc44[_0x405565(0x300)]||_0x2dbc44[_0x4023db(0x2bd,'Soxq')];return{'url':_0x20d6d3};}}};this['isMute']||(this[_0x50fb23(0x238)]()||this['isLoon']()?$notification[_0x50fb23(0x1fe)](_0x20e521,_0x33dd4d,_0x24ecce,_0x2b5894(_0x730546)):this['isQuanX']()&&$notify(_0x20e521,_0x33dd4d,_0x24ecce,_0x2b5894(_0x730546)));let _0x15fa7d=['',_0x4f146a(0x2df,'sMa3')];_0x15fa7d['push'](_0x20e521),_0x33dd4d&&_0x15fa7d[_0x50fb23(0x2d9)](_0x33dd4d),_0x24ecce&&_0x15fa7d[_0x4f146a(0x2ed,'DU2S')](_0x24ecce),console['log'](_0x15fa7d['join']('\x0a')),this[_0x4f146a(0x2a0,'w7[S')]=this['logs'][_0x50fb23(0x276)](_0x15fa7d);}[_0x12b625(0x2e7,'d#sw')](..._0x3c8b6e){const _0x397261=_0x18bc3d;_0x3c8b6e[_0x397261(0x2e2)]>0x0&&(this[_0x397261(0x1f3)]=[...this[_0x397261(0x1f3)],..._0x3c8b6e]),console[_0x397261(0x29c)](_0x3c8b6e[_0x397261(0x285)](this[_0x397261(0x29a)]));}['logErr'](_0x3e97f7,_0x36a552){const _0x53eea1=_0x12b625,_0x282eeb=_0x18bc3d,_0x8ef9ce=!this[_0x282eeb(0x238)]()&&!this[_0x53eea1(0x20b,'J)]i')]()&&!this[_0x53eea1(0x302,'NsT2')]();_0x8ef9ce?this[_0x53eea1(0x257,'Soxq')]('','❗️'+this['name']+_0x53eea1(0x2c0,'eixG'),_0x3e97f7[_0x282eeb(0x2ef)]):this['log']('','❗️'+this['name']+_0x282eeb(0x25f),_0x3e97f7);}[_0x18bc3d(0x219)](_0x1d8be6){return new Promise(_0xd77425=>setTimeout(_0xd77425,_0x1d8be6));}['done'](_0x180d1f={}){const _0x36531=_0x12b625,_0x437fc2=_0x18bc3d,_0x2e8a10=new Date()[_0x437fc2(0x270)](),_0x549def=(_0x2e8a10-this[_0x437fc2(0x2a1)])/0x3e8;this[_0x437fc2(0x29c)]('','🔔'+this['name']+_0x437fc2(0x2c4)+_0x549def+'\x20秒'),this[_0x36531(0x2e4,'!BSF')](),(this[_0x437fc2(0x238)]()||this[_0x36531(0x1fa,'ySC4')]()||this[_0x36531(0x1f9,'$U#U')]())&&$done(_0x180d1f);}}(_0x158b09,_0x593ade);}