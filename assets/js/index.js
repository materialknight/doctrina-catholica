"use strict"

if ("serviceWorker" in navigator)
{
   try
   {
      navigator.serviceWorker.register("/doctrina-catholica/sw.js")
   } catch (error)
   {
      console.error(`Your browser seems to support service workers, but the registration of this app's worker failed with error: ${error}`)
   }
} else
{
   console.error("This app's service worker couldn't be installed because you're in Private Mode or your browser doesn't support service workers!")
}
