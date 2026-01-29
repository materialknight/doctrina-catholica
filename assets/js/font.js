"use strict"

const font_size_select = document.getElementById("font-size-select")
const font_family_select = document.getElementById("font-family-select")

const font_config = load_font_config()

document.documentElement.style.fontSize = font_config.font_size
font_size_select.addEventListener("change", change_font_size)

document.body.style.fontFamily = font_config.font_family
font_family_select.addEventListener("change", change_font_family)

const font_size_options = Array.from(font_size_select.querySelectorAll("option"))
const selected_size_option = font_size_options.find(option => option.value === font_config.font_size)
selected_size_option.setAttribute("selected", "")

const font_family_options = Array.from(font_family_select.querySelectorAll("option"))
const selected_family_option = font_family_options.find(option => option.value === font_config.font_family)
selected_family_option.setAttribute("selected", "")

// Functions:

function change_font_size(change_ev) {
   const percentage = change_ev.target.value
   document.documentElement.style.fontSize = percentage
   font_config.font_size = percentage
   save_font_config()
}

function change_font_family(change_ev) {
   const font_family = change_ev.target.value
   document.body.style.fontFamily = font_family
   font_config.font_family = font_family
   save_font_config()
}

function load_font_config() {
   let font_config = localStorage.getItem("didache_font_config")
   if (font_config === null || font_config === undefined)
   {
      return { font_size: "100%", font_family: "sans-serif" }
   }
   font_config = JSON.parse(font_config)
   return font_config
}

function save_font_config() {
   localStorage.setItem("didache_font_config", JSON.stringify(font_config))
}
