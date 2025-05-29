import styled from "styled-components";

const Navigation = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: rgba(51, 65, 85, 0.3);
  overflow: hidden;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    color: white;
    gap: 2rem;
  }

  .logo {
    font-size: xx-large;
    font-weight: 700;
    color: white;
    .accent {
      color: #3b82f6;
      position: relative;
      left: -0.4rem;
      font-size: larger;
    }
  }
`;
const HeroSection = styled.div`
  margin: 1rem;
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    color: white;

    .cta {
      margin-top: 2rem;
    }
    h1 {
      font-size: 4rem;
    }
    .highlight {
      color: #3b82f6;
    }
    .right {
      border: 1px solid grey;
      border-radius: 100%;
      width: 30rem;
      height: 30rem;
      overflow: hidden;
    }
  }
`;
const Button = styled.button`
  padding: 10px 30px;
  border-style: none;
  border-radius: 10px;
  background-color: #3b82f6;
  color: white;
  margin: 0 1rem;
`;
const TechStack = styled.ul`
  color: white;
  display: flex;
  justify-content: space-around;
  width: 30rem;
  font-size: 25px;
  list-style: none;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
  padding: 2 2rem;
  border-radius: 20px;
  li {
    &:hover {
      color: #3b82f6;
    }
  }
`;
const techStack = ["React", "NodeJs", "Express", "MongodB"];

function Metricoid() {
  return (
    <>
      <Navigation>
        <div className="logo">
          Daniel Atu <span className="accent">.</span>
        </div>

        <ul>
          <li>About</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <Button className="btn">View My work</Button>
      </Navigation>
      <HeroSection>
        <div className="container">
          <div className="left">
            <h1>
              Daniel Atu : Bringing <span className="highlight">ideas </span>
              into life
            </h1>
            <p>
              Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
              convallis, risus non condimentum gravida, odio mauris ullamcorper
              felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia
              urna, a placerat sapien pretium eu.
            </p>

            <div className="cta">
              <Button className="btn">download CV</Button>
              <Button className="btn ">Reach Out</Button>
            </div>
          </div>

          <div className="right">
            <img src="/ai.png" alt="" />
          </div>
        </div>
        <div className="tech-stack-container">
          <TechStack className="tech-stack">
            {techStack.map((tech) => [<li key={tech}>{tech}</li>])}
          </TechStack>
        </div>
      </HeroSection>
    </>
  );
}

export default Metricoid;
