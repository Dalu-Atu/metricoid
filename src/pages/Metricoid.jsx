// import styled from "styled-components";

// const Navigation = styled.div`
//   padding: 1rem 2rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: rgba(51, 65, 85, 0.3);
//   overflow: hidden;

//   ul {
//     display: flex;
//     align-items: center;
//     list-style: none;
//     color: white;
//     gap: 2rem;
//   }

//   .logo {
//     font-size: xx-large;
//     font-weight: 700;
//     color: white;
//     .accent {
//       color: #3b82f6;
//       position: relative;
//       left: -0.4rem;
//       font-size: larger;
//     }
//   }
// `;
// const HeroSection = styled.div`
//   margin: 1rem;
//   .container {
//     display: grid;
//     grid-template-columns: 2fr 1fr;
//     align-items: center;
//     color: white;

//     .cta {
//       margin-top: 2rem;
//     }
//     h1 {
//       font-size: 4rem;
//     }
//     .highlight {
//       color: #3b82f6;
//     }
//     .right {
//       border: 1px solid grey;
//       border-radius: 100%;
//       width: 30rem;
//       height: 30rem;
//       overflow: hidden;
//     }
//   }
// `;
// const Button = styled.button`
//   padding: 10px 30px;
//   border-style: none;
//   border-radius: 10px;
//   background-color: #3b82f6;
//   color: white;
//   margin: 0 1rem;
// `;
// const TechStack = styled.ul`
//   color: white;
//   display: flex;
//   justify-content: space-around;
//   width: 30rem;
//   font-size: 25px;
//   list-style: none;
//   margin-top: 3rem;
//   margin-left: auto;
//   margin-right: auto;
//   border: 1px solid grey;
//   padding: 2 2rem;
//   border-radius: 20px;
//   li {
//     &:hover {
//       color: #3b82f6;
//     }
//   }
// `;
// const techStack = ["React", "NodeJs", "Express", "MongodB"];

// function Metricoid() {
//   return (
//     <>
//       <Navigation>
//         <div className="logo">
//           Daniel Atu <span className="accent">.</span>
//         </div>

//         <ul>
//           <li>About</li>
//           <li>Resume</li>
//           <li>Portfolio</li>
//           <li>Blog</li>
//           <li>Contact</li>
//         </ul>

//         <Button className="btn">View My work</Button>
//       </Navigation>
//       <HeroSection>
//         <div className="container">
//           <div className="left">
//             <h1>
//               Daniel Atu : Bringing <span className="highlight">ideas </span>
//               into life
//             </h1>
//             <p>
//               Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
//               convallis, risus non condimentum gravida, odio mauris ullamcorper
//               felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia
//               urna, a placerat sapien pretium eu.
//             </p>

//             <div className="cta">
//               <Button className="btn">download CV</Button>
//               <Button className="btn ">Reach Out</Button>
//             </div>
//           </div>

//           <div className="right">
//             <img src="/ai.png" alt="" />
//           </div>
//         </div>
//         <div className="tech-stack-container">
//           <TechStack className="tech-stack">
//             {techStack.map((tech) => [<li key={tech}>{tech}</li>])}
//           </TechStack>
//         </div>
//       </HeroSection>
//     </>
//   );
// }

// export default Metricoid;

import React from "react";
import styled, { keyframes } from "styled-components";
import {
  Send,
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

// Subtle, professional animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
  50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.2); }
`;

// Main container
const Container = styled.div`
  min-height: 100vh;
  background: #0f172a;
  color: white;
  overflow: hidden;
  /* position: relative; */
`;

// Navigation
const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.9);
  border-bottom: 1px solid rgba(51, 65, 85, 0.3);

  .nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.75rem;
    font-weight: 700;
    letter-spacing: -0.025em;
    color: white;

    .accent {
      color: #3b82f6;
    }
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      display: none;
    }

    li {
      font-size: 0.95rem;
      font-weight: 500;
      color: #94a3b8;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0.5rem 0;
      position: relative;

      &:hover {
        color: white;
      }
    }
  }

  .cta-button {
    background: #3b82f6;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    font-size: 0.95rem;

    &:hover {
      background: #2563eb;
      transform: translateY(-1px);
    }
  }
`;

// Hero section
const HeroSection = styled.section`
  padding: 8rem 2rem 4rem;
  position: relative;

  .hero-container {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }
  }
`;

// Background elements
const BackgroundElements = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;

  .bg-element {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.03;
  }

  .element-1 {
    top: 25%;
    left: 25%;
    width: 400px;
    height: 400px;
    background: #3b82f6;
  }

  .element-2 {
    bottom: 25%;
    right: 25%;
    width: 300px;
    height: 300px;
    background: #8b5cf6;
  }

  .element-3 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  }
`;

// Hero content
const HeroContent = styled.div`
  animation: ${fadeInUp} 1s ease-out;

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(51, 65, 85, 0.5);
    border: 1px solid rgba(51, 65, 85, 0.8);
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 2rem;
    backdrop-filter: blur(10px);

    .badge-icon {
      color: #fbbf24;
    }
  }

  h1 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #ffffff, #e2e8f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.025em;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    .highlight {
      background: linear-gradient(135deg, #3b82f6, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .description {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #94a3b8;
    margin-bottom: 2.5rem;
    max-width: 500px;

    @media (max-width: 1024px) {
      max-width: none;
      font-size: 1rem;
    }
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;

    @media (max-width: 1024px) {
      flex-direction: column;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .primary-btn {
      background: #3b82f6;
      border: none;
      padding: 1rem 2rem;
      border-radius: 0.75rem;
      font-weight: 600;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
      font-size: 1.1rem;

      &:hover {
        background: #2563eb;
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
      }
    }

    .secondary-btn {
      background: rgba(51, 65, 85, 0.5);
      border: 1px solid rgba(51, 65, 85, 0.8);
      padding: 1rem 2rem;
      border-radius: 0.75rem;
      font-weight: 600;
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease;
      font-size: 1.1rem;
      backdrop-filter: blur(10px);

      &:hover {
        background: rgba(51, 65, 85, 0.8);
        transform: translateY(-2px);
      }
    }
  }

  .stats {
    display: flex;
    gap: 2.5rem;

    @media (max-width: 1024px) {
      justify-content: center;
    }

    .stat {
      text-align: left;

      @media (max-width: 1024px) {
        text-align: center;
      }

      .number {
        font-size: 2.25rem;
        font-weight: 800;
        display: block;
        background: linear-gradient(135deg, #3b82f6, #06b6d4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .label {
        font-size: 0.875rem;
        color: #64748b;
        margin-top: 0.25rem;
      }
    }
  }
`;

// Pulsing ring animation for AI visual
const pulseRing = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Hero visual
const HeroVisual = styled.div`
  position: relative;
  animation: ${fadeInUp} 1s ease-out 0.3s both;
  display: flex;
  justify-content: center;
  align-items: center;

  .ai-container {
    position: relative;
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
    }

    .ai-image {
      width: 280px;
      height: 280px;
      border-radius: 50%;
      object-fit: cover;
      z-index: 10;
      position: relative;
      margin: 20px;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
      border: 3px solid rgba(59, 130, 246, 0.3);
      animation: ${float} 6s ease-in-out infinite;

      @media (max-width: 768px) {
        width: 220px;
        height: 220px;
      }
    }

    // Animated rings around the AI image
    .pulse-ring {
      position: absolute;
      border: 2px solid rgba(59, 130, 246, 0.4);
      border-radius: 50%;
      animation: ${pulseRing} 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)
        infinite;

      &:nth-child(1) {
        animation-delay: 0s;
      }
      &:nth-child(2) {
        animation-delay: 0.5s;
      }
      &:nth-child(3) {
        animation-delay: 1s;
      }
      &:nth-child(4) {
        animation-delay: 1.5s;
      }
    }

    // Rotating orbital elements
    .orbital-ring {
      position: absolute;
      width: 350px;
      height: 350px;
      border: 1px solid rgba(59, 130, 246, 0.2);
      border-radius: 50%;
      animation: ${rotate} 20s linear infinite;

      @media (max-width: 768px) {
        width: 280px;
        height: 280px;
      }

      &::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: #3b82f6;
        border-radius: 50%;
        top: -4px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 15px #3b82f6;
      }

      &.reverse {
        animation-direction: reverse;
        animation-duration: 15s;
        width: 320px;
        height: 320px;

        @media (max-width: 768px) {
          width: 250px;
          height: 250px;
        }

        &::before {
          background: #8b5cf6;
          box-shadow: 0 0 15px #8b5cf6;
          width: 6px;
          height: 6px;
          top: -3px;
        }
      }
    }

    // Floating particles
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(59, 130, 246, 0.8);
      border-radius: 50%;
      animation: ${float} 3s ease-in-out infinite;

      &:nth-child(6) {
        top: 20%;
        left: 15%;
        animation-delay: 0s;
      }
      &:nth-child(7) {
        top: 30%;
        right: 10%;
        animation-delay: 1s;
        background: rgba(139, 92, 246, 0.8);
      }
      &:nth-child(8) {
        bottom: 25%;
        left: 20%;
        animation-delay: 2s;
      }
      trusted-label &:nth-child(9) {
        bottom: 35%;
        right: 25%;
        animation-delay: 0.5s;
        background: rgba(139, 92, 246, 0.8);
      }
    }

    // Glowing backdrop
    &::after {
      content: "";
      position: absolute;
      width: 200px;
      height: 200px;
      background: radial-gradient(
        circle,
        rgba(59, 130, 246, 0.1) 0%,
        transparent 70%
      );
      border-radius: 50%;
      z-index: 1;
      animation: ${glow} 4s ease-in-out infinite;

      @media (max-width: 768px) {
        width: 150px;
        height: 150px;
      }
    }
  }

  // AI badge/label
  .ai-badge {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(30, 41, 59, 0.9);
    border: 1px solid rgba(59, 130, 246, 0.3);
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    backdrop-filter: blur(20px);
    color: white;
    font-size: 0.875rem;
    font-weight: 600;
    z-index: 20;

    .ai-indicator {
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #10b981;
      border-radius: 50%;
      margin-right: 0.5rem;
      animation: ${glow} 2s ease-in-out infinite;
    }
  }
`;

const navItems = [
  "Services",
  "Work",
  "Solutions",
  "About",
  "Pricing",
  "Contact",
];
const heroStats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
];

const Metricoid = function () {
  return (
    <Container>
      <Navigation>
        <div className="nav-container">
          <div className="logo">
            Daniel Atu<span className="accent">.</span>
          </div>

          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button className="cta-button">
            <span>View my Work </span>
            <Send size={16} />
          </button>
        </div>
      </Navigation>

      <HeroSection>
        <BackgroundElements>
          <div className="bg-element element-1"></div>
          <div className="bg-element element-2"></div>
          <div className="bg-element element-3"></div>
        </BackgroundElements>

        <div className="hero-container">
          <div className="hero-grid">
            <HeroContent>
              <div className="badge"></div>

              <h1>
                Daniel Atu : Bringing <span className="highlight">ideas</span>{" "}
                into life
              </h1>

              <p className="description">
                Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
                convallis, risus non condimentum gravida, odio mauris
                ullamcorper felis, ut venenatis purus ex eu mi. Quisque
                imperdiet lacinia urna, a placerat sapien pretium eu.
              </p>

              <div className="hero-buttons">
                <button className="primary-btn">
                  <span>Download CV</span>
                  <ArrowRight size={20} />
                </button>
                <button className="secondary-btn">
                  <Play size={18} />
                  <span>Reach Out </span>
                </button>
              </div>

              <div className="stats">
                {heroStats.map((stat, index) => (
                  <div key={index} className="stat">
                    <span className="number">{stat.number}</span>
                    <span className="label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </HeroContent>

            <HeroVisual>
              <div className="ai-container">
                <div className="orbital-ring"></div>
                <div className="orbital-ring reverse"></div>

                {/* AI Image */}
                <img src="/ai.png" alt="AI Technology" className="ai-image" />
              </div>
            </HeroVisual>
          </div>
        </div>
      </HeroSection>

      <p style={{ color: "white", textAlign: "center" }}>
        PROJECT WILL BE COMPLETED WHEN AM HIRED . LIMITED TIME
      </p>
    </Container>
  );
};

export default Metricoid;
