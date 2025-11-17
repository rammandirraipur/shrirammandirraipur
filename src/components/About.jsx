import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>Shri Ram Mandir, Raipur – A Spiritual Landmark of Chhattisgarh</h2>

      {/* About Content Container */}
      <div className="about-container">
        {/* Decorative Lord Ram Images with wrapper */}
        <div className="ram-img-wrapper animate-left">
          <img
            src="../Assets/ramji.jpg"
            alt="Lord Ram"
            className="ram-img"
          />
        </div>

        <div className="ram-img-wrapper animate-right">
          <img
            src="../Assets/hanumanji.png"
            alt="Lord Ram"
            className="ram-img"
          />
        </div>

<div className="ram-img-wrapper animate-right">
          <img
            src="../Assets/ramlalla2.jpg"
            alt="Lord Ram"
            className="ram-img"
          />
        </div>
         <div className="ram-img-wrapper animate-left">
          <img
            src="../Assets/hanumanji2.jpg"
            alt="Lord Ram"
            className="ram-img"
          />
        </div>
        {/* Main Content Box */}
        <div className="about-text-box animate-bottom animate-delay-3">
          <p>
              <b> Location</b>: VIP Road, Raipur, Chhattisgarh
          </p>
          <p>
        
          Shri Ram Mandir in Raipur is a prominent temple dedicated to Lord Ram and Sita, inaugurated in 2017. The temple was built under the guidance of Chief Minister Raman Singh, with skilled artisans from Rajasthan and Odisha contributing to its traditional architecture.
          </p>

          <p>
            <h3>Why It Was Built</h3>
  Chhattisgarh holds a special place in Lord Ram’s story — it is believed to be the maternal home of Mata Kaushalya, Ram’s mother. The temple was constructed to strengthen this spiritual connection and serve as a center for devotion, worship, and cultural heritage.
          </p>

          <p>
            <h3>Key Features</h3>
          <ul>
            <li>Idols of Lord Ram and Sita in a rare seated posture, carved from a single stone</li>
            <li>Presence of Hanuman and 16 other deities</li>
            <li>Magnificent 105-feet high structure with gardens, fountains, and decorative lighting</li>
            <li>Facilities like yagya shala and navagraha shrine</li>
            <li>Community services including subsidized meals for devotees</li>
          </ul>
          </p>

          <p>
            <h3>Significance</h3>
          Shri Ram Mandir is more than just a temple — it is a spiritual hub, a cultural landmark, and a symbol of Chhattisgarh’s devotion to Lord Ram. It attracts devotees from across the state, especially during festivals like Ramnavami, and contributes to preserving the region’s rich heritage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
