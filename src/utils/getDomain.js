const getDomain = (url) => {
   if (url == null) return;
   const Url = new URL(url);
   return "(" + Url.hostname.toString() + ")";
 };
export default getDomain;