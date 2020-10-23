###### Won the Best Hardware Hack at HackNC 2020
---
# Inspiration
The United States has the highest number of Covid-19 cases around the world. It’s been almost half a year since the huge outbreak in the United States but we still see the curve of cases not slowing down. It is critical to educate the public about the basic facts and approaches of prevention to stop further spread of the disease. So we created a Covid-19 Toolkit to help people of all ages learn basic statistics, symptoms, and prevention of Covid-19.

# What it does
* To make the materials more attractive, we created a 3D model of the Coronavirus for people to interact with.
* We lined the official websites of the world health organization to help people learn the symptoms and facts about the coronavirus.
* There is also a link that will take the user to the current statutes of the pandemic. It will tell the user how many people are infected by the pandemic both worldwide and in the US. It also breaks down the infected population by state.
* To help people learn and remember the ways to prevent the spread of COVID, we made a mutated version of the game 2048. We replaced the numbers with different ways of precautions that can be easily taken daily. The game plays just like 2048, where you use the arrow keys on your keyboard and move the tiles to collapse them all to one side. Two tiles with the same prevention method would collide and transform into a higher-level, more effective way of a prevention method. The goal of players is to reach the final, best prevention method. If it is reached, a congratulation banner will pop up. However, if there are no more tiles that can perform any action (either move or merge with another one), the game is lost and a lost banner will pop up.
* By building the timer for washing hands, we hope to make people aware of a complete and effective washing-hand procedure in order to prevent the spreading of viruses. If we had more time, we could integrate it into a faucet and demonstrate its ability to automatically sense if a person is washing his & her hands. Even though this device cannot strictly enforce people to wash their hands thoroughly, we expect that if we use this device, more people would spontaneously try to achieve the correct procedure.
# How we built it
## Covid Prevention Game
 *  This game functions like the game 2048, but instead of numbers, we used ways to prevent Covid. The whole game is composed of an HTML file, which lays the structure of the game website, a CSS file, which takes care of the style of the website, and a javascript file, which does all of the heavy liftings. The Javascript file uses the new ES6 instead of JQuery, and the whole model of the game is written within the ES6 function.
## Timer & Arduino
 *  By integrating signal emitters & receivers with Arduino, we build a non-touch switch for sensing if this timer needs to start. The display is handled through three LEDs and a steering gear as a pointer.
#Challenges we ran into
The biggest challenge for our team is that nearly none of us are in the same time zone in the same region or the same time zone. In fact, four of us are in three different time zones! Collaborating remotely is a new experience for all of us - and it becomes even harder when hardware is involved! And we are working closely to create the best product experience in such a short time.

# Accomplishments that we're proud of
Our Arduino utilizes a signal emitter and signal receiver for automatically sensing if a person has put his or her hands under the faucet. Additionally, the program is written into the Arduino so that it does not require a computer connected when running, leading to improved portability. Although its appearance is a bit untouched, it could be easily wrapped inside a decorated box so with signs and directions. We would expect that, by integrating this device into the faucet, we could easily notify all people using this faucet to thoroughly wash their hands through both the indicator LEDs and the pointer.

# What we learned
With our research in Covid-19 for the content of our project, we learned numerous useful facts about Covid-19. We learned to cooperate as a team while in different time zones and we tried to incorporate different types of elements into our project (Ex: 3D model, game, Arduino).

# What's next for How to Get Away from Covid-19?
We plan to add more features into our Toolkit and publish the website so that people can use it to learn about Covid-19, and we might seek cooperation with schools or other organizations to help promote such resources to people of high risks. Additionally, if we had more funds, we could integrate the timer for washing hands into some faucets so that more people could be aware of the proper way to wash hands. In general, We wish to help elevate the public’s knowledge on it and mitigate new covid cases.

# Built With
arduino/c/css/html/javascript/sketchfab
