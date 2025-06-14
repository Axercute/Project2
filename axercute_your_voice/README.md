# Axercute Your Voice
#### Are you a street performer looking to take your music to the next level? **Axercute Your Voice** is designed with you in mind — a powerful yet simple app that helps buskers rehearse, perform, and grow their audience on the go. Whether you're fine-tuning your vocals, managing your setlist, or tracking earnings, we’ve got the tools to support your hustle.

Before we dive into how the code works, make sure to view the presentation slides beforehand. Just [click here][link] to see the presentation slide

[link]:https://docs.google.com/presentation/d/12e53FcmHqKgRTRwG9EllZB6guX7C-W0Fr6ONzLlqi5s/edit?usp=sharing

## Navigation 
* Currently there are 3 Navigation that will bring you from the homepage
#### 1. Home page 
This is the home page for introduction. There are navigation bar to go into the other tabs

#### 2. Song Search Page
This is Song Search Page where user needs to enter the exact song name and singer to display the lyrics
They are able to add song lyrics directly into their profile provided if the backend works (Lyrics.OVH could be down occassionally)

#### 3. Singer Login Page
This is the singer saved song page that you can view your song and make edits to change or delete songs

#### 4. Singer Search Page (On Beta)
This is the page where users can search for their favorite singer

## How it works? From here on, it will all be coding explanation so sit tight for a bumpy ride

#### 👉Song Search
Using Lyrics.ovh, you have to enter the singer name and song name together, both has to match exactly
Spaces is allowed however, caps is totally taken care of

https://api.lyrics.ovh/v1/${singername}/${songname}

If failed, aka returning null or undefined, it will show "song not found"
