import './AboutUs.scss'

const AboutUs = () => {
    return (
        <div style={{color: '#000'}}>
            <header className='about-header'>
                <h1>About rsw-app</h1>
            </header>
            <main className='about-main'>
                <section className="about-purpose">
                <h2>Purpose</h2>
                <p>The rsw-app is designed to simplify the process of finding the perfect city or cities for travel purposes.</p>
                </section>
                <section className="about-features">
                <h2>Features</h2>
                <ul>
                    <li>Tailored Sections: Users are presented with a variety of carefully curated sections, each offering options to align with their unique preferences and travel objectives.</li>
                    <li>Customized Selection: By selecting the options that best suit their needs, users can pinpoint the ideal destination that matches their criteria.</li>
                    <li>Cost Estimation: Upon discovering their preferred destination(s), users can utilize the app to estimate the approximate cost of their trip.</li>
                </ul>
                </section>
                <section className="about-how-it-works">
                <h2>How it Works</h2>
                <ol>
                    <li>Discover themed sections like 'My ideal city would have' or 'Activities,' where users can explore selectable options tailored to their future trip interests.</li>
                    <li>Select Preferences: Within each section, users choose preferences relevant to their travel desires, such as sights, activities, or cultural amenities.</li>
                    <li>Discover Ideal Destinations: Based on the selected preferences, the app suggests the most suitable city or cities for the user's travel aspirations.</li>
                    <li>Calculate Trip Cost: Once the ideal destination(s) is identified, users can utilize the app's cost estimation feature to plan their travel budget effectively.</li>
                </ol>
                </section>
                <section className="about-availability">
                <h2>Availability</h2>
                <p>At present, the rsw-app exclusively features destinations within Germany, with plans for expansion in the future.</p>
                </section>
            </main>
        </div>
    )
}

export default AboutUs