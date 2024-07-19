---
title: "First Android App Goes Live"
pubDate: 2024-07-18 #Y-M-D
description: "I learned through some mistakes so you don't have to"
author: "Andrew"
image: { url: "/first-android-app-goes-live.jpg", alt: "a dumpster on fire" }
---

I've made a lot of programming projects. A few people have been impressed with my International Space Station location tracking website when I showed it to them myself, but other than that, what I've done has never really ever gotten a lot of attention. I've never been concerned about that, though. Even this website is mostly just for myself, for my own personal journaling. However, one day, I made an app that got a lot of attention. Some people would call it the internet 5 seconds of fame. This is the story of me experiencing live web service production, with people actually trying to use it for the first time!

### The Beginning

Half of my existing projects up on the internet were wiped off the internet, when the web application hosting service, Heroku, announced that they are no longer providing a free-to-use plan. I've never put ads in anything I've programmed, I've never tried to monetize any of it (again, because nobody looks at my websites), so there was no point in trying to rescue everything by starting to pay monthly for it all to stay up. With that said, I need to go ahead and move on to other projects to add to my portfolio quickly.

I'm at a point in my life when I'm working a lot, so as much as I'm wanting to make the next big e-commerce website, I hardly have had the energy to focus on that kind of thing. I've had a Google developer account collecting dust for quite a while now, and now they're threatening to close the account for inactivity if I never add any Android apps to it. Saving the Google developer account that I paid $30 for, what a great start.

I'm a big fan of the TV show King of The Hill. All my friends are, too. I remember that there used to be a really funny Hank Hill soundboard Android app, full of sound clips from the first season of the show. The app was most certainly used in [a Youtube video](https://www.youtube.com/watch?v=OccBmI9ZD1A) with 1.7 million views at the time of writing, a really hilarious video of the soundboard app being used for a prank call. Also at the time of writing, the video was made 16 years ago, and the soundboard app was long gone from the Google play store. It's as if the world is waiting for someone else bold enough to step up to the plate and deliver a quality King of The Hill soundboard app. I'm up for the challenge!

### The App Is Live

As much of a gimmick as the app is going to naturally be, I still want it to be a good, quality app. I don't want to just use React Native if that's even possible to get an app on the Google app store, I want to do it the real way, natively on Android with Java. It only takes me a few hours to re-learn Java, because I'm already pretty familiar with not only Java, but a lot of the world of object-oriented programming as well. I get some nice recursion going with loading all the sound clips and displaying the buttons for all of them, and the app looks really smooth, even from the inside. I show it to my girlfriend and my friends, and they love it and want more of it themselves. I've developed the app as much as I can. It's time to make the big jump, and upload the thing.

Now that it is up on the store, I need to find users. I already knew about a lot of King of The Hill fan groups on Facebook. I joined one to advertise my shiny new app on it. I joined the one with the most users, obviously for the most exposure. It has hundreds of thousands of users. I make a post with an embedded link to my app on it's page for Google play, and the post said something like, "Hey, here's a cheaply made mobile app. Please don't stone me to death for advertising it freely here. You're the people who I made it for!"

I was born in the 90's. I've been on the internet for a while. When Facebook first came out, I still wasn't old enough to make my own account, but *everyone* I went to school with as a kid all lied about their age and made their own Facebook account, anyway. So it was pressure from peers, and society at large, that I lied about my age and made an account as well. So, after almost 20 years, I've done my time on social media. However, I have *never* gotten the amount of attention on social media as I got from this particular Facebook post in this simple online fan group.

### It Is Real Now

I had already moved on to playing a video game or something, immediately forgetting about it. 5 minutes later, my phone starts freaking out. The post is getting hundreds of likes *per minute*. People love the app. They are commenting suggestings, requesting additional sound clips be added, tagging their friends, and praising me. I even have people saying it reminds them of the previous Hank Hill soundboard app. I was right! People wanted it.

This app became a serious thing. I made something that brought people joy! I was overwhelmed with excitement. I was telling everybody about it. I start looking for ways to improve the app for everyone. It is also valuable experience of updating an app in a live production setting. In the Google play developer console, I found a feature that will compress the mobile app file, so it will be a smaller download. How cool!

It broke the app. I compressed it, now the app crashed immediately after opening on any device. That's fine, I'll just roll the app version back... If Google will let me. However, they won't. People are getting angry. The happy comments turn into comments of people basically booing me.

"This guy just joined this group, and is linking a mobile app to make us download a bunch of MALWARE on our phones!!"

The messaging on the Google developer console is very vague. It won't tell me why it won't let me update the app, but I eventually figure out that it's because Google doesn't think my privacy policy is "visible" enough. I already submitted a link to my privacy policy to Google for them to review to upload the app in the first place, so I don't know what the problem is. In a last ditch effort, I just linked it directly on the description of my front developer page.

![my Google play developer page with the link to my privacy policy directly in the description](/google-fix.png)

And it actually worked! Peace was restored. I cleared my name with the #1 Facebook King of the Hill fan group.

To this day, I've gotten just about 400 downloads for the app. It's not a lot, but it is something I am proud of. And now, thanks to Google, I need to make sure I keep the app's target API version up to date, so they won't remove it for it's target API version being behind. Moral of the story: if something ain't broken during live production, don't fix it. Find the app mentioned here in on my [projects page](/projects), and don't forget to give it a download!