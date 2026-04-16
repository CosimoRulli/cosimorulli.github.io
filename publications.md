---
layout: page
title: Publications
permalink: /publications/
---

Links to **DOI**, **PDF**, **code**, and **BibTeX** will be added where available.

{% for group in site.data.publications %}
<h2 class="pub-year">{{ group.year }}</h2>
{% for paper in group.papers %}
{% include publication.html
   title=paper.title
   authors=paper.authors
   venue=paper.venue
   note=paper.note
   award=paper.award
   doi=paper.doi
   pdf=paper.pdf
   code=paper.code
   bibtex=paper.bibtex
%}
{% endfor %}
{% endfor %}
