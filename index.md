# All Satellites in Orbit

### _Click the [link](https://xiaoyu-wen-1118.github.io/satellite.html) to show the interactive slides_

This is a narrative visualization implementing by the D3 library in JavaScript. The dataset is downloaded from https://www.kaggle.com/datasets/kkhandekar/all-the-satellites-in-the-orbit. Artificial satellite is one of the greatest innovations than human-being have invented. Satellites are supporting many key elements of our modern life, including communication, broadcasting, navigation, weather forecasting, etc. 

## Messaging

The narrative visualization is used to present the launched year, country, orbit type, and status of satellites on earth’s orbit in an informative approach. The distribution of satellites is presented according to the country, orbit type, and status in different scenes. The tooltip is added to allow users have access to the details of each satellite.

## Narrative Structure

The interactive slideshow is used to present this data visualization. There are 4 navigation buttons. Clicking on the button will directs to the corresponding visualization scene. On each scene, some fundamental facts are shown on the top of the scatterplot to help users to understand the information on that scene.

## Visual Structure

The satellites are represented as dots in scatterplot. The x-axis of the scatterplot is the launch year. The y-axis of the scatterplot is the orbit height in kilometers. The logarithmic scale is applied to the y-axis because the height of Geostationary orbit (36,000 km) is much higher than other orbits (200 – 1000 km). On the scene of “Country”, “Orbit Type”, and “Status”, satellites are colored according to their country, orbit type, and status, respectively.

## Scenes

- The first scene is the “Default View” scene, all the data points are colored in the same color. This scene gives users a general impression of launched and planed to be launched satellites. A short introduction about the application of satellites are provided in this scene to tell users the background information.
- The second scene is the “Country” scene, where satellites are colored according to which country owns the satellite. This scene directly shows the huge amount of satellites that USA has launched. The percentage of total satellites are shown for USA, China, UK, and Russia, which are the 4 countries that launched the most satellites.
- The third scene is the “Orbit Type” scene. In this scene, satellites are colored according to orbit type. An introduction to the properties of each orbit type is given at the top of the plot. 
- The fourth scene is the “Status”. Active satellites are colored in blue, and inactive satellites are colored in red. A fact about satellites’ lifespan is given to help users to understand the data.

## Annotations

Each scene has its own annotations. The purpose of annotations is to help users understand the information in each scene. The position and size of the annotations are adjusted manually in JavaScript to make it looks more user friendly.

## Parameters

The parameters include launching year, orbit height, orbit type, country, and status. In the all the scenes, the launching year and orbit height are used to set the position of each data point. In the second scene, the country is used to set color for each data point. In the third scend, the orbit type is used to set color for each data point. In the fourth scene, the status is used to set color for each data point.

## Triggers

There are two ways connecting user actions to changes of state in the narrative visualization, click button and tooltip. A tooltip is shown when the cursor is over a data point to show the details of a satellite. When user click the button, the corresponding scene is displayed.

