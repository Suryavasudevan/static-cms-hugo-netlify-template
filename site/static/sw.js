var version="v2.0.3",swPath,urlObject=new URL(location),host;urlObject.searchParams.get("swPath")?swPath=urlObject.searchParams.get("swPath"):(urlObject.searchParams.get("version")&&(version=urlObject.searchParams.get("version")),host=urlObject.searchParams.get("swJSHost")?"https://"+urlObject.searchParams.get("swJSHost"):"https://sdki.truepush.com/sdk/",swPath=host+version+"/sw.js"),importScripts(swPath);