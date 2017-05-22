var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application built on react. I have built this for The Complete React Web App Developer Course.</p>
            <p>Here are some of the tools I have used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This is the JavaScript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.ord">Open Weather Map</a> - Iused Open Weather Map to search for weather data by city name.
                </li>
            </ul>
        </div>
    )
};

module.exports = About;
