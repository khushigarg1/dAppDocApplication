import React from "react";
import "../styles.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import ExampleDoc from "../../Dotnet_CV.pdf";

export default function Cover() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div id="particles-js" style={{ zIndex: -3 }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            // onClick: {
                            //     enable: true,
                            //     mode: "push"
                            // },
                            onHover: {
                                enable: true,
                                mode: 'grab',
                            },
                            resize: true
                        },
                        modes: {
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#ffffff"
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 0.1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce"
                            },
                            random: false,
                            speed: 1,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.1
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: { min: 1, max: 4 }
                        }
                    },
                    detectRetina: true
                }}
            />

            <a
                id="js-download"
                className="download"
                // href={ExampleDoc}
                target="_blank"
            ></a>


        </ div>
    );
}