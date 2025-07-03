---
layout: layout.njk
title: EduWelle Blog
---

# EduWelle Blog

Welcome to our blog! Here's where we share insights, tools, and updates from our research, mentoring, and tech initiatives.

<div class="blog-posts">
  {% for post in collections.all | reverse %}
    {% if post.inputPath contains '/posts/' %}
    <div class="blog-card">
      <a href="{{ post.url }}">
        <h3>{{ post.data.title }}</h3>
        <p>{{ post.data.description }}</p>
      </a>
    </div>
    {% endif %}
  {% endfor %}
</div>
