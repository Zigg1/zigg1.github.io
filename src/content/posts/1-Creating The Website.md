---
title: "Creating The Website"
pubDate: 2024-01-19 #Y-M-D
description: "The story of the initial process"
author: "Andrew"
image: { url: "/creating-the-website.webp", alt: "man excited about computer" }
---

My website is very old. It's time for an update. I'm wanting to blog about things, too. I'll add that to the website. And just to make it more professional, I get a custom domain on namecheap.com.

I buy a .com domain for 2 years. I accidentally buy SSL with it, but Github pages provies SSL for free... Oops.

### Starting new

Now it's time to follow the Github Pages documents on how to add a custom domain. And these documents are awful. It doesn't work. There's so much left out. So much left un-explained. Not even bing AI is helpful in configuration.

[Github Pages custom domain configuration docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

I take a short break for a few hours after endlessly toiling with settings, trying to get things to work. Hopefully, by the time I come back, the DNS changes will take effect and it will all work. And, maybe my support ticket to namecheap.com will be replied to, and they can tell me why they are demanding that I verify my email, by email, without the verification email sending successfully.

Upon return, it still does not work. However, after following [this tutorial](https://gist.github.com/notTag/4a60598d018124c9ac4a7b1f3e2bac9a), I think it is working, because now, the Github pages settings is telling me that it is provisioning a TLS certificate. It's always the old posts from over 6 years ago, right? I hope bing AI, and the Github documentation writers, are taking notes here.

It worked! The thing that fixed the DNS to make it work is the CNAME record. I can't believe that the official docs doesn't fully explain the configuration on the CNAME record. I'm sure it's common sense after setting these things up over and over again for a while, but it's not common sense to me, and that is clear by my need to find a tutorial on how to do this.

### Putting something together

Now that I have a website, it needs content. I want the website to showcase my projects and a blog. The issue of this is updating the website with each new blog post. I usually prefer to keep my programs as light as possible, so at the beginning, I figured I'd just use plain HTML+CSS.

The problems with this mount quickly, though. Cataloguing the blog posts will get difficult over time. And while I technically could set the headers for each blog post separately, I wouldn't want to. Things change on the internet all the time, and I wouldn't want to have to manually change meta tags for 20+ blog pages in the future. 

[Astro.JS](https://astro.build) solves this issue perfectly! And it has Github Pages implementation support, so instead of building the projects and only uploading the production build to the Github repository, I can showcase the whole raw project as it is. I find a user-made theme that is search-engine optimized for Google, so I can focus more on the blogging aspect of the website, and save the focus of my technical skills for the projects I showcase on it.

And just like that, I have a website ready to go!