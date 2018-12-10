<h1> Light Control with Raspberry Pi and Node.js</h1>

<p> Light Control that i used in Garden with Raspberry Pi and Node.js. This App was supposed to be begining of Automation Control system for whole House 
but i have no time to keep working on it. I managed to finish light control in our garden only and include automatic timer(In case i forget to turn light off).</p>

<p> To get this working properly, you need: </p>

<ul>
  <li>Raspberry Pi</li>
  <li>Node.js installed on Raspberry Pi</li>
  <li>1 Channel Relay Module</li>
  <li>DHT11 Temperature-Humidity Sensor (optional)</li>
  <li><a href="https://github.com/adafruit/Adafruit_Python_DHT"> This Library</a> to get your humidity and temp sensor working</li>
</ul>

<p>This App loads external Python files. On, Off and emes. POST method calls <i>on.py</i>and turns light ON. Same way works for <i>off.py</i>. 
<i>Emes.py</i> gets actual temps and humidity and parse data to Node.js. You don't need to include this to get light working. </p>

<p> You need to configure GPIO outputs in <i>on</i> and <i>off</i> files as well! </p>
