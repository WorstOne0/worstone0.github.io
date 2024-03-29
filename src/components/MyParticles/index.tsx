// React
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// Styles
import * as S from "./styles";
import { Engine } from "tsparticles-engine";

const MyParticles = () => {
  const particlesInit = async (main: Engine) => {
    console.log(main);

    await loadFull(main);
  };

  return (
    <S.Container>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "var(--color-background-dark)",
            },
          },
          style: { height: "100vh", position: "relative" },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
        }}
      />
    </S.Container>
  );
};

export default MyParticles;
