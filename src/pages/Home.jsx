import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <h1>Inicio</h1>
      <Row>
        <Col md="6">
          <div className="image-container" data-aos="fade-up">
            <Image src="./src/images/alcancia_cerdito.png" fluid />
          </div>
        </Col>
        <Col md="6">
          <h3>Educación Financiera</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum
            eveniet tenetur nisi in repudiandae iure magni odio, labore rerum
            non maxime sapiente recusandae ab. Aliquid non iste neque numquam?
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <h3>Consejos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            blanditiis cumque nemo explicabo sint accusantium exercitationem
            adipisci, sapiente sunt quia, voluptatum accusamus vel laudantium
            odit porro corrupti voluptatibus? Fuga, provident.
          </p>
        </Col>
        <Col md="6">
          <div className="image-container" data-aos="fade-up">
            <Image src="./src/images/grafico.png" fluid />
          </div>
        </Col>
      </Row>
      <Row>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          libero explicabo nemo recusandae consequuntur quas illum dolorem ex
          soluta. Asperiores quos harum quasi officiis deleniti? Nemo ea beatae
          voluptates facere. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laborum incidunt consequatur cum dolore cupiditate hic atque
          aliquam voluptas? Omnis consectetur modi facere nobis obcaecati
          minima, ut similique autem at accusantium. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Sequi placeat ea alias sint doloremque?
          Quos amet unde modi eos aspernatur illum reprehenderit eligendi
          deserunt. Necessitatibus temporibus nesciunt voluptate eius rem? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          voluptates totam repudiandae iure consectetur vel aperiam non beatae
          exercitationem eaque, unde sunt reprehenderit commodi pariatur
          molestiae. Perferendis accusamus itaque exercitationem? Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Ut doloremque nobis
          dignissimos, ab omnis impedit error culpa modi labore? Incidunt
          facilis assumenda vel expedita harum ab non eius libero magnam! Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Harum, beatae.
          Amet quidem laboriosam qui minima magni accusantium repellendus, animi
          expedita provident cupiditate mollitia autem sunt itaque, alias
          delectus officia neque! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsam labore tenetur explicabo sunt vitae tempore
          laudantium similique illum nesciunt fugit rerum ab recusandae harum
          quod est aliquid, natus provident odit? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Nulla a laborum at nemo officiis, magni
          inventore omnis minima error exercitationem atque quo. Sequi
          perferendis distinctio ipsam quaerat, soluta repellat earum! Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          voluptatibus libero quo velit voluptates nulla tempora impedit ipsum
          aut amet praesentium, fuga atque. Facere vero numquam quos at earum
          temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eos incidunt, dolorem qui recusandae saepe voluptates quis tempora sed
          repellendus labore deserunt? Magni autem tenetur voluptatum rerum
          praesentium hic? Distinctio, quo!
        </p>
      </Row>
    </Container>
  );
};

export default Home;
