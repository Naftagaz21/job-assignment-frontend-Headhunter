# My Favourite Colors - Headhunter
The front-end of the My Favorite Colors web App; made using React and Typescript.

The app is available [here](https://job-assignment-frontend-headhunter.vercel.app/).

You can find both the endpoint source code deployed on *Railway* and the local one, [here](https://github.com/Naftagaz21/gin-test-railway) and [here](https://github.com/Naftagaz21/golang-pg),
respectively. Just let me know when you're done looking at the Railway code, as I left out the DB parameters public. 

You can start the project using by running *npm install* followed by *npm start*.

## Mistakes:
- I didn't use the context API to handle state changes when a color is added or deleted. I instead call the GET endpoint of the parent, and re-render the component. I did this since I use the color ID to delete individual colors, which was a stupid mistake, since I also could've used either the color name or the hex code (as they're unique). 


 

