---
title: Doctrina Catholica
---

## Ĉefaj verkoj

{% assign collections = site.collections | sort: "label" %}

{% assign collections = site.collections
   | where_exp: "collection", "collection.label != 'opuscula'"
   | sort: "label"
%}
<ol>
{% for collection in collections %}
{% if collection.label == "posts" %}
{% continue %}
{% endif %}
{% assign lang_docs = collection.docs | where: "lang", page.lang %}
{% assign index_doc = lang_docs |  where: "slug", "index" | first  %}
{% if index_doc %}
<li><a href="{{ index_doc.url | relative_url }}">{{ index_doc.title }}</a></li>
{% endif %}
{% endfor %}
</ol>

## Malgrandaj verkoj

{% assign opuscula = site.opuscula | where: "lang", page.lang | sort %}

<ol>
{% for opusculum in opuscula %}
{% if opusculum.slug == "index" %}
{% continue %}
{% endif %}
<li><a href="{{ opusculum.url | relative_url }}">{{ opusculum.title }}</a></li>
{% endfor %}
</ol>

