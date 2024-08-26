import React from 'react';
import aboutImage from '../assets/images/about.jpg'; // Adjust the path to match your actual image file name

const About = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between p-8">
            {/* Left side: Description */}
            <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-4">About Our Company</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Welcome to our company! We are dedicated to providing the best services and products in the travel and tourism industry. Our team is committed to ensuring customer satisfaction and delivering quality products to fulfill your needs.
                </p>
                <p className="text-lg leading-relaxed">
                    With years of experience and a passion for excellence, we strive to exceed expectations in every product we provide. Thank you for choosing us as your trusted partner.
                </p>
            </div>

            {/* Right side: Image */}
            <div className="md:w-1/2 mt-8 md:mt-0">
                <img
                    src={aboutImage}
                    alt="About Our Company"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default About;
