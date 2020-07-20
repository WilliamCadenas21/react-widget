# Social Feed React App

## Take Home Test

First of all, I never had done a react widget before, so I had to explored the two ways for making a component: the iframe and the javascript way, but I ran into a couple of problems with the javascript import directly to the HTML of the page that we want to embed the component, so I decide to make the easy iframe way just for agile the process.

### Setp up

We need to run the project in development mode to test the widget. 

    $ npm i && npm run start



Then you only need to add this iframe tag to your HTML and pass through the URL the three parameters that the widget get

    <iframe src="http://localhost:3000?feed_url=http://api.massrelevance.com/MassRelDemo/kindle.json&number_posts=10&update_interval=5000" ></iframe>

##### Parameters:

*feed_url (string):* the address where we get the social feed.

*number_posts (number):* the number of posts that we want to get from the feed address.

*update_interval (number):* the milliseconds that the widget will take to reload and request new post from the feed (why milliseconds ? because I think that the widget is better if it has a precisest parameter than just only seconds)